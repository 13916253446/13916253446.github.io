<template>
  <div>
    <md-app-toolbar class="md-primary" md-elevation="0">
      <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">My Title</span>
    </md-app-toolbar>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Headers',
  computed: {
    ...mapState(['menuVisible'])
  },
  methods: {
    ...mapMutations(['setMenuVisible']),
    //? 切换左边菜单
    toggleMenu () {
      this.setMenuVisible(!this.menuVisible)
    }
  }
}
</script>
