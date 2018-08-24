import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'
import filesize from 'rollup-plugin-filesize'

const pkg = require('./package.json')

export default [
  /**
   * Rollup configuration for bundling the library
   * https://github.com/alexjoverm/typescript-library-starter
   */
  {
    input: `src/index.ts`,
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true }, //
      { file: pkg.module, format: 'es', sourcemap: true }
    ],
    watch: {
      include: 'src/**'
    },
    plugins: [
      // Compile TypeScript files
      typescript({ useTsconfigDeclarationDir: true, tsconfig: 'tsconfig.json' }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),
      // Resolve source maps to the original source
      sourceMaps(),
      filesize(),
      // Bundle size visualizer
      visualizer({
        filename: './stats/statistics.html',
        title: 'as24-custom-events'
      })
    ]
  }
]
