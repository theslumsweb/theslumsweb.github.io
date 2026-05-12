import fs from "fs";
const t = fs.readFileSync(new URL("./compounds_nicknames.txt", import.meta.url), "utf8");
const json = JSON.stringify(t);
fs.writeFileSync(new URL("./compounds_nicknames_data.js", import.meta.url), `window.COMPOUNDS_NICKNAMES_TEXT = ${json};\n`);
