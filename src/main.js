/*
 * @Descripttion:
 * @Author: zhangchong zc16607@gmail.com
 * @Date: 2022-12-29 16:14:15
 * @LastEditors: zhangchong zc16607@gmail.com
 * @LastEditTime: 2022-12-30 10:29:56
 */
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

createApp(App).use(createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('./views/home')
    },
    {
      path: '/tabbar',
      name: 'tabBar',
      component: () => import('./views/tabBar')
    }
  ]
})).mount('#app')
