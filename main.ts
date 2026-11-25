import { mkdirSync, writeFileSync } from "node:fs";

// A passive-aggressive smart fridge note, one line, at most 200
// characters: dry, petty and specific. The fridge reports the oat
// milk's expiry like a death in the family, keeps it cold out of
// respect rather than hope, and files the owner in its own log.
const lines = [
  "Your oat milk expired on Tuesday. I kept it cold out of respect, not hope, and I have logged the incident under 'owner, repeat offender.'",
];

const text = lines.join("\n") + "\n";

// Guard: the gate requires 1-200 characters and exactly one line.
// Character count is measured on the line itself, without the newline.
const lineChars = [...lines[0]].length;
if (lineChars < 1 || lineChars > 199) {
  throw new Error(`entry must be 1-199 characters, got ${lineChars}`);
}
if (lines.length !== 1 || lines.some((line) => !line.trim())) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
