import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

// only generate ES module build
export default {
  input: './src/index.js',
  output: [
    {file: pkg.module, format: 'es', sourcemap: true},
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    postcss(),
    terser(),
    filesize(),
  ],
};
