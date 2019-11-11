(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"6kHO":function(s,a,t){var n=t("6no2");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("1087cccb",n,!0,{})},"6no2":function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},BIhO:function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),l=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("render函数")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("通过render函数创建组件可以不设置根节点")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("render (createElement) {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" createElement(\n      Hello world!\n      \n    )    \n}\n")])])]),s._v(" "),t("li",[t("p",[s._v("返回值必须是个"),t("code",{pre:!0},[s._v("VNode")]),s._v("虚拟DOM")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("// 创建一个组件，但是这个组件不构成任何元素像transition，keep-alive组件一样")]),s._v("\nrender () {\n   "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" vnode = "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$slots.default["),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]\n   "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" vnode\n}\n")])])]),s._v(" "),t("li",[t("p",[s._v("虚拟节点"),t("code",{pre:!0},[s._v("VNode")]),s._v("的"),t("code",{pre:!0},[s._v("data")]),s._v("对象有下面这些高级属性")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("{\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 和`v-bind:class`一样的 API")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 接收一个字符串、对象或字符串和对象组成的数组")]),s._v("\n  "),t("span",{attrs:{class:"hljs-string"}},[s._v("'class'")]),s._v(": {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("foo")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("bar")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n  },\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 和`v-bind:style`一样的 API")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 接收一个字符串、对象或对象组成的数组")]),s._v("\n  style: {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("fontSize")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'14px'")]),s._v("\n  },\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 普通的 HTML 特性")]),s._v("\n  attrs: {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'foo'")]),s._v("\n  },\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 组件 props")]),s._v("\n  props: {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("myProp")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'bar'")]),s._v("\n  },\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// DOM 属性")]),s._v("\n  domProps: {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("innerHTML")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'baz'")]),s._v("\n  },\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 事件监听器基于 `on`")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 所以不再支持如 `v-on:keyup.enter` 修饰器")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 需要手动匹配 keyCode。")]),s._v("\n  on: {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".clickHandler\n  },\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 仅用于组件，用于监听原生事件，而不是组件内部使用")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// `vm.$emit` 触发的事件。")]),s._v("\n  nativeOn: {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("click")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".nativeClickHandler\n  },\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 自定义指令。注意，你无法对 `binding` 中的 `oldValue`")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 赋值，因为 Vue 已经自动为你进行了同步。")]),s._v("\n  directives: [\n    {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'my-custom-directive'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'2'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("expression")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'1 + 1'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("arg")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'foo'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("modifiers")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("bar")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    }\n  ],\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 作用域插槽格式")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// { name: props => VNode | Array }")]),s._v("\n  scopedSlots: {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("default")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("props")]),s._v(" =>")]),s._v(" createElement("),t("span",{attrs:{class:"hljs-string"}},[s._v("'span'")]),s._v(", props.text)\n  },\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 如果组件是其他组件的子组件，需为插槽指定名称")]),s._v("\n  slot: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'name-of-slot'")]),s._v(",\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 其他特殊顶层属性")]),s._v("\n  key: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'myKey'")]),s._v(",\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'myRef'")]),s._v(",\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 如果你在渲染函数中向多个元素都应用了相同的 ref 名，")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 那么 `$refs.myRef` 会变成一个数组。")]),s._v("\n  refInFor: "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n}\n")])])]),s._v(" "),t("li",[t("p",[s._v("可以通过"),t("code",{pre:!0},[s._v("jsx")]),s._v("来创建组件")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("render: "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}},[s._v("h")]),s._v(") ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (\n      \n        Hello world!\n      \n    )\n  }\n")])])])])])}],!1,null,null,null);a.default=l.exports},UW6g:function(s,a,t){"use strict";t.r(a);var n=t("txL/"),l={name:"VUERender",components:{md:t.n(n).a}},r=t("JFUb");var v=function(s){t("6kHO")},e=Object(r.a)(l,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,v,"data-v-d136eab4",null);a.default=e.exports},"txL/":function(s,a,t){s.exports=t("BIhO")}}]);