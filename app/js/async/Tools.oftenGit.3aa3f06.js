(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"41SE":function(s,e,t){var a=t("5EjJ");"string"==typeof a&&(a=[[s.i,a,""]]),a.locals&&(s.exports=a.locals);(0,t("SZ7m").default)("7fd1f04e",a,!0,{})},"5EjJ":function(s,e,t){(s.exports=t("I1BE")(!1)).push([s.i,"",""])},"9HZE":function(s,e,t){"use strict";t.r(e);var a=t("JFUb"),l=Object(a.a)(null,function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("section",[t("ol",[t("li",[s._v("展示某个快照的变动")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[t("span",{attrs:{class:"hljs-meta"}},[s._v("#")]),t("span",{attrs:{class:"bash"}},[s._v(" 根据快照Id")]),s._v("\ngit show c9053865e9dff393fd2f7a92a18f9bd7f2caa7fa\n"),t("span",{attrs:{class:"hljs-meta"}},[s._v("\n#")]),t("span",{attrs:{class:"bash"}},[s._v(" 展示前一个快照")]),s._v("\ngit show head^\n")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("切换到某个快照")])]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[s._v("git checkout head~2\n")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("撤销更改")])]),s._v(" "),t("ul",[t("li",[s._v("撤销已经"),t("code",{pre:!0},[s._v("push")]),s._v("的更改")])]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("git reset")])]),s._v(" "),t("p",[s._v("除了在当前分支上操作，你还可以通过传入这些标记来修改你的缓存区或工作目录：")]),s._v(" "),t("p",[s._v("--soft – 缓存区和工作目录都不会被改变\n--mixed – 默认选项。缓存区和你指定的提交同步，但工作目录不受影响\n--hard – 缓存区和工作目录都同步到你指定的提交\n把这些标记想成定义 git reset 操作的作用域就容易理解多了。")]),s._v(" "),t("p",[t("code",{pre:!0},[s._v("reset")]),s._v("将一个分支的末端指向另一个提交。这可以用来移除当前分支的一些提交。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[t("span",{attrs:{class:"hljs-meta"}},[s._v("#")]),t("span",{attrs:{class:"bash"}},[s._v(" 会退到HEAD之前的第1个快照")]),s._v("\ngit reset head~1\n")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://mp1.oss-cn-beijing.aliyuncs.com/blog/aze1u-k0azb.gif",alt:"git"}})]),s._v(" "),t("p",[s._v("使用"),t("code",{pre:!0},[s._v("reset")]),s._v("就会有一个问题，本地的快照要慢于服务器上面的快照，直接"),t("code",{pre:!0},[s._v("push")]),s._v("的时候，就需要"),t("code",{pre:!0},[s._v("pull")]),s._v("代码，就又会把回退过后的代码拉下来。")]),s._v(" "),t("p",[s._v("如果是自己的功能分支，可以才用强制推送(--force)")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{class:"hljs language-shell"}},[s._v("git push --force\n")])])])}],!1,null,null,null);e.default=l.exports},KGNk:function(s,e,t){"use strict";t.r(e);var a=t("kK2r"),l={name:"ToolsOftenGit",components:{md:t.n(a).a}},r=t("JFUb");var n=function(s){t("41SE")},c=Object(r.a)(l,function(){var s=this.$createElement,e=this._self._c||s;return e("div",[e("md")],1)},[],!1,n,"data-v-25fa7e1a",null);e.default=c.exports},kK2r:function(s,e,t){s.exports=t("9HZE")}}]);