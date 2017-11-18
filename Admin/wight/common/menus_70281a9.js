define('Admin/wight/common/menus.vue', function(require, exports, module) {

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
  
  module.exports={
      data:function(){
          return {
              model:[
                  {id:1,key:"文章类型",icon:"#文章类型"},
                  {id:2,key:"评论",icon:"#评论"},
                  {id:3,key:"文章内容",icon:"#详情"} 
              ]
          }
      },
      methods:{
          //切换菜单
          checkMenu:function(item){
             this.$store.commit("checkMenu",item.id);
          }
      }
  }
  
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menu_wrapper"},_vm._l((_vm.model),function(item){return _c('div',{staticClass:"row_wrapper row_vcenter menu_item",on:{"click":function($event){_vm.checkMenu(item)}}},[_c('svg',{staticClass:"icon",class:{menu_active:_vm.$store.state.menuActiveId==item.id}},[_c('use',{attrs:{"xlink:href":_vm.$store.state.commonIcon+item.icon}})]),_vm._v(" "),_c('div',{staticClass:"row_full",class:{menu_active:_vm.$store.state.menuActiveId==item.id}},[_vm._v(_vm._s(item.key))]),_vm._v(" "),_c('svg',{staticClass:"right_icon",class:{menu_active:_vm.$store.state.menuActiveId==item.id}},[_c('use',{attrs:{"xlink:href":_vm.$store.state.commonIcon+'#右箭头'}})])])}))}
  __vue__options__.staticRenderFns =[]
  __vue__options__._scopeId = "_v-f187e274"
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})(".menu_wrapper[_v-f187e274] {\n  padding: 0 15px;\n}\n.icon[_v-f187e274] {\n  width: 20px;\n  height: 20px;\n  fill: #666;\n  margin-right: 8px;\n}\n.menu_item[_v-f187e274] {\n  height: 60px;\n  cursor: pointer;\n  color: #666;\n}\n.menu_item[_v-f187e274]:hover {\n  background-color: #ecf1f4;\n}\n.right_icon[_v-f187e274] {\n  width: 18px;\n  height: 18px;\n  color: #ccc;\n}\n.menu_active[_v-f187e274] {\n  color: #9a1dff;\n}\n.menu_active.icon[_v-f187e274] {\n  fill: #9a1dff;\n}");
  

});
