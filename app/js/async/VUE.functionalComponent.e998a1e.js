(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{AqNP:function(s,t,a){"use strict";a.r(t);var e=a("JFUb"),n=Object(e.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h4",{attrs:{id:"han-shu-shi-zu-jian-te-dian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#han-shu-shi-zu-jian-te-dian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 函数式组件特点：")]),s._v(" "),a("ul",[a("li",[s._v("组件不会被实例化，也就是说没有"),a("code",{pre:!0},[s._v("this")]),s._v("可以访问")])]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("不会被实例化，也就不会分配"),a("code",{pre:!0},[s._v("getter,setter")]),s._v("方法，也就不会分配多余的内存空间，从而性能得到一定的提高")])]),s._v(" "),a("ul",[a("li",[s._v("没有状态("),a("code",{pre:!0},[s._v("data,computed")]),s._v(")，没有生命周期")])]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("所谓函数式组件就只是一个"),a("strong",[s._v("接收参数的函数")])])]),s._v(" "),a("ul",[a("li",[s._v("只能访问传入的参数比如:"),a("code",{pre:!0},[s._v("props")]),s._v(","),a("code",{pre:!0},[s._v("listeners")]),s._v(","),a("code",{pre:!0},[s._v("injections")]),s._v(","),a("code",{pre:!0},[s._v("slots")])])]),s._v(" "),a("h4",{attrs:{id:"ru-he-shi-yong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ru-he-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 如何使用")]),s._v(" "),a("ol",[a("li",[s._v("通过"),a("code",{pre:!0},[s._v("functional")]),s._v("申明为"),a("code",{pre:!0},[s._v("true")])])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("Vue.component("),a("span",{attrs:{class:"hljs-string"}},[s._v("'my-component'")]),s._v(", {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("functional")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// Props 可选")]),s._v("\n  props: {\n  },\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 为了弥补缺少的实例")]),s._v("\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 提供第二个参数作为上下文")]),s._v("\n  render: "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}},[s._v("createElement, context")]),s._v(") ")]),s._v("{\n  }\n})\n")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("基于"),a("strong",[s._v("模板")]),s._v("来申明")])]),s._v(" "),a("div",{staticClass:"warning"},[a("p",[s._v("在 2.5.0 及以上版本中，可以这样申明")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-HTML"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("functional")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h4",{attrs:{id:"ke-yi-fang-wen-de-shu-ju"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ke-yi-fang-wen-de-shu-ju","aria-hidden":"true"}},[s._v("¶")]),s._v(" 可以访问的数据")]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("组件需要的一切都是通过上下文传递，包括：")])]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("props")]),s._v(": 提供所有的prop对象")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("children")]),s._v(": VNode子节点的数组")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("slots")]),s._v(": 所有插槽的对象的函数")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("scopedSlots")]),s._v(": 暴露传入的作用域插槽以及函数形式的普通插槽的对象")])]),s._v(" "),a("div",{staticClass:"warning"},[a("p",[a("code",{pre:!0},[s._v("scopedSlots")]),s._v("只有在2.6.0 及以上版本可以访问")])]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("data")]),s._v(": 传递给组件的"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1"}},[s._v("数据对象")]),s._v("，作为"),a("code",{pre:!0},[s._v("createElement")]),s._v("的第二个参数("),a("code",{pre:!0},[s._v("context")]),s._v(")传入组件")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("parent")]),s._v(": 对父组件的引用")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("listeners")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("injections")])])]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("在添加 "),a("code",{pre:!0},[s._v("functional: true")]),s._v(" 之后，锚点标题组件的 "),a("code",{pre:!0},[s._v("render")]),s._v(" 函数之间简单更新增加 "),a("code",{pre:!0},[s._v("context")]),s._v(" 参数，"),a("code",{pre:!0},[s._v("this.$slots.default")]),s._v(" 更新为 "),a("code",{pre:!0},[s._v("context.children")]),s._v("，之后"),a("code",{pre:!0},[s._v("this.level")]),s._v(" 更新为 "),a("code",{pre:!0},[s._v("context.props.level")]),s._v("。")])]),s._v(" "),a("p",[s._v("比如使用模板的形式:")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-HTML"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("functional")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("{{props.name}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("比如使用渲染函数的形式:")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[s._v("Vue.component("),a("span",{attrs:{class:"hljs-string"}},[s._v("'my-component'")]),s._v(", {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("functional")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": {}\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("render")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}},[s._v("createElement, context")]),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 通过上下文context访问")]),s._v("\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" createElement("),a("span",{attrs:{class:"hljs-string"}},[s._v("'div'")]),s._v(", context.props.name)\n  }\n})\n")])])])}],!1,null,null,null);t.default=n.exports},Gab7:function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"",""])},SsU4:function(s,t,a){s.exports=a("AqNP")},fFGz:function(s,t,a){var e=a("Gab7");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);(0,a("SZ7m").default)("1d3c83a0",e,!0,{})},kAFv:function(s,t,a){"use strict";a.r(t);var e=a("SsU4"),n={name:"VUEFunctionalComponent",components:{md:a.n(e).a}},v=a("JFUb");var r=function(s){a("fFGz")},_=Object(v.a)(n,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,r,"data-v-4fbc86ac",null);t.default=_.exports}}]);