(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"1jIi":function(s,a,t){"use strict";t.r(a);var r=t("FGMD"),n={name:"ToolsWebpackErrors",components:{md:t.n(r).a}},e=t("JFUb");var l=function(s){t("CsJp")},v=Object(e.a)(n,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,l,"data-v-c726fe54",null);a.default=v.exports},"7A/o":function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},CsJp:function(s,a,t){var r=t("7A/o");"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);(0,t("SZ7m").default)("1c11b906",r,!0,{})},FGMD:function(s,a,t){s.exports=t("GYif")},GYif:function(s,a,t){"use strict";t.r(a);var r=t("JFUb"),n=Object(r.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("一些要在"),t("code",{pre:!0},[s._v("html")]),s._v("里面做些事情的插件要放在"),t("code",{pre:!0},[s._v("html-webpack-plugin")]),s._v("之后")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-powershell"}},[s._v("TypeError: Cannot read property "),t("span",{attrs:{class:"hljs-string"}},[s._v("'tapPromise'")]),s._v(" of undefined\n    at compiler.hooks.compilation.tap.compilation\n")])]),s._v(" "),t("p",[s._v("比如"),t("code",{pre:!0},[s._v("add-asset-html-webpack-plugin")]),s._v("插件就要放在"),t("code",{pre:!0},[s._v("html-webpack-plugin")]),s._v("之后")]),s._v(" "),t("h1",[t("code",{pre:!0},[s._v("dll")]),s._v("编译出来的文件运行起来报错")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("vendor is "),t("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v("\n")])]),s._v(" "),t("p",[s._v("这是因为所有编译出来的脚本可以有多种规范("),t("strong",[s._v("libraryTarget")]),s._v(")："),t("code",{pre:!0},[s._v("var")]),s._v("， 'commonjs2'")]),s._v(" "),t("p",[s._v("那么要在"),t("code",{pre:!0},[s._v("dll")]),s._v("配置里面设置输出规范")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("output: {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("path")]),s._v(": path.join(__dirname, "),t("span",{attrs:{class:"hljs-string"}},[s._v("'../'")]),s._v("),\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("filename")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'[name].js'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pathinfo")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("library")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'[name]_dll'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("libraryTarget")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"var"')]),s._v("\n}\n")])]),s._v(" "),t("p",[s._v("然后要在"),t("code",{pre:!0},[s._v("DllReferencePlugin")]),s._v("里面设置接收哪种规范")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" webpack.DllReferencePlugin({\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("context")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'..'")]),s._v(",\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("manifest")]),s._v(": "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'../dll-manifest.json'")]),s._v("),\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("sourceType")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'var'")]),s._v("\n})\n")])])])}],!1,null,null,null);a.default=n.exports}}]);