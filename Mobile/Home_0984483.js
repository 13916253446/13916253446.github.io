define('Mobile/Home.vue', function(require, exports, module) {

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
              HeaderModel: [],
              //动画模型
              transtionModel: {
                  //首页
                  "1993": {
                      width: "100%",
                      translate: 0
                  }
              },
              //当前激活objectId
              activeObjectId: "1993",
              index:0,
              //滑动元素
              scrollDom: null,
              transitionName: "",
          }
      },
      watch: {
          //监听文章类型变化
          "HeaderModel": function(val) {
              this.$nextTick(function() {
                  if (this.scrollDom == null) {
                      this.scrollDom = this.$refs.scroll_child.querySelector(".scroll_bar");
                  }
                  //即使文章类型少于一屏，也让可以滚动
                  //尽量减少重绘
                  if ((val || []).length < 5) {
                      this.$refs.scroll_child.style.width = window.innerWidth + 10 + "px";
                  } else {
                      var currentWidth = window.getComputedStyle(this.$refs.scroll_child).width;
                      var winWidth = window.innerWidth;
                      if (parseFloat(currentWidth || 0) <= winWidth) {
                          this.$refs.scroll_child.style.width = winWidth + 10 + "px";
                      }
                  }
                  //刷新scroll
                  this.titleScroll.refresh();
              });
          }
      },
      beforeCreate: function() {
          //首页内容组件
          Vue.component("home-content", function(resolve) {
              require.async(["Mobile/wight/home/home.vue"], resolve)
          });
      },
      created: function() {          
          //获取所有文章类型
          var ArticalTypes = Bmob.Object.extend("ArticalTypes");
          var query = new Bmob.Query(ArticalTypes);
          query.find({
              success: function(results) {
                  this.HeaderModel = JSON.parse(JSON.stringify(results));
                  this.HeaderModel.unshift({
                      "TypeName": "首页",
                      "TypeId": "0",
                      "objectId": "1993"
                  });
              }.bind(this),
              error: function(error) {
                  this.HeaderModel = [];
              }.bind(this)
          });
          //初始化scroll                   
          this.$nextTick(function() {
              this.titleScroll = new BScroll(this.$refs.title_scroll_box, {
                  scrollX: true,
                  scrollY: false
              });
          });
      },
      methods: {
          //切换文章类型
          changeArticalType: function(params) {
              var model = params.item;              
              var isInTransition = this.titleScroll.isInTransition;
              if (!isInTransition && model.objectId) {
                  //判断是否缓存过动画模型
                  if (this.transtionModel[model.objectId]) {
                      //执行动画
                      this.scrollDom.style.transform = "translate3d(" + this.transtionModel[model.objectId].translate + ",0,0)";
                      this.scrollDom.style.webkitTransform = "translate3d(" + this.transtionModel[model.objectId].translate + ",0,0)";
                      this.scrollDom.style.width = this.transtionModel[model.objectId].width;
                  } else {
                      var width = window.getComputedStyle(params.event.currentTarget).width;
                      var padding = 0.4 * parseFloat(document.querySelector("html").style.fontSize);
                      width = parseFloat(width) + padding * 2 + "px";
                      var viewLeft = params.event.currentTarget.getBoundingClientRect().left;
                      var scrollLeft = Math.abs(this.titleScroll.x);
                      //存储动画模型
                      var translate = viewLeft + scrollLeft + "px";
                      this.transtionModel[model.objectId] = {
                          width: width,
                          translate: translate
                      }
                      //执行动画
                      this.scrollDom.style.transform = "translate3d(" + translate + ",0,0)";
                      this.scrollDom.style.webkitTransform = "translate3d(" + translate + ",0,0)";
                      this.scrollDom.style.width = width;
                  }
                  this.activeObjectId = model.objectId;                                
                  this.transitionName=params.indexs>this.index?"slide-left":"slide-right";
                  this.index=params.indexs;                    
              }
          }
      },
  }
  
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home_wrapper"},[_c('div',{ref:"title_scroll_box",staticClass:"header_wrapper"},[_c('div',{ref:"scroll_child",staticClass:"title_scroll_child"},[_c('div',{staticClass:"title_wrapper row_wrapper row_vcenter"},_vm._l((_vm.HeaderModel),function(item,index){return _c('div',{directives:[{name:"tap",rawName:"v-tap",value:({methods:_vm.changeArticalType,item:item,indexs:index}),expression:"{methods:changeArticalType,item:item,indexs:index}"}],staticClass:"title_item medium_font row_wrapper row_vcenter",class:{active_title:_vm.activeObjectId==item.objectId}},[_vm._v("\n                    "+_vm._s(item.TypeName)+"\n                    "),(index==0)?_c('div',{staticClass:"scroll_bar"}):_vm._e()])}))])]),_vm._v(" "),_c('div',{ref:"scroll_box",staticClass:"current_scroll_wrapper"},[_c('transition',{attrs:{"name":_vm.transitionName}},[_c('keep-alive',_vm._l((_vm.HeaderModel),function(item){return (_vm.activeObjectId==item.objectId)?_c('home-content',{key:item.objectId,staticClass:"child_view",attrs:{"model":item}}):_vm._e()}))],1)],1)])}
  __vue__options__.staticRenderFns =[]
  __vue__options__._scopeId = "_v-b59e3e86"
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})(".current_scroll_wrapper[_v-b59e3e86] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n[data-dpr=\"1\"] .current_scroll_wrapper[_v-b59e3e86] {\n  top: 51px;\n}\n[data-dpr=\"2\"] .current_scroll_wrapper[_v-b59e3e86] {\n  top: 101px;\n}\n[data-dpr=\"3\"] .current_scroll_wrapper[_v-b59e3e86] {\n  top: 151px;\n}\n.title_wrapper[_v-b59e3e86] {\n  white-space: nowrap;\n  font-size: 0;\n  height: 100%;\n}\n.title_item[_v-b59e3e86] {\n  padding: 0 0.4rem /* 30/75 */;\n  height: 100%;\n  position: relative;\n}\n.title_scroll_child[_v-b59e3e86] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n}\n.scroll_bar[_v-b59e3e86] {\n  position: absolute;\n  width: 100%;\n  height: 0.053333rem /* 4/75 */;\n  background-color: #3993ff;\n  left: 0;\n  bottom: 0;\n  -webkit-border-radius: 999px;\n          border-radius: 999px;\n  -webkit-transform: translate3d(0, 0, 0);\n     -moz-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: width 0.3s, -webkit-transform 0.3s;\n  transition: width 0.3s, -webkit-transform 0.3s;\n  -moz-transition: transform 0.3s, width 0.3s, -moz-transform 0.3s;\n  transition: transform 0.3s, width 0.3s;\n  transition: transform 0.3s, width 0.3s, -webkit-transform 0.3s, -moz-transform 0.3s;\n}\n.active_title[_v-b59e3e86] {\n  color: #3993ff;\n}\n.scroll_box[_v-b59e3e86] {\n  -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n  -moz-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n}");
  

});
