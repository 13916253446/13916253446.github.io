(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{MJ5U:function(s,t,a){s.exports=a("ZflW")},PNMK:function(s,t,a){var l=a("oJvs");"string"==typeof l&&(l=[[s.i,l,""]]),l.locals&&(s.exports=l.locals);(0,a("SZ7m").default)("3577ba0c",l,!0,{})},Q6a2:function(s,t,a){"use strict";a.r(t);var l=a("MJ5U"),n={name:"VUESetTitle",components:{md:a.n(l).a}},e=a("JFUb");var r=function(s){a("PNMK")},v=Object(e.a)(n,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,r,"data-v-601d0266",null);t.default=v.exports},ZflW:function(s,t,a){"use strict";a.r(t);var l=a("JFUb"),n=Object(l.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("ol",[a("li",[s._v("可以设置全局指令")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("Vue.directive("),a("span",{attrs:{class:"hljs-string"}},[s._v("'title'")]),s._v(", {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("inserted")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}},[s._v("el, binding")]),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".title = el.innerText\n    el.remove()\n  }\n})\n")])]),s._v(" "),a("p",[s._v("路由组件内部使用：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-HTML"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-title")]),s._v(">")]),s._v("标题内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("可以通过抽象组件")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'title'")]),s._v(",\n  render () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" { text } = ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$slots.default && "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$slots.default["),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]) || {}\n    "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".title = text\n  }\n}\n")])]),s._v(" "),a("p",[s._v("组件内部使用：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-HTML"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("标题内容"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("\n")])])])}],!1,null,null,null);t.default=n.exports},oJvs:function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"",""])}}]);