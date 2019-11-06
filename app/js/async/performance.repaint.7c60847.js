(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{B6wg:function(s,t,a){s.exports=a("jkUN")},DJAX:function(s,t,a){"use strict";a.r(t);var n=a("B6wg"),l={name:"PerformanceRepaint",components:{md:a.n(n).a}},e=a("JFUb");var r=function(s){a("F4BP")},v=Object(e.a)(l,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,r,"data-v-3c972f40",null);t.default=v.exports},F4BP:function(s,t,a){var n=a("QnUh");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,a("SZ7m").default)("20d08c54",n,!0,{})},QnUh:function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"",""])},jkUN:function(s,t,a){"use strict";a.r(t);var n=a("JFUb"),l=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("浏览器的优化机制")]),s._v(" "),a("p",[s._v("现代的浏览器都是很聪明的，由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列。但是！"),a("strong",[s._v("当你获取布局信息的操作的时候，会强制队列刷新")]),s._v("，比如当你访问以下属性或者使用以下方法：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("offsetTop、offsetLeft、offsetWidth、offsetHeight")])]),s._v(" "),a("li",[a("strong",[s._v("scrollTop、scrollLeft、scrollWidth、scrollHeight")])]),s._v(" "),a("li",[a("strong",[s._v("clientTop、clientLeft、clientWidth、clientHeight")])]),s._v(" "),a("li",[a("strong",[s._v("getComputedStyle()")])]),s._v(" "),a("li",[a("strong",[s._v("getBoundingClientRect")])])]),s._v(" "),a("h1",[s._v("减少重绘和回流")]),s._v(" "),a("p",[s._v("接下来看怎么减少重绘和回流，来优化项目")]),s._v(" "),a("h3",{attrs:{id:"zui-xiao-hua-chong-hui-he-hui-liu-chong-pai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zui-xiao-hua-chong-hui-he-hui-liu-chong-pai","aria-hidden":"true"}},[s._v("¶")]),s._v(" 最小化重绘和回流(重排)")]),s._v(" "),a("p",[s._v("由于重绘和重排可能代价比较昂贵，因此最好就是可以减少它的发生次数。为了减少发生次数，我们可以合并多次对DOM和样式的修改，然后一次处理掉。考虑这个例子：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" el = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v(")\n\nel.style.padding = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'5px'")]),s._v("\nel.style.marginLeft = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'5px'")]),s._v("\nel.style.marginRight = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'9px'")]),s._v("\n")])]),s._v(" "),a("p",[s._v("例子中，有三个样式属性被修改了，每一个都会影响元素的几何结构，引起回流。当然，大部分现代浏览器都对其做了优化，因此，只会触发一次重排。但是如果在旧版的浏览器或者在上面代码执行的时候，有其他代码访问了布局信息(上文中的会触发回流的布局信息)，那么就会导致三次重排。")]),s._v(" "),a("p",[s._v("因此，我们可以合并所有的改变然后依次处理，比如我们可以采取以下的方式：")]),s._v(" "),a("ul",[a("li",[s._v("使用"),a("code",{pre:!0},[s._v("cssText")])])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" el = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v(")\n\nel.style.cssText += "),a("span",{attrs:{class:"hljs-string"}},[s._v("`padding: 5px; margin-left: 5px; margin-right: 9px`")]),s._v("\n")])]),s._v(" "),a("ul",[a("li",[s._v("修改"),a("code",{pre:!0},[s._v("class")])])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" el = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v(")\n\nel.classList.add("),a("span",{attrs:{class:"hljs-string"}},[s._v("'active'")]),s._v(")\n")])]),s._v(" "),a("h3",{attrs:{id:"pi-liang-xiu-gai-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pi-liang-xiu-gai-dom","aria-hidden":"true"}},[s._v("¶")]),s._v(" 批量修改DOM")]),s._v(" "),a("p",[s._v("当我们需要对DOM对一系列修改的时候，可以通过以下步骤减少回流重绘次数：")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("使元素脱离文档流")])]),s._v(" "),a("li",[a("strong",[s._v("对其进行多次修改")])]),s._v(" "),a("li",[a("strong",[s._v("将元素带回文档中")])])]),s._v(" "),a("p",[s._v("该过程的第一步和第三步会引起回流，但是经过第一步之后，对元素进行的任何操作都不会引起重绘和回流，因为它已经不在渲染树中了")]),s._v(" "),a("p",[s._v("有三种方式可以让"),a("code",{pre:!0},[s._v("DOM")]),s._v("脱离文档流")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("隐藏元素")])]),s._v(" "),a("li",[a("strong",[s._v("使用文档片段(document fragment)在当前DOM之外创建一个子树，再将它拷贝回文档")])]),s._v(" "),a("li",[a("strong",[s._v("将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素")])])]),s._v(" "),a("p",[s._v("我们要执行一段批量插入节点的代码：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("appendDataToElement")]),s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("appendToElement, data")]),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" li;\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < data.length; i++) {\n    \tli = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createElement("),a("span",{attrs:{class:"hljs-string"}},[s._v("'li'")]),s._v(");\n      li.textContent = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(";\n      appendToElement.appendChild(li);\n    }\n}\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" ul = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{attrs:{class:"hljs-string"}},[s._v("'list'")]),s._v(");\nappendDataToElement(ul, data);\n")])]),s._v(" "),a("p",[s._v("现在使用这三种方式来进行优化")]),s._v(" "),a("h5",{attrs:{id:"yin-cang-yuan-su-pin-jie-yuan-su-xian-shi-yuan-su"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yin-cang-yuan-su-pin-jie-yuan-su-xian-shi-yuan-su","aria-hidden":"true"}},[s._v("¶")]),s._v(" 隐藏元素，拼接元素，显示元素")]),s._v(" "),a("p",[s._v("这样会在隐藏和重新显示元素的时候，产生两次回流")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("appendDataToElement")]),s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("appendToElement, data")]),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" li;\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < data.length; i++) {\n    \tli = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createElement("),a("span",{attrs:{class:"hljs-string"}},[s._v("'li'")]),s._v(");\n      li.textContent = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(";\n      appendToElement.appendChild(li);\n    }\n}\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" ul = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{attrs:{class:"hljs-string"}},[s._v("'list'")]),s._v(");\nul.style.display = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'none'")]),s._v(";\nappendDataToElement(ul, data);\nul.style.dispaly = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'block'")]),s._v(";\n")])]),s._v(" "),a("h5",{attrs:{id:"shi-yong-wen-dang-pian-duan-document-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-yong-wen-dang-pian-duan-document-fragment","aria-hidden":"true"}},[s._v("¶")]),s._v(" 使用文档片段(document fragment)")]),s._v(" "),a("p",[s._v("这样只会产生一次回流")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("appendDataToElement")]),s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("appendToElement, data")]),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" li;\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < data.length; i++) {\n    \tli = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createElement("),a("span",{attrs:{class:"hljs-string"}},[s._v("'li'")]),s._v(");\n      li.textContent = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(";\n      appendToElement.appendChild(li);\n    }\n}\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" fragment = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createDocumentFragment();\nappendDataToElement(fragment, data);\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" ul = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{attrs:{class:"hljs-string"}},[s._v("'list'")]),s._v(");\nul.appendChild(fragment);\n")])]),s._v(" "),a("h5",{attrs:{id:"jiang-yuan-shi-yuan-su-kao-bei-dao-yi-ge-tuo-chi-wen-dang-de-jie-dian-zhong-xiu-gai-jie-dian-hou-zai-ti-huan-yuan-shi-de-yuan-su"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jiang-yuan-shi-yuan-su-kao-bei-dao-yi-ge-tuo-chi-wen-dang-de-jie-dian-zhong-xiu-gai-jie-dian-hou-zai-ti-huan-yuan-shi-de-yuan-su","aria-hidden":"true"}},[s._v("¶")]),s._v(" 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素")]),s._v(" "),a("p",[s._v("这样也只会产生一次回流")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("appendDataToElement")]),s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("appendToElement, data")]),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" li;\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < data.length; i++) {\n    \tli = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createElement("),a("span",{attrs:{class:"hljs-string"}},[s._v("'li'")]),s._v(");\n      li.textContent = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'text'")]),s._v(";\n      appendToElement.appendChild(li);\n    }\n}\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" ul = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".getElementById("),a("span",{attrs:{class:"hljs-string"}},[s._v("'list'")]),s._v(")\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" clone = ul.cloneNode("),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(")\nappendDataToElement(clone, data)\nul.parentNode.replaceChild(clone, ul)\n")])]),s._v(" "),a("h1",[s._v("避免出发同步布局事件")]),s._v(" "),a("p",[s._v("上文我们说过，当我们访问元素的一些属性的时候，会导致浏览器强制清空队列，进行强制同步布局。举个例子，比如说我们想将一个p标签数组的宽度赋值为一个元素的宽度，我们可能写出这样的代码：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("initP")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < paragraphs.length; i++) {\n        paragraphs[i].style.width = box.offsetWidth + "),a("span",{attrs:{class:"hljs-string"}},[s._v("'px'")]),s._v(";\n    }\n}\n")])]),s._v(" "),a("p",[s._v("这段代码看上去是没有什么问题，可是其实会造成很大的性能问题。在每次循环的时候，都读取了box的一个offsetWidth属性值，然后利用它来更新p标签的width属性。这就导致了每一次循环的时候，浏览器都必须先使上一次循环中的样式更新操作生效，才能响应本次循环的样式读取操作。"),a("strong",[s._v("每一次循环都会强制浏览器刷新队列")]),s._v("。我们可以优化为:")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" width = box.offsetWidth;\n"),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("initP")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < paragraphs.length; i++) {\n        paragraphs[i].style.width = width + "),a("span",{attrs:{class:"hljs-string"}},[s._v("'px'")]),s._v(";\n    }\n}\n")])])])}],!1,null,null,null);t.default=l.exports}}]);