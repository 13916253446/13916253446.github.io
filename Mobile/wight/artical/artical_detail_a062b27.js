define('Mobile/wight/artical/artical_detail.vue', function(require, exports, module) {

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
  
  module.exports={
      data:function(){
          return{
  
          }
      },
      computed:{
          content:function(){                
              return markdown.toHTML(this.$store.state.articalModel.Detail||"");
          }
      },
      methods:{
          //点击返回
          back:function(){
              this.$router.go(-1);
          }
      }
  }
  
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"header_wrapper row_wrapper row_vcenter"},[_c('div',{directives:[{name:"tap",rawName:"v-tap",value:({methods:_vm.back}),expression:"{methods:back}"}],staticClass:"back_box row_wrapper row_vcenter"},[_c('svg',{staticClass:"back_icon"},[_c('use',{attrs:{"xlink:href":_vm.$root.commonIcon+'#左箭头'}})])]),_vm._v(" "),_c('div',{staticClass:"row_full text_center artical_title"},[_vm._v(_vm._s(_vm.$store.state.articalModel.ArticalTitle))]),_vm._v(" "),_c('div',{staticClass:"back_box"})]),_vm._v(" "),_c('div',{staticClass:"artical_content markdown-body",domProps:{"innerHTML":_vm._s(_vm.content)}})])}
  __vue__options__.staticRenderFns =[]
  __vue__options__._scopeId = "_v-acdb0ef8"
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})(".artical_title[_v-acdb0ef8] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.artical_content[_v-acdb0ef8] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[data-dpr=\"1\"] .artical_content[_v-acdb0ef8] {\n  top: 51px;\n}\n[data-dpr=\"1\"] .markdown-body[_v-acdb0ef8] {\n  font-size: 16px;\n}\n[data-dpr=\"2\"] .artical_content[_v-acdb0ef8] {\n  top: 101px;\n}\n[data-dpr=\"2\"] .markdown-body[_v-acdb0ef8] {\n  font-size: 32px;\n}\n[data-dpr=\"3\"] .artical_content[_v-acdb0ef8] {\n  top: 151px;\n}\n[data-dpr=\"3\"] .markdown-body[_v-acdb0ef8] {\n  font-size: 48px;\n}");
  

});
