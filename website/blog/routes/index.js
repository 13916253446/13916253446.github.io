import Vue from 'vue'
import VueRouter from 'vue-router'
import routerHooks from './hooks.js'
//! vue知识总结
import VUERoutes from '../modules/VUE/routes/routes.js'
//! css总结
import CSSRoutes from '../modules/CSS/routes/routes.js'

/* @init<%
//! ${TplModuleIntroduction}
import ${TplModuleName}Routes from '../modules/${TplModuleName}/routes/routes.js'%> */

/* eslint-disable */
const routes = [
  //! vue知识总结
  ...VUERoutes,
  //! css总结
  ...CSSRoutes,
  /* @init<%
  //! ${TplModuleIntroduction}
  ...${TplModuleName}Routes,%>*/
]
/* eslint-enable */

Vue.use(VueRouter)
export const router = new VueRouter({
  routes
})
//? 添加路由钩子
routerHooks(router)

//? 第一个桥接为默认路由
if (routes.length > 1) {
  router.addRoutes([
    {
      path: '/',
      name: 'Home',
      redirect: routes[1].path
    }
  ])
}

export default router
