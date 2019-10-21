(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"5YFZ":function(s,a,e){s.exports=e("mTi3")},mTi3:function(s,a,e){"use strict";e.r(a);var t=e("JFUb"),n=Object(t.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("section",[e("h3",{attrs:{id:"ru-he-diao-shi-vue-mo-ban"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ru-he-diao-shi-vue-mo-ban","aria-hidden":"true"}},[s._v("¶")]),s._v(" 如何调试"),e("code",{pre:!0},[s._v("Vue")]),s._v("模板")]),s._v(" "),e("p",[s._v("说明:")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-HTML"}},[e("span",{attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("{{ console.log(message) }}"),e("span",{attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"warning"},[e("p",[s._v("在"),e("code",{pre:!0},[s._v("Vue")]),s._v("模板中使用的属性和方法，都会从"),e("code",{pre:!0},[s._v("Vue")]),s._v("的原型上面寻找，而不是"),e("code",{pre:!0},[s._v("window")]),s._v("或者是别的，所以这段代码会报错。")])]),s._v(" "),e("h4",{attrs:{id:"1-console-gua-zai-dao-yuan-xing-shang-mian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1-console-gua-zai-dao-yuan-xing-shang-mian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 1、"),e("code",{pre:!0},[s._v("console")]),s._v("挂载到原型上面")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-javascript"}},[s._v("Vue.prototype.$log = "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log\n")])]),s._v(" "),e("div",{staticClass:"tip"},[e("p",[s._v("为了不影响正常的渲染，可以使用或运算符")])]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-HTML"}},[e("span",{attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("{{ $log(message) || message }}"),e("span",{attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n")])]),s._v(" "),e("h4",{attrs:{id:"2-debugger-diao-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#2-debugger-diao-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 2、"),e("code",{pre:!0},[s._v("debugger")]),s._v("调试")]),s._v(" "),e("p",[s._v("说明:")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-HTML"}},[e("span",{attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("{{ $debugger }}"),e("span",{attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/content_debugger.png",alt:"vue debugger"}})]),s._v(" "),e("div",{staticClass:"warning"},[e("p",[s._v("这样调试器会进到这个断点这里，根本无法调试当前上下文")])]),s._v(" "),e("p",[s._v("那么我们应该怎么做呢:")]),s._v(" "),e("div",{staticClass:"tip"},[e("p",[s._v("我们可以使用一个小技巧，将调试器放在一个**立即调用的函数表达式("),e("code",{pre:!0},[s._v("IIFE")]),s._v(")**里面")])]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-HTML"}},[e("span",{attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("{{ (function(){ debugger })() }}"),e("span",{attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/vue_debugger.png",alt:"vue debugger"}})]),s._v(" "),e("div",{staticClass:"warning"},[e("p",[s._v("但是这也有个问题，断点进入之后，由于是个闭包，所以并不能调试当前组件的实例("),e("code",{pre:!0},[s._v("_vm")]),s._v(")")])]),s._v(" "),e("p",[s._v("所以我们可以这样:")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-HTML"}},[e("span",{attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("{{ (function() { debugger; message })(); || message }}"),e("span",{attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{attrs:{class:"hljs-name"}},[s._v("h1")]),s._v(">")]),s._v("\n")])]),s._v(" "),e("p",[s._v("这样就可以调试"),e("code",{pre:!0},[s._v("message")]),s._v("以及当前"),e("code",{pre:!0},[s._v("vue")]),s._v("实例")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/vue_debugger2.png",alt:"vue debugger"}})])])}],!1,null,null,null);a.default=n.exports},n7Fi:function(s,a,e){(s.exports=e("I1BE")(!1)).push([s.i,"",""])},p6Ib:function(s,a,e){var t=e("n7Fi");"string"==typeof t&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);(0,e("SZ7m").default)("cc9cf6b0",t,!0,{})},yLws:function(s,a,e){"use strict";e.r(a);var t=e("5YFZ"),n={name:"VUEDebuggerTemplate",components:{md:e.n(t).a}},v=e("JFUb");var r=function(s){e("p6Ib")},_=Object(v.a)(n,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,r,"data-v-3ba339dc",null);a.default=_.exports}}]);