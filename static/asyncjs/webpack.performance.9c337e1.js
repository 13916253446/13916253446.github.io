(window.webpackJsonp=window.webpackJsonp||[]).push([["webpack.performance"],{"0JPT":function(s,a,t){"use strict";t.r(a);var n=t("sblz"),e={name:"WebpackPerformance",components:{md:t.n(n).a}},r=t("JFUb");var l=function(s){t("6jHg")},c=Object(r.a)(e,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,l,"data-v-15b6ac4c",null);a.default=c.exports},"6jHg":function(s,a,t){var n=t("WVcm");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("55e31be3",n,!0,{})},"8ybk":function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),e=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h5",{attrs:{id:"1-ya-suo-css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-ya-suo-css","aria-hidden":"true"}},[s._v("¶")]),s._v(" 1. 压缩"),t("code",{pre:!0},[s._v("css")])]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("webpack")]),s._v("内置的压缩，或者是插件压缩，都无法压缩"),t("code",{pre:!0},[s._v("css")]),s._v("内容，因为"),t("strong",[s._v("当你导入css的时候，css-loader是把css内容解析成了字符串，而压缩器是基于AST的，没有办法分析字符串的，所有需要在loader编译阶段就压缩")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-css"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("/* comments.css */")]),s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".comment")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": black;\n}\n")])]),s._v(" "),t("p",[s._v("👇")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("// minified bundle.js (part of)")]),s._v("\nexports="),t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports=__webpack_require__("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")(),\nexports.push(["),t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".i,"),t("span",{attrs:{class:"hljs-string"}},[s._v('".comment {\\r\\n  color: black;\\r\\n}"')]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v('""')]),s._v("]);\n")])]),s._v(" "),t("p",[s._v("所以需要"),t("code",{pre:!0},[s._v("css-loader")]),s._v("来负责压缩")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n      {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("test")]),s._v(": "),t("span",{attrs:{class:"hljs-regexp"}},[s._v("/\\.css$/")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("use")]),s._v(": [\n          "),t("span",{attrs:{class:"hljs-string"}},[s._v("'style-loader'")]),s._v(",\n          { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'css-loader'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("minimize")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(" } },\n        ],\n      },\n    ],\n  },\n};\n")])]),s._v(" "),t("h5",{attrs:{id:"2-she-zhi-process-env-node-env-de-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-she-zhi-process-env-node-env-de-zhi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 2. 设置"),t("code",{pre:!0},[s._v("process.env.NODE_ENV")]),s._v("的值")]),s._v(" "),t("p",[s._v("一些大型的库，针对这个环境变量做了一些操作，比如说"),t("code",{pre:!0},[s._v("Vue")]),s._v("，开发环境多了很多警告")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("// vue/dist/vue.runtime.esm.js")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// …")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (process.env.NODE_ENV !== "),t("span",{attrs:{class:"hljs-string"}},[s._v("'production'")]),s._v(") {\n  warn("),t("span",{attrs:{class:"hljs-string"}},[s._v("'props must be strings when using array syntax.'")]),s._v(");\n}\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// …")]),s._v("\n")])]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("React")]),s._v("根据环境变量加载指定的文件，以及一些警告")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("// react/index.js")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (process.env.NODE_ENV === "),t("span",{attrs:{class:"hljs-string"}},[s._v("'production'")]),s._v(") {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'./cjs/react.production.min.js'")]),s._v(");\n} "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'./cjs/react.development.js'")]),s._v(");\n}\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// react/cjs/react.development.js")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// …")]),s._v("\nwarning$"),t("span",{attrs:{class:"hljs-number"}},[s._v("3")]),s._v("(\n  componentClass.getDefaultProps.isReactClassApproved,\n  "),t("span",{attrs:{class:"hljs-string"}},[s._v("'getDefaultProps is only used on classic React.createClass '")]),s._v(" +\n  "),t("span",{attrs:{class:"hljs-string"}},[s._v("'definitions. Use a static property named `defaultProps` instead.'")]),s._v("\n);\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// …")]),s._v("\n")])]),s._v(" "),t("p",[s._v("在"),t("code",{pre:!0},[s._v("webpack3")]),s._v("中需要"),t("code",{pre:!0},[s._v("DefinePlugin")]),s._v("来定义")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" webpack = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'webpack'")]),s._v(");\n\n"),t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("plugins")]),s._v(": [\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" webpack.DefinePlugin({\n      "),t("span",{attrs:{class:"hljs-string"}},[s._v("'process.env.NODE_ENV'")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'\"production\"'")]),s._v(",\n    }),\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" webpack.optimize.UglifyJsPlugin(),\n  ],\n};\n")])]),s._v(" "),t("p",[s._v("在"),t("code",{pre:!0},[s._v("webpack4")]),s._v("中可以通过"),t("code",{pre:!0},[s._v("optimization.nodeEnv")]),s._v("来定义，如果不定义默认就是"),t("code",{pre:!0},[s._v("mode")]),s._v("的值")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = {\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//...")]),s._v("\n  optimization: {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("nodeEnv")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'production'")]),s._v("\n  }\n};\n")])]),s._v(" "),t("h5",{attrs:{id:"3-tu-pian-ya-suo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-tu-pian-ya-suo","aria-hidden":"true"}},[s._v("¶")]),s._v(" 3. 图片压缩")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/tcoopman/image-webpack-loader"}},[s._v("image-webpack-loader")]),s._v("支持所有格式的图片压缩，特别方便")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("rules")]),s._v(": [\n      {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("test")]),s._v(": "),t("span",{attrs:{class:"hljs-regexp"}},[s._v("/\\.(jpe?g|png|gif|svg)$/")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'image-webpack-loader'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// This will apply the loader before the other ones")]),s._v("\n        enforce: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'pre'")]),s._v(",\n      },\n    ],\n  },\n};\n")])]),s._v(" "),t("h5",{attrs:{id:"4-nei-lian-xiao-de-js-yi-ji-css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#4-nei-lian-xiao-de-js-yi-ji-css","aria-hidden":"true"}},[s._v("¶")]),s._v(" 4. 内联小的"),t("code",{pre:!0},[s._v("js")]),s._v("以及"),t("code",{pre:!0},[s._v("css")])]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("htmlWebpackPlugin")]),s._v("结合"),t("a",{attrs:{href:"https://github.com/DustinJackson/html-webpack-inline-source-plugin"}},[s._v("html-webpack-inline-source-plugin")]),s._v("插件，内联"),t("code",{pre:!0},[s._v("js")]),s._v("以及"),t("code",{pre:!0},[s._v("css")])]),s._v(" "),t("p",[s._v("例如：内联"),t("code",{pre:!0},[s._v("runtime")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("// webpack.config.js")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" HtmlWebpackPlugin = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'html-webpack-plugin'")]),s._v(");\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" InlineSourcePlugin = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'html-webpack-inline-source-plugin'")]),s._v(");\n\n"),t("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("plugins")]),s._v(": [\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" HtmlWebpackPlugin({\n      "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// Inline all files which names start with “runtime~” and end with “.js”.")]),s._v("\n      "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// That’s the default naming of runtime chunks")]),s._v("\n      inlineSource: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'runtime~.+\\\\.js'")]),s._v(",\n    }),\n    "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// This plugin enables the “inlineSource” option")]),s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" InlineSourcePlugin(),\n  ],\n};\n")])])])}],!1,null,null,null);a.default=e.exports},WVcm:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},sblz:function(s,a,t){s.exports=t("8ybk")}}]);