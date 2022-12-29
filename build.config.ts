import { defineBuildConfig } from 'unbuild'
import vue from '@vitejs/plugin-vue'

export default defineBuildConfig({
  entries: [
    'src/index',
    { input: './src/components/', outDir: './dist/components' },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  hooks: {
    'rollup:options': function (_ctx, options) {
      options.plugins = options.plugins || []
      if (Array.isArray(options.plugins))
        options.plugins.push(vue())
    },
  },
})
