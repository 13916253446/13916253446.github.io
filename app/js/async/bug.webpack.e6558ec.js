(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"/xWl":function(s,a,e){"use strict";e.r(a);var t=e("QIFB"),n={name:"BugWebpack",components:{md:e.n(t).a}},v=e("JFUb");var r=function(s){e("TgDK")},l=Object(v.a)(n,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,r,"data-v-06523408",null);a.default=l.exports},"7KBI":function(s,a,e){"use strict";e.r(a);var t=e("JFUb"),n=Object(t.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("section",[e("p",[s._v("#  "),e("code",{pre:!0},[s._v("babel-loader")]),s._v("不编译"),e("code",{pre:!0},[s._v("node_modules")]),s._v("下面的"),e("code",{pre:!0},[s._v("ES6")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("通过配置"),e("code",{pre:!0},[s._v("configFile")]),s._v("来指定"),e("code",{pre:!0},[s._v("babel.config.js")]),s._v("配置项，而不是"),e("code",{pre:!0},[s._v(".babelrc")]),s._v("文件")]),s._v(" "),e("p",[e("code",{pre:!0},[s._v("babel7")]),s._v("默认的编译顺序，是寻找文件最近的"),e("code",{pre:!0},[s._v(".babelrc")]),s._v("配置来编译"),e("a",{attrs:{href:"https://babeljs.io/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages"}},[s._v("babel解释")])]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-javascript"}},[s._v("project\n└── .babelrc "),e("span",{attrs:{class:"hljs-comment"}},[s._v("// 最近的文件")]),s._v("\n└── a.js\n└── node_modules\n    └── package\n        └── .babelrc "),e("span",{attrs:{class:"hljs-comment"}},[s._v("// 最近的文件")]),s._v("\n        └── b.js\n")])])]),s._v(" "),e("li",[e("p",[s._v("设置"),e("code",{pre:!0},[s._v("webpack")]),s._v("读取"),e("code",{pre:!0},[s._v("npm")]),s._v("包的时候，不从"),e("code",{pre:!0},[s._v("module")]),s._v("指向去解析，而是从"),e("code",{pre:!0},[s._v("main")]),s._v("指向去解析文件")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-javascript"}},[s._v("resolve: {\n "),e("span",{attrs:{class:"hljs-attr"}},[s._v("mainFields")]),s._v(": ["),e("span",{attrs:{class:"hljs-string"}},[s._v("'browser'")]),s._v(", "),e("span",{attrs:{class:"hljs-string"}},[s._v("'main'")]),s._v("]\n}\n"),e("span",{attrs:{class:"hljs-comment"}},[s._v("// 默认是")]),s._v("\nresolve: {\n "),e("span",{attrs:{class:"hljs-attr"}},[s._v("mainFields")]),s._v(": ["),e("span",{attrs:{class:"hljs-string"}},[s._v("'browser'")]),s._v(", "),e("span",{attrs:{class:"hljs-string"}},[s._v("'module'")]),s._v(", "),e("span",{attrs:{class:"hljs-string"}},[s._v("'main'")]),s._v("]\n}\n")])])]),s._v(" "),e("li",[e("p",[s._v("设置"),e("code",{pre:!0},[s._v("alias")])]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-javascript"}},[e("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" alias = {\n  "),e("span",{attrs:{class:"hljs-string"}},[s._v("'vue$'")]),s._v(": "),e("span",{attrs:{class:"hljs-string"}},[s._v("'vue/dist/vue.esm.js'")]),s._v(",\n  "),e("span",{attrs:{class:"hljs-string"}},[s._v("'vuex$'")]),s._v(": "),e("span",{attrs:{class:"hljs-string"}},[s._v("'vuex/dist/vuex.esm.js'")]),s._v(",\n  "),e("span",{attrs:{class:"hljs-string"}},[s._v("'vue-router$'")]),s._v(": "),e("span",{attrs:{class:"hljs-string"}},[s._v("'vue-router/dist/vue-router.esm.js'")]),s._v(",\n  "),e("span",{attrs:{class:"hljs-comment"}},[s._v("//? 站点根节点的别名")]),s._v("\n  "),e("span",{attrs:{class:"hljs-string"}},[s._v("'@'")]),s._v(": path.resolve(__dirname, "),e("span",{attrs:{class:"hljs-string"}},[s._v("'../src'")]),s._v("),\n  "),e("span",{attrs:{class:"hljs-comment"}},[s._v("//? 整个项目公共目录")]),s._v("\n  "),e("span",{attrs:{class:"hljs-string"}},[s._v("'common'")]),s._v(": path.resolve(__dirname, "),e("span",{attrs:{class:"hljs-string"}},[s._v("'../common'")]),s._v(")\n}\n")])])])]),s._v(" "),e("h1",[e("code",{pre:!0},[s._v("vw")]),s._v("适配方案")]),s._v(" "),e("ul",[e("li",[s._v("要求边框是2两个像素，当转换成"),e("code",{pre:!0},[s._v("vw")]),s._v("的时候，就是"),e("strong",[s._v("0.266667vw")]),s._v("，在安卓手机上面360px的手机上面就是0.97px没有1个像素就显示不出来")])])])}],!1,null,null,null);a.default=n.exports},QIFB:function(s,a,e){s.exports=e("7KBI")},TgDK:function(s,a,e){var t=e("aef6");"string"==typeof t&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);(0,e("SZ7m").default)("32f29eac",t,!0,{})},aef6:function(s,a,e){(s.exports=e("I1BE")(!1)).push([s.i,"",""])}}]);