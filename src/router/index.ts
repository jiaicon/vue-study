import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home/index.vue'
import Recommended from '../views/Home/views/Recommended/index.vue'
import Following from '../views/Home/views/Following/index.vue'

import Fire from '../views/Fire/index.vue'
import Search from '../views/Search/index.vue'

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/recommended'
      },
      {
        path: '/recommended',
        component: Recommended,
      },
      {
        path: '/following',
        component: Following,
      }
    ]
  },
  {
    path: '/search',
    name: "Search",
    component: Search
  },
  {
    path: '/fire',
    name: "Fire",
    component: Fire
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
