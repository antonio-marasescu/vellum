import cssnano from 'cssnano';
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const libSrcDir = join(rootDir, 'projects/vellum-lib/src');
const distDir = join(rootDir, 'dist/vellum-lib');

const inputPath = join(libSrcDir, 'styles/index.css');
const outputPath = join(distDir, 'styles/index.css');
const { css } = await postcss([tailwindcss(), cssnano()]).process(
  readFileSync(inputPath, 'utf8'),
  { from: inputPath, to: outputPath }
);
mkdirSync(join(distDir, 'styles'), { recursive: true });
writeFileSync(outputPath, css);

cpSync(join(libSrcDir, 'assets'), join(distDir, 'assets'), { recursive: true });

console.log('Built styles/index.css and copied assets into dist/vellum-lib');
