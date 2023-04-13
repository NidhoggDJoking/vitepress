// Don't remove this file, because it registers the demo components.
// import music from './music.vue'
import collapse from './collapse.vue'
import { useDraggable } from '@vueuse/core'

export function useComponents(app) {
  app.component('collapse', collapse)
  app.component('useDraggable', useDraggable)
}