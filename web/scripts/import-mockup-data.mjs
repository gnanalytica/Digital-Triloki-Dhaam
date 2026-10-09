// One-off import of the trilingual copy that was written for the mockups (mockups/shared/*.js) into typed JSON
// under src/data/. Facts (address, times, dates, IBAN) are NOT taken from here at run time: src/lib/content.ts
// reads those from content/*.yml. This file only carries wording and translations.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../../mockups/', import.meta.url));
const out = fileURLToPath(new URL('../src/data/', import.meta.url));
const noop = () => {};
const window = { MTD_STR: {} };
const document = { addEventListener: noop, createElement: () => ({}), head: { appendChild: noop } };
const ctx = vm.createContext({ window, document, Date, Math, JSON, Object, localStorage: { getItem: () => null, setItem: noop } });
for (const f of ['content.js', 'knowledge.js', 'heritage.js', 'extras.js']) vm.runInContext(readFileSync(root + 'shared/' + f, 'utf8'), ctx);
// Strings defined inline in the chosen mockup.
const page = readFileSync(root + 'l-kleur.html', 'utf8');
const inline = page.match(/<script>\s*(Object\.assign\(window\.MTD_STR,[\s\S]*?\}\);)\s*<\/script>/);
vm.runInContext(inline[1], ctx);

const X = window.MTD_EXTRAS;
const write = (name, value) => writeFileSync(out + name + '.json', JSON.stringify(value, null, 2) + '\n');
write('site', window.MTD_DATA);
write('strings', window.MTD_STR);
write('knowledge', window.MTD_KNOWLEDGE);
write('heritage', window.MTD_HERITAGE);
write('extras', { faq: X.faq, spots: X.spots, tasks: X.tasks, words: X.words });
console.log('strings:', Object.keys(window.MTD_STR).length, 'knowledge items:', window.MTD_KNOWLEDGE.items.length);
