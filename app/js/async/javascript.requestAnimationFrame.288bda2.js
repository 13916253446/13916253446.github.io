(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"5ExG":function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},NAtw:function(s,a,t){s.exports=t("gVl4")},OItc:function(s,a,t){"use strict";t.r(a);var n=t("NAtw"),l={name:"JavascriptRequestAnimationFrame",components:{md:t.n(n).a}},v=t("JFUb");var _=function(s){t("ZjQ3")},r=Object(v.a)(l,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,_,"data-v-5ecaaaa0",null);a.default=r.exports},ZjQ3:function(s,a,t){var n=t("5ExG");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("d8cf0afa",n,!0,{})},gVl4:function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),l=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",{attrs:{id:"zong-jie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zong-jie","aria-hidden":"true"}},[s._v("¶")]),s._v(" 总结：")]),s._v(" "),t("ul",[t("li",[t("code",{pre:!0},[s._v("raf")]),s._v("里面的"),t("code",{pre:!0},[s._v("callback")]),s._v("，会在重绘和回流之前执行，也就是下一次布局和绘制前面执行")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"btn"')]),s._v(">")]),s._v("按钮"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" btn = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),t("span",{attrs:{class:"hljs-string"}},[s._v("'btn'")]),s._v(")\n\n  btn.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("fn")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    btn.innerText = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'456789'")]),s._v("\n    requestAnimationFrame("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("raf")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    })\n  })\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/20190223082625.png",alt:"requestAnimationFrame"}})]),s._v(" "),t("ul",[t("li",[t("code",{pre:!0},[s._v("raf")]),s._v("是一个宏任务("),t("code",{pre:!0},[s._v("task")]),s._v(")")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"btn"')]),s._v(">")]),s._v("按钮"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" btn = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),t("span",{attrs:{class:"hljs-string"}},[s._v("'btn'")]),s._v(")\n\n    btn.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("fn")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     requestAnimationFrame("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("raf")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n       "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n     })\n     "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".resolve().then("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("proFn")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n       "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n     })\n    })\n  ")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/20190223083641.png",alt:"requestAnimationFrame"}})]),s._v(" "),t("p",[s._v("可以看出"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("是一个宏任务，"),t("code",{pre:!0},[s._v("Promise")]),s._v("是一个微任务。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("如果你在一个"),t("code",{pre:!0},[s._v("Task")]),s._v("(无论是宏任务还是微任务)，去改变"),t("code",{pre:!0},[s._v("DOM")]),s._v("，然后在其他的"),t("code",{pre:!0},[s._v("Task")]),s._v("里面去读取，你很有可能读取到的是没有发生改变的"),t("code",{pre:!0},[s._v("DOM")]),s._v("，因为"),t("strong",[s._v("浏览器并不总是在两个Task之间渲染，事件循环可能快于60HZ。")])])]),s._v(" "),t("li",[t("p",[s._v("同样的如果你在一个"),t("code",{pre:!0},[s._v("Task")]),s._v("里面去改变"),t("code",{pre:!0},[s._v("DOM")]),s._v("，然后你在"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("里面去读取"),t("code",{pre:!0},[s._v("DOM")]),s._v("，你只会拿到一个没有发生改变的"),t("code",{pre:!0},[s._v("DOM")])])])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"btn"')]),s._v(">")]),s._v("按钮"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dialog"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dialog"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" btn = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),t("span",{attrs:{class:"hljs-string"}},[s._v("'btn'")]),s._v(")\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" dialog = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),t("span",{attrs:{class:"hljs-string"}},[s._v("'dialog'")]),s._v(")\n\n    btn.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("fn")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    dialog.style.display = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'block'")]),s._v("\n     requestAnimationFrame("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("raf")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      dialog.classList.add("),t("span",{attrs:{class:"hljs-string"}},[s._v("'dialog-active'")]),s._v(")\n     })\n    })\n  ")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("弹窗动画将不会执行")]),s._v(" "),t("ul",[t("li",[s._v("最好的操作"),t("code",{pre:!0},[s._v("DOM")]),s._v("做法是："),t("strong",[s._v("在requestAnimationFrame里面改变DOM，然后在其他的Task里面去读取DOM")])])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"btn"')]),s._v(">")]),s._v("按钮"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dialog"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dialog"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" btn = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),t("span",{attrs:{class:"hljs-string"}},[s._v("'btn'")]),s._v(")\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" dialog = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),t("span",{attrs:{class:"hljs-string"}},[s._v("'dialog'")]),s._v(")\n\n    btn.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("fn")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n     requestAnimationFrame("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("raf")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      dialog.style.display = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'block'")]),s._v("\n     })\n     setTimeout("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n       dialog.classList.add("),t("span",{attrs:{class:"hljs-string"}},[s._v("'dialog-active'")]),s._v(")\n     }, "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(")\n    })\n  ")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[s._v("一定可以触发弹窗动画")]),s._v(" "),t("p",[s._v("还有一种做法是在"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("强制触发一次回流")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-HTML"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"btn"')]),s._v(">")]),s._v("按钮"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dialog"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"dialog"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" btn = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),t("span",{attrs:{class:"hljs-string"}},[s._v("'btn'")]),s._v(")\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" dialog = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),t("span",{attrs:{class:"hljs-string"}},[s._v("'dialog'")]),s._v(")\n\n    btn.addEventListener("),t("span",{attrs:{class:"hljs-string"}},[s._v("'click'")]),s._v(", "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("fn")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      dialog.style.display = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'block'")]),s._v("\n      requestAnimationFrame("),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("raf")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n        "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("window")]),s._v(".pageYOffset\n        dialog.classList.add("),t("span",{attrs:{class:"hljs-string"}},[s._v("'dialog-active'")]),s._v(")\n      })\n    })\n  ")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("ul",[t("li",[s._v("即使浏览器没有发生重绘或者回流，"),t("code",{pre:!0},[s._v("requestAnimationFrame")]),s._v("，也会以刷新频率来执行，通常是每秒60次。")])])])}],!1,null,null,null);a.default=l.exports}}]);