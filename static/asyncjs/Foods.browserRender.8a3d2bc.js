(window.webpackJsonp=window.webpackJsonp||[]).push([["Foods.browserRender"],{BVAO:function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),e=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h4",{attrs:{id:"fen-xi-xia-mian-zhe-duan-dai-ma-de-jie-xi-guo-cheng"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fen-xi-xia-mian-zhe-duan-dai-ma-de-jie-xi-guo-cheng","aria-hidden":"true"}},[s._v("¶")]),s._v(" 分析下面这段代码的解析过程")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-meta"}},[s._v("<!DOCTYPE html>")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("html")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"en"')]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("meta")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("charset")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"UTF-8"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("meta")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewport"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width=device-width, initial-scale=1.0"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("meta")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("http-equiv")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"X-UA-Compatible"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ie=edge"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("Document"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("title")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("123456"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("html")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("html")]),s._v("文档的加载与页面的首次渲染：")]),s._v(" "),t("ol",[t("li",[s._v("浏览器下载html页面")]),s._v(" "),t("li",[s._v("浏览器解析html页面的DOM结构")]),s._v(" "),t("li",[s._v("开启一个下载线程对文档中的所有资源按"),t("strong",[s._v("优先级")]),s._v("排序下载\n也就是说浏览器会并行下载"),t("code",{pre:!0},[s._v("index.css")]),s._v(","),t("code",{pre:!0},[s._v("index.js")])]),s._v(" "),t("li",[s._v("主线程继续解析文档，发现外链资源\n执行到外链js,则停止接续后续文档，等待该资源下载完成，并且立即执行完成（因为js可能会操作DOM）；执行到外链css，继续解析后续文档(因为css只对后面构建渲染树有影响，并不会去操作DOM)")]),s._v(" "),t("li",[s._v("文档解析完毕，页面重新渲染。当页面引用的所有js同步代码执行完毕，触发"),t("code",{pre:!0},[s._v("DOMContentLoaded")]),s._v("事件")]),s._v(" "),t("li",[s._v("html文档中的图片资源，js代码中有异步加载的css，js，图片资源都加载完毕之后，触发load事件")])]),s._v(" "),t("h3",{attrs:{id:"zong-jie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zong-jie","aria-hidden":"true"}},[s._v("¶")]),s._v(" 总结：")]),s._v(" "),t("h4",{attrs:{id:"css-zi-yuan-de-chu-li-you-ji-ge-te-dian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-zi-yuan-de-chu-li-you-ji-ge-te-dian","aria-hidden":"true"}},[s._v("¶")]),s._v(" CSS资源的处理有几个特点：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[s._v("1. CSS下载时异步，不会阻塞浏览器构建DOM树\n\n2. 但是会阻塞渲染，也就是在构建render时，会等到css下载解析完毕后才进行（这点与浏览器优化有关，防止css规则不断改变，避免了重复的构建）\n\n3. 有例外，media query声明的CSS是不会阻塞渲染的\n")])]),s._v(" "),t("h4",{attrs:{id:"js-jiao-ben-zi-yuan-de-chu-li-you-ji-ge-te-dian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-jiao-ben-zi-yuan-de-chu-li-you-ji-ge-te-dian","aria-hidden":"true"}},[s._v("¶")]),s._v(" JS脚本资源的处理有几个特点：")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[s._v("1. 阻塞浏览器的解析，也就是说发现一个外链脚本时，需等待脚本下载完成并执行后才会继续解析HTML\n\n2. 浏览器的优化，一般现代浏览器有优化，在脚本阻塞时，也会继续下载其它资源（当然有并发上限），但是虽然脚本可以并行下载，解析过程仍然是阻塞的，也就是说必须这个脚本执行完毕后才会接下来的解析，并行下载只是一种优化而已\n\n3. defer与async，普通的脚本是会阻塞浏览器解析的，但是可以加上defer或async属性，这样脚本就变成异步了，可以等到解析完毕后再执行\n")])]),s._v(" "),t("h3",{attrs:{id:"can-kao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考：")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://juejin.im/post/5b2a508ae51d4558de5bd5d1"}},[s._v("再谈 load 与 DOMContentLoaded")])])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://dailc.github.io/2018/03/12/whenyouenteraurl.html"}},[s._v("从输入URL到页面加载的过程？")])])])])])}],!1,null,null,null);a.default=e.exports},Ifqn:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},KVSs:function(s,a,t){"use strict";t.r(a);var n=t("QPQQ"),e={name:"FoodsBrowserRender",components:{md:t.n(n).a}},r=t("JFUb");var l=function(s){t("S2bp")},v=Object(r.a)(e,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,l,"data-v-3f4a4e8a",null);a.default=v.exports},QPQQ:function(s,a,t){s.exports=t("BVAO")},S2bp:function(s,a,t){var n=t("Ifqn");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("5ca931ac",n,!0,{})}}]);