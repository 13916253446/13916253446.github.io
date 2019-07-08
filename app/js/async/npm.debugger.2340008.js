(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"3uw6":function(a,s,t){"use strict";t.r(s);var n=t("FHgr"),e={name:"NpmDebugger",components:{md:t.n(n).a}},l=t("JFUb");var r=function(a){t("f7A5")},i=Object(l.a)(e,function(){var a=this.$createElement,s=this._self._c||a;return s("div",[s("md")],1)},[],!1,r,"data-v-525348e0",null);s.default=i.exports},FHgr:function(a,s,t){a.exports=t("GByV")},GByV:function(a,s,t){"use strict";t.r(s);var n=t("JFUb"),e=Object(n.a)(null,function(){var a=this;a.$createElement;a._self._c;return a._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("section",[t("h2",{attrs:{id:"npm-diao-shi-ji-qiao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-diao-shi-ji-qiao","aria-hidden":"true"}},[a._v("¶")]),a._v(" npm调试技巧")]),a._v(" "),t("h3",{attrs:{id:"1-zhi-jie-an-zhuang-xiang-dui-lu-jing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-zhi-jie-an-zhuang-xiang-dui-lu-jing","aria-hidden":"true"}},[a._v("¶")]),a._v(" 1. 直接安装相对路径")]),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[a._v("npm install  ~/Documents/演示项目/analyse\n")])]),a._v(" "),t("p",[a._v("最终生成"),t("code",{pre:!0},[a._v("package.json")]),a._v(":")]),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-json"}},[t("span",{attrs:{class:"hljs-string"}},[a._v('"dependencies"')]),a._v(": {\n  "),t("span",{attrs:{class:"hljs-attr"}},[a._v('"analyse"')]),a._v(": "),t("span",{attrs:{class:"hljs-string"}},[a._v('"file:../analyse"')]),a._v(",\n  "),t("span",{attrs:{class:"hljs-attr"}},[a._v('"vue"')]),a._v(": "),t("span",{attrs:{class:"hljs-string"}},[a._v('"^2.5.17"')]),a._v(",\n  "),t("span",{attrs:{class:"hljs-attr"}},[a._v('"vue-router"')]),a._v(": "),t("span",{attrs:{class:"hljs-string"}},[a._v('"^3.0.1"')]),a._v("\n}\n")])]),a._v(" "),t("h3",{attrs:{id:"2-shi-yong-ruan-lian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-shi-yong-ruan-lian","aria-hidden":"true"}},[a._v("¶")]),a._v(" 2. 使用软链")]),a._v(" "),t("p",[t("strong",[a._v("什么是软链：")])]),a._v(" "),t("p",[a._v("比如说我创建了一个 "),t("code",{pre:!0},[a._v("/path/link.js")]),a._v(" 到 "),t("code",{pre:!0},[a._v("/path/file.js")]),a._v(" 的软链接，则当我访问 "),t("code",{pre:!0},[a._v("link.js")]),a._v(" 的时候，实际上相当于访问 "),t("code",{pre:!0},[a._v("file.js")]),a._v(" 。如果我把 "),t("code",{pre:!0},[a._v("file.js")]),a._v(" 删除的话，再去访问 "),t("code",{pre:!0},[a._v("link.js")]),a._v(" 就会报错。")]),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[t("span",{attrs:{class:"hljs-meta"}},[a._v("#")]),t("span",{attrs:{class:"bash"}},[a._v(" 首先进入项目node_modules目录下")]),a._v("\ncd path/to/my-project/node_modules\n"),t("span",{attrs:{class:"hljs-meta"}},[a._v("\n#")]),t("span",{attrs:{class:"bash"}},[a._v(" 创建软链")]),a._v("\nln -s path/to/my-utils my-utils\n")])]),a._v(" "),t("h3",{attrs:{id:"3-npm-link-chuang-jian-ruan-lian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-npm-link-chuang-jian-ruan-lian","aria-hidden":"true"}},[a._v("¶")]),a._v(" 3. "),t("code",{pre:!0},[a._v("npm link")]),a._v("创建软链")]),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[t("span",{attrs:{class:"hljs-meta"}},[a._v("#")]),t("span",{attrs:{class:"bash"}},[a._v(" 指定本地目录")]),a._v("\nnpm link ~/Documents/演示项目/analyse\n")])]),a._v(" "),t("p",[a._v("也可以分步骤的添加：")]),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[t("span",{attrs:{class:"hljs-meta"}},[a._v("#")]),t("span",{attrs:{class:"bash"}},[a._v(" 先到模块目录，把添加到link全局")]),a._v("\ncd path/to/my-utils\nnpm link\n"),t("span",{attrs:{class:"hljs-meta"}},[a._v("\n#")]),t("span",{attrs:{class:"bash"}},[a._v(" 再去项目目录通过包名来 link")]),a._v("\ncd path/to/my-project\nnpm link my-utils\n")])]),a._v(" "),t("h3",{attrs:{id:"diao-shi-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diao-shi-cli","aria-hidden":"true"}},[a._v("¶")]),a._v(" 调试"),t("code",{pre:!0},[a._v("cli")])]),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[t("span",{attrs:{class:"hljs-meta"}},[a._v("#")]),t("span",{attrs:{class:"bash"}},[a._v(" 先到脚手架目录，link到全局")]),a._v("\ncd path/to/cli\nnpm link\n"),t("span",{attrs:{class:"hljs-meta"}},[a._v("\n#")]),t("span",{attrs:{class:"bash"}},[a._v(" 直接使用脚手架命令")]),a._v("\negg-init\n")])]),a._v(" "),t("h3",{attrs:{id:"qu-xiao-ruan-lian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qu-xiao-ruan-lian","aria-hidden":"true"}},[a._v("¶")]),a._v(" 取消软链")]),a._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[a._v("npm unlink my-utils\n")])]),a._v(" "),t("div",{staticClass:"tip"},[t("p",[a._v("创建软链之后，项目的node_modules目录下会多出文件包名的资源文件夹，就可以直接使用当前这个模块了，在vscode里面，可以查看资源包带有箭头标志，如下图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/20190419080045.png",alt:"npm link"}})])]),a._v(" "),t("h2",{attrs:{id:"can-kao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[a._v("¶")]),a._v(" 参考：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/atian25/blog/issues/17"}},[a._v("你所不知道的模块调试技巧")])])])])}],!1,null,null,null);s.default=e.exports},WzB3:function(a,s,t){(a.exports=t("I1BE")(!1)).push([a.i,"",""])},f7A5:function(a,s,t){var n=t("WzB3");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);(0,t("SZ7m").default)("19f0aeb6",n,!0,{})}}]);