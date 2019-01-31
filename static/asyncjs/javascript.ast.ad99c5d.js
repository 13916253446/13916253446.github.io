(window.webpackJsonp=window.webpackJsonp||[]).push([["javascript.ast"],{"8v5X":function(s,a,t){var n=t("QxnS");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("5d72369d",n,!0,{})},HQz9:function(s,a,t){"use strict";t.r(a);var n=t("JFUb"),r=Object(n.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("p",[s._v("抽象语法树是js代码另一种结构映射，可以将"),t("code",{pre:!0},[s._v("js")]),s._v("拆解成"),t("code",{pre:!0},[s._v("AST")]),s._v("，也可以把"),t("code",{pre:!0},[s._v("AST")]),s._v("转成源代码。这中间的过程就是我们的用武之地。 利用 抽象语法属(AST) 可以对你的源代码进行修改、优化，甚至可以打造自己的编译工具。比如你看到这里用了"),t("code",{pre:!0},[s._v("var")]),s._v("不顺眼，你可以分分钟改成"),t("code",{pre:!0},[s._v("let")]),s._v("。 有点类似"),t("code",{pre:!0},[s._v("babel")]),s._v("的功能。")]),s._v(" "),t("h3",{attrs:{id:"ru-he-sheng-cheng-ast"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ru-he-sheng-cheng-ast","aria-hidden":"true"}},[s._v("¶")]),s._v(" 如何生成AST")]),s._v(" "),t("p",[s._v("我们可以大致的想一下如果亲自实现把"),t("code",{pre:!0},[s._v("js")]),s._v("代码转换成结构化的数据我们应该怎么做？\n就像是小时候拆解自己的玩具，在进行组合，或者像老妈给我们做的可口的饭菜，把原材料进行加工处理。\n对于"),t("code",{pre:!0},[s._v("ast")]),s._v("，可能我们会想到使用字符串处理、正则匹配等方法，如果对简单的代码处理我们是可以实现的。\n但是如果能够对随意的一段代码进行处理那就需要考虑非常多的情况。具体如何实现咱们不必过于纠结，这也不是重点。\n但最终的实现里我们能想到方法基本都会被用到。我们可以简化理解，也就是对js代码经过了一系列的加工处理，变成了一盘好吃的饭菜。\n这个做菜过程可能较为复杂，所以我们需要用现成的做菜方法，直接拿过来用就可以了。比如某某浓汤宝，好喝的可以评论下，我打算试试。\n所以我们需要用到"),t("code",{pre:!0},[s._v("esprima")]),s._v("、"),t("code",{pre:!0},[s._v("UglifyJS")]),s._v("等库，做菜的方法不止一种，所以会存在很多这样的三方库，而我们会使用其中一种就可以了")]),s._v(" "),t("h4",{attrs:{id:"yuan-dai-ma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yuan-dai-ma","aria-hidden":"true"}},[s._v("¶")]),s._v(" 源代码")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("fun")]),s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("a,b")]),s._v(")")]),s._v("{\n}\n")])]),s._v(" "),t("h4",{attrs:{id:"zhuan-huan-guo-hou"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zhuan-huan-guo-hou","aria-hidden":"true"}},[s._v("¶")]),s._v(" 转换过后")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"type"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"FunctionDeclaration"')]),s._v(",//函数声明\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"id"')]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"type"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"Identifier"')]),s._v(",//标识符\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"name"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"fun"')]),s._v(" //函数名称\n    },\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"params"')]),s._v(": [//函数参数\n        {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"type"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"Identifier"')]),s._v(",//参数标识符\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"name"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"a"')]),s._v("//参数名称\n        },\n        {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"type"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"Identifier"')]),s._v(",\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"name"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"b"')]),s._v("\n        }\n    ],\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"body"')]),s._v(": {//函数体\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"type"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"BlockStatement"')]),s._v(",//语句块儿\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v('"body"')]),s._v(": []//具体内容为空，因为是空方法\n    },\n}\n")])]),s._v(" "),t("h4",{attrs:{id:"guan-fang-zai-xian-yu-fa-shu-jie-xi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guan-fang-zai-xian-yu-fa-shu-jie-xi","aria-hidden":"true"}},[s._v("¶")]),s._v(" "),t("a",{attrs:{href:"http://esprima.org/demo/parse.html"}},[s._v("官方在线语法树解析")])]),s._v(" "),t("h3",{attrs:{id:"shi-li-ying-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shi-li-ying-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 实例应用")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("把 == 改成全等 ===")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("基础方法")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[s._v("/引入工具包\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" esprima = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'esprima'")]),s._v(");"),t("span",{attrs:{class:"hljs-comment"}},[s._v("//JS语法树模块")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" estraverse = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'estraverse'")]),s._v(");"),t("span",{attrs:{class:"hljs-comment"}},[s._v("//JS语法树遍历各节点")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" escodegen = "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),t("span",{attrs:{class:"hljs-string"}},[s._v("'escodegen'")]),s._v(");"),t("span",{attrs:{class:"hljs-comment"}},[s._v("//JS语法树反编译模块")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("//获取代码ast")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" AST = esprima.parseScript(jsCode);\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("/**\n * \n * @param {遍历语法树} ast \n */")]),s._v("\n"),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("walkIn")]),s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("ast")]),s._v(")")]),s._v("{\n    estraverse.traverse(ast, {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("enter")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("node")]),s._v(") =>")]),s._v(" {\n            toEqual(node);"),t("span",{attrs:{class:"hljs-comment"}},[s._v("//把 == 改为全等 ===")]),s._v("\n            setParseint(node); "),t("span",{attrs:{class:"hljs-comment"}},[s._v("//parseInt(a)-> parseInt(a,10)")]),s._v("\n        }\n    });\n}\n")])])]),s._v(" "),t("li",[t("p",[s._v("修改代码")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-javascript"}},[t("span",{attrs:{class:"hljs-comment"}},[s._v("/**\n * 设置全等\n */")]),s._v("\n"),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("toEqual")]),s._v("("),t("span",{attrs:{class:"hljs-params"}},[s._v("node")]),s._v(") ")]),s._v("{\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (node.operator === "),t("span",{attrs:{class:"hljs-string"}},[s._v("'=='")]),s._v(") {\n        node.operator = "),t("span",{attrs:{class:"hljs-string"}},[s._v("'==='")]),s._v(";\n    }\n}\n")])])])])])])])}],!1,null,null,null);a.default=r.exports},P8wR:function(s,a,t){s.exports=t("HQz9")},QxnS:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},V1IE:function(s,a,t){"use strict";t.r(a);var n=t("P8wR"),r={name:"JavascriptAst",components:{md:t.n(n).a}},e=t("JFUb");var v=function(s){t("8v5X")},l=Object(e.a)(r,function(){var s=this.$createElement,a=this._self._c||s;return a("div",[a("md")],1)},[],!1,v,"data-v-5f9d53e8",null);a.default=l.exports}}]);