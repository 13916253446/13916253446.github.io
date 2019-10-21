(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{ASkW:function(s,t,a){"use strict";a.r(t);var e=a("DUwT"),r={name:"TypescriptTsd",components:{md:a.n(e).a}},n=a("JFUb");var v=function(s){a("nuSR")},l=Object(n.a)(r,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,v,"data-v-773b7a86",null);t.default=l.exports},DUwT:function(s,t,a){s.exports=a("pHMM")},E9YD:function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"",""])},nuSR:function(s,t,a){var e=a("E9YD");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);(0,a("SZ7m").default)("72cc1124",e,!0,{})},pHMM:function(s,t,a){"use strict";a.r(t);var e=a("JFUb"),r=Object(e.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h3",{attrs:{id:"tuo-zhan-shen-ming-wen-jian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuo-zhan-shen-ming-wen-jian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 拓展申明文件")]),s._v(" "),a("p",[s._v("虽然JavaScript不支持合并，但你可以为导入的对象打补丁以更新它们。")]),s._v(" "),a("h4",{attrs:{id:"quan-ju-tuo-zhan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quan-ju-tuo-zhan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 全局拓展")]),s._v(" "),a("p",[s._v("全局拓展通过"),a("code",{pre:!0},[s._v("global")]),s._v("来申明")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-typescript"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("// 任意一个.d.ts文件")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("declare")]),s._v(" global {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" maxNum: "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("\n}\n")])]),s._v(" "),a("div",{staticClass:"success"},[a("p",[s._v("最新的"),a("code",{pre:!0},[s._v("typescript")]),s._v("(3.6+)好像不再支持"),a("code",{pre:!0},[s._v("global")])])]),s._v(" "),a("p",[s._v("直接申明全局拓展")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-typescript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("declare")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" maxNum: "),a("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("\n")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/13916253446/assets/master/public/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-09-24%20%E4%B8%8B%E5%8D%888.oqgud17low8.25.57%20(1).png",alt:"tsd"}})]),s._v(" "),a("h4",{attrs:{id:"mo-kuai-tuo-zhan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mo-kuai-tuo-zhan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 模块拓展")]),s._v(" "),a("p",[s._v("可以拓展内部自定义模块以及外部模块比如"),a("code",{pre:!0},[s._v("Vue")])]),s._v(" "),a("ul",[a("li",[s._v("拓展外部模块")])]),s._v(" "),a("p",[s._v("比如增加"),a("code",{pre:!0},[s._v("Vue")]),s._v("的根实例上面增加一个"),a("code",{pre:!0},[s._v("$get")]),s._v("的请求方法")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-typescript"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("// 1. 确保在声明补充的类型之前导入 'vue'")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 2. 找到要拓展的模块的路径(Vue构造函数类型在types/vue.d.ts里)")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("declare")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("module")]),s._v(" 'vue/types/vue' {\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 3. 声明为 Vue 补充的东西")]),s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("interface")]),s._v(" Vue {\n    "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/**\n     * get请求\n     * @param  {string} _mt 请求标识符\n     * @returns Promise 异步函数\n     */")]),s._v("\n    $"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("get")]),s._v("(_mt: "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("string")]),s._v("): "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("<object>\n  }\n}\n")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/13916253446/assets/master/public/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-09-24%20%E4%B8%8B%E5%8D%888.jkiunartchq.51.57%20(1).png",alt:"tsd"}})]),s._v(" "),a("ul",[a("li",[s._v("拓展内部自定义模块")])]),s._v(" "),a("p",[s._v("通过模块导入"),a("code",{pre:!0},[s._v("import")]),s._v("或者"),a("code",{pre:!0},[s._v("require")]),s._v("的方式使用的模块,可以有两种方式来申明文件。")]),s._v(" "),a("p",[s._v("1、在相应的模块文件夹下建立同名的"),a("code",{pre:!0},[s._v(".d.ts")]),s._v("文件来申明")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-typescript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { NativeGoBack } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'@/libs/util.native.js'")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("// @/libs目录下的util.native.d.ts文件")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("declare")]),s._v(" "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("NativeGoBack")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}}),s._v(") => "),a("span",{attrs:{class:"hljs-title"}},[s._v("void")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"warning"},[a("p",[s._v("无论在任何位置的"),a("code",{pre:!0},[s._v(".ts")]),s._v("以及"),a("code",{pre:!0},[s._v(".d.ts")]),s._v("文件内没有使用"),a("code",{pre:!0},[s._v("export")]),s._v("申明"),a("code",{pre:!0},[s._v("declare")]),s._v("的类型都将是"),a("strong",[s._v("全局的")])])]),s._v(" "),a("p",[s._v("2、通过"),a("code",{pre:!0},[s._v("module")]),s._v("来申明")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-typescript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("declare")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("module")]),s._v(" '@/libs/util.native' {\n    "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("NativeGoBack")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}}),s._v(") => "),a("span",{attrs:{class:"hljs-title"}},[s._v("void")]),s._v("\n}\n")])])]),s._v(" "),a("h2",{attrs:{id:"can-kao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.tslang.cn/docs/handbook/declaration-merging.html"}},[s._v("申明合并")])])])])}],!1,null,null,null);t.default=r.exports}}]);