(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0T7k":function(s,t,a){s.exports=a("wjWA")},"4WLe":function(s,t,a){"use strict";a.r(t);var l=a("0T7k"),e={name:"CSSCssGetListCount",components:{md:a.n(l).a}},c=a("JFUb");var r=function(s){a("uW/K")},n=Object(c.a)(e,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,r,"data-v-317f4db4",null);t.default=n.exports},uUh9:function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"",""])},"uW/K":function(s,t,a){var l=a("uUh9");"string"==typeof l&&(l=[[s.i,l,""]]),l.locals&&(s.exports=l.locals);(0,a("SZ7m").default)("2c9d3966",l,!0,{})},wjWA:function(s,t,a){"use strict";a.r(t);var l=a("JFUb"),e=Object(l.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h4",{attrs:{id:"ru-he-huo-qu-lie-biao-zong-shu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ru-he-huo-qu-lie-biao-zong-shu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 如何获取列表总数")]),s._v(" "),a("p",[s._v("我们可以借助伪类判断当前列表个数，示意如下：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-css"}},[a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":only-child")]),s._v(" { "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 1个 */")]),s._v(" }\n\n"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":nth-last-child(2)")]),s._v(" { "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 2个 */")]),s._v(" }\n"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":nth-last-child(3)")]),s._v(" { "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 3个 */")]),s._v(" }\n\n"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":nth-last-child(n")]),s._v(" + 4) { "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 超过4个 */")]),s._v(" }\n"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":nth-last-child(n")]),s._v(" + 5) { "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 超过5个 */")]),s._v(" }\n\n"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":nth-last-child(3n)")]),s._v(" { "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 3的倍数 */")]),s._v(" }\n"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":nth-last-child(3n")]),s._v(" + 1) { "),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 3的倍数多1 */")]),s._v(" }\n")])]),s._v(" "),a("div",{staticClass:"tip"},[a("p",[s._v("然后借助兄弟元素选择符"),a("code",{pre:!0},[s._v("~")]),s._v("，以及相邻元素选择符"),a("code",{pre:!0},[s._v("+")]),s._v("就可以设置兄弟元素样式，达到不同列表数目，不一样布局的目的")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-css"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 3个li项目的第1个列表项 */")]),s._v("\n"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":nth-last-child(3)")]),s._v(" {}\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 3个li项目的第1个列表项的后一个，也就是第2项的样式 */")]),s._v("\n"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":nth-last-child(3)")]),s._v(" + "),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),s._v(" {}\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("/* 3个li项目的第一个列表项后面两个列表项，也就是第2项和第3项的样式 */")]),s._v("\n"),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":first-child")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":nth-last-child(3)")]),s._v(" ~ "),a("span",{attrs:{class:"hljs-selector-tag"}},[s._v("li")]),s._v(" {}\n")])]),s._v(" "),a("h3",{attrs:{id:"can-kao"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2019/03/nth-last-child-css-layout/"}},[s._v("伪类匹配列表数目实现微信群头像CSS布局的技巧")])])])])}],!1,null,null,null);t.default=e.exports}}]);