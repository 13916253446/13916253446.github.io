//? 缓存白名单
//! VUE模块白名单
import VUEWhite from '../modules/VUE/store/cacheWhiteList.js'
//! CSS模块白名单
import CSSWhite from '../modules/CSS/store/cacheWhiteList.js'
/* @init<%
//! ${TplModuleName}模块白名单
import ${TplModuleName}White from '../modules/${TplModuleName}/store/cacheWhiteList.js'%> */

/* eslint-disable */
export const whiteList = [
  ...VUEWhite,
  ...CSSWhite,
  /* @init<%
  ...${TplModuleName}White,%>*/
]
/* eslint-enable */

export default whiteList
