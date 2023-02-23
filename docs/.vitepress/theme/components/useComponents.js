// Don't remove this file, because it registers the demo components.
import music from './music.vue'


export function useComponents(app) {
  app.component('musicPlayer', music)
}