(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"/9zg":function(s,a,t){s.exports=t("cjai")},cjai:function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),v=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("组件捕获事件里面追加局部变量")]),s._v(" "),t("p",[s._v("父组件捕获子组件提交的"),t("code",{pre:!0},[s._v("refresh")]),s._v("事件,这个事件也一并传递两个参数,此时父组件是个"),t("code",{pre:!0},[s._v("for")]),s._v("循环组件,需要拿到当前"),t("code",{pre:!0},[s._v("index")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("子组件")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),t("span",{attrs:{class:"hljs-string"}},[s._v("'refresh'")]),s._v(", { "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(":  "),t("span",{attrs:{class:"hljs-string"}},[s._v("'崔海峰'")]),s._v(" })\n")])])]),s._v(" "),t("li",[t("p",[s._v("父组件")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v("  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(item, index) in array]"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("child")]),s._v("  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@refresh")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"refresh(index)"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("child")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),t("h4",{attrs:{id:"jie-jue-fang-an"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jie-jue-fang-an","aria-hidden":"true"}},[s._v("¶")]),s._v(" 解决方案")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("父组件捕获事件自定义一个事件，然后调用父组件内部的方法")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v("  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(item, index) in array]"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("child")]),s._v("  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@refresh")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"(model) => { refresh(model, index) }"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("child")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n")])])])]),s._v(" "),t("h1",[s._v("父子组件双向数据流便捷方式")]),s._v(" "),t("p",[s._v("子组件会因为父组件传递过来的值，初始化显示，然后子组件又存在操作行为，又要把这个值提交给父组件")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("默认情况下，我们会在子组件重新定义一个变量，子组件创建的时候，把传递进来的值，赋值给这个变量，然后监听这个变量的变化，分发事件把值再传递给父组件")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("// child.vue")]),s._v("\n<template>\n  "),t("span",{attrs:{class:"xml"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")])]),s._v("\n\n<script>\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": {}\n  },\n  data() {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n    }\n  },\n  created() {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".name\n  },\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n    value (val) {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),t("span",{attrs:{class:"hljs-string"}},[s._v("'update:name'")]),s._v(", val)\n    }\n  },\n}\n<"),t("span",{attrs:{class:"hljs-regexp"}},[s._v("/script>\n")])])])])]),s._v(" "),t("p",[s._v("这样就会有很多问题：比如子组件的显示与隐藏并不是通过"),t("code",{pre:!0},[s._v("v-if")]),s._v("来控制，而是通过"),t("code",{pre:!0},[s._v("v-show")]),s._v("来控制的，当父组件改变了"),t("code",{pre:!0},[s._v("name")]),s._v("的值，再次显示子组件的时候初始值就有可能不对")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("最简单有效的方式："),t("code",{pre:!0},[s._v("computed")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("<template>\n  "),t("span",{attrs:{class:"xml"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("input")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")])]),s._v("\n\n<script>\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": {}\n  },\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": {\n      set (val) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$emit("),t("span",{attrs:{class:"hljs-string"}},[s._v("'update:name'")]),s._v(", val)\n      },\n      get () {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".name\n      }\n    }\n  },\n}\n<"),t("span",{attrs:{class:"hljs-regexp"}},[s._v("/script>\n\n")])])])])]),s._v(" "),t("p",[s._v("通过计算属性的"),t("code",{pre:!0},[s._v("get")]),s._v("以及"),t("code",{pre:!0},[s._v("set")]),s._v("方法，无论在什么情况都能初始化值以及提交子组件的值")]),s._v(" "),t("h1",[s._v("自定义插件里面的上下文")]),s._v(" "),t("p",[s._v("默认自定义插件里面的函数是读取不到"),t("code",{pre:!0},[s._v("this")]),s._v("的，"),t("code",{pre:!0},[s._v("this")]),s._v("是"),t("code",{pre:!0},[s._v("undefined")]),s._v("，但是可以通过虚拟"),t("code",{pre:!0},[s._v("DOM")]),s._v("获取")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("Vue.directive("),t("span",{attrs:{class:"hljs-string"}},[s._v("'report'")]),s._v(", {\n    bind (el, binding, vnode) {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(" "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// undefined")]),s._v("\n        vnode.context "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//当前使用这个指令的组件的上下文")]),s._v("\n    }\n})\n")])])])}],!1,null,null,null);a.default=v.exports},"ktW/":function(s,a,t){var n=t("wwrb");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("60dbd984",n,!0,{})},wwrb:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},wz4z:function(s,a,t){"use strict";t.r(a);var n=t("/9zg"),v={name:"VUESkill",components:{md:t.n(n).a}},l=t("JFUb");var r=function(s){t("ktW/")},_=Object(l.a)(v,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,r,"data-v-09455b0c",null);a.default=_.exports}}]);