define('Admin/wight/common/artical_type.vue', function(require, exports, module) {

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
    data: function() {
      return {
        typeModel: [],
        showInput: false,
        articalContent: "",
        updateModel: {},
      };
    },   
    created: function() {
      var current = this;
      var ArticalTypes = Bmob.Object.extend("ArticalTypes");
      var query = new Bmob.Query(ArticalTypes);
      // 查询所有数据
      query.find({
        success: function(results) {
          current.typeModel = JSON.parse(JSON.stringify(results || []));
          current.$root.$store.state.ArticalTypeModel= JSON.parse(JSON.stringify(results || []));
        },
        error: function(error) {
          current.typeModel = [];
          this.$root.$store.state.ArticalTypeModel=[];
        }
      });
    },
    methods: {
      //添加文章类型
      addTypeHander: function() {
        this.showInput = true;
      },
      hideMask: function() {
        this.showInput = false;
      },
      //点击提交
      submitType: function() {
        if (this.articalContent == "") {
          return;
        }
        var current = this;
        tools.showLoading();
        current.showInput = false;
        //修改
        var objectId=this.updateModel.objectId;
        var content = this.articalContent;
        if (objectId) {
          //还原数据
          this.updateModel={};
          var ArticalTypes = Bmob.Object.extend("ArticalTypes");
          var query = new Bmob.Query(ArticalTypes);
          query.get(objectId, {
            success: function(object) {
              // The object was retrieved successfully.
              object.set("TypeName", content);
              object.save(null, {
                success: function(objectUpdate) {
                   tools.hideLoading();
                   current.typeModel.map(function(item){
                      if(item.objectId==objectId){
                        item.TypeName=content;
                      }
                   });
                   current.$root.$store.state.ArticalTypeModel.map(function(item){
                      if(item.objectId==objectId){
                        item.TypeName=content;
                      }
                   });
                },
                error: function(model, error) {
                  tools.hideLoading();
                }
              });
            },
            error: function(object, error) {
              alert("query object fail");
            }
          });
        } else {
          //新增       
          bmobModel.save("ArticalTypes", {
            TypeName: content
          }, function(model) {  
            model=JSON.parse(JSON.stringify(model))     
            tools.hideLoading();
            current.typeModel.push({
              TypeName: content,
              objectId: model.objectId
            });
            current.$root.$store.state.ArticalTypeModel.push({
              TypeName: content,
              objectId: model.objectId
            });
          
          }, function() {
            tools.hideLoading();
          })
        }
      },
      //点击删除
      deleteTypeHander: function(item) {
        if (item.objectId) {
          tools.showLoading();
          var current = this;
          var ArticalTypes = Bmob.Object.extend("ArticalTypes");
          var query = new Bmob.Query(ArticalTypes);
          query.get(item.objectId, {
            success: function(object) {
              object.destroy({
                success: function(deleteObject) {
                  tools.hideLoading();
                  current.typeModel.map(function(obj, index) {
                    if (obj.objectId == item.objectId) {
                      current.typeModel.splice(index, 1);
                    }
                  });
                  current.$root.$store.state.ArticalTypeModel.map(function(obj, index) {
                    if (obj.objectId == item.objectId) {
                      current.$root.$store.state.ArticalTypeModel.splice(index, 1);
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
        this.updateModel = item;
        this.showInput = true;
        this.articalContent = item.TypeName;
      }
    }
  };
  
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"add_btn",on:{"click":_vm.addTypeHander}},[_vm._v("添 加")]),_vm._v(" "),_c('div',{staticClass:"type_wrapper"},[_c('div',{staticClass:"wrapper_sline"}),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._l((_vm.typeModel),function(item){return [_c('div',{staticClass:"row_wrapper row_vcenter model_item"},[_c('div',{staticClass:"row_full text_center"},[_vm._v(_vm._s(item.TypeName))]),_vm._v(" "),_c('div',{staticClass:"row_full text_center row_wrapper row_vcenter row_center"},[_c('div',[_c('div',{staticClass:"btn inline_block",attrs:{"type":"delete"},on:{"click":function($event){_vm.deleteTypeHander(item)}}},[_vm._v("删 除")]),_vm._v(" "),_c('div',{staticClass:"btn inline_block",attrs:{"type":"add"},on:{"click":function($event){_vm.updateTypeHander(item)}}},[_vm._v("修 改")])])])]),_vm._v(" "),_c('div',{staticClass:"row_line"})]})],2),_vm._v(" "),_c('div',{staticClass:"type_input_wrapper",class:{input_active:_vm.showInput}},[_c('h4',{staticClass:"text_center"},[_vm._v("请输入文章类型")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.articalContent),expression:"articalContent"}],staticClass:"current_text",domProps:{"value":(_vm.articalContent)},on:{"input":function($event){if($event.target.composing){ return; }_vm.articalContent=$event.target.value}}}),_vm._v(" "),_c('div',{staticClass:"text_center"},[_c('div',{staticClass:"btn",attrs:{"type":"submit"},on:{"click":_vm.submitType}},[_vm._v("提 交")])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showInput),expression:"showInput"}],staticClass:"current_mask",on:{"click":_vm.hideMask}})])}
  __vue__options__.staticRenderFns =[function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row_wrapper row_vcenter type_head_box"},[_c('div',{staticClass:"row_full text_center"},[_vm._v("类型名称")]),_vm._v(" "),_c('div',{staticClass:"row_full text_center"},[_vm._v("操作")])])}]
  __vue__options__._scopeId = "_v-0eb5d597"
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})(".type_wrapper[_v-0eb5d597] {\n  min-height: 300px;\n  background-color: #fff;\n  position: relative;\n}\n.add_btn[_v-0eb5d597] {\n  color: #fff;\n  width: 80px;\n  height: 30px;\n  text-align: center;\n  line-height: 30px;\n  background-color: #9a1dff;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.type_head_box[_v-0eb5d597] {\n  background-color: #f8f8f9;\n  height: 40px;\n  color: #495060;\n}\n.wrapper_sline[_v-0eb5d597] {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: #e9eaec;\n}\n.type_input_wrapper[_v-0eb5d597] {\n  -webkit-transform: scale(0) translate(-50%, -50%);\n     -moz-transform: scale(0) translate(-50%, -50%);\n      -ms-transform: scale(0) translate(-50%, -50%);\n          transform: scale(0) translate(-50%, -50%);\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  -moz-transition: transform 0.3s, -moz-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s, -moz-transform 0.3s;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  background-color: #fff;\n  -webkit-border-radius: 5px;\n          border-radius: 5px;\n  z-index: 999;\n  padding: 0 12px 12px;\n}\n.input_active[_v-0eb5d597] {\n  -webkit-transform: scale(1) translate(-50%, -50%);\n     -moz-transform: scale(1) translate(-50%, -50%);\n      -ms-transform: scale(1) translate(-50%, -50%);\n          transform: scale(1) translate(-50%, -50%);\n}\n.current_mask[_v-0eb5d597] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0,0,0,0.3);\n  z-index: 998;\n}\n.current_text[_v-0eb5d597] {\n  min-width: 200px;\n  min-height: 120px;\n  border: 1px solid #e9eaec;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding: 0 8px;\n}\n.current_text[_v-0eb5d597]:focus {\n  outline: none;\n}\n.btn[type=\"submit\"][_v-0eb5d597] {\n  cursor: pointer;\n  width: 80px;\n  height: 25px;\n  background-color: #9a1dff;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  margin: 15px auto 0;\n  color: #fff;\n  line-height: 25px;\n}\n.model_item[_v-0eb5d597] {\n  min-height: 40px;\n}\n.btn[type=\"delete\"][_v-0eb5d597] {\n  cursor: pointer;\n  width: 80px;\n  height: 25px;\n  background-color: #f00;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  color: #fff;\n  line-height: 25px;\n}\n.btn[type=\"add\"][_v-0eb5d597] {\n  cursor: pointer;\n  width: 80px;\n  height: 25px;\n  background-color: #9a1dff;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  color: #fff;\n  line-height: 25px;\n}\n.inline_block[_v-0eb5d597] {\n  display: inline-block;\n}");
  

});
