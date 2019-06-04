(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"+LUo":function(s,a,t){"use strict";t.r(a);var n=t("8uzf"),r={name:"PerformancePerformanceFunctions",components:{md:t.n(n).a}},l=t("JFUb");var e=function(s){t("WoBw")},c=Object(l.a)(r,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,e,"data-v-91c872c8",null);a.default=c.exports},"8uzf":function(s,a,t){s.exports=t("CQ/y")},"CQ/y":function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),r=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h4",{attrs:{id:"ji-ge-gao-xing-neng-han-shu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ge-gao-xing-neng-han-shu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 几个高性能函数")]),s._v(" "),t("ul",[t("li",[s._v("节流函数")]),s._v(" "),t("li",[s._v("防抖函数")]),s._v(" "),t("li",[s._v("分时函数")]),s._v(" "),t("li",[s._v("惰性函数")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("主要说一下"),t("strong",[s._v("分时函数")]),s._v(":我们创建一个函数，然节点的添加分时进行，比如把在1s添加1000个节点改为每隔200ms添加20个节点。")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" timeChunk = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}},[s._v("data, fn, count = "),t("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(", delay = "),t("span",{attrs:{class:"hljs-number"}},[s._v("200")])]),s._v(") ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" obj,timer\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" start = "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v("("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".min(count, data.length); i++) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" obj = data.shift()\n            fn(obj)\n        }\n    }\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n        timer = setInterval("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(data.length === "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(") {\n                "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" clearInterval(timer)\n            }\n            start()\n        }, delay)\n    }\n}\n")])]),s._v(" "),t("h3",{attrs:{id:"can-kao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考:")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c78d6dde51d453ecd049a4b"}},[s._v("如何使用函数来优化性能")])])])])}],!1,null,null,null);a.default=r.exports},WoBw:function(s,a,t){var n=t("eyyS");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("41055252",n,!0,{})},eyyS:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])}}]);