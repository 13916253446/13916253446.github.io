(window.webpackJsonp=window.webpackJsonp||[]).push([["CSS.borderRadius"],{"38cQ":function(s,a,t){var r=t("8g7t");"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);(0,t("SZ7m").default)("999962ca",r,!0,{})},"8g7t":function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},Qqao:function(s,a,t){"use strict";t.r(a);var r=t("qLfs"),e={name:"CSSBorderRadius",components:{md:t.n(r).a}},v=t("JFUb");var _=function(s){t("38cQ")},n=Object(v.a)(e,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,_,"data-v-66268294",null);a.default=n.exports},nJpz:function(s,a,t){"use strict";t.r(a);var r=t("JFUb"),e=Object(r.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",{attrs:{id:"bai-fen-bi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bai-fen-bi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 百分比")]),s._v(" "),t("blockquote",[t("p",[s._v("是相对于元素占据尺寸的百分比, 也就是包含边框，"),t("code",{pre:!0},[s._v("padding")]),s._v("后的尺寸。而不是单纯地相对于"),t("code",{pre:!0},[s._v("width/height")]),s._v("值。")])]),s._v(" "),t("p",[s._v("比如要实现一个正方形元素的圆角效果, 一个"),t("code",{pre:!0},[s._v("50%")]),s._v("就解决了。而无需其他计算。")]),s._v(" "),t("h3",{attrs:{id:"dan-zhi-de-biao-xian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dan-zhi-de-biao-xian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 单值的表现")]),s._v(" "),t("blockquote",[t("p",[s._v("单值实际上是一种简写。")])]),s._v(" "),t("p",[s._v("比如"),t("code",{pre:!0},[s._v("border-radius: 300px")]),s._v(",实际则是")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-css"}},[t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("border-radius")]),s._v(": 300"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("px")]),s._v(" 300"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("px")]),s._v(" 300"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("px")]),s._v(" 300"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("px")]),s._v("/300"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("px")]),s._v(" 300"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("px")]),s._v(" 300"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("px")]),s._v(" 300"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("px")]),s._v(";\n")])]),s._v(" "),t("p",[s._v("也就是:")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[s._v("border-radius: 左上角水平圆角半径大小 右上角水平圆角半径大小 右下角水平圆角半径大小 左下角水平圆角半径大小/左上角垂直圆角半径大小 右上角垂直圆角半径大小 右下角垂直圆角半径大小 左下角垂直圆角半径大小;\n")])]),s._v(" "),t("h3",{attrs:{id:"zui-da-zhi-gui-ze"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zui-da-zhi-gui-ze","aria-hidden":"true"}},[s._v("¶")]),s._v(" 最大值规则")]),s._v(" "),t("blockquote",[t("p",[s._v("无论设置圆角的值是多大，只会使用能够渲染的圆角大小渲染。")])]),s._v(" "),t("p",[s._v("比如以下是一个"),t("code",{pre:!0},[s._v("width: 200px;height: 100px")]),s._v("的长方形, 那么水平圆角最大能渲染的值是"),t("code",{pre:!0},[s._v("100px")]),s._v(",垂直圆角最大能渲染的值是"),t("code",{pre:!0},[s._v("50px")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/13916253446/assets/master/public/image(5).apz0jfci5la.png",alt:"border-radius"}})]),s._v(" "),t("div",{staticClass:"success"},[t("p",[s._v("所以设置一个圆方形圆角的时候,除了可以设置"),t("code",{pre:!0},[s._v("50%")]),s._v("的时候,还可以设置一个特别大的值,达到同样的效果。")])]),s._v(" "),t("p",[s._v("比如以下是一个"),t("code",{pre:!0},[s._v("width: 200px;height: 300px")]),s._v("的长方形, 此时值设置了左上角,那么水平圆角最大能渲染的值就是"),t("code",{pre:!0},[s._v("200px")]),s._v("而不是"),t("code",{pre:!0},[s._v("100px")]),s._v("了")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/13916253446/assets/master/public/2015-11-01_201759.jbbxw629ey.png",alt:"border-radius-max"}})]),s._v(" "),t("div",{staticClass:"warning"},[t("p",[s._v("相对的角("),t("strong",[s._v("比如左上角和左下角")]),s._v(")都同时设置时,最大能渲染的值是宽高的一半;但是如果是只设置一个角("),t("strong",[s._v("比如左上角")]),s._v(")时,此时最大能渲染的值就是相应的宽高一样的值而不是一半。")])]),s._v(" "),t("h3",{attrs:{id:"deng-bi-li-xing-yuan-ze"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deng-bi-li-xing-yuan-ze","aria-hidden":"true"}},[s._v("¶")]),s._v(" 等比例性原则")]),s._v(" "),t("blockquote",[t("p",[s._v("水平圆角和垂直圆角,始终保持同一个比列恒定不变。")])]),s._v(" "),t("div",{staticClass:"success"},[t("p",[s._v("比如说有一个长方形"),t("code",{pre:!0},[s._v("width: 100px;height: 200px")]),s._v(" 当设置圆角为"),t("code",{pre:!0},[s._v("border-radius: 100px")]),s._v("时候,也就是"),t("code",{pre:!0},[s._v("border-radius: 100px/100px")]),s._v("水平圆角和垂直圆角的比例是"),t("code",{pre:!0},[s._v("1:1")]),s._v(",基于"),t("strong",[s._v("等比例性原则")]),s._v("那么无论怎么渲染水平角和垂直角的比例始终是"),t("code",{pre:!0},[s._v("1:1")]),s._v(",因为宽度是"),t("code",{pre:!0},[s._v("100px")]),s._v("又因为对角也渲染所以水平最大渲染值是"),t("code",{pre:!0},[s._v("50px")]),s._v(",所以此时垂直角渲染值也应该是"),t("code",{pre:!0},[s._v("50px")]),s._v("。")])]),s._v(" "),t("div",{staticClass:"success"},[t("p",[s._v("基于等比例性原则,只要保持水平角和垂直角比例保持一定的比例,设置最大圆角和固定的圆角效果是一样的。")])]),s._v(" "),t("h3",{attrs:{id:"jian-xie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jian-xie","aria-hidden":"true"}},[s._v("¶")]),s._v(" 简写")]),s._v(" "),t("ul",[t("li",[s._v("两个数字")])]),s._v(" "),t("p",[s._v("两个值就是一对对角值: “左上角, 右下角”和“右上角, 左下角”")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-css"}},[t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".example")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-radius")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(";\n}\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("/** 对应 */")]),s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".example")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-top-left-radius")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-top-right-radius")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-bottom-right-radius")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-bottom-left-radius")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(";\n}\n")])]),s._v(" "),t("ul",[t("li",[s._v("单独设置某个角落的值")])]),s._v(" "),t("p",[s._v("如果是一个值就是水平角和垂直角一样, 两个值用空格分开, 分别表示水平角和垂直角")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-css"}},[t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".example")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-top-left-radius")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("/** 对应 */")]),s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".example")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-top-left-radius")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".example1")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("border-top-left-radius")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(" "),t("span",{attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(";\n}\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("/** 表示水平角是10px垂直角是20px */")]),s._v("\n")])]),s._v(" "),t("h2",{attrs:{id:"can-kao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/"}},[s._v("张鑫旭 CSS3 border-radius知多少？")])])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://9elements.github.io/fancy-border-radius/#44.50.46.51--."}},[s._v("border-radius可视化生成各种图形")])])])])])}],!1,null,null,null);a.default=e.exports},qLfs:function(s,a,t){s.exports=t("nJpz")}}]);