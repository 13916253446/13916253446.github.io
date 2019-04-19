(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.versionManager"],{"2kpn":function(a,e,v){"use strict";v.r(e);var s=v("JFUb"),t=Object(s.a)(null,function(){var a=this;a.$createElement;a._self._c;return a._m(0)},[function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("section",[v("h3",{attrs:{id:"ban-ben-hao-de-ming-ming"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ban-ben-hao-de-ming-ming","aria-hidden":"true"}},[a._v("¶")]),a._v(" 版本号的命名")]),a._v(" "),v("p",[v("strong",[a._v("SemVer")])]),a._v(" "),v("p",[a._v("根据国际主流的惯例，我们使用「语义化版本（Semantic Versioning）」的命名方式，有时简称 "),v("code",{pre:!0},[a._v("SemVer")]),a._v("。")]),a._v(" "),v("p",[a._v("语义化版本号（以下简称「版本号」）的格式是："),v("code",{pre:!0},[a._v("<major>")]),a._v("."),v("code",{pre:!0},[a._v("<minor>")]),a._v("."),v("code",{pre:!0},[a._v("<patch>")]),a._v("。即使用三位非负整数，以点号 . 连接。")]),a._v(" "),v("p",[a._v("如：1.4.15、6.2.0。")]),a._v(" "),v("h3",{attrs:{id:"mei-wei-ban-ben-hao-de-han-yi"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mei-wei-ban-ben-hao-de-han-yi","aria-hidden":"true"}},[a._v("¶")]),a._v(" 每位版本号的含义")]),a._v(" "),v("ul",[v("li",[v("code",{pre:!0},[a._v("<major>")]),a._v(" 即主版本号，俗称大版本升级。改动到主版本号时，标志着 API 发生了巨大变化，包括但不限于新增特性、修改机制、删除功能")])]),a._v(" "),v("div",{staticClass:"tip"},[v("p",[a._v("一般不兼容上一个版本")])]),a._v(" "),v("ul",[v("li",[v("code",{pre:!0},[a._v("<minor>")]),a._v(" 即次版本号，俗称小版本升级。当我们进行常规的新增或修改功能时，改动次版本号，但是 "),v("strong",[a._v("必须是向前兼容的")]),a._v("。这也意味着我们 "),v("strong",[a._v("不能直接删除某个功能")]),a._v("。如若必要，我们可以在 changelog 中标记某项功能为「即将删除（Deprecated）」，然后在下一个大版本中将其彻底删除。")])]),a._v(" "),v("div",{staticClass:"tip"},[v("p",[a._v("小版本的更改，必须是向前兼容的")])]),a._v(" "),v("ul",[v("li",[v("code",{pre:!0},[a._v("<patch>")]),a._v(" 即修订号，俗称 bug 修复。顾名思义，如果仅仅为了修复或调整一些小问题，我们就只改动修订号。")])]),a._v(" "),v("div",{staticClass:"tip"},[v("p",[a._v("一般就是修复bug")])]),a._v(" "),v("h3",{attrs:{id:"yu-fa-ban-ben-hao"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#yu-fa-ban-ben-hao","aria-hidden":"true"}},[a._v("¶")]),a._v(" 预发版本号")]),a._v(" "),v("p",[a._v("当要发布大版本或者核心的Feature时，但是又不能保证这个版本的功能 100% 正常。这个时候就需要通过发布先行版本。比较常见的先行版本包括："),v("strong",[a._v("内测版")]),a._v("、"),v("strong",[a._v("灰度版本")]),a._v("了和"),v("strong",[a._v("RC版本")]),a._v("。Semver规范中使用"),v("code",{pre:!0},[a._v("alpha")]),a._v("、"),v("code",{pre:!0},[a._v("beta")]),a._v("、"),v("code",{pre:!0},[a._v("rc")]),a._v("(以前叫做gama)来修饰即将要发布的版本。")]),a._v(" "),v("p",[a._v("预发版本号的格式是 "),v("code",{pre:!0},[a._v("<major>")]),a._v("."),v("code",{pre:!0},[a._v("<minor>")]),a._v("."),v("code",{pre:!0},[a._v("<patch>")]),a._v("-"),v("code",{pre:!0},[a._v("<tag>")]),a._v("，即前半部分和常规版本号相同，然后跟上连接符 -，后面再跟上字母数字点号连接符（"),v("code",{pre:!0},[a._v("[0-9A-Za-z-.]")]),a._v("）。")]),a._v(" "),v("ul",[v("li",[v("strong",[a._v("alpha")]),a._v(": 内部版本")]),a._v(" "),v("li",[v("strong",[a._v("beta")]),a._v(": 公测版本")]),a._v(" "),v("li",[v("strong",[a._v("rc")]),a._v(": 即Release candiate，正式版本的候选版本")])]),a._v(" "),v("p",[a._v("下面是react的版本：")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/162cc6d0b4c8e782",alt:"version"}})]),a._v(" "),v("h3",{attrs:{id:"xiang-mu-dui-bao-de-yi-lai"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xiang-mu-dui-bao-de-yi-lai","aria-hidden":"true"}},[a._v("¶")]),a._v(" 项目对包的依赖")]),a._v(" "),v("p",[a._v("当执行"),v("code",{pre:!0},[a._v("npm install package -S")]),a._v(" 来安装三方包时，npm 会首先安装包的"),v("strong",[a._v("最新版本(latest)")]),a._v("，然后将包名及版本号写入到 package.json 文件中")]),a._v(" "),v("p",[a._v("项目对包的依赖可以使用下面的 3 种方法来表示(假设当前版本号是 16.2.0):")]),a._v(" "),v("ul",[v("li",[a._v("兼容模块新发布的补丁版本："),v("code",{pre:!0},[a._v("~16.2.0")]),a._v(", "),v("code",{pre:!0},[a._v("16.2.x")]),a._v(", "),v("code",{pre:!0},[a._v("16.2")])]),a._v(" "),v("li",[a._v("兼容模块新发布的小版本、补丁版本："),v("code",{pre:!0},[a._v("^16.2.0")]),a._v(", "),v("code",{pre:!0},[a._v("16.x")]),a._v(", "),v("code",{pre:!0},[a._v("16")])]),a._v(" "),v("li",[a._v("兼容模块新发布的大版本、小版本、补丁版本："),v("code",{pre:!0},[a._v("*")]),a._v(", "),v("code",{pre:!0},[a._v("x")])])]),a._v(" "),v("h3",{attrs:{id:"npm-bao-fa-bu-de-yu-an-zhuang"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#npm-bao-fa-bu-de-yu-an-zhuang","aria-hidden":"true"}},[a._v("¶")]),a._v(" npm包发布的与安装")]),a._v(" "),v("p",[a._v("例：初始版本为1.0.0")]),a._v(" "),v("pre",{pre:!0},[v("code",{attrs:{class:"hljs language-shell"}},[v("span",{attrs:{class:"hljs-meta"}},[a._v("#")]),v("span",{attrs:{class:"bash"}},[a._v("预备补丁版本号 v1.0.1-0")]),a._v("\nnpm version prepatch\n"),v("span",{attrs:{class:"hljs-meta"}},[a._v("\n#")]),v("span",{attrs:{class:"bash"}},[a._v("预发布版本号 v1.0.1-1")]),a._v("\nnpm version prerelease\n"),v("span",{attrs:{class:"hljs-meta"}},[a._v("\n#")]),v("span",{attrs:{class:"bash"}},[a._v("补丁版本号 v1.0.2")]),a._v("\nnpm version patch\n"),v("span",{attrs:{class:"hljs-meta"}},[a._v("\n#")]),v("span",{attrs:{class:"bash"}},[a._v("预备次版本号 v1.1.0-0")]),a._v("\nnpm version preminor\n"),v("span",{attrs:{class:"hljs-meta"}},[a._v("\n#")]),v("span",{attrs:{class:"bash"}},[a._v("次版本号 v1.1.0")]),a._v("\nnpm version minor\n"),v("span",{attrs:{class:"hljs-meta"}},[a._v("\n#")]),v("span",{attrs:{class:"bash"}},[a._v("预备主版本号 v2.0.0-0")]),a._v("\nnpm version premajor\n"),v("span",{attrs:{class:"hljs-meta"}},[a._v("\n#")]),v("span",{attrs:{class:"bash"}},[a._v("主版本号 v2.0.0")]),a._v("\nnpm version major\n")])]),a._v(" "),v("div",{staticClass:"warning"},[v("p",[a._v("当仓库已经被"),v("code",{pre:!0},[a._v("git")]),a._v("初始化了，那么运行"),v("code",{pre:!0},[a._v("npm version")]),a._v("修改完版本号以后，还会运行"),v("code",{pre:!0},[a._v("git add")]),a._v(" 、"),v("code",{pre:!0},[a._v("git commit")]),a._v("和"),v("code",{pre:!0},[a._v("git tag")]),a._v('的命令，其中commit的信息默认是自改完的版本号。如果想自定义commit的信息，可以提供 -m 或者 —message 的选项，如果有"%s"的符号，会被替换为版本号。\n'),v("code",{pre:!0},[a._v('npm version patch -m "Upgrade to %s for reasons"')])])]),a._v(" "),v("p",[v("strong",[a._v("如何发布预发版本的包")])]),a._v(" "),v("div",{staticClass:"tip"},[v("p",[a._v("执行"),v("code",{pre:!0},[a._v("npm publish")]),a._v("的时候默认指定了"),v("code",{pre:!0},[a._v("tag")]),a._v("值就是"),v("code",{pre:!0},[a._v("latest")]),a._v("默认是稳定版本发布，相当于："),v("br"),a._v(" "),v("code",{pre:!0},[a._v("npm publish --tag latest")])])]),a._v(" "),v("p",[a._v("比如发布"),v("code",{pre:!0},[a._v("16.9.0-alpha.0")]),a._v("版本的内测包")]),a._v(" "),v("ul",[v("li",[a._v("设置"),v("code",{pre:!0},[a._v("version")])])]),a._v(" "),v("pre",{pre:!0},[v("code",{attrs:{class:"hljs language-json"}},[a._v("{\n  "),v("span",{attrs:{class:"hljs-attr"}},[a._v('"version"')]),a._v(": "),v("span",{attrs:{class:"hljs-string"}},[a._v('"16.9.0-alpha.0"')]),a._v("\n}\n")])]),a._v(" "),v("ul",[v("li",[a._v("设置发布"),v("code",{pre:!0},[a._v("tag")])])]),a._v(" "),v("pre",{pre:!0},[v("code",{attrs:{class:"hljs language-shell"}},[a._v("npm publish --tag alpha\n")])]),a._v(" "),v("p",[a._v("比如安装"),v("code",{pre:!0},[a._v("16.9.0-alpha.0")]),a._v("版本的内测包：")]),a._v(" "),v("p",[a._v("可以通过指定"),v("code",{pre:!0},[a._v("tag")]),a._v("的方式")]),a._v(" "),v("pre",{pre:!0},[v("code",{attrs:{class:"hljs language-shell"}},[a._v("npm install react@alpha\n")])]),a._v(" "),v("div",{staticClass:"warning"},[v("p",[a._v("一个tag只会存在一个包，如果发布了新的内测包"),v("code",{pre:!0},[a._v("alpha")]),a._v("，那么"),v("code",{pre:!0},[a._v("16.9.0-alpha.0")]),a._v("这个包就变成了"),v("code",{pre:!0},[a._v("latest")]),a._v("包")])]),a._v(" "),v("p",[a._v("也可以直接通过版本号来安装")]),a._v(" "),v("pre",{pre:!0},[v("code",{attrs:{class:"hljs language-shell"}},[a._v("npm install react@16.9.0-alpha.0\n")])]),a._v(" "),v("h3",{attrs:{id:"jiang-yu-fa-ban-ben-de-bao-she-zhi-wei-wen-ding-ban-ben-de-bao"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jiang-yu-fa-ban-ben-de-bao-she-zhi-wei-wen-ding-ban-ben-de-bao","aria-hidden":"true"}},[a._v("¶")]),a._v(" 将预发版本的包设置为稳定版本的包")]),a._v(" "),v("p",[a._v("比如公测包("),v("code",{pre:!0},[a._v("beta")]),a._v(")，稳定后，需要将"),v("code",{pre:!0},[a._v("beta")]),a._v("包设置为"),v("code",{pre:!0},[a._v("latest")]),a._v("包，让用户使用")]),a._v(" "),v("p",[a._v("那么就是使用：")]),a._v(" "),v("pre",{pre:!0},[v("code",{attrs:{class:"hljs language-shell"}},[a._v("npm dist-tag add <pkg>@<version> [<tag>]\n")])]),a._v(" "),v("p",[a._v("比如将"),v("code",{pre:!0},[a._v("16.9.0-alpha.0")]),a._v("设置成稳定包：")]),a._v(" "),v("pre",{pre:!0},[v("code",{attrs:{class:"hljs language-shell"}},[a._v("npm dist-tag add react@16.9.0-alpha.0 latest\n")])]),a._v(" "),v("h3",{attrs:{id:"can-kao"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#can-kao","aria-hidden":"true"}},[a._v("¶")]),a._v(" 参考：")]),a._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://juejin.im/post/5bd32ecff265da0ab33193b4"}},[a._v("如何开发和维护一个npm项目")])])])])}],!1,null,null,null);e.default=t.exports},F98R:function(a,e,v){"use strict";v.r(e);var s=v("VNFz"),t={name:"NpmVersionManager",components:{md:v.n(s).a}},_=v("JFUb");var r=function(a){v("z1zA")},n=Object(_.a)(t,function(){var a=this.$createElement,e=this._self._c||a;return e("div",[e("md")],1)},[],!1,r,"data-v-77498b28",null);e.default=n.exports},VNFz:function(a,e,v){a.exports=v("2kpn")},xQLs:function(a,e,v){(a.exports=v("I1BE")(!1)).push([a.i,"",""])},z1zA:function(a,e,v){var s=v("xQLs");"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);(0,v("SZ7m").default)("33466524",s,!0,{})}}]);