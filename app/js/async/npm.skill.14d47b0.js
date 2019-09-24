(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"40q9":function(s,t,a){s.exports=a("aR9P")},"B+KJ":function(s,t,a){(s.exports=a("I1BE")(!1)).push([s.i,"",""])},F320:function(s,t,a){var _=a("B+KJ");"string"==typeof _&&(_=[[s.i,_,""]]),_.locals&&(s.exports=_.locals);(0,a("SZ7m").default)("0c882734",_,!0,{})},UtjK:function(s,t,a){"use strict";a.r(t);var _=a("40q9"),n={name:"NpmSkill",components:{md:a.n(_).a}},v=a("JFUb");var r=function(s){a("F320")},e=Object(v.a)(n,function(){var s=this.$createElement,t=this._self._c||s;return t("div",[t("md")],1)},[],!1,r,"data-v-48f26036",null);t.default=e.exports},aR9P:function(s,t,a){"use strict";a.r(t);var _=a("JFUb"),n=Object(_.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("npx命令")]),s._v(" "),a("p",[s._v("这个实在npm"),a("code",{pre:!0},[s._v("v5.2.0")]),s._v("引入的一条命令。引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。")]),s._v(" "),a("h3",{attrs:{id:"wei-shi-me-yin-ru-zhe-ge-ming-ling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wei-shi-me-yin-ru-zhe-ge-ming-ling","aria-hidden":"true"}},[s._v("¶")]),s._v(" 为什么引入这个命令")]),s._v(" "),a("p",[s._v("举个例子，我们开发中要运行 parcel 命令来打包："),a("code",{pre:!0},[s._v("parcel index.html")]),s._v("，以前有这么几种方式：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("全局安装 "),a("code",{pre:!0},[s._v("parcel")]),s._v("，但有时不同项目使用不同版本，不允许使用全局包，只能考虑下面一些方法")])]),s._v(" "),a("li",[a("p",[s._v("使用 "),a("code",{pre:!0},[s._v("npm scripts")]),s._v("，在 package.json 加一个 "),a("code",{pre:!0},[s._v("script")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[a("span",{attrs:{class:"hljs-string"}},[s._v('"scripts"')]),s._v(": {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"start"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"parcel index.html"')]),s._v("\n}\n")])])]),s._v(" "),a("li",[a("p",[s._v("将 node_modules 的可执行目录加到 "),a("code",{pre:!0},[s._v("PATH")]),s._v(" 中")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("alias npmx=PATH=$(npm bin):"),a("span",{attrs:{class:"hljs-variable"}},[s._v("$PATH")]),s._v("\nnpmx parcel index.html\n")])])]),s._v(" "),a("li",[a("p",[s._v("指定可执行命令路径")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("/node_modules/.bin/parcel index.html\n")])])])]),s._v(" "),a("p",[s._v("现在我们有了"),a("code",{pre:!0},[s._v("npx")]),s._v("命令，就不在需要考虑以上方法了（其实\n"),a("code",{pre:!0},[s._v("npx")]),s._v("是对方法 3 的封装）。当我们执行"),a("code",{pre:!0},[s._v("npx parcel index.html")]),s._v("时，会自动去"),a("code",{pre:!0},[s._v("./node_modules/.bin")]),s._v("目录下搜索")]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("npx")]),s._v("还允许我们单次执行命令而不需要安装，例如：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("npx create-react-app my-cool-new-app\n")])]),s._v(" "),a("p",[s._v("这条命令会"),a("strong",[s._v("临时")]),s._v("安装 create-react-app 包，命令完成后 create-react-app 会删掉，不会出现在 global 中。下次再执行，还是会重新临时安装。")]),s._v(" "),a("h1",[s._v("什么是npm脚本")]),s._v(" "),a("p",[s._v("npm 允许在"),a("code",{pre:!0},[s._v("package.json")]),s._v("文件里面，使用"),a("code",{pre:!0},[s._v("scripts")]),s._v("字段定义脚本命令。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"build"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"node build.js"')]),s._v("\n  }\n}\n")])]),s._v(" "),a("p",[s._v("上面代码是"),a("code",{pre:!0},[s._v("package.json")]),s._v("文件的一个片段，里面的"),a("code",{pre:!0},[s._v("scripts")]),s._v("字段是一个对象。它的每一个属性，对应一段脚本。比如，"),a("code",{pre:!0},[s._v("build")]),s._v("命令对应的脚本是"),a("code",{pre:!0},[s._v("node build.js")]),s._v("。")]),s._v(" "),a("p",[s._v("命令行下使用"),a("code",{pre:!0},[s._v("npm run")]),s._v("命令，就可以执行这段脚本。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("$ npm run build\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("# 等同于执行")]),s._v("\n$ node build.js\n")])]),s._v(" "),a("p",[s._v("这些定义在"),a("code",{pre:!0},[s._v("package.json")]),s._v("里面的脚本，就称为 npm 脚本。它的优点很多。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("项目的相关脚本，可以集中在一个地方。")])]),s._v(" "),a("li",[a("p",[s._v("不同项目的脚本命令，只要功能相同，就可以有同样的对外接口。用户不需要知道怎么测试你的项目，只要运行"),a("code",{pre:!0},[s._v("npm run test")]),s._v("即可。")])]),s._v(" "),a("li",[a("p",[s._v("可以利用 npm 提供的很多辅助功能。")])])]),s._v(" "),a("p",[s._v("查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的"),a("code",{pre:!0},[s._v("npm run")]),s._v("命令。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("$ npm run\n")])]),s._v(" "),a("h1",[s._v("npm脚本原理")]),s._v(" "),a("p",[s._v("npm 脚本的原理非常简单。每当执行"),a("code",{pre:!0},[s._v("npm run")]),s._v("，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。")]),s._v(" "),a("p",[s._v("比较特别的是，"),a("code",{pre:!0},[s._v("npm run")]),s._v("新建的这个 Shell，会将当前目录的"),a("code",{pre:!0},[s._v("node_modules/.bin")]),s._v("子目录加入"),a("code",{pre:!0},[s._v("PATH")]),s._v("变量，执行结束后，再将"),a("code",{pre:!0},[s._v("PATH")]),s._v("变量恢复原样。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://shadow.hfcui.com/blog/screely-1545542442295.png",alt:""}})]),s._v(" "),a("p",[s._v("这意味着，当前目录的"),a("code",{pre:!0},[s._v("node_modules/.bin")]),s._v("子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写"),a("code",{pre:!0},[s._v("mocha test")]),s._v("就可以了。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"test"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"mocha test"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("p",[s._v("而不用写成下面这样。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"test"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"./node_modules/.bin/mocha test"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("p",[s._v("由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。")]),s._v(" "),a("p",[s._v("npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是"),a("code",{pre:!0},[s._v("0")]),s._v("，npm 就认为这个脚本执行失败。")]),s._v(" "),a("h1",[s._v("通配符")]),s._v(" "),a("p",[s._v("由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"lint"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"jshint *.js"')]),s._v("\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v('"lint"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"jshint **/*.js"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("p",[s._v("上面代码中，"),a("code",{pre:!0},[s._v("*")]),s._v("表示任意文件名，"),a("code",{pre:!0},[s._v("**")]),s._v("表示任意一层子目录。")]),s._v(" "),a("p",[s._v("如果要将通配符传入原始命令，防止被 Shell 转义，要将星号转义。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"test"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"tap test/\\*.js"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("h1",[s._v("传参")]),s._v(" "),a("p",[s._v("向 npm 脚本传入参数，要使用"),a("code",{pre:!0},[s._v("--")]),s._v("标明。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"lint"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"jshint **.js"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("p",[s._v("向上面的"),a("code",{pre:!0},[s._v("npm run lint")]),s._v("命令传入参数，必须写成下面这样。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("$ npm run lint --  --reporter checkstyle > checkstyle.xml\n")])]),s._v(" "),a("p",[s._v("也可以在"),a("code",{pre:!0},[s._v("package.json")]),s._v("里面再封装一个命令。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"lint"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"jshint **.js"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"lint:checkstyle"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"npm run lint -- --reporter checkstyle > checkstyle.xml"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("h1",[s._v("执行顺序")]),s._v(" "),a("p",[s._v("如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行顺序。")]),s._v(" "),a("p",[s._v("如果是并行执行（即同时的平行执行），可以使用"),a("code",{pre:!0},[s._v("&")]),s._v("符号。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("$ npm run script1.js & npm run script2.js\n")])]),s._v(" "),a("p",[s._v("如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用"),a("code",{pre:!0},[s._v("&&")]),s._v("符号。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("$ npm run script1.js && npm run script2.js\n")])]),s._v(" "),a("p",[s._v("这两个符号是 Bash 的功能。此外，还可以使用 node 的任务管理模块："),a("a",{attrs:{href:"https://github.com/paulpflug/script-runner"}},[s._v("script-runner")]),s._v("、"),a("a",{attrs:{href:"https://github.com/mysticatea/npm-run-all"}},[s._v("npm-run-all")]),s._v("、"),a("a",{attrs:{href:"https://github.com/coderaiser/redrun"}},[s._v("redrun")]),s._v("。")]),s._v(" "),a("h1",[s._v("钩子")]),s._v(" "),a("p",[s._v("npm 脚本有"),a("code",{pre:!0},[s._v("pre")]),s._v("和"),a("code",{pre:!0},[s._v("post")]),s._v("两个钩子。举例来说，"),a("code",{pre:!0},[s._v("build")]),s._v("脚本命令的钩子就是"),a("code",{pre:!0},[s._v("prebuild")]),s._v("和"),a("code",{pre:!0},[s._v("postbuild")]),s._v("。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"prebuild"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"echo I run before the build script"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"build"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"cross-env NODE_ENV=production webpack"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"postbuild"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"echo I run after the build script"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("p",[s._v("用户执行"),a("code",{pre:!0},[s._v("npm run build")]),s._v("的时候，会自动按照下面的顺序执行。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("npm run prebuild && npm run build && npm run postbuild\n")])]),s._v(" "),a("p",[s._v("因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"clean"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"rimraf ./dist && mkdir dist"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"prebuild"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"npm run clean"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"build"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"cross-env NODE_ENV=production webpack"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("h1",[s._v("内置环境变量")]),s._v(" "),a("p",[s._v("npm 提供一个"),a("code",{pre:!0},[s._v("npm_lifecycle_event")]),s._v("变量，返回当前正在运行的脚本名称，比如"),a("code",{pre:!0},[s._v("pretest")]),s._v("、"),a("code",{pre:!0},[s._v("test")]),s._v("、"),a("code",{pre:!0},[s._v("posttest")]),s._v("等等。所以，可以利用这个变量，在同一个脚本文件里面，为不同的"),a("code",{pre:!0},[s._v("npm scripts")]),s._v("命令编写代码。请看下面的例子。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" TARGET = process.env.npm_lifecycle_event;\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (TARGET === "),a("span",{attrs:{class:"hljs-string"}},[s._v("'test'")]),s._v(") {\n  "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("`Running the test task!`")]),s._v(");\n}\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (TARGET === "),a("span",{attrs:{class:"hljs-string"}},[s._v("'pretest'")]),s._v(") {\n  "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("`Running the pretest task!`")]),s._v(");\n}\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (TARGET === "),a("span",{attrs:{class:"hljs-string"}},[s._v("'posttest'")]),s._v(") {\n  "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("`Running the posttest task!`")]),s._v(");\n}\n")])]),s._v(" "),a("h1",[s._v("变量")]),s._v(" "),a("p",[s._v("npm 脚本有一个非常强大的功能，就是可以使用 npm 的内部变量。")]),s._v(" "),a("p",[s._v("首先，通过"),a("code",{pre:!0},[s._v("npm_package_")]),s._v("前缀，npm 脚本可以拿到"),a("code",{pre:!0},[s._v("package.json")]),s._v("里面的字段。比如，下面是一个"),a("code",{pre:!0},[s._v("package.json")]),s._v("。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"foo"')]),s._v(", \n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"version"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"1.2.5"')]),s._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"view"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"node view.js"')]),s._v("\n  }\n}\n")])]),s._v(" "),a("p",[s._v("那么，变量"),a("code",{pre:!0},[s._v("npm_package_name")]),s._v("返回"),a("code",{pre:!0},[s._v("foo")]),s._v("，变量"),a("code",{pre:!0},[s._v("npm_package_version")]),s._v("返回"),a("code",{pre:!0},[s._v("1.2.5")]),s._v("。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("// view.js")]),s._v("\n"),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(process.env.npm_package_name); "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// foo")]),s._v("\n"),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(process.env.npm_package_version); "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// 1.2.5")]),s._v("\n")])]),s._v(" "),a("p",[s._v("上面代码中，我们通过环境变量"),a("code",{pre:!0},[s._v("process.env")]),s._v("对象，拿到"),a("code",{pre:!0},[s._v("package.json")]),s._v("的字段值。如果是 Bash 脚本，可以用"),a("code",{pre:!0},[s._v("$npm_package_name")]),s._v("和"),a("code",{pre:!0},[s._v("$npm_package_version")]),s._v("取到这两个值。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"repository"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"type"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"git"')]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"url"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"xxx"')]),s._v("\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"view"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"echo $npm_package_repository_type"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("p",[s._v("上面代码中，"),a("code",{pre:!0},[s._v("repository")]),s._v("字段的"),a("code",{pre:!0},[s._v("type")]),s._v("属性，可以通过"),a("code",{pre:!0},[s._v("npm_package_repository_type")]),s._v("取到。")]),s._v(" "),a("p",[s._v("下面是另外一个例子。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"install"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"foo.js"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("p",[s._v("上面代码中，"),a("code",{pre:!0},[s._v("npm_package_scripts_install")]),s._v("变量的值等于"),a("code",{pre:!0},[s._v("foo.js")]),s._v("。")]),s._v(" "),a("p",[s._v("然后，npm 脚本还可以通过"),a("code",{pre:!0},[s._v("npm_config_")]),s._v("前缀，拿到 npm 的配置变量，即"),a("code",{pre:!0},[s._v("npm config get xxx")]),s._v("命令返回的值。比如，当前模块的发行标签，可以通过"),a("code",{pre:!0},[s._v("npm_config_tag")]),s._v("取到。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(": {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"view"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"echo $npm_config_tag"')]),s._v("\n    }\n}\n")])]),s._v(" "),a("p",[s._v("注意，"),a("code",{pre:!0},[s._v("package.json")]),s._v("里面的"),a("code",{pre:!0},[s._v("config")]),s._v("对象，可以被环境变量覆盖。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"name"')]),s._v(" : "),a("span",{attrs:{class:"hljs-string"}},[s._v('"foo"')]),s._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"config"')]),s._v(" : { "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"port"')]),s._v(" : "),a("span",{attrs:{class:"hljs-string"}},[s._v('"8080"')]),s._v(" },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"scripts"')]),s._v(" : { "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"start"')]),s._v(" : "),a("span",{attrs:{class:"hljs-string"}},[s._v('"node server.js"')]),s._v(" }\n}\n")])]),s._v(" "),a("p",[s._v("上面代码中，"),a("code",{pre:!0},[s._v("npm_package_config_port")]),s._v("变量返回的是"),a("code",{pre:!0},[s._v("8080")]),s._v("。这个值可以用下面的方法覆盖。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-powershell"}},[s._v("$ npm config set foo:port "),a("span",{attrs:{class:"hljs-number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),a("p",[s._v("最后，"),a("code",{pre:!0},[s._v("env")]),s._v("命令可以列出所有环境变量。")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"env"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"env"')]),s._v("\n}\n")])]),s._v(" "),a("h1",[s._v("开发命令行工具的时候")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("配置多个命令")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-json"}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"name"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"pro-cli"')]),s._v(",\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"bin"')]),s._v(": {\n       "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"pro"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"bin/pro.js"')]),s._v(",\n       "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"mini"')]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v('"bin/mini.js"')]),s._v("\n     }\n}\n")])])]),s._v(" "),a("li",[a("p",[s._v("命令行入口一定加上：")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{class:"hljs language-javascript"}},[a("span",{attrs:{class:"hljs-meta"}},[s._v("#!/usr/bin/env node")]),s._v("\n")])])])])])}],!1,null,null,null);t.default=n.exports}}]);