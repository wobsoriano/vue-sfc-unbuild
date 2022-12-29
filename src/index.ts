import type { Plugin } from 'vue'
import * as components from './components'

const install: Plugin = {
  install(app) {
    for (const key in components) {
      // @ts-expect-error: TODO
      app.component(key, components[key])
    }
  },
}

export default install
