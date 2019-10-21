(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/diY":function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},OVta:function(s,a,t){var e=t("/diY");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);(0,t("SZ7m").default)("3d637be0",e,!0,{})},Smge:function(s,a,t){"use strict";t.r(a);var e=t("JFUb");var v=function(s){t("lAMG")},r=Object(e.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("使用"),t("code",{pre:!0},[s._v("margin:auto")]),s._v("使"),t("code",{pre:!0},[s._v("flex")]),s._v("布局水平垂直居中")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"g-container"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"g-box"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".g-container")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": flex;\n}\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".g-box")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("margin")]),s._v(": auto;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("上面的 "),t("code",{pre:!0},[s._v("display: flex")]),s._v(" 替换成 "),t("code",{pre:!0},[s._v("display: inline-flex | grid | inline-grid")]),s._v(" 也是可以的。")])]),s._v(" "),t("h1",[s._v("在"),t("code",{pre:!0},[s._v("block")]),s._v("布局中，为什么可以水平居中，而不能垂直居中?")]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("disaply:block")]),s._v("BFC("),t("strong",[s._v("块格式化上下文")]),s._v("也就是"),t("code",{pre:!0},[s._v("block formatting context")]),s._v("),"),t("code",{pre:!0},[s._v("margin: auto")]),s._v("只能使水平居中而不能使垂直居中。")]),s._v(" "),t("p",[s._v("查看CSS 文档，发现原因如下：")]),s._v(" "),t("blockquote",[t("p",[s._v("If both margin-left and margin-right are auto, their used values are equal, causing horizontal centring."),t("br"),s._v(" "),t("a",{attrs:{href:"https://www.w3.org/TR/CSS2/visudet.html#Computing_heights_and_margins"}},[s._v("—CSS2 Visual formatting model details: 10.3.3")])])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("简单翻译下，在块格式化上下文中，如果"),t("code",{pre:!0},[s._v("margin-left")]),s._v("和"),t("code",{pre:!0},[s._v("margin-right")]),s._v("都是"),t("code",{pre:!0},[s._v("auto")]),s._v("，则它们的表达值相等，则"),t("code",{pre:!0},[s._v("margin")]),s._v("的计算值就是平均分配剩余空间，所以造成水平居中")])]),s._v(" "),t("blockquote",[t("p",[s._v("If margin-top, or margin-bottom are auto, their used value is 0."),t("br"),s._v(" "),t("a",{attrs:{href:"https://www.w3.org/TR/CSS2/visudet.html#Computing_heights_and_margins"}},[s._v("CSS2 Visual formatting model details: 10.6.3")])])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("简单翻译下，在块格式化上下文中，而如果"),t("code",{pre:!0},[s._v("margin-top")]),s._v("和"),t("code",{pre:!0},[s._v("margin-bottom")]),s._v("都是"),t("code",{pre:!0},[s._v("auto")]),s._v("则"),t("code",{pre:!0},[s._v("margin")]),s._v("的计算值就是"),t("code",{pre:!0},[s._v("0")]),s._v("，当然也就无法造成垂直居中。")])]),s._v(" "),t("h1",[s._v("在"),t("code",{pre:!0},[s._v("flex")]),s._v("不居中，为什么可以水平垂直居中?")]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("disaply:flex")]),s._v("FFC("),t("strong",[s._v("块格式化上下文")]),s._v("也就是"),t("code",{pre:!0},[s._v("block formatting context")]),s._v(")、"),t("code",{pre:!0},[s._v("display: grid")]),s._v("GFC("),t("code",{pre:!0},[s._v("grid formatting context")]),s._v(")中,"),t("code",{pre:!0},[s._v("margin: auto")]),s._v("可以水平垂直居中。")]),s._v(" "),t("p",[s._v("查看CSS 文档，发现原因如下：")]),s._v(" "),t("blockquote",[t("p",[s._v("Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.\n"),t("a",{attrs:{href:"https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#auto-margins"}},[s._v("CSS Flexible Box Layout Module Level 1 -- 8.1. Aligning with auto margins")])])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("简单翻译一下，大意是在"),t("code",{pre:!0},[s._v("FFC")]),s._v("中，设置了 "),t("code",{pre:!0},[s._v("margin: auto")]),s._v(" 的元素，任何正处于空闲的空间都会分配到该方向的自动"),t("code",{pre:!0},[s._v("margin")]),s._v("中去"),t("br"),s._v("\n而且是在通过"),t("code",{pre:!0},[s._v("justify-content")]),s._v("和"),t("code",{pre:!0},[s._v("align-items")]),s._v("进行对齐之前"),t("br"),s._v(" "),t("code",{pre:!0},[s._v("justify-content")]),s._v("和"),t("code",{pre:!0},[s._v("align-items")]),s._v("的对齐方式，也是基础剩余空间的，比如"),t("code",{pre:!0},[s._v("justify-content: center")]),s._v("，就是水平方向的两侧"),t("code",{pre:!0},[s._v("main-start")]),s._v("和"),t("code",{pre:!0},[s._v("main-end")]),s._v("平分剩余空间。"),t("a",{attrs:{href:"https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#justify-content-property"}},[s._v("w3c文档")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/flex-pack.svg",alt:"flex-margin"}})]),s._v(" "),t("div",{staticClass:"warning"},[t("p",[t("code",{pre:!0},[s._v("FFC")]),s._v("中设置了"),t("code",{pre:!0},[s._v("margin")]),s._v("，那么就会先把剩余空间分配给"),t("code",{pre:!0},[s._v("margin")]),s._v("使用，然后再有的剩余空间才会分配给"),t("code",{pre:!0},[s._v("justify-content")]),s._v("和"),t("code",{pre:!0},[s._v("align-items")]),s._v("使用。")])]),s._v(" "),t("p",[s._v("例如：在"),t("code",{pre:!0},[s._v("flex")]),s._v("布局中实现一个"),t("strong",[s._v("右对齐")])]),s._v(" "),t("div",{staticClass:"flex-wrapper"},[t("div",[s._v("测试")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"flex-wrapper"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("测试"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".flex-wrapper")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("100px")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("50px")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1px")]),s._v(" solid gray;\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("display")]),s._v(": flex;\n}\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".flex-wrapper")]),s._v(" "),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("div")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("margin-left")]),s._v(": auto;\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"tip"},[t("p",[s._v("理解了原理之后，可以处理更多布局。")])]),s._v(" "),t("h2",{attrs:{id:"can-kao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5ce60afde51d455ca04361b1"}},[s._v("探秘 flex 上下文中神奇的自动 margin")])])])])}],!1,v,null,null);a.default=r.exports},dBcE:function(s,a,t){"use strict";t.r(a);var e=t("tKTI"),v={name:"CSSFlexAuto",components:{md:t.n(e).a}},r=t("JFUb");var n=function(s){t("OVta")},_=Object(r.a)(v,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,n,"data-v-1ebd5a62",null);a.default=_.exports},lAMG:function(s,a,t){var e=t("nGwI");"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);(0,t("SZ7m").default)("56f1691f",e,!0,{})},nGwI:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,".flex-wrapper{width:100px;height:50px;border:1px solid gray;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flex-wrapper div{margin-left:auto}",""])},tKTI:function(s,a,t){s.exports=t("Smge")}}]);