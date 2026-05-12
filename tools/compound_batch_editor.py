#!/usr/bin/env python3
"""
Small Tk editor for NEW_COMPOUNDS_* arrays in batch*.js / batch-inhibition.js.

Parses top-level `{ ... }` objects inside `const NAME = [ ... ];` with a brace-aware
scanner (handles braces inside strings).

Usage:
  python tools/compound_batch_editor.py

Save overwrites the file — keep Git commits or backups.
"""

from __future__ import annotations

import re
import tkinter as tk
from tkinter import filedialog, messagebox, ttk
from pathlib import Path


ARRAY_DECL_RE = re.compile(r"const\s+(NEW_COMPOUNDS_\w+)\s*=\s*\[")


def find_array_bounds(content: str) -> tuple[int, int, str]:
    m = ARRAY_DECL_RE.search(content)
    if not m:
        raise ValueError("Could not find `const NEW_COMPOUNDS_… = [`")
    name = m.group(1)
    bracket_open = content.index("[", m.end() - 1)
    bracket_close = _matching_close_bracket(content, bracket_open)
    if bracket_close < 0:
        raise ValueError("Unclosed `[` for compounds array")
    return bracket_open, bracket_close, name


def _matching_close_bracket(s: str, open_idx: int) -> int:
    depth = 0
    i = open_idx
    while i < len(s):
        c = s[i]
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                return i
        elif c in "\"'":
            quote = c
            i += 1
            while i < len(s):
                if s[i] == "\\":
                    i += 2
                    continue
                if s[i] == quote:
                    break
                i += 1
        i += 1
    return -1


