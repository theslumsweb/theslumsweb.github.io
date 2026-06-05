import csv, pathlib, re, unicodedata
root = pathlib.Path('.')
entry_path = root / 'entries.csv'

existing_ids = set()
existing_names = set()
for fname in [f'batch{i}.js' for i in range(1,8)] + ['batch-inhibition.js']:
    path = root / fname
    if not path.exists():
        continue
    text = path.read_text(encoding='utf-8')
    for m in re.finditer(r'id\s*:\s*"([^"]+)"', text):
        existing_ids.add(m.group(1).strip())
    for m in re.finditer(r'name\s*:\s*"([^"]+)"', text):
        existing_names.add(m.group(1).strip().lower())


def slugify(name):
    s = unicodedata.normalize('NFKD', name)
    s = s.lower()
    s = s.replace('’', '').replace('‘', '').replace('`', '').replace('“', '').replace('”', '')
    s = s.replace('–', '-').replace('—', '-')
    s = re.sub(r'[^a-z0-9]+', '-', s)
    s = re.sub(r'-+', '-', s)
    s = s.strip('-')
    return s or 'compound'


def clean_cat(t):
    t = t.lower()
    t = re.sub(r'[()]', '', t)
    t = re.sub(r'[^a-z0-9]+', '-', t)
    t = re.sub(r'-+', '-', t).strip('-')
    return t

rows = []
with open(entry_path, encoding='utf-8', newline='') as f:
    reader = csv.DictReader(f)
    for row in reader:
        if not any((v or '').strip() for v in row.values()):
            continue
        rows.append(row)

existing_lower = {slugify(n): n for n in existing_names}
new_entries = []
skipped = []
for row in rows:
    name = (row.get('Name') or '').strip()
    if not name:
        continue
    cid = slugify(name)
    if cid in existing_ids or name.lower() in existing_names or cid in existing_lower:
        skipped.append(name)
        continue
    t = (row.get('Type') or '').strip() or 'Unknown type'
    classification = (row.get('Primary Mechanism / Class') or '').strip() or ''
    aliases = []
    if '(' in name and ')' in name:
        base = re.sub(r'\s*\([^)]*\)', '', name).strip()
        paren = re.search(r'\(([^)]*)\)', name)
        if paren:
            nick = paren.group(1).strip()
            if nick and nick.lower() != base.lower() and nick.lower() != name.lower():
                aliases.append(nick)
        if base and base.lower() != name.lower():
            aliases.append(base)
    if '/' in name:
        for part in name.split('/'):
            part = part.strip()
            if part and part.lower() != name.lower() and part not in aliases:
                aliases.append(part)
    categories = []
    if t:
        categories = [clean_cat(t)]
    what = f"{name} is a {t}."
    if classification:
        what += f" Primary mechanism/class: {classification}."
    mech = []
    if classification:
        mech = [{"text": classification, "confidence": "hypothesized"}]
    entry = {
        "id": cid,
        "name": name,
        "aliases": aliases,
        "categories": [x for x in categories if x],
        "classification": classification,
        "whatItIs": what,
        "mechanism": mech,
        "studies": {"human": [], "animal": [], "vitro": [], "anecdotal": []},
        "effects": [],
        "sideEffects": ["Limited published evidence; safety is not established."],
        "evidenceScore": {"human": "Low", "mechanism": "Low", "safety": "Low"}
    }
    new_entries.append(entry)

batch_path = root / 'batch8.js'
with open(batch_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write('const NEW_COMPOUNDS_8 = [\n')
    for entry in new_entries:
        f.write('  {\n')
        f.write(f'    id: "{entry["id"]}",\n')
        f.write(f'    name: "{entry["name"].replace(chr(34), "\\\"")}",\n')
        if entry['aliases']:
            alias_text = ', '.join(f'"{a.replace(chr(34), "\\\"")}"' for a in entry['aliases'])
            f.write(f'    aliases: [{alias_text}],\n')
        if entry['categories']:
            cat_text = ', '.join(f'"{c}"' for c in entry['categories'])
            f.write(f'    categories: [{cat_text}],\n')
        if entry['classification']:
            f.write(f'    classification: "{entry["classification"].replace(chr(34), "\\\"")}",\n')
        f.write(f'    whatItIs: "{entry["whatItIs"].replace(chr(34), "\\\"")}",\n')
        if entry['mechanism']:
            f.write('    mechanism: [\n')
            for m in entry['mechanism']:
                f.write(f'      {{ text: "{m["text"].replace(chr(34), "\\\"")}", confidence: "{m["confidence"]}" }},\n')
            f.write('    ],\n')
        f.write('    studies: { human: [], animal: [], vitro: [], anecdotal: [] },\n')
        f.write('    effects: [],\n')
        f.write('    sideEffects: ["Limited published evidence; safety is not established."],\n')
        f.write('    evidenceScore: { human: "Low", mechanism: "Low", safety: "Low" }\n')
        f.write('  },\n')
    f.write('];\n')

print('existing_ids', len(existing_ids))
print('existing_names', len(existing_names))
print('rows', len(rows))
print('new_entries', len(new_entries))
print('skipped', len(skipped))
