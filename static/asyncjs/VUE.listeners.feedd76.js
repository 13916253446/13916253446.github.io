(window.webpackJsonp=window.webpackJsonp||[]).push([["VUE.listeners"],{"6nXB":function(s,a,t){var n=t("Tc7F");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("7d81a1b6",n,!0,{})},MqsB:function(s,a,t){"use strict";t.r(a);var n=t("fsBc"),l={name:"VUEListeners",components:{md:t.n(n).a}},v=t("JFUb");var _=function(s){t("6nXB")},r=Object(v.a)(l,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,_,"data-v-1504414c",null);a.default=r.exports},Tc7F:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},fsBc:function(s,a,t){s.exports=t("jFlv")},jFlv:function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),l=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",{attrs:{id:"duo-ge-shi-jian-de-bang-ding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duo-ge-shi-jian-de-bang-ding","aria-hidden":"true"}},[s._v("¶")]),s._v(" 多个事件的绑定")]),s._v(" "),t("p",[s._v("比如说包装了一个input组件，但是这个组件可能分发各种类型的事件：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"wrapper-comp"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("My Label"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v("\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@focus")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"$emit('focus')\"")]),s._v("\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"$emit('click')\"")]),s._v("\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@blur")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"$emit('blur')\"")]),s._v("\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@hover")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"$emit('hover')\"")]),s._v("\n        />")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("为了减少代码量，我们可以通过"),t("code",{pre:!0},[s._v("$listeners")]),s._v("直接绑定事件：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"wrapper-comp"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("My Label"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("label")]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-on")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"$listeners"')]),s._v(" />")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("原理就是："),t("code",{pre:!0},[s._v("v-on")]),s._v("可以绑定一个监听器键值对的对象，这样绑定相当于发生了绑定的事件后，会直接调用监听器值的方法，而不是通过提交("),t("code",{pre:!0},[s._v("$emit")]),s._v(")的方式")]),s._v(" "),t("h3",{attrs:{id:"zi-zu-jian-diao-yong-fu-zu-jian-bang-ding-de-shi-jian-bing-jie-shou-fan-hui-de-can-shu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-zu-jian-diao-yong-fu-zu-jian-bang-ding-de-shi-jian-bing-jie-shou-fan-hui-de-can-shu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 子组件调用父组件绑定的事件并接收返回的参数")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[s._v("// parent.vue\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("child")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@test")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"clickHander"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("child")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    clickHander (val) {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" val * "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("通过"),t("code",{pre:!0},[s._v("$emit")]),s._v("的方式是不能拿到返回值的，因为"),t("code",{pre:!0},[s._v("$emit")]),s._v("相当于是分发一个事件，父组件有一个监听事件，是个异步操作，是不能返回值")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"handler"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    handler () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),t("span",{attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("但是通过"),t("code",{pre:!0},[s._v("$listeners")]),s._v("对象拿到绑定的事件的方法，直接调用，就可能拿到返回值了")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"handler"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    handler () {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" { test } = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$listeners || {}\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (test) test()\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])}],!1,null,null,null);a.default=l.exports}}]);