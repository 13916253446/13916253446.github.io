define('Admin/wight/common/detail_input.vue', function(require, exports, module) {

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
  //
  //
  //
  //
  //
  //
  
  module.exports = {
      props: ["add", "model"],
      data: function() {
          return {
              showMenu: false,
              updateModel: {},
              typeObj: {}, //文章类型
              left_active: false,
              areaInput: "", //输入的文章内容
              articalDetail: "", //转化后的文章内容
              ArticalTitle: "" //文章标题
          };
      },
      watch: {
          areaInput: function(val) {
              this.articalDetail = markdown.toHTML(val);
          },
          model: function(val) {
              this.updateModel = val;
              this.typeObj = val.parent || {};
              this.ArticalTitle = val.ArticalTitle;
              this.areaInput = val.Detail || "";
          }
      },
      methods: {
          //点击返回
          back: function() {
              this.$root.$store.state.showInput = false;
          },
          showType: function() {
              this.left_active = true;
          },
          //选择文章类型
          chooseType: function(model) {
              this.typeObj = model;
              this.left_active = false;
          },
          //点击保存
          saveHandler: function() {
              var current = this;
              if (this.typeObj.TypeId == null) return;
              if (this.areaInput == null || this.areaInput == "") return;
              if (this.ArticalTitle == null || this.ArticalTitle == "") return;
              tools.showLoading();
              //新增
              if (this.add) {
                  var ArticalTypes = Bmob.Object.createWithoutData(
                      "ArticalTypes",
                      this.typeObj.objectId
                  );
                  var ArticalDetail = Bmob.Object.extend("ArticalDetail");
                  var ArticalDetail = new ArticalDetail();
                  ArticalDetail.set("Detail", current.areaInput);
                  ArticalDetail.set("ArticalTitle", current.ArticalTitle);
                  ArticalDetail.set("ArticalTypeId", current.typeObj.TypeId);
                  ArticalDetail.set("ArticalTypeName", current.typeObj.TypeName);
                  ArticalDetail.set("parent", ArticalTypes);
                  ArticalDetail.save().then(
                      function(model) {
                          current.$store.state.showInput = false;
                          model = JSON.parse(JSON.stringify(model));
                          tools.hideLoading();
                          current.$store.state.detailModel.push({
                              TypeId: current.typeObj.TypeId,
                              Detail: current.areaInput,
                              ArticalTitle: current.ArticalTitle,
                              objectId: model.objectId,
                              ArticalTypeId: current.typeObj.TypeId,
                              ArticalTypeName: current.typeObj.TypeName,
                              parent: {
                                  objectId: current.typeObj.objectId,
                                  TypeName: current.typeObj.TypeName,
                                  TypeId: current.typeObj.TypeId
                              }
                          });
                          current.$store.state.showInput = false;
                      },
                      function() {
                          tools.hideLoading();
                          current.$store.state.showInput = false;
                      }
                  );
              } else {
                  //修改
                  tools.showLoading();
                  var current = this;
                  var ArticalDetail = Bmob.Object.extend("ArticalDetail");
                  var query = new Bmob.Query(ArticalDetail);
                  query.get(this.updateModel.objectId, {
                      success: function(gameScore) {
                          gameScore.set("ArticalTitle", current.ArticalTitle);
                          gameScore.set("Detail", current.areaInput);
                          gameScore.set("ArticalTypeId", current.typeObj.TypeId);
                          gameScore.set("ArticalTypeName", current.typeObj.TypeName);
                          gameScore.save().then(function() {
                              current.$store.state.detailModel.map(function(item) {
                                  if (item.objectId == current.updateModel.objectId) {
                                      item.ArticalTitle = current.ArticalTitle;
                                      item.Detail = current.areaInput;
                                      item.ArticalTypeId = current.typeObj.TypeId;
                                      item.ArticalTypeName = current.typeObj.TypeName;
                                  }
                              });
                              tools.hideLoading();
                              current.$store.state.showInput = false;
                          });
                      },
                      error: function(object, error) {}
                  });
              }
          }
      },
      created: function() {
          var array = this.$store.state.ArticalTypeModel || [];
          if (array.length < 1) {
              var current = this;
              var ArticalTypes = Bmob.Object.extend("ArticalTypes");
              var query = new Bmob.Query(ArticalTypes);
              // 查询所有数据
              query.find({
                  success: function(results) {
                      current.$store.state.ArticalTypeModel = JSON.parse(
                          JSON.stringify(results || [])
                      );
                  },
                  error: function(error) {
                      this.$store.state.ArticalTypeModel = [];
                  }
              });
          }
      }
  };
  
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"artical_detail_wrapper",class:{active:_vm.$store.state.showInput}},[_c('div',{staticClass:"header_bc row_wrapper row_vcenter"},[_c('svg',{staticClass:"left_icon",on:{"click":_vm.back}},[_c('use',{attrs:{"xlink:href":_vm.$store.state.commonIcon+'#左箭头'}})])]),_vm._v(" "),_c('div',{staticClass:"content_wrapper"},[_c('div',{staticClass:"row_wrapper row_vcenter"},[_c('h4',[_vm._v("文章类型")]),_vm._v(" "),_c('div',{staticClass:"btn row_wrapper row_vcenter",attrs:{"type":"updata"},on:{"click":_vm.showType}},[_vm._v(_vm._s(_vm.typeObj.TypeName))])]),_vm._v(" "),_c('div',{staticClass:"text_right"},[_c('div',{staticClass:"edit_wrapper"},[_c('div',{staticClass:"btn",attrs:{"type":"save"},on:{"click":_vm.saveHandler}},[_vm._v("保 存")]),_vm._v(" "),_c('div',{staticClass:"title_wrapper"},[_c('h4',[_vm._v("文章标题")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.ArticalTitle),expression:"ArticalTitle"}],domProps:{"value":(_vm.ArticalTitle)},on:{"input":function($event){if($event.target.composing){ return; }_vm.ArticalTitle=$event.target.value}}})]),_vm._v(" "),_c('h4',[_vm._v("文章详情")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.areaInput),expression:"areaInput"}],domProps:{"value":(_vm.areaInput)},on:{"input":function($event){if($event.target.composing){ return; }_vm.areaInput=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"mobile_view markdown-body"},[_c('div',{staticClass:"mobile_header"},[_vm._v(_vm._s(_vm.ArticalTitle))]),_vm._v(" "),_c('div',{staticClass:"mobile_content"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.articalDetail)}})])])]),_vm._v(" "),_c('div',{staticClass:"menu_wrapper",class:{active_menu:_vm.left_active}},_vm._l((_vm.$store.state.ArticalTypeModel),function(item){return _c('div',{staticClass:"munu_item",on:{"click":function($event){_vm.chooseType(item)}}},[_vm._v(_vm._s(item.TypeName))])}))])}
  __vue__options__.staticRenderFns =[]
  __vue__options__._scopeId = "_v-81814953"
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})(".artical_detail_wrapper[_v-81814953] {\n  position: fixed;\n  background-color: #f4f4f4;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-transform: translateY(100%);\n     -moz-transform: translateY(100%);\n      -ms-transform: translateY(100%);\n          transform: translateY(100%);\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  -moz-transition: transform 0.3s, -moz-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s, -moz-transform 0.3s;\n}\n.active[_v-81814953] {\n  -webkit-transform: translateY(0);\n     -moz-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n}\n.header_bc[_v-81814953] {\n  height: 60px;\n  text-align: center;\n  background-color: #fff;\n  -webkit-box-shadow: 0 5px 4px -4px #ddd;\n          box-shadow: 0 5px 4px -4px #ddd;\n}\n.left_icon[_v-81814953] {\n  width: 30px;\n  height: 30px;\n  color: #666;\n  margin-left: 10px;\n}\n.content_wrapper[_v-81814953] {\n  position: absolute;\n  top: 60px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 20px;\n}\n.btn[type='updata'][_v-81814953] {\n  background-color: #fff;\n  padding: 5px 10px;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  -webkit-box-shadow: 3px 3px 6px -3px #ddd;\n          box-shadow: 3px 3px 6px -3px #ddd;\n  margin-left: 20px;\n  cursor: pointer;\n  min-width: 180px;\n  text-align: center;\n  min-height: 40px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n}\n.menu_wrapper[_v-81814953] {\n  position: fixed;\n  left: 0;\n  width: 380px;\n  top: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: #fff;\n  height: 100%;\n  -webkit-transform: translateX(-100%);\n     -moz-transform: translateX(-100%);\n      -ms-transform: translateX(-100%);\n          transform: translateX(-100%);\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  -moz-transition: transform 0.3s, -moz-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s, -moz-transform 0.3s;\n  -webkit-box-shadow: 10px 0px 5px -5px #ddd;\n          box-shadow: 10px 0px 5px -5px #ddd;\n}\n.active_menu[_v-81814953] {\n  -webkit-transform: translateX(0);\n     -moz-transform: translateX(0);\n      -ms-transform: translateX(0);\n          transform: translateX(0);\n}\n.munu_item[_v-81814953] {\n  padding: 12px;\n  cursor: pointer;\n}\n.munu_item[_v-81814953]:hover {\n  background-color: #ecf1f4;\n}\n.edit_wrapper[_v-81814953] {\n  width: 500px;\n  height: 800px;\n  background-color: #fff;\n  -webkit-border-radius: 5px;\n          border-radius: 5px;\n  padding: 12px;\n  margin: 0 0 0 auto;\n}\n.text_right[_v-81814953] {\n  text-align: right;\n}\ntextarea[_v-81814953] {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ntextarea[_v-81814953]:focus {\n  outline: none;\n}\n.mobile_view[_v-81814953] {\n  width: 320px;\n  position: absolute;\n  top: 80px;\n  border: 4px solid #000;\n  -webkit-border-radius: 8px;\n          border-radius: 8px;\n}\n.mobile_header[_v-81814953] {\n  height: 44px;\n  line-height: 44px;\n  background-color: #f7f7f7;\n  -webkit-box-shadow: 0 1px 6px #ccc;\n          box-shadow: 0 1px 6px #ccc;\n  text-align: center;\n}\n.mobile_content[_v-81814953] {\n  background-color: #fff;\n  height: 667px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  margin-top: 5px;\n}\n.btn[type='save'][_v-81814953] {\n  width: 140px;\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  background-color: #9a1dff;\n  color: #fff;\n  margin-bottom: 20px;\n  -webkit-border-radius: 8px;\n          border-radius: 8px;\n  cursor: pointer;\n}\n.title_wrapper[_v-81814953] {\n  width: 500px;\n  height: 60px;\n  background-color: #fff;\n  -webkit-border-radius: 5px;\n          border-radius: 5px;\n  padding-bottom: 30px;\n}");
  

});
