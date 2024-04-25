
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: () => import("../pages/index.vue")},
    {path: '/traditions', component: () => import("../pages/traditions.vue")},
    { path: '/traditions/:tradition', component: () => import("../pages/manuscripts.vue") },
    { path: '/traditions/:tradition/:manuscript', component: () => import("../pages/folios.vue") },
    { path: '/traditions/:tradition/:manuscript/:folio', component: () => import("../pages/folioTranscriber.vue") },

  ]

})

export default router
