(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{HeFF:function(e,t,n){e.exports=n("J9UU")},J9UU:function(e,t,n){"use strict";n.r(t);var r=n("JFUb"),s=Object(r.a)(null,function(){var e=this;e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h1",[e._v("promise catch")]),e._v(" "),n("p",[e._v("当代码中的 "),n("code",{pre:!0},[e._v("promise reject")]),e._v(" 的时候，"),n("code",{pre:!0},[e._v("onerror")]),e._v(" 是捕获不到异常的。对于"),n("code",{pre:!0},[e._v("promise reject")]),e._v(" 的异常，除了对每个用到 "),n("code",{pre:!0},[e._v("promise")]),e._v(" 的地方都加上 "),n("code",{pre:!0},[e._v("catch")]),e._v(" 之外，我们还应该在全局环境下进行一个兜底。")]),e._v(" "),n("p",[e._v("我们可以监听全局 "),n("code",{pre:!0},[e._v("unhandledrejection")]),e._v(" 事件：")]),e._v(" "),n("pre",{pre:!0},[n("code",{attrs:{class:"hljs language-javascript"}},[n("span",{attrs:{class:"hljs-built_in"}},[e._v("window")]),e._v(".addEventListener("),n("span",{attrs:{class:"hljs-string"}},[e._v("'unhandledrejection'")]),e._v(", (e) => {\n  "),n("span",{attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log(e)\n})\n")])]),e._v(" "),n("p",[e._v("如果要阻止异常输出到控制台上，可以加上 "),n("code",{pre:!0},[e._v("e.preventDefault()")]),e._v("。")])])}],!1,null,null,null);t.default=s.exports},JH4J:function(e,t,n){var r=n("wT7M");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("08564edc",r,!0,{})},wT7M:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"",""])},"y+5/":function(e,t,n){"use strict";n.r(t);var r=n("HeFF"),s={name:"JavascriptErrorCollect",components:{md:n.n(r).a}},c=n("JFUb");var a=function(e){n("JH4J")},o=Object(c.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("md")],1)},[],!1,a,"data-v-813781b8",null);t.default=o.exports}}]);