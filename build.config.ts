import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    { builder: 'mkdist', input: './src/' },
    // @ts-expect-error: See https://github.com/unjs/unbuild/issues/332
    { builder: 'mkdist', input: './src/', format: 'cjs', ext: 'cjs' },
  ],
  declaration: true,
  clean: true,
})
