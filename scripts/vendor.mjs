import { mkdir, copyFile, cp } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destination = path.join(root, 'dist/vendor');
const lib = path.dirname(require.resolve('pdf-lib/package.json'));
const pdfjs = path.dirname(require.resolve('pdfjs-dist/package.json'));
await mkdir(destination, { recursive: true });
for (const [base, source, target] of [
  [lib, 'dist/pdf-lib.min.js', 'pdf-lib.min.js'],
  [lib, 'LICENSE.md', 'pdf-lib-LICENSE.md'],
  [pdfjs, 'build/pdf.min.mjs', 'pdf.min.mjs'],
  [pdfjs, 'build/pdf.worker.min.mjs', 'pdf.worker.min.mjs'],
  [pdfjs, 'LICENSE', 'pdfjs-LICENSE'],
]) await copyFile(path.join(base, source), path.join(destination, target));
for (const folder of ['standard_fonts', 'cmaps', 'wasm']) {
  await cp(path.join(pdfjs, folder), path.join(destination, folder), { recursive: true });
}
console.log('UnderLimit is ready in dist/. Run npm start to open a local workspace.');
