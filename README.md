# UnderLimit
Make PDFs and photos fit upload requirements, locally in your browser.

## Quick start
Requires Node.js 20.19+ (22 LTS recommended) and npm.

```sh
git clone https://github.com/jefferyraooji/underlimit.git
cd underlimit
npm install
npm run build
npm start
```

Open http://localhost:8000 in a current desktop browser. The build command copies the pinned PDF libraries, workers, fonts, character maps, WebAssembly files and licenses into `dist/vendor`. These generated dependencies are excluded from Git. Installation needs internet access; processing documents does not use an external API.

`npm run check` checks JavaScript syntax. For static hosting, publish the complete `dist` directory after building. PDF.js workers require HTTP serving; opening index.html directly is not supported.

## Features
- Import PDFs, JPG, PNG and WebP (25 MB total / 30 pages)
- Set a maximum PDF size in decimal MB and optional maximum page count
- Preview, rotate and remove pages; files append in selection order
- Generate a PDF using progressively lower page-image resolution / JPEG quality
- Verify exact output size, page count and PDF parsing before download
- Original/result previews; honest failure when the target cannot be reached
- Built-in sample generated locally

## Limits
PDF pages are rasterized. Text search, vectors, annotations, forms, links, digital signatures and transparency are not preserved. This is a lossy preparation tool, not an archival optimizer. Keep originals. Inspect fine text after downloading. No readability guarantee or website acceptance guarantee is made. Password-protected files are unsupported. Images over 40 megapixels are rejected; some complex PDFs can exceed browser memory despite source limits.

All document processing runs locally. Assets are vendored; no analytics or file uploads. The hosting provider may log ordinary page requests. Any ChatGPT access gate belongs to the preview host, not the app.

## Dependencies
- pdf-lib 1.17.1, MIT (license in dist/vendor)
- PDF.js 5.6.205, Apache-2.0 (license in dist/vendor)

## Roadmap
Page reordering, text-preserving optimization, offline install, more output formats, and configurable quality floors.
