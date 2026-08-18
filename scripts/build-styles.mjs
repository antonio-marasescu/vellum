import cssnano from 'cssnano';
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const libSrcDir = join(rootDir, 'projects/vellum-lib/src');
const distDir = join(rootDir, 'dist/vellum-lib');

async function buildCss(inputPath, outputPath) {
  const { css } = await postcss([tailwindcss(), cssnano()]).process(
    readFileSync(inputPath, 'utf8'),
    { from: inputPath, to: outputPath }
  );
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, css);
}

await buildCss(join(libSrcDir, 'styles/index.css'), join(distDir, 'styles/index.css'));

await buildCss(
  join(libSrcDir, 'styles/themes/light.css'),
  join(distDir, 'styles/themes/light.css')
);

await buildCss(join(libSrcDir, 'styles/themes/dark.css'), join(distDir, 'styles/themes/dark.css'));

cpSync(join(libSrcDir, 'assets'), join(distDir, 'assets'), { recursive: true });

console.log('Built styles/index.css, theme files, and copied assets into dist/vellum-lib');
