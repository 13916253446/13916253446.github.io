(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"R+3T":function(s,a,t){s.exports=t("dLuK")},"SZ+K":function(s,a,t){"use strict";t.r(a);var r=t("R+3T"),n={name:"JavascriptBreakLoop",components:{md:t.n(r).a}},l=t("JFUb");var e=function(s){t("yNY3")},v=Object(l.a)(n,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,e,"data-v-32b367ca",null);a.default=v.exports},dLuK:function(s,a,t){"use strict";t.r(a);var r=t("JFUb"),n=Object(r.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h4",{attrs:{id:"na-xie-bian-li-shu-zu-de-fang-fa-ke-yi-tui-chu-xun-huan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#na-xie-bian-li-shu-zu-de-fang-fa-ke-yi-tui-chu-xun-huan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 哪些遍历数组的方法可以退出循环")]),s._v(" "),t("h5",{attrs:{id:"1-for-xun-huan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-for-xun-huan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 1. for循环")]),s._v(" "),t("ul",[t("li",[s._v("for")]),s._v(" "),t("li",[s._v("for...of")]),s._v(" "),t("li",[s._v("for...in")])]),s._v(" "),t("p",[s._v("以上几种都可以使用"),t("code",{pre:!0},[s._v("break")]),s._v(","),t("code",{pre:!0},[s._v("continue")]),s._v(","),t("code",{pre:!0},[s._v("return")]),s._v("等方法跳出循环")]),s._v(" "),t("ul",[t("li",[s._v("break是中断的意思，跳出整个循环体")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" arr = ["),t("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("13")]),s._v("]\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" value "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("of")]),s._v(" arr) {\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (value === "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(") "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("break")]),s._v("\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value)\n}\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 只会输出10")]),s._v("\n")])]),s._v(" "),t("ul",[t("li",[s._v("continue是继续的意思，跳出此轮循环，继续下一轮循环")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" arr = ["),t("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("13")]),s._v("]\n\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" value "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("of")]),s._v(" arr) {\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (value === "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(") "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("continue")]),s._v("\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value)\n}\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 除了11都会输出")]),s._v("\n")])]),s._v(" "),t("ul",[t("li",[s._v("return是返回的意思，会中断函数的执行，也就是说return 必须使用在函数体内，否则就会报错，在循环体内使用return同样是终端函数的执行")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" arr = ["),t("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("13")]),s._v("]\n\n"),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("test")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" value "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("of")]),s._v(" arr) {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (value === "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(") "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("\n    "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(value)\n  }\n  "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'完成'")]),s._v(")\n}\n\ntest()\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 只会输出10")]),s._v("\n")])]),s._v(" "),t("h5",{attrs:{id:"2-find"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-find","aria-hidden":"true"}},[s._v("¶")]),s._v(" 2. find")]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("find()")]),s._v(" 方法返回数组中满足提供的测试函数的第一个元素的值，只要循环中返回"),t("code",{pre:!0},[s._v("true")]),s._v("，就会退出遍历")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" arr = ["),t("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("13")]),s._v("]\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" choosed = arr.find("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("value")]),s._v(" =>")]),s._v(" value === "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(")\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 遍历两次，最终choosed的值是11")]),s._v("\n")])]),s._v(" "),t("h5",{attrs:{id:"3-findindex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-findindex","aria-hidden":"true"}},[s._v("¶")]),s._v(" 3. findIndex")]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("findIndex()")]),s._v(" 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" arr = ["),t("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("13")]),s._v("]\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" choosed = arr.find("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("value")]),s._v(" =>")]),s._v(" value === "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(")\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 遍历两次，最终choosed的值是1")]),s._v("\n")])]),s._v(" "),t("h5",{attrs:{id:"4-some"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#4-some","aria-hidden":"true"}},[s._v("¶")]),s._v(" 4. some")]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("some()")]),s._v(" 方法测试是否至少有一个元素通过由提供的函数实现的测试，只要循环中返回"),t("code",{pre:!0},[s._v("true")]),s._v("，就会退出遍历，最终返回的是个"),t("code",{pre:!0},[s._v("Boolean")]),s._v("类型的值")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" arr = ["),t("span",{attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("13")]),s._v("]\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" choosed = arr.find("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("value")]),s._v(" =>")]),s._v(" value === "),t("span",{attrs:{class:"hljs-number"}},[s._v("11")]),s._v(")\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 遍历两次，最终choosed的值是true")]),s._v("\n")])])])}],!1,null,null,null);a.default=n.exports},scyN:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},yNY3:function(s,a,t){var r=t("scyN");"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);(0,t("SZ7m").default)("0d659088",r,!0,{})}}]);