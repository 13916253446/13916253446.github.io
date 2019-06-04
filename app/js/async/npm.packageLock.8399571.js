(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"0o5m":function(n,a,e){(n.exports=e("I1BE")(!1)).push([n.i,"",""])},LkYp:function(n,a,e){var i=e("0o5m");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e("SZ7m").default)("31bc910a",i,!0,{})},fNWt:function(n,a,e){"use strict";e.r(a);var i=e("JFUb"),t=Object(i.a)(null,function(){var n=this;n.$createElement;n._self._c;return n._m(0)},[function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("section",[e("p",[n._v("场景如下：")]),n._v(" "),e("p",[n._v("在一个团队内部，一个开发同学对领导说他的项目有问题，然后领导拉下项目之后，执行"),e("code",{pre:!0},[n._v("npm install")]),n._v("发现没有任何问题，可能的一个原因就是两个人安装的"),e("code",{pre:!0},[n._v("npm包")]),n._v("不一致，比如说项目中有使用到一个组件库，开发同学开发的时候，使用的是"),e("code",{pre:!0},[n._v("1.0.0")]),n._v("，但是这个版本有bug，然后组件库更新到"),e("code",{pre:!0},[n._v("1.0.1")]),n._v("将原有的"),e("code",{pre:!0},[n._v("bug")]),n._v("修复了，然后领导安装的包就没有问题，这就导致问题难以复现，多个人的开发环境依赖不一致的问题。")]),n._v(" "),e("div",{staticClass:"tip"},[e("p",[n._v("而package-lock.json的作用就是用来保证我们的应用程序依赖之间的关系是一致的, 兼容的。本地开发环境和线上编译环境依赖一致的作用。")])]),n._v(" "),e("h3",{attrs:{id:"1-npm-5-0-x-ban-ben-bu-guan-package-json-zen-me-bian-npm-i-shi-du-hui-gen-ju-lock-wen-jian-xia-zai"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1-npm-5-0-x-ban-ben-bu-guan-package-json-zen-me-bian-npm-i-shi-du-hui-gen-ju-lock-wen-jian-xia-zai","aria-hidden":"true"}},[n._v("¶")]),n._v(" 1、npm 5.0.x 版本，不管package.json怎么变，npm i 时都会根据lock文件下载")]),n._v(" "),e("div",{staticClass:"warning"},[e("p",[n._v("这就引发一个问题，如果"),e("code",{pre:!0},[n._v("lock")]),n._v("文件里面的内容不变，想要升级原有的"),e("code",{pre:!0},[n._v("npm包")]),n._v("是不可能的，因为使用都会从"),e("code",{pre:!0},[n._v("lock")]),n._v("里面读取依赖的具体数据")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/npm/npm/issues/16866"}},[n._v("package-lock.json file not updated after package.json file is changed · Issue #16866 · npm/npm")])]),n._v(" "),e("h3",{attrs:{id:"2-5-1-0-ban-ben-hou-npm-install-hui-wu-shi-lock-wen-jian-qu-xia-zai-zui-xin-de-npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#2-5-1-0-ban-ben-hou-npm-install-hui-wu-shi-lock-wen-jian-qu-xia-zai-zui-xin-de-npm","aria-hidden":"true"}},[n._v("¶")]),n._v(" 2、5.1.0版本后 npm install 会无视lock文件 去下载最新的npm")]),n._v(" "),e("div",{staticClass:"warning"},[e("p",[n._v("这就引发不同的地方，项目依赖不一致的问题")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/npm/npm/issues/17979"}},[n._v("why is package-lock being ignored? · Issue #17979 · npm/npm")])]),n._v(" "),e("h3",{attrs:{id:"3-5-4-2-ban-ben-hou-package-json-he-lock-wen-jian-bu-tong-na-me-zhi-xing-npm-i-shi-npm-hui-gen-ju-package-zhong-de-ban-ben-hao-yi-ji-yu-yi-han-yi-qu-xia-zai-zui-xin-de-bao-bing-geng-xin-zhi-lock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#3-5-4-2-ban-ben-hou-package-json-he-lock-wen-jian-bu-tong-na-me-zhi-xing-npm-i-shi-npm-hui-gen-ju-package-zhong-de-ban-ben-hao-yi-ji-yu-yi-han-yi-qu-xia-zai-zui-xin-de-bao-bing-geng-xin-zhi-lock","aria-hidden":"true"}},[n._v("¶")]),n._v(" 3、5.4.2版本后，package.json和lock文件不同，那么执行"),e("code",{pre:!0},[n._v("npm i")]),n._v("时npm会根据package中的版本号以及语义含义去下载最新的包，并更新至lock")]),n._v(" "),e("p",[n._v("如果两者是同一状态，那么执行"),e("code",{pre:!0},[n._v("npm i")]),n._v("都会根据lock下载，不会理会package实际包的版本是否有新。")]),n._v(" "),e("div",{staticClass:"tip"},[e("p",[n._v("这样就能解决又根据"),e("code",{pre:!0},[n._v("lock")]),n._v("保证不同的地方依赖项一致的问题，又能解决可以手动修改依赖项版本的问题")])]),n._v(" "),e("h3",{attrs:{id:"can-kao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[n._v("¶")]),n._v(" 参考：")]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.zhihu.com/question/62331583"}},[n._v("npm install 生成的package-lock.json是什么文件？有什么用?")])])])])}],!1,null,null,null);a.default=t.exports},kB1o:function(n,a,e){n.exports=e("fNWt")},ozAp:function(n,a,e){"use strict";e.r(a);var i=e("kB1o"),t={name:"NpmPackageLock",components:{md:e.n(i).a}},s=e("JFUb");var o=function(n){e("LkYp")},c=Object(s.a)(t,function(){var n=this.$createElement,a=this._self._c||n;return a("div",[a("md")],1)},[],!1,o,"data-v-0626b714",null);a.default=c.exports}}]);