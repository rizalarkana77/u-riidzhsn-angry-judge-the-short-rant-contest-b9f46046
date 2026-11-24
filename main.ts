// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about an everyday annoyance to
// $MAKEFUN_OUTPUT_DIR/entry.txt (UTF-8, 1-400 characters).
// Deterministic: the same bytes on every run, no network, Node stdlib only.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "The plane is still taxiing and someone is already clapping. " +
  "Clapping! For what \u2014 the pilot did his job, he didn't land on the Hudson. " +
  "The seatbelt sign is still on, the engines are still screaming, " +
  "and you're applauding a man for not crashing. " +
  "Save it for the baggage carousel. " +
  "That's the real miracle, and it never shows up on time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, RANT, "utf8");

// Read back and verify the gate: 1-400 chars, not only whitespace.
const back = readFileSync(outPath, "utf8");
if (back !== RANT) throw new Error("read-back mismatch");
if (back.length < 1 || back.length > 400) {
  throw new Error(`entry is ${back.length} characters, must be 1-400`);
}
if (back.trim().length === 0) throw new Error("entry is only whitespace");
// No control characters and no trailing newline: the judge reads the
// entry exactly as written, so stray bytes must never sneak in.
if (/[\u0000-\u001f]/.test(back)) throw new Error("entry holds control characters");
console.log(
  `wrote ${outPath} (${back.length} characters, ${Buffer.byteLength(back, "utf8")} bytes)`,
);
