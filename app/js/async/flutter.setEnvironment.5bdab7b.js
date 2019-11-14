(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{US4o:function(e,s,t){"use strict";t.r(s);var _=t("bY/i"),r={name:"FlutterSetEnvironment",components:{md:t.n(_).a}},v=t("JFUb");var a=function(e){t("bGPg")},l=Object(v.a)(r,function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("md")],1)},[],!1,a,"data-v-3e6d2410",null);s.default=l.exports},bGPg:function(e,s,t){var _=t("ooCX");"string"==typeof _&&(_=[[e.i,_,""]]),_.locals&&(e.exports=_.locals);(0,t("SZ7m").default)("5383fb26",_,!0,{})},"bY/i":function(e,s,t){e.exports=t("eO+3")},"eO+3":function(e,s,t){"use strict";t.r(s);var _=t("JFUb"),r=Object(_.a)(null,function(){var e=this;e.$createElement;e._self._c;return e._m(0)},[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h1",[e._v("搭建"),t("code",{pre:!0},[e._v("Mac")]),e._v("开发环境")]),e._v(" "),t("p",[e._v("1、安装"),t("a",{attrs:{href:"https://flutter.dev/docs/get-started/install"}},[e._v("flutter sdk")])]),e._v(" "),t("p",[e._v("2、 解压"),t("code",{pre:!0},[e._v("flutter sdk")]),e._v("到指定目录")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-bash"}},[t("span",{attrs:{class:"hljs-built_in"}},[e._v("cd")]),e._v(" ~/development\n\nunzip ~/Downloads/flutter_macos_v1.5.4-hotfix.2-stable.zip\n")])]),e._v(" "),t("p",[e._v("3、添加"),t("code",{pre:!0},[e._v("flutter sdk")]),e._v("到环境变量")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-bash"}},[t("span",{attrs:{class:"hljs-built_in"}},[e._v("export")]),e._v(" PATH="),t("span",{attrs:{class:"hljs-string"}},[e._v('"'),t("span",{attrs:{class:"hljs-variable"}},[e._v("$PATH")]),e._v(':`pwd`/flutter/bin"')]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"warning"},[t("p",[e._v("这样添加环境变量，仅能在当前终端而且当前窗口使用，也就是关闭终端重新使用，就找不到"),t("code",{pre:!0},[e._v("flutter")]),e._v("了，可以采用以下方式，将"),t("code",{pre:!0},[e._v("sdk")]),e._v("添加到全局环境变量。")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("创建"),t("code",{pre:!0},[e._v("$HOME/.bash_profile")]),e._v("文件，如果有的话，直接使用。")]),e._v(" "),t("p",[e._v("这个文件，是用户级的环境变量文件")])]),e._v(" "),t("li",[t("p",[e._v("将"),t("code",{pre:!0},[e._v("flutter sdk")]),e._v("的"),t("code",{pre:!0},[e._v("bin")]),e._v("添加到环境变量中（将下面的内容写到"),t("code",{pre:!0},[e._v("$HOME/.bash_profile")]),e._v("文件中）")]),e._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-bash"}},[t("span",{attrs:{class:"hljs-comment"}},[e._v("# PATH_TO_FLUTTER_GIT_DIRECTORY就是sdk的目录")]),e._v("\n"),t("span",{attrs:{class:"hljs-built_in"}},[e._v("export")]),e._v(" PATH="),t("span",{attrs:{class:"hljs-variable"}},[e._v("$PATH")]),e._v(":[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin\n\n"),t("span",{attrs:{class:"hljs-comment"}},[e._v("# 例")]),e._v("\n"),t("span",{attrs:{class:"hljs-built_in"}},[e._v("export")]),e._v(" PATH="),t("span",{attrs:{class:"hljs-variable"}},[e._v("$PATH")]),e._v(":/Users/cuihaifeng/development/flutter/bin\n")])])]),e._v(" "),t("li",[t("p",[e._v("运行"),t("code",{pre:!0},[e._v("source $HOME/.bash_profile")]),e._v("刷新当前终端")])]),e._v(" "),t("li",[t("p",[e._v("运行"),t("code",{pre:!0},[e._v("echo $PATH")]),e._v("看"),t("code",{pre:!0},[e._v("flutter/bin")]),e._v("是否在其中，来判断是否添加成功")])])]),e._v(" "),t("div",{staticClass:"warning"},[t("p",[t("code",{pre:!0},[e._v("Mac")]),e._v("系统的环境变量，加载顺序为："),t("code",{pre:!0},[e._v("/etc/profile")]),e._v("，"),t("code",{pre:!0},[e._v("/etc/paths")]),e._v("，"),t("code",{pre:!0},[e._v("~/.bash_profile")]),e._v("，"),t("code",{pre:!0},[e._v("~/.bash_login")]),e._v("，"),t("code",{pre:!0},[e._v("~/.profile")]),e._v("，"),t("code",{pre:!0},[e._v("~/.bashrc")]),e._v("。当然/etc/profile和/etc/paths是系统级别的，系统启动就会加载，后面几个是当前用户级的环境变量。后面3个按照从前往后的顺序读取，如果~/.bash_profile文件存在，则后面的几个文件就会被忽略不读了，如果~/.bash_profile文件不存在，才会以此类推读取后面的文件。~/.bashrc没有上述规则，它是bash shell打开的时候载入的。")])]),e._v(" "),t("div",{staticClass:"tip"},[t("p",[e._v("添加到"),t("code",{pre:!0},[e._v("$HOME/.bash_profile")]),e._v("之后，你会发现关闭终端之后，还是找不到"),t("code",{pre:!0},[e._v("flutter")]),e._v("，这是因为：若bash shell是以login方式执行时，才会读取此文件。该文件仅仅执行一次!，如果不想重启，可以将"),t("code",{pre:!0},[e._v("source ~/.bash_profile")]),e._v("添加到"),t("code",{pre:!0},[e._v("~/.zshrc")]),e._v("。"),t("br"),e._v("\n打开"),t("code",{pre:!0},[e._v("vim ~/.zshrc")]),e._v("  添加"),t("code",{pre:!0},[e._v("source ~/.bash_profile")]),e._v(" ，这样"),t("code",{pre:!0},[e._v("~/.bash_profile")]),e._v("配置的环境变量同样有效"),t("br"),e._v("\n关于"),t("code",{pre:!0},[e._v("Mac")]),e._v("环境变量可以参考"),t("a",{attrs:{href:"https://blog.csdn.net/hlllmr1314/article/details/52228672"}},[e._v("mac中添加环境变量无效")])])])])}],!1,null,null,null);s.default=r.exports},ooCX:function(e,s,t){(e.exports=t("I1BE")(!1)).push([e.i,"",""])}}]);