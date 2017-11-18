define('Mobile/Home.vue', function(require, exports, module) {

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
          }
      },
      created: function() {                    
          this.$nextTick(function() {               
             this.scroll=new BScroll(this.$refs.scroll_box);
          });
      },       
  }
  
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home_wrapper"},[_c('div',{staticClass:"header_wrapper"}),_vm._v(" "),_c('div',{ref:"scroll_box",staticClass:"current_scroll_wrapper"},[_vm._m(0)])])}
  __vue__options__.staticRenderFns =[function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticStyle:{"height":"1000vh"}},[_vm._v("123")])])}]
  __vue__options__._scopeId = "_v-b59e3e86"
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})(".current_scroll_wrapper[_v-b59e3e86] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n[data-dpr=\"1\"] .current_scroll_wrapper[_v-b59e3e86] {\n  top: 51px;\n}\n[data-dpr=\"2\"] .current_scroll_wrapper[_v-b59e3e86] {\n  top: 101px;\n}\n[data-dpr=\"3\"] .current_scroll_wrapper[_v-b59e3e86] {\n  top: 151px;\n}");
  

});
