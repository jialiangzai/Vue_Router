import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home'
import About from '../views/about'
import Contact from '../views/contact'
import NotFound from '@/views/404/NotFound'
import Login from '@/views/login/login'
import My from '../views/my/my.vue'

import Found from '../views/found/index.vue'
import Recom from '../views/found/child/recom.vue'
import Song from '../views/found/child/song.vue'
import Top from '../views/found/child/top.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    component: Home
  },
  // 重定向
  {
    path: '/',
    redirect: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/about',
    component: About
  },

  {
    path: '/contact',
    component: Contact,
    meta: { ismovie: true }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/my',
    component: My
  },

  {
    name: 'marrage',
    path: '/contact/:a/:b',
    component: Contact
  },
  // 网易云路由规则
  {
    path: '/found',
    component: Found,
    children: [
      {
        path: '/found',
        component: Recom
      },
      {
        path: '/found/top',
        component: Top
      },
      {
        path: '/found/song',
        component: Song
      }
    ]
  },
  // 404最后
  {
    path: '*',
    component: NotFound
  }

]

const router = new VueRouter({
  // mode:'hash',// 默认hash 还有 abstract  history，
  routes
})
router.beforeEach((to, from, next) => {
  // 弹窗失败了
  // if (to.path === '/contact' || from.path === '/about') {
  //   // next('/about')
  //   next()
  // } else {
  //   next()
  // }
  if (to.path === '/my' && !localStorage.getItem('author')) {
    alert('请登录！')
    router.push('/login')
  } else {
    next()
  }
})

export default router
