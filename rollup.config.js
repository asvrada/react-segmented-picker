import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

// ESM build
export default {
  input: './src/install.js',
  external: ['react', 'react-dom', 'styled-components'],
  output: [
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    typescript(/*{ plugin options }*/),
    buble({
      exclude: '**/*.scss',
      transforms: {
        dangerousTaggedTemplateString: true,
      },
    }),
    resolve(),
    commonjs(),
    postcss({
      extract: false,
      minimize: true,
      use: ['sass'],
    }),
    terser(),
    filesize(),
  ],
};
