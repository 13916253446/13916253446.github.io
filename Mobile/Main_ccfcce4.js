define('Mobile/Main.vue', function(require, exports, module) {

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  module.exports = {
      data: function() {
          return {
              //状态原型
              stateModel: [{
                      id: 1,
                      key: "首页",
                      icon: "#主页"
                  },
                  {
                      id: 2,
                      key: "发现",
                      icon: "#发现"
                  },
                  {
                      id: 3,
                      key: "我的",
                      icon: "#我的"
                  },
              ],
          }
      },
      methods: {
          //切换状态
          changeState: function(parrams) {
              var model = parrams.item;
              var routes = this.$router.options.routes;
              for (var i = 0, lengths = routes[0].children.length; i < lengths; i++) {
                  if (routes[0].children[i].meta && routes[0].children[i].meta.id == model.id) {
                      this.$router.replace(routes[0].children[i]);
                  }
              }
          }
      }
  }
  
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"scroll_wrapper"},[_c('transition',{attrs:{"name":_vm.$root.transitionName}},[_c('router-view',{staticClass:"child_view"})],1)],1),_vm._v(" "),_c('div',{staticClass:"bottom_wrapper"},[_c('div',{staticClass:"state_wrapper row_wrapper row_vcenter"},_vm._l((_vm.stateModel),function(item){return _c('div',{directives:[{name:"tap",rawName:"v-tap",value:({methods:_vm.changeState,item:item}),expression:"{methods:changeState,item:item}"}],staticClass:"row_full row_wrapper row_vcenter row_center"},[_c('div',{staticClass:"vrow_wrapper row_vcenter",class:{state_active:_vm.$route.meta&&_vm.$route.meta.id==item.id}},[_c('svg',{staticClass:"state_icon"},[_c('use',{attrs:{"xlink:href":_vm.$root.commonIcon+item.icon}})]),_vm._v(" "),_c('div',{staticClass:"small_font"},[_vm._v(_vm._s(item.key))])])])}))])])}
  __vue__options__.staticRenderFns =[]
  

});