def _matching_close_brace(s: str, open_idx: int) -> int:
    depth = 0
    i = open_idx
    while i < len(s):
        c = s[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i
        elif c in "\"'":
            quote = c
            i += 1
            while i < len(s):
                if s[i] == "\\":
                    i += 2
                    continue
                if s[i] == quote:
                    break
                i += 1
        i += 1
    return -1


def split_objects(inner: str) -> list[str]:
    objs: list[str] = []
    i = 0
    n = len(inner)
    while i < n:
        while i < n and inner[i] in ", \t\n\r":
            i += 1
        if i >= n:
            break
        if inner[i] != "{":
            raise ValueError(f"Expected '{{' at offset {i}, got {inner[i]!r}")
        end = _matching_close_brace(inner, i)
        if end < 0:
            raise ValueError("Unclosed '{' inside array")
        objs.append(inner[i : end + 1])
        i = end + 1
    return objs


def extract_id(block: str) -> str:
    m = re.search(r'\bid\s*:\s*"([^"]*)"', block)
    return m.group(1) if m else "(no id)"


STUB_COMPOUND = """{
    id: "new-compound-slug",
    name: "New compound",
    aliases: [],
    categories: ["fat-loss"],
    classification: "",
    whatItIs: "",
    mechanism: [
      { text: "", confidence: "hypothesized" }
    ],
    studies: { human: [], animal: [], vitro: [], anecdotal: [] },
    effects: [],
    sideEffects: [],
    legal: { fda: "", prescription: "", classification: "", sports: "" },
    evidenceScore: { human: "Low", mechanism: "Low", safety: "Low" },
    misconceptions: [],
    references: []
  }"""


class EditorApp(tk.Tk):
    def __init__(self) -> None:
        super().__init__()
        self.title("Compound batch editor — The Slums")
        self.geometry("920x640")

        self.path: Path | None = None
        self.header: str = ""
        self.footer: str = ""
        self.objects: list[str] = []
        self.array_name: str = ""

        top = ttk.Frame(self, padding=8)
        top.pack(fill=tk.X)
        ttk.Button(top, text="Open batch JS…", command=self.open_file).pack(side=tk.LEFT)
        ttk.Button(top, text="Save file", command=self.save_file).pack(side=tk.LEFT, padx=(8, 0))
        ttk.Button(top, text="New compound (stub)", command=self.add_stub).pack(side=tk.LEFT, padx=(8, 0))
        ttk.Button(top, text="Delete selected", command=self.delete_selected).pack(side=tk.LEFT, padx=(8, 0))

        mid = ttk.Panedwindow(self, orient=tk.HORIZONTAL)
        mid.pack(fill=tk.BOTH, expand=True, padx=8, pady=8)

        left = ttk.Frame(mid, width=220)
        mid.add(left, weight=0)
        self.listbox = tk.Listbox(left, exportselection=False)
        self.listbox.pack(fill=tk.BOTH, expand=True)
        self.listbox.bind("<<ListboxSelect>>", self.on_select)

        right = ttk.Frame(mid)
        mid.add(right, weight=1)

        self.text = tk.Text(right, wrap="none", font=("Consolas", 10), undo=True)
        ys = ttk.Scrollbar(right, orient=tk.VERTICAL, command=self.text.yview)
        xs = ttk.Scrollbar(right, orient=tk.HORIZONTAL, command=self.text.xview)
        self.text.configure(yscrollcommand=ys.set, xscrollcommand=xs.set)
        self.text.grid(row=0, column=0, sticky="nsew")
        ys.grid(row=0, column=1, sticky="ns")
        xs.grid(row=1, column=0, sticky="ew")
        right.grid_rowconfigure(0, weight=1)
        right.grid_columnconfigure(0, weight=1)

        self.status = ttk.Label(self, text="Open a batch*.js file.", anchor=tk.W)
        self.status.pack(fill=tk.X, padx=8, pady=(0, 8))

    def open_file(self) -> None:
        p = filedialog.askopenfilename(
            title="Open compound batch",
            filetypes=[("JavaScript", "*.js"), ("All", "*.*")],
            initialdir=Path(__file__).resolve().parent.parent,
        )
        if not p:
            return
        path = Path(p)
        raw = path.read_text(encoding="utf-8")
        try:
            bo, bc, name = find_array_bounds(raw)
        except ValueError as e:
            messagebox.showerror("Parse error", str(e))
            return

        inner = raw[bo + 1 : bc]
        try:
            objs = split_objects(inner)
        except ValueError as e:
            messagebox.showerror("Parse error", str(e))
            return

        self.path = path
        self.header = raw[:bo]
        self.footer = raw[bc:]
        self.objects = objs
        self.array_name = name

        self.listbox.delete(0, tk.END)
        for o in objs:
            self.listbox.insert(tk.END, extract_id(o))

        self.text.delete("1.0", tk.END)
        self.status.config(text=f"{path.name} · {name} · {len(objs)} compounds")

    def current_index(self) -> int | None:
        sel = self.listbox.curselection()
        return int(sel[0]) if sel else None

    def on_select(self, _evt=None) -> None:
        idx = self.current_index()
        if idx is None:
            return
        self.text.delete("1.0", tk.END)
        self.text.insert("1.0", self.objects[idx])

    def flush_editor_to_object(self) -> None:
        idx = self.current_index()
        if idx is None:
            return
        self.objects[idx] = self.text.get("1.0", "end-1c")

    def save_file(self) -> None:
        if not self.path:
            messagebox.showwarning("Nothing to save", "Open a file first.")
            return
        self.flush_editor_to_object()
        joined = ",\n\n  ".join(o.strip() for o in self.objects)
        body = self.header + "[\n\n  " + joined + "\n" + self.footer
        try:
            self.path.write_text(body, encoding="utf-8")
        except OSError as e:
            messagebox.showerror("Write failed", str(e))
            return
        messagebox.showinfo("Saved", f"Wrote {self.path}")

    def add_stub(self) -> None:
        if self.path is None:
            messagebox.showwarning("Open a file first", "Use Open batch JS.")
            return
        self.flush_editor_to_object()
        self.objects.append(STUB_COMPOUND.rstrip())
        self.listbox.insert(tk.END, extract_id(self.objects[-1]))
        self.listbox.selection_clear(0, tk.END)
        self.listbox.selection_set(tk.END)
        self.listbox.event_generate("<<ListboxSelect>>")

    def delete_selected(self) -> None:
        idx = self.current_index()
        if idx is None:
            return
        if not messagebox.askyesno("Delete", f"Remove compound #{idx + 1} from list?"):
            return
        del self.objects[idx]
        self.listbox.delete(idx)
        self.text.delete("1.0", tk.END)
        self.status.config(text=f"{self.path.name if self.path else ''} · {len(self.objects)} compounds")


def main() -> None:
    EditorApp().mainloop()


if __name__ == "__main__":
    main()
