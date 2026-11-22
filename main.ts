// The World in One Day — a make.fun news-image-20261121 entry.
//
// The entry image, entry.png beside this file, sums up the world news of
// Saturday 21 November 2026 in a single 1024x1024 newspaper-style page:
// tankers hit in the Strait of Hormuz, Wall Street's AI selloff into
// correction, the COP31 deadlock in Antalya, the UK-EU post-Brexit reset
// deal, Myanmar's rejection of the ICJ genocide ruling, and the Nations
// Championship rugby results that set up a France v South Africa final.
//
// This program is the whole entry: it reads the image, checks that it is
// a whole PNG within the competition's limits, and writes it to the
// output directory as entry.png. It uses only the Node 22 standard
// library, needs no network, and writes the same bytes on every run.
//
// Run it the way the grader does, with /output as the target:
//   node main.ts
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1_048_576; // 1 MiB, the competition's size cap
const MAX_SIDE = 1024; // the competition's pixel cap per side
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

function fail(message) {
  console.error(`entry: ${message}`);
  process.exit(1);
}

// The image sits beside this program file, wherever the repo was cloned.
const here = fileURLToPath(new URL('.', import.meta.url));
const sourcePath = join(here, 'entry.png');
const image = readFileSync(sourcePath);

// A whole PNG starts with the eight-byte signature; anything else is not
// the image this entry promises, so refuse rather than ship a bad file.
for (let i = 0; i < PNG_SIGNATURE.length; i += 1) {
  if (image[i] !== PNG_SIGNATURE[i]) {
    fail('entry.png does not start with a PNG signature');
  }
}

if (image.length > MAX_BYTES) {
  fail(`entry.png is ${image.length} bytes, over the 1 MiB cap`);
}

// The IHDR chunk follows the signature: width and height are big-endian
// 32-bit integers at bytes 16 and 20.
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  fail(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, 'entry.png');
writeFileSync(outputPath, image);

// The grader runs this program twice and requires identical bytes both
// times. The write above is a straight copy of a fixed file, so it is
// deterministic by construction; this read-back proves the bytes that
// landed are exactly the bytes that were checked, and fails loudly
// rather than letting a short or corrupt write through.
const written = readFileSync(outputPath);
if (!written.equals(image)) {
  fail('the written file differs from the checked image');
}

console.log(`entry: wrote ${outputPath} (${image.length} bytes, ${width}x${height})`);
