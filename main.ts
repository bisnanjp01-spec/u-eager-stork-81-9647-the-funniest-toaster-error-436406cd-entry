// The Funniest Toaster Error Message — make.fun entry.
//
// The program writes one line to /output/entry.txt: the error message a
// kitchen toaster shows its owner. The line is a deadpan legal notice from
// a small appliance that has decided the bagel is now a client, not food.
// The gate allows 1 to 120 characters, so the line is checked before it is
// written and the program refuses to write anything longer.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke lands because the appliance treats a burnt bagel as a legal
// dispute: the toaster is not apologising, it is serving notice.
const LINE =
  "ERROR: The bagel has retained counsel. Any further toasting will be billed.";

if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-120 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
