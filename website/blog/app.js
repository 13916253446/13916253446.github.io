import Vue from 'vue'
import router from './routes/index.js'
import store from './store/index.js'
import App from './app.vue'
import VueMaterial from 'vue-material'
import svgs from 'components/layout/blog-icon.vue'
//! 导入公共样式
import 'components/styles/base.styl'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-light.css'
import 'nprogress/nprogress.css'
import 'highlight.js/styles/atom-one-dark.css'

Vue.use(VueMaterial)

Vue.component('svgs', svgs)

//! 保存需要缓存的路由组件
if (router && router.options && router.options.routes) {
  let keepAliveComponents = []
  router.options.routes.forEach(item => {
    item.meta && item.meta.keepAlive && keepAliveComponents.push((item.name || ''))
  })
  store.commit('setKeepAliveComponents', [...(new Set(keepAliveComponents))])
}

window.$vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}
