import { compile } from 'sass';
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const libSrcDir = join(rootDir, 'projects/vellum-lib/src');
const distDir = join(rootDir, 'dist/vellum-lib');

const { css } = compile(join(libSrcDir, 'styles/index.scss'), { style: 'compressed' });
mkdirSync(join(distDir, 'styles'), { recursive: true });
writeFileSync(join(distDir, 'styles/index.css'), css);

cpSync(join(libSrcDir, 'assets'), join(distDir, 'assets'), { recursive: true });

console.log('Built styles/index.css and copied assets into dist/vellum-lib');
