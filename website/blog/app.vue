<template>
    <div class="page-container">
      <md-app>
        <!-- header -->
        <md-app-toolbar class="md-primary" md-elevation="0">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title">HF C</span>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
          <md-toolbar class="md-transparent" md-elevation="0">
            <span>Navigation</span>

            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button md-dense" @click="toggleMenu">
                <md-icon>keyboard_arrow_left</md-icon>
              </md-button>
            </div>
          </md-toolbar>

          <md-list>
            <md-list-item v-for="(module, index) in routes" :key="`module${index}`" :class="`menu-${module.module}`">
              <svgs class="menu-icon" :name="module.icon" v-show="!menuVisible"></svgs>
              <div class="md-layout md-gutter" v-show="menuVisible">
                <div class="md-layout-item">
                  <md-field>
                    <label :for="module.module">
                      <span class="md-list-item-text">{{module.module}}</span>
                    </label>
                    <md-select @md-closed="removeMdHasValue" @md-selected="selectPage" v-model="thePage" :name="module.module" :id="module.module">
                      <md-option v-for="(page, indexs) in module.pages" :key="`page${indexs}`" :value="`/${module.module}/${page.name}`.toUpperCase()">{{page.title}}</md-option>
                    </md-select>
                  </md-field>
                </div>
              </div>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </md-app-content>
      </md-app>
    </div>
</template>

<script>
import routes from './config/routes.json'
export default {
  name: 'App',
  data: () => ({
    menuVisible: false,
    routes,
    thePage: ''
  }),
  watch: {
    //? 监听当前路由变化，设置选中的菜单项
    $route: {
      handler ({ path }) {
        this.thePage = path.toUpperCase()
        this.$nextTick(this.removeMdHasValue)
      },
      immediate: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    },
    //? 选择页面
    selectPage (path) {
      if (!path) return false
      this.$router.push({ path })
    },
    //? 移除md-has-value
    async removeMdHasValue () {
      await this.$nextTick()
      routes.forEach(item => {
        if (this.thePage.indexOf(item.module.toUpperCase()) !== 1) {
          let className = `.menu-${item.module}`
          let dom = document.querySelector(className)
          let childDOM = dom.querySelector('.md-has-value')
          childDOM && childDOM.classList && childDOM.classList.remove('md-has-value')
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-icon
  width 25px
  height 25px
  margin-right 32px
  min-width 25px
.md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
