define('Admin/wight/common/artical_detail.vue', function(require, exports, module) {

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
  //
  //
  //
  //
  //
  //
  
  module.exports = {
      data: function() {
          return {
              detailModel: [],
              showInput: false,
              articalContent: "",
              updateModel: {},
              isAdd: false,
          };
      },
      created: function() {
          var current = this;
          var ArticalDetail = Bmob.Object.extend("ArticalDetail");
          var query = new Bmob.Query(ArticalDetail);
          // 查询所有数据
          query.find({
              success: function(results) {
                  current.$store.state.detailModel = JSON.parse(JSON.stringify(results || []));
              },
              error: function(error) {
                  current.$store.state.detailModel = [];
              }
          });
      },
      methods: {
          //添加文章类型
          addTypeHander: function() {
              this.isAdd = true;
              this.updateModel = {};
              this.$store.state.showInput = true;
          },
          hideMask: function() {
              this.showInput = false;
          },
          //点击删除
          deleteTypeHander: function(item) {
              if (item.objectId) {
                  tools.showLoading();
                  var current = this;
                  var ArticalDetail = Bmob.Object.extend("ArticalDetail");
                  var query = new Bmob.Query(ArticalDetail);
                  query.get(item.objectId, {
                      success: function(object) {
                          object.destroy({
                              success: function(deleteObject) {
                                  tools.hideLoading();
                                  current.$store.state.detailModel.map(function(obj, index) {
                                      if (obj.objectId == item.objectId) {
                                          current.$store.state.detailModel.splice(index, 1);
                                      }
                                  });
                              },
                              error: function(GameScoretest, error) {
                                  tools.hideLoading();
                              }
                          });
                      },
                      error: function(object, error) {
                          tools.hideLoading();
                      }
                  });
              }
          },
          //点击修改
          updateTypeHander: function(item) {
              var current = this;
              this.isAdd = false;
              this.updateModel = item;
              tools.showLoading();
              var ArticalTypes = Bmob.Object.extend("ArticalTypes");
              var query = new Bmob.Query(ArticalTypes);
              query.get(item.parent.objectId, {
                  success: function(gameScore) {
                      tools.hideLoading();
                      Vue.set(current.updateModel.parent, "TypeName", gameScore.get("TypeName"));
                      Vue.set(current.updateModel.parent, "TypeId", gameScore.get("TypeId"));
                      current.$store.state.showInput = true;
                  },
                  error: function(object, error) {}
              });
          }
      },
      components: {
          "detail-input-component": Vue.component("", function(resolve) {
              require.async(["Admin/wight/common/detail_input.vue"], resolve)
          })
      }
  };
  
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"add_btn",on:{"click":_vm.addTypeHander}},[_vm._v("添 加")]),_vm._v(" "),_c('div',{staticClass:"type_wrapper"},[_c('div',{staticClass:"wrapper_sline"}),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._l((_vm.$store.state.detailModel),function(item){return [_c('div',{staticClass:"row_wrapper row_vcenter model_item"},[_c('div',{staticClass:"row_full text_center"},[_vm._v(_vm._s(item.ArticalTitle))]),_vm._v(" "),_c('div',{staticClass:"row_full text_center row_wrapper row_vcenter row_center"},[_c('div',[_c('div',{staticClass:"btn inline_block",attrs:{"type":"delete"},on:{"click":function($event){_vm.deleteTypeHander(item)}}},[_vm._v("删 除")]),_vm._v(" "),_c('div',{staticClass:"btn inline_block",attrs:{"type":"add"},on:{"click":function($event){_vm.updateTypeHander(item)}}},[_vm._v("修 改")])])])]),_vm._v(" "),_c('div',{staticClass:"row_line"})]})],2),_vm._v(" "),_c('detail-input-component',{attrs:{"model":_vm.updateModel,"add":_vm.isAdd}})],1)}
  __vue__options__.staticRenderFns =[function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row_wrapper row_vcenter type_head_box"},[_c('div',{staticClass:"row_full text_center"},[_vm._v("文章标题")]),_vm._v(" "),_c('div',{staticClass:"row_full text_center"},[_vm._v("操作")])])}]
  __vue__options__._scopeId = "_v-a11cfc85"
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})(".type_wrapper[_v-a11cfc85] {\n  min-height: 300px;\n  background-color: #fff;\n  position: relative;\n}\n.add_btn[_v-a11cfc85] {\n  color: #fff;\n  width: 80px;\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  background-color: #9a1dff;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.type_head_box[_v-a11cfc85] {\n  background-color: #f8f8f9;\n  height: 40px;\n  color: #495060;\n}\n.wrapper_sline[_v-a11cfc85] {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: #e9eaec;\n}\n.type_input_wrapper[_v-a11cfc85] {\n  -webkit-transform: scale(0) translate(-50%, -50%);\n     -moz-transform: scale(0) translate(-50%, -50%);\n      -ms-transform: scale(0) translate(-50%, -50%);\n          transform: scale(0) translate(-50%, -50%);\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  -moz-transition: transform 0.3s, -moz-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s, -moz-transform 0.3s;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  background-color: #fff;\n  -webkit-border-radius: 5px;\n          border-radius: 5px;\n  z-index: 999;\n  padding: 0 12px 12px;\n}\n.input_active[_v-a11cfc85] {\n  -webkit-transform: scale(1) translate(-50%, -50%);\n     -moz-transform: scale(1) translate(-50%, -50%);\n      -ms-transform: scale(1) translate(-50%, -50%);\n          transform: scale(1) translate(-50%, -50%);\n}\n.current_mask[_v-a11cfc85] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0,0,0,0.3);\n  z-index: 998;\n}\n.current_text[_v-a11cfc85] {\n  min-width: 200px;\n  min-height: 120px;\n  border: 1px solid #e9eaec;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding: 0 8px;\n}\n.current_text[_v-a11cfc85]:focus {\n  outline: none;\n}\n.btn[type=\"submit\"][_v-a11cfc85] {\n  cursor: pointer;\n  width: 80px;\n  height: 25px;\n  background-color: #9a1dff;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  margin: 15px auto 0;\n  color: #fff;\n  line-height: 25px;\n}\n.model_item[_v-a11cfc85] {\n  min-height: 40px;\n}\n.btn[type=\"delete\"][_v-a11cfc85] {\n  cursor: pointer;\n  width: 80px;\n  height: 25px;\n  background-color: #f00;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  color: #fff;\n  line-height: 25px;\n}\n.btn[type=\"add\"][_v-a11cfc85] {\n  cursor: pointer;\n  width: 80px;\n  height: 25px;\n  background-color: #9a1dff;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  color: #fff;\n  line-height: 25px;\n}\n.inline_block[_v-a11cfc85] {\n  display: inline-block;\n}");
  

});
