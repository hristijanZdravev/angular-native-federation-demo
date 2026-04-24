import * as esbuild from 'esbuild';
import { federationBuilder } from '@softarc/native-federation/build.js';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { reactReplacements } from '@softarc/native-federation-esbuild/src/lib/react-replacements.js';

await federationBuilder.init({
  options: {
    workspaceRoot: process.cwd(),
    outputPath: 'dist/mfe2',
    tsConfig: 'tsconfig.json',
    federationConfig: 'federation.config.cjs',
    target: ['esnext'],
  },
  adapter: createEsBuildAdapter({
    fileReplacements: reactReplacements.dev,
    plugins: [],
  }),
});

await esbuild.build({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  outfile: 'dist/mfe2/main.js',
  format: 'esm',
  platform: 'browser',
  target: ['esnext'],
  external: [
    'fs',
    'path',
    'crypto',
    'stream',
    'events',
    'os',
    'util',
    'process'
  ],
});

await federationBuilder.build();