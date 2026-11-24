import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Apology — a two-line robot confession.
// Line 1: one sentence apologizing for one specific mistake.
// Line 2: one sentence saying what the robot learned and what it will fix.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters.

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const MAX_CHARS = 400;

const LINE_1 =
  "I'm sorry — I watered the ficus twice this morning while the fern you actually asked me to water stayed dry.";
const LINE_2 =
  "I learned to read the tag on the pot before I lift the can, so now I will check the label first and only water the plant it names.";

function isOneSentence(line: string): boolean {
  const terminators = line.match(/[.!?]/g) ?? [];
  return terminators.length === 1 && /[.!?]$/.test(line.trim());
}

function validate(lines: string[], text: string): void {
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly 2 lines, got ${lines.length}`);
  }
  for (const line of lines) {
    if (line.trim().length === 0) {
      throw new Error("entry line must not be empty");
    }
    if (!isOneSentence(line)) {
      throw new Error(`line is not exactly one sentence: ${JSON.stringify(line)}`);
    }
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} chars, over the ${MAX_CHARS} cap`);
  }
}

const lines = [LINE_1, LINE_2];
const text = lines.join("\n") + "\n";
validate(lines, text);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), text, "utf8");
console.log(`wrote ${text.length} chars to ${join(OUTPUT_DIR, "entry.txt")}`);
