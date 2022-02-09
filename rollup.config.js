import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
    },
    {
      file: './dist/moudle.js',
      format: 'esm',
    },
  ],
  plugins: [
    vue({
      preprocessStyles: true,
      css: false,
    }),
    postcss(),
    esbuild(),
  ],
}
/**
 * @type {import('rollup').RollupOptions}
 */
const dconfig = {
  input: './src/index.ts',
  output: {
    file: './dist/index.d.ts',
    format: 'esm',
  },
  plugins: [dts()],
}

export default [config, dconfig]
