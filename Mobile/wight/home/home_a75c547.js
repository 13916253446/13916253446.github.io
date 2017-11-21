define('Mobile/wight/home/home.vue', function(require, exports, module) {

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
      props:{
          model:{
              type:Object,
              default:{}
          }
      },
      data: function() {
          return {
              pageCount: 10, //每页条数
              articalModel: [],
              haveData: true, //标志是否还有数据                
          }
      },
      created: function() {
          //初始化数据           
          this.getData();
      },
      watch: {
          //监听文章列表变化
          "articalModel": function() {
              this.$nextTick(function() {
                  this.scroll.refresh();
              });
          }
      },
      mounted: function() {         
          this.$nextTick(function() {
              this.scroll = new BScroll(this.$refs.scroll, {
                  click: true,
                  probeType: 3,
                  pullUpLoad: {
                      threshold: -80*parseInt(document.querySelector("html").dataset.dpr||0),
                  },                   
              });
              //监听上拉加载事件
              this.scroll.on("pullingUp", function() { 
                   if(this.haveData){
                       this.getData(function(){
                          this.scroll.finishPullUp();   
                       }.bind(this));
                   }                                     
              }.bind(this));
              //加载markdown脚本
              require.loadJs(this.$store.state.markdown_js_url);
              require.loadJs(this.$store.state.light_js_url);   
              require.loadCss({url:this.$store.state.markdown_css_url});              
          });
      },
      methods: {
          //分页获取数据
          getData: function(callback) {               
              var current = this;
              var ArticalDetail = Bmob.Object.extend("ArticalDetail");
              var query = new Bmob.Query(ArticalDetail);              
              if(this.model.objectId!="1993"){
                  query.equalTo("ArticalTypeId", this.model.TypeId);
              }
              query.limit(this.pageCount); //返回条数
              query.skip(this.articalModel.length || 0); //跳出多少条数据
              query.descending("updatedAt"); //按照时间排序              
              query.find({
                  success: function(results) {
                      current.haveData = results.length >= current.pageCount;
                      JSON.parse(JSON.stringify(results)).map(function(item) {
                          current.articalModel.push(item);
                      });
                      if(callback) callback();
                  },
                  error: function(error) {
                      current.haveData = false;
                  }
              });
          },
          //查看文章
          viewArtical:function(parrams){
              var model=parrams.item;
              this.$store.state.articalModel=model;
              this.$router.push({path:"/detail"});
          }            
      }
  }
  
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"scroll",staticClass:"current_wrappers"},[_c('div',{staticClass:"current_scroll_box"},_vm._l((_vm.articalModel),function(item){return _c('div',{directives:[{name:"tap",rawName:"v-tap",value:({methods:_vm.viewArtical,item:item}),expression:"{methods:viewArtical,item:item}"}],staticClass:"artical_item"},[_c('div',{staticClass:"row_line"}),_vm._v(" "),_c('div',{staticClass:"artical_content_wrapper"},[_c('div',{staticClass:"row_wrapper row_vcenter"},[_c('img',{staticClass:"admin_icon",attrs:{"src":'../../../resource/img/common/advance.jpg',"alt":""}}),_vm._v(" "),_c('div',{staticClass:"small_font admin_name row_full"},[_vm._v(" 小崔")]),_vm._v(" "),_c('div',{staticClass:"small_font artical_type"},[_vm._v(_vm._s(item.ArticalTypeName))])]),_vm._v(" "),_c('div',{staticClass:"artical_title"},[_vm._v(_vm._s(item.ArticalTitle))]),_vm._v(" "),_c('div',{staticClass:"artical_detail small_font"},[_vm._v(_vm._s(item.Introduction))])]),_vm._v(" "),_c('div',{staticClass:"row_line"})])}))])}
  __vue__options__.staticRenderFns =[]
  __vue__options__._scopeId = "_v-b466f56c"
  
  ;(function insertCSS(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)})(".current_wrappers[_v-b466f56c] {\n  height: 100%;\n}\n.current_scroll_box[_v-b466f56c] {\n  min-height: 100%;\n  padding: 0 0 0.266667rem /* 20/75 */;\n}\n.artical_item[_v-b466f56c] {\n  background-color: #fff;\n  margin-top: 0.266667rem /* 20/75 */;\n}\n.artical_content_wrapper[_v-b466f56c] {\n  min-height: 0.666667rem /* 50/75 */;\n  padding: 0.266667rem /* 20/75 */ 0.2rem /* 15/75 */;\n}\n.row_line[_v-b466f56c] {\n  height: 1px;\n  background-color: #eee;\n}\n.admin_icon[_v-b466f56c] {\n  width: 0.8rem /* 60/75 */;\n  height: 0.8rem /* 60/75 */;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n}\n.admin_name[_v-b466f56c] {\n  color: #666;\n}\n.artical_title[_v-b466f56c] {\n  color: #333;\n  margin: 0.133333rem /* 10/75 */ 0;\n}\n.artical_detail[_v-b466f56c] {\n  color: #999;\n}\n.artical_type[_v-b466f56c] {\n  color: #999;\n}");
  

});
