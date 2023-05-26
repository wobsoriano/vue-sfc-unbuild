import type { PluginObject } from 'vue'
import * as components from './components'

const install: PluginObject<any> = {
  install(app) {
    for (const key of Object.keys(components))
      app.component(key, components[key as keyof typeof components])
  },
}

export default install
