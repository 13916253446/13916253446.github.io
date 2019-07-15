(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{Aix9:function(s,a,e){"use strict";e.r(a);var t=e("JFUb"),r=Object(t.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("section",[e("h3",{attrs:{id:"preset-shi-shi-me"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preset-shi-shi-me","aria-hidden":"true"}},[s._v("¶")]),s._v(" "),e("code",{pre:!0},[s._v("preset")]),s._v("是什么")]),s._v(" "),e("p",[e("code",{pre:!0},[s._v("babel")]),s._v("将所有可以转换的语法都写成一个一个的插件，比如转换箭头函数需要"),e("code",{pre:!0},[s._v("@babel/plugin-transform-arrow-functions")]),s._v("，转换"),e("code",{pre:!0},[s._v("let,const")]),s._v("需要"),e("code",{pre:!0},[s._v("@babel/plugin-transform-block-scoping")]),s._v("。")]),s._v(" "),e("div",{staticClass:"tip"},[e("p",[s._v("如果是这样项目就需要配置很多的"),e("code",{pre:!0},[s._v("plugin")]),s._v("，所以官方就把一些常用的插件封装起来，安装这个预设就相当于安装了这些插件，可以吧"),e("code",{pre:!0},[s._v("Preset")]),s._v("理解为套餐，每个套餐里面打包一系列的插件，这样安装套餐就相当于安装了大量的插件。")])]),s._v(" "),e("p",[e("strong",[s._v("可以查看项目下@babel/preset-env/data/plugin-features.js")]),s._v("文件查看当前"),e("code",{pre:!0},[s._v("env")]),s._v("维护的插件列表，也可以直接通过"),e("a",{attrs:{href:"https://github.com/babel/babel-preset-env/blob/master/data/plugin-features.js"}},[s._v("babel-env-plugins")]),s._v("来查看。")]),s._v(" "),e("div",{staticClass:"tip"},[e("p",[s._v("我们可以封装一个"),e("code",{pre:!0},[s._v("preset")]),s._v("给特定的环境使用比如APP端使用，例如"),e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app"}},[s._v("@vue/babel-preset-app")]),s._v("，文档可以查看"),e("a",{attrs:{href:"https://www.babeljs.cn/docs/presets#%E5%88%9B%E5%BB%BA-preset"}},[s._v("创建 Preset")])])]),s._v(" "),e("blockquote",[e("p",[s._v("虽说浏览器的特性支持状况千差万别，但其实可以提炼出两类："),e("br"),s._v("\n1、大家都有，只是 A 语法与 B 语法的区别；"),e("br"),s._v("\n2、不是大家都有：有的有，有的没有。")])]),s._v(" "),e("div",{staticClass:"tip"},[e("p",[s._v("babel 编译过程处理第一种情况 - 统一语法的形态，通常是高版本语法编译成低版本的，比如 ES6 语法编译成 ES5 或 ES3。而 babel-polyfill 处理第二种情况 - 让目标浏览器支持所有特性，不管它是全局的，还是原型的，或是其它。这样，通过 babel-polyfill，不同浏览器在特性支持上就站到同一起跑线。")])]),s._v(" "),e("h3",{attrs:{id:"babel-polyfill-shi-shi-me"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill-shi-shi-me","aria-hidden":"true"}},[s._v("¶")]),s._v(" "),e("code",{pre:!0},[s._v("babel-polyfill")]),s._v("是什么")]),s._v(" "),e("p",[s._v("为什么需要 "),e("code",{pre:!0},[s._v("polyfill")]),s._v(" 这所谓的垫片？前面聊到 "),e("code",{pre:!0},[s._v("@babel/preset-env")]),s._v(" 时，不是说只要定义好我想支持的目标浏览器，"),e("code",{pre:!0},[s._v("babel")]),s._v(" 就能编译出能运行在目标浏览器上的代码吗？")]),s._v(" "),e("div",{staticClass:"tip"},[e("p",[s._v("拿 "),e("code",{pre:!0},[s._v("findIndex")]),s._v(" 来说,IE 11不支持该方法，"),e("code",{pre:!0},[s._v("babel")]),s._v("只能转译语法层面的，即使编译，不支持"),e("code",{pre:!0},[s._v("findIndex")]),s._v("的浏览器还是不兼容，这时候就需要垫片"),e("code",{pre:!0},[s._v("polyfill")]),s._v("：如果目标环境中已经存在 "),e("code",{pre:!0},[s._v("findIndex")]),s._v("，我们什么都不做，如果没有，我们就在 "),e("code",{pre:!0},[s._v("Array")]),s._v(" 的原型中定义一个。可以看"),e("code",{pre:!0},[s._v("findInex")]),s._v("的垫片如下：")])]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-javascript"}},[e("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!"),e("span",{attrs:{class:"hljs-built_in"}},[s._v("Array")]),s._v(".prototype.findIndex) {\n  "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".defineProperty("),e("span",{attrs:{class:"hljs-built_in"}},[s._v("Array")]),s._v(".prototype, "),e("span",{attrs:{class:"hljs-string"}},[s._v("'findIndex'")]),s._v(", {\n    "),e("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),e("span",{attrs:{class:"hljs-function"}},[e("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),e("span",{attrs:{class:"hljs-params"}},[s._v("predicate")]),s._v(") ")]),s._v("{\n      "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),e("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(" == "),e("span",{attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(") {\n        "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("throw")]),s._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("TypeError")]),s._v("("),e("span",{attrs:{class:"hljs-string"}},[s._v("'\"this\" is null or not defined'")]),s._v(");\n      }\n      "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" o = "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v("("),e("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(");\n      "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" len = o.length >>> "),e("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n      "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),e("span",{attrs:{class:"hljs-keyword"}},[s._v("typeof")]),s._v(" predicate !== "),e("span",{attrs:{class:"hljs-string"}},[s._v("'function'")]),s._v(") {\n        "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("throw")]),s._v(" "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("TypeError")]),s._v("("),e("span",{attrs:{class:"hljs-string"}},[s._v("'predicate must be a function'")]),s._v(");\n      }\n      "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" thisArg = "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("arguments")]),s._v("["),e("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("];\n      "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" k = "),e("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(";\n      "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("while")]),s._v(" (k < len) {\n        "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" kValue = o[k];\n        "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (predicate.call(thisArg, kValue, k, o)) {\n          "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" k;\n        }\n        k++;\n      }\n      "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),e("span",{attrs:{class:"hljs-number"}},[s._v("-1")]),s._v(";\n    }\n  });\n}\n")])]),s._v(" "),e("h3",{attrs:{id:"babel-runtime-shi-shi-me"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel-runtime-shi-shi-me","aria-hidden":"true"}},[s._v("¶")]),s._v(" "),e("code",{pre:!0},[s._v("babel-runtime")]),s._v("是什么")]),s._v(" "),e("p",[s._v("我们拿 "),e("code",{pre:!0},[s._v("Object.assign")]),s._v(" 为例，剖析下 "),e("code",{pre:!0},[s._v("babel-polyfill")]),s._v(" 与 "),e("code",{pre:!0},[s._v("babel-runtime")]),s._v(" 的异同。")]),s._v(" "),e("p",[s._v("我们知道，IE 11 不支持 "),e("code",{pre:!0},[s._v("Object.assign")]),s._v("，此时，我们有俩种候选方案：")]),s._v(" "),e("p",[s._v("1、引入 "),e("code",{pre:!0},[s._v("babel-polyfill")]),s._v("，补丁一打，"),e("code",{pre:!0},[s._v("Object.assign")]),s._v(" 就被创造出来\n2、配置 "),e("code",{pre:!0},[s._v("@babel/plugin-transform-object-assign")])]),s._v(" "),e("p",[s._v("第二种方案中，"),e("code",{pre:!0},[s._v("babel")]),s._v(" 会将所有的 "),e("code",{pre:!0},[s._v("Object.assign")]),s._v(" 替换成 "),e("code",{pre:!0},[s._v("_extends")]),s._v(" 这样一个辅助函数。如下所示：")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-javascript"}},[e("span",{attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".assign({}, {})\n")])]),s._v(" "),e("p",[e("strong",[s._v("编译成")])]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-javascript"}},[e("span",{attrs:{class:"hljs-function"}},[e("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),e("span",{attrs:{class:"hljs-title"}},[s._v("_extends")]),s._v("("),e("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{ _extends = "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".assign || "),e("span",{attrs:{class:"hljs-function"}},[e("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),e("span",{attrs:{class:"hljs-params"}},[s._v("target")]),s._v(") ")]),s._v("{ "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),e("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),e("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("; i < "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("arguments")]),s._v(".length; i++) { "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" source = "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("arguments")]),s._v("[i]; "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),e("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" key "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("in")]),s._v(" source) { "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),e("span",{attrs:{class:"hljs-built_in"}},[s._v("Object")]),s._v(".prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" target; }; "),e("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" _extends.apply("),e("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(", "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("arguments")]),s._v("); }\n\n_extends({}, {});\n")])]),s._v(" "),e("div",{staticClass:"warning"},[e("p",[s._v("问题是，如果你的项目里有 100 个文件，其中有 50 个文件里写了 Object.assign，那么，坏消息来了，_extends 辅助函数会出现 50 次")])]),s._v(" "),e("p",[s._v("怎么办？我们自然而然会想到把 "),e("code",{pre:!0},[s._v("_extends")]),s._v(" 分离出去，然后在每个文件中引入 - 这正是 "),e("code",{pre:!0},[s._v("@babel/runtime")]),s._v(" 的作用：")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-javascript"}},[e("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _extends = "),e("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),e("span",{attrs:{class:"hljs-string"}},[s._v('"@babel/runtime/helpers/extends"')]),s._v(");\n\n_extends({}, {});\n")])]),s._v(" "),e("h3",{attrs:{id:"zhi-xing-shun-xu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zhi-xing-shun-xu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 执行顺序")]),s._v(" "),e("ul",[e("li",[s._v("Plugin 会运行在 Preset 之前。")]),s._v(" "),e("li",[s._v("Plugin 会从前到后顺序执行。")]),s._v(" "),e("li",[s._v("Preset 的顺序则 刚好相反(从后向前)。")])]),s._v(" "),e("div",{staticClass:"tip"},[e("p",[s._v("preset 的逆向顺序主要是为了保证向后兼容，因为大多数用户的编写顺序是 ['es2015', 'stage-0']。这样必须先执行 stage-0 才能确保 babel 不报错。因此我们编排 preset 的时候，也要注意顺序，其实只要"),e("strong",[s._v("按照规范的时间顺序")]),s._v("列出即可。")])]),s._v(" "),e("h3",{attrs:{id:"cha-jian-he-yu-she-pei-zhi-xiang-de-ge-shi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cha-jian-he-yu-she-pei-zhi-xiang-de-ge-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 插件和预设配置项的格式")]),s._v(" "),e("pre",{pre:!0},[e("code",{attrs:{class:"hljs language-javascript"}},[e("span",{attrs:{class:"hljs-string"}},[s._v('"presets"')]),s._v(": [\n  "),e("span",{attrs:{class:"hljs-comment"}},[s._v("// 带了配置项，自己变成数组")]),s._v("\n  [\n    "),e("span",{attrs:{class:"hljs-comment"}},[s._v("// 第一个元素是名字")]),s._v("\n    "),e("span",{attrs:{class:"hljs-string"}},[s._v('"env"')]),s._v(",\n    "),e("span",{attrs:{class:"hljs-comment"}},[s._v("// 第二个元素是对象，也就是配置项")]),s._v("\n    {\n      "),e("span",{attrs:{class:"hljs-string"}},[s._v('"module"')]),s._v(": "),e("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }\n  ],\n  "),e("span",{attrs:{class:"hljs-comment"}},[s._v("// 不带配置项，直接列出名字")]),s._v("\n  "),e("span",{attrs:{class:"hljs-string"}},[s._v('"stage-0"')]),s._v("\n]\n")])]),s._v(" "),e("h2",{attrs:{id:"zong-jie-ji-dian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zong-jie-ji-dian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 总结几点：")]),s._v(" "),e("div",{staticClass:"tip"},[e("p",[s._v("1、"),e("code",{pre:!0},[s._v("presets")]),s._v("实际上就是一系列的插件集合"),e("br"),e("br"),s._v("\n2、"),e("code",{pre:!0},[s._v("babel-runtime")]),s._v("实际上和"),e("code",{pre:!0},[s._v("babel-polyfill")]),s._v("干的事情是一样的，但他不会污染全局命名空间和原型"),e("br"),e("br"),s._v("\n3、"),e("code",{pre:!0},[s._v("babel-runtime")]),s._v("是一些垫片也就是实现的方法，而分离这些方法，是需要插件支持的("),e("code",{pre:!0},[s._v("transform-runtime")]),s._v(")所以，这两个必须一起使用"),e("br"),e("br"),s._v("\n4、"),e("code",{pre:!0},[s._v("babel-runtime")]),s._v("既然是垫片就必须是项目依赖('dependencies')"),e("br"),e("br"),s._v("\n5、虽然"),e("code",{pre:!0},[s._v("babel-runtime")]),s._v("和"),e("code",{pre:!0},[s._v("babel-polyfill")]),s._v("干的事情差不多，但是比如"),e("code",{pre:!0},[s._v("myArray.includes(1)")]),s._v("这些实例方法，"),e("code",{pre:!0},[s._v("babel-runtime")]),s._v("是无能为力的。只能使用"),e("code",{pre:!0},[s._v("babel-polyfill")]),e("br"),e("br"),s._v("\n6、"),e("code",{pre:!0},[s._v("babel-polyfill")]),s._v(" 与 "),e("code",{pre:!0},[s._v("babel-runtime")]),s._v(" 的一大区别，前者改造目标浏览器，让你的浏览器拥有本来不支持的特性；后者改造你的代码，让你的代码能在所有目标浏览器上运行，但不改造浏览器")])]),s._v(" "),e("h2",{attrs:{id:"can-kao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 参考：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md"}},[s._v("corejs@3")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://babeljs.io/blog/2019/03/19/7.4.0#code-placeholders-9364-https-githubcom-babel-babel-pull-9364"}},[s._v("babel更新日志")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://blog.zfanw.com/babel-js/#x3-babel-runtime"}},[s._v("babel 7 教程")])]),s._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/q/1010000005596587"}},[s._v("babel的polyfill和runtime的区别")])])])])}],!1,null,null,null);a.default=r.exports},e0wr:function(s,a,e){(s.exports=e("I1BE")(!1)).push([s.i,"",""])},eKgY:function(s,a,e){s.exports=e("Aix9")},vtIS:function(s,a,e){"use strict";e.r(a);var t=e("eKgY"),r={name:"ProjectUnderstandsBabel",components:{md:e.n(t).a}},l=e("JFUb");var v=function(s){e("y2HN")},_=Object(l.a)(r,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,v,"data-v-6a3a24b0",null);a.default=_.exports},y2HN:function(s,a,e){var t=e("e0wr");"string"==typeof t&&(t=[[s.i,t,""]]),t.locals&&(s.exports=t.locals);(0,e("SZ7m").default)("6265344c",t,!0,{})}}]);