import Vue from 'vue'
import Vuex from 'vuex'
import createStorePlugin from 'components/tools/storePlugin.js'
import whiteList from './cacheWhiteList.js'
//! vue知识总结
import VUEStore from '../modules/VUE/store/store.js'
//! css总结
import CSSStore from '../modules/CSS/store/store.js'
/* @init<%
//! ${TplModuleIntroduction}
import ${TplModuleName}Store from '../modules/${TplModuleName}/store/store.js'%> */

Vue.use(Vuex)

const state = {
  //! 页面切换动画名称
  pageChangeAnimation: '',
  //! 需要缓存的组件名称
  keepAliveComponents: [],
  //! 是否显示左边菜单栏
  menuVisible: false,
  //! 当前页面的选择项
  currentPage: ''
}

const mutations = {
  //! 设置页面切换动画名称
  setPageChangeAnimation (state, name = '') {
    state.pageChangeAnimation = name
  },
  //! 设置缓存页面数据
  setKeepAliveComponents (state, aliveLists = []) {
    state.keepAliveComponents = aliveLists
  },
  //! 设置是否显示左边菜单栏
  setMenuVisible (state, val) {
    state.menuVisible = !!val
  },
  //! 设置当前页面的菜单项
  setCurrentPage (state, val) {
    state.currentPage = val
  }
}

//? 添加缓存插件要用的mutations
const cachePluginMutations = {}
for (let key in state) {
  cachePluginMutations[`_set_${key}`] = (originState, val) => {
    originState[key] = val
  }
}

/* eslint-disable */
export const store = new Vuex.Store({
  //? TODO:开启严格模式会深度监测状态树来检测不合规的状态变更，开发环境约束好，生产环境关闭掉
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  modules: {
    //! vue知识总结
    VUE: {
      namespaced: true,
      ...VUEStore
    },
    //! css总结
    CSS: {
      namespaced: true,
      ...CSSStore
    },
    /* @init<%
    //! ${TplModuleIntroduction}
    ${TplModuleName}: {
      namespaced: true,
      ...${TplModuleName}Store
    },%> */
  },
  plugins: [createStorePlugin(whiteList)]
})
/* eslint-enable */
export default store
