import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import strip from "rollup-plugin-strip-shebang";
import shebang from 'rollup-plugin-preserve-shebang';
export default {
  input: 'src/main.js',
  output: {
    file: 'dev/bundle.js',
    format: 'cjs'
  },
  plugins: [
    strip(),
    commonjs(),
    shebang(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    
  ]
};