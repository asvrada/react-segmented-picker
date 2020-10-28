import buble from '@rollup/plugin-buble';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

// export default [
// browser-friendly UMD build
// {
//   input: './src/install.js',
//   output: {
//     name: 'VueImageWall',
//     file: pkg.main,
//     format: 'umd',
//   },
//   plugins: [
//     resolve(),
//     commonjs(),
//     VuePlugin(),
//     buble(),
//     terser(),
//     filesize(),
//   ],
// },

// ESM build
export default {
  input: './src/install.js',
  external: ['react', 'react-dom', 'styled-components'],
  output: [
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
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
