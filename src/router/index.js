import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../layouts/Homepage.vue'
import MBlog from '../views/MBlog.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Hobby from '../views/Hobby.vue'
import Projects from '../views/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
      children: [
        {
          path: '',
          name: 'mBlog',
          component: MBlog,
        },
        {
          path: '/articles/:date/:path/:articleId',
          name: 'ShowArticle',
          props: true,
          component: () => import('../components/ShowArticle.vue')
        },
        {
          path: '/mblog',
          redirect: '/'
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/hobby',
          name: 'hobby',
          component: Hobby
        },
        {
          path: '/projects',
          name: 'projects',
          component: Projects
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact
        }
      ]
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    //   component: HomeView
    // }
  ]
})

export default router
