const ts = require('rollup-plugin-ts');
const terser = require('@rollup/plugin-terser');
const jsonHandler = require('@rollup/plugin-json');

const pkg = require('./package.json');
const config = require('./tsconfig.json');

const packageConfigs = {
  input: `./src/index.ts`,
  output: [
    {
      name: 'langy',
      file: pkg.main,
      format: 'umd',
      sourcemap: true
    }
  ],
  plugins: [jsonHandler(), ts(config), terser()]
};

module.exports = packageConfigs;
