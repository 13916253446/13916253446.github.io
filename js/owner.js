(function (current, doc) {
    !function (a, b) { "object" == typeof module && module.exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Spinner = b() }(this, function () { "use strict"; function a(a, b) { var c, d = document.createElement(a || "div"); for (c in b) d[c] = b[c]; return d } function b(a) { for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]); return a } function c(a, b, c, d) { var e = ["opacity", b, ~~(100 * a), c, d].join("-"), f = .01 + c / d * 100, g = Math.max(1 - (1 - a) / b * (100 - f), a), h = j.substring(0, j.indexOf("Animation")).toLowerCase(), i = h && "-" + h + "-" || ""; return m[e] || (k.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", k.cssRules.length), m[e] = 1), e } function d(a, b) { var c, d, e = a.style; if (b = b.charAt(0).toUpperCase() + b.slice(1), void 0 !== e[b]) return b; for (d = 0; d < l.length; d++) if (c = l[d] + b, void 0 !== e[c]) return c } function e(a, b) { for (var c in b) a.style[d(a, c) || c] = b[c]; return a } function f(a) { for (var b = 1; b < arguments.length; b++) { var c = arguments[b]; for (var d in c) void 0 === a[d] && (a[d] = c[d]) } return a } function g(a, b) { return "string" == typeof a ? a : a[b % a.length] } function h(a) { this.opts = f(a || {}, h.defaults, n) } function i() { function c(b, c) { return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c) } k.addRule(".spin-vml", "behavior:url(#default#VML)"), h.prototype.lines = function (a, d) { function f() { return e(c("group", { coordsize: k + " " + k, coordorigin: -j + " " + -j }), { width: k, height: k }) } function h(a, h, i) { b(m, b(e(f(), { rotation: 360 / d.lines * a + "deg", left: ~~h }), b(e(c("roundrect", { arcsize: d.corners }), { width: j, height: d.scale * d.width, left: d.scale * d.radius, top: -d.scale * d.width >> 1, filter: i }), c("fill", { color: g(d.color, a), opacity: d.opacity }), c("stroke", { opacity: 0 })))) } var i, j = d.scale * (d.length + d.width), k = 2 * d.scale * j, l = -(d.width + d.length) * d.scale * 2 + "px", m = e(f(), { position: "absolute", top: l, left: l }); if (d.shadow) for (i = 1; i <= d.lines; i++) h(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"); for (i = 1; i <= d.lines; i++) h(i); return b(a, m) }, h.prototype.opacity = function (a, b, c, d) { var e = a.firstChild; d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c)) } } var j, k, l = ["webkit", "Moz", "ms", "O"], m = {}, n = { lines: 12, length: 7, width: 5, radius: 10, scale: 1, corners: 1, color: "#000", opacity: .25, rotate: 0, direction: 1, speed: 1, trail: 100, fps: 20, zIndex: 2e9, className: "spinner", top: "50%", left: "50%", shadow: !1, hwaccel: !1, position: "absolute" }; if (h.defaults = {}, f(h.prototype, { spin: function (b) { this.stop(); var c = this, d = c.opts, f = c.el = a(null, { className: d.className }); if (e(f, { position: d.position, width: 0, zIndex: d.zIndex, left: d.left, top: d.top }), b && b.insertBefore(f, b.firstChild || null), f.setAttribute("role", "progressbar"), c.lines(f, c.opts), !j) { var g, h = 0, i = (d.lines - 1) * (1 - d.direction) / 2, k = d.fps, l = k / d.speed, m = (1 - d.opacity) / (l * d.trail / 100), n = l / d.lines; !function o() { h++; for (var a = 0; a < d.lines; a++) g = Math.max(1 - (h + (d.lines - a) * n) % l * m, d.opacity), c.opacity(f, a * d.direction + i, g, d); c.timeout = c.el && setTimeout(o, ~~(1e3 / k)) }() } return c }, stop: function () { var a = this.el; return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = void 0), this }, lines: function (d, f) { function h(b, c) { return e(a(), { position: "absolute", width: f.scale * (f.length + f.width) + "px", height: f.scale * f.width + "px", background: b, boxShadow: c, transformOrigin: "left", transform: "rotate(" + ~~(360 / f.lines * k + f.rotate) + "deg) translate(" + f.scale * f.radius + "px,0)", borderRadius: (f.corners * f.scale * f.width >> 1) + "px" }) } for (var i, k = 0, l = (f.lines - 1) * (1 - f.direction) / 2; k < f.lines; k++) i = e(a(), { position: "absolute", top: 1 + ~(f.scale * f.width / 2) + "px", transform: f.hwaccel ? "translate3d(0,0,0)" : "", opacity: f.opacity, animation: j && c(f.opacity, f.trail, l + k * f.direction, f.lines) + " " + 1 / f.speed + "s linear infinite" }), f.shadow && b(i, e(h("#000", "0 0 4px #000"), { top: "2px" })), b(d, b(i, h(g(f.color, k), "0 0 1px rgba(0,0,0,.1)"))); return d }, opacity: function (a, b, c) { b < a.childNodes.length && (a.childNodes[b].style.opacity = c) } }), "undefined" != typeof document) { k = function () { var c = a("style", { type: "text/css" }); return b(document.getElementsByTagName("head")[0], c), c.sheet || c.styleSheet }(); var o = e(a("group"), { behavior: "url(#default#VML)" }); !d(o, "transform") && o.adj ? i() : j = d(o, "animation") } return h });//span.js
    //兼容requestAnimationFrame
    current.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (currentBack) { setTimeout(callBack(), 1000 / 60) },
    (function () {
        var loadingDom, spinner, maskDom;//loading对象
        var nativeMask, overflowXStyle, overflowYStyle, clickCallBack;//遮罩层对象
        var messageArray = [], messageDom, msgTimer, going;//普通的文字消息弹出窗
        var popupSuccessDom;//成功消息弹窗
        current.nativeCacheObj = {
            //懒加载可用的图片
            lazyImgBase: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAFkAQMAAABFECyqAAAAA1BMVEXs6+uN0AXJAAAAN0lEQVR42u3BgQAAAADDoPtTX2AI1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHSEHAABK95YzwAAAABJRU5ErkJggg==",
            //显示loading动画
            showLoading: (function () {
                return function (canClick) {//canClick是否可点击
                    if (loadingDom == null) {
                        loadingDom = document.createElement("div"); loadingDom.className = "loading_dom_wrapper";
                        var style = document.createElement("style"); style.type = "text/css";
                        style.innerText = " .loading_dom_wrapper{position:fixed; z-index:999; top:50%;left:50%; transform:translate(-50%,-50%); -webkit-transform:translate(-50%,-50%); display:none;}";
                        document.body.appendChild(loadingDom);
                        document.head.appendChild(style);
                        var opts = {
                            lines: 13 // The number of lines to draw
                            , length: 28 // The length of each line
                            , width: 14 // The line thickness
                            , radius: 42 // The radius of the inner circle
                            , scale: .3 // Scales overall size of the spinner
                            , corners: 1 // Corner roundness (0..1)
                            , color: '#666' // #rgb or #rrggbb or array of colors
                            , opacity: 0.25 // Opacity of the lines
                            , rotate: 0 // The rotation offset
                            , direction: 1 // 1: clockwise, -1: counterclockwise
                            , speed: 1 // Rounds per second
                            , trail: 60 // Afterglow percentage
                            , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                            , zIndex: 2e9 // The z-index (defaults to 2000000000)
                            , className: 'spinner' // The CSS class to assign to the spinner
                            , shadow: false // Whether to render a shadow
                            , hwaccel: false // Whether to use hardware acceleration
                            , top: '0' // Top position relative to parent
                            , left: '0' // Left position relative to parent                       
                            , position: 'static' // Element positioning
                        }
                        spinner = new Spinner(opts);
                    };
                    if (!canClick) {
                        if (maskDom == null) {
                            maskDom = document.createElement("div"); maskDom.className = "loading_mask_wrapper";
                            var style = document.createElement("style"); style.type = "text/css";
                            style.innerText = ".loading_mask_wrapper{position:fixed;top:0;left:0;width:100%;height:100%;opacity:0;z-index:999}";
                            document.head.appendChild(style);
                            document.body.appendChild(maskDom);
                        }
                        maskDom.style.display = "block";
                    }
                    spinner.spin(loadingDom);
                    loadingDom.style.display = "block";
                };
            })(),
            //隐藏Loading
            hideLoading: function () {
                if (maskDom) maskDom.style.display = "none";
                if (loadingDom) loadingDom.style.display = "none";
                if (spinner) spinner.stop();
            },
            //显示遮罩层
            showMask: function (callBack) {//callBack点击遮罩层的回调函数
                if (nativeMask == null) {
                    nativeMask = document.createElement("div"); nativeMask.className = "native_mask_wrapper";
                    var style = document.createElement("style"); style.type = "text/css";
                    style.innerText = ".native_mask_wrapper{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3);display:none;z-index:998;}";
                    document.head.appendChild(style);
                    document.body.appendChild(nativeMask);
                    if (current.$) {
                        $(nativeMask).on("touchend", function () {
                            arguments[0].preventDefault();
                            if (Object.prototype.toString.call(clickCallBack) == "[object Function]") clickCallBack();
                        });
                    } else {
                        nativeMask.addEventListener("click", function () {
                            if (Object.prototype.toString.call(clickCallBack) == "[object Function]") clickCallBack();
                        }, false);
                    }
                };
                if (Object.prototype.toString.call(callBack) == "[object Function]") clickCallBack = callBack;
                else clickCallBack = null;
                nativeMask.style.display = "block";
                var bodyStyle = window.getComputedStyle(document.body);
                overflowXStyle = bodyStyle.overflowX; overflowYStyle = bodyStyle.overflowY;
                document.body.style.overflow = "hidden";
            },
            //隐藏遮罩层
            hideMask: function () {
                if (nativeMask) nativeMask.style.display = "none";
                clickCallBack = null;
                document.body.style.overflowX = overflowXStyle == null || overflowXStyle == "" ? "hidden" : overflowXStyle;
                document.body.style.overflowY = overflowYStyle == null || overflowYStyle == "" ? "auto" : overflowYStyle;
            },
            //显示一般的文字消息
            showTextMessagebox: function (msg, delayTime) {
                if (msg && msg.toString().length > 0) {//如果存在多条消息，依次把消息放入队列
                    messageArray.push({ msg: msg, delayTime: Object.prototype.toString.call(delayTime) == "[object Number]" ? delayTime : 800 });
                    if (messageDom == null) {
                        messageDom = document.createElement("div"); messageDom.className = "native_msg_wrapper";
                        messageDom.innerHTML = "<div class='native_msg_content'></div>";
                        var style = document.createElement("style"); style.type = "text/css";
                        style.innerText = ".native_msg_wrapper{position:fixed;width:100%;padding:0 12px;left:0;bottom:120px;box-sizing:border-box;-webkit-box-sizing:border-box;text-align:center;z-index:999}.native_msg_content{display:inline-block;margin:auto;background-color:rgba(0,0,0,0.45);border-radius:8px;padding:5px 10px;min-width:140px;color:#FFF;text-align:center;line-height:20px}";
                        document.body.appendChild(messageDom);
                        document.head.appendChild(style);
                    };
                    delayFun();
                    function delayFun() {
                        if (messageArray.length <= 0) { return; clearTimeout(msgTimer) };
                        if (msgTimer && !going) return;
                        going = false;
                        messageDom.querySelector(".native_msg_content").innerText = messageArray[0].msg;
                        messageDom.style.display = "block";
                        msgTimer = setTimeout(function () {
                            messageDom.style.display = "none";
                            messageArray.shift();
                            going = true;
                            delayFun();
                        }, messageArray[0].delayTime)
                    }
                }
            },
            //显示成功提示的弹窗
            showSuccessPopup: function (config) {
                if (Object.prototype.toString.call(config) != "[object Object]") return;
                config.Title = config.Title && config.Title != "" ? config.Title : "友情提示";
                config.Content = config.Content && config.Content != "" ? config.Content : "Success";
                config.Callback = Object.prototype.toString.call(config.Callback) == "[object Function]" ? config.Callback : function () { };
                if (popupSuccessDom == null) {
                    popupSuccessDom = document.createElement("div"); popupSuccessDom.className = "native_success_pupup_wrapper";
                    popupSuccessDom.innerHTML = "<div class='success_icon_wrapper'><svg t='1491625208096' class='icon success_icon' style='' viewBox='0 0 1024 1024' version='1.1' p-id='2762' width='64' height='64'><defs><style type='text/css'></style></defs><path d='M435.661358 718.190059c0 0 243.478314-469.350644 523.57564-654.057413-34.503838 88.515986-21.999037 254.231215 0 342.578356-136.585795 31.18014-417.399435 381.576555-508.456291 552.863686C321.842079 796.017612 171.219593 690.355107 63.791885 632.546493l147.696854-141.18351L435.661358 718.190059z' p-id='2763' fill='#00AA00'></path></svg></div>\
                                                 <h4 class='native_success_pupup_title'>友情提示</h4>\
                                                 <div class='native_success_pupup_tip'>建册数据保存成功了哦～</div>\
                                                 <div class='native_success_pupup_btn'>OK</div>";
                    var style = document.createElement("style"); style.type = "text/css";
                    style.innerText = ".native_success_pupup_wrapper{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);-webkit-transform:translate(-50%,-50%) scale(0);transition:transform .3s;-webkit-transition:transform .3s; background-color:rgba(255,255,255,0.95);width:280px;z-index:999;border-radius:5px;text-align:center;padding:20px 20px 15px;box-sizing:border-box;-webkit-box-sizing:border-box;display:none}.success_icon{width:30px;height:30px}.success_icon_wrapper{display:inline-block;border:2px solid rgba(0,170,0,.3);width:50px;height:50px;border-radius:50%;display:flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;margin-left:93px}.native_success_pupup_btn{margin-top:25px;display:inline-block;width:100px;padding:8px 0;border-radius:5px;background-color:#fcb340;color:#FFF}.native_success_pupup_tip{color:#666;font-size:14px}";
                    document.body.appendChild(popupSuccessDom);
                    document.head.appendChild(style);
                    if (current.$) {
                        $(popupSuccessDom.querySelector(".native_success_pupup_btn")).on("touchend", function () {
                            arguments[0].preventDefault();
                            nativeCacheObj.hideMask();
                            popupSuccessDom.style.display = "none";
                            restore();
                            config.Callback();
                        });
                    } else popupSuccessDom.querySelector(".native_success_pupup_btn").addEventListener("click", function () {
                        nativeCacheObj.hideMask(); popupSuccessDom.style.display = "none"; restore(); config.Callback();
                    }, false);
                };
                nativeCacheObj.showMask();
                popupSuccessDom.querySelector(".native_success_pupup_title").innerText = config.Title;
                popupSuccessDom.querySelector(".native_success_pupup_tip").innerText = config.Content;
                popupSuccessDom.style.display = "block";
                requestAnimationFrame(start);
                function restore() {//还原动画
                    if (popupSuccessDom) {
                        popupSuccessDom.style.transform = "translate(-50%,-50%) scale(0)";
                        popupSuccessDom.style.webkitTransform = "translate(-50%,-50%) scale(0)";
                    }
                }
                function start() {
                    if (popupSuccessDom) {
                        popupSuccessDom.style.transform = "translate(-50%,-50%) scale(1)";
                        popupSuccessDom.style.webkitTransform = "translate(-50%,-50%) scale(1)";
                    }
                }
            }
        };
    })();
    //获取链接参数
    current.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = decodeURIComponent(window.location.search).substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return "";
    };
    //xml请求数据
    function Server() {
        this.get = function () {
            var currentParams = arguments;
            var msg = { isSuccess: true, msg: "" };
            var asyncs = Object.prototype.toString.call(arguments[arguments.length - 1] == "[object Boolean]") ? arguments[arguments.length - 1] : true;
            var callBack = (function () {
                var fun;
                Array.prototype.map.call(currentParams, function (item) {
                    if (Object.prototype.toString.call(item) == "[object Function]") {
                        fun = item;
                    }
                });
                return fun;
            })();
            var params = (function () {
                var str = "";
                if (currentParams.length > 1 && Object.prototype.toString.call(currentParams[1]) == "[object Object]") {
                    var isMark = currentParams[0].indexOf("?") > -1 ? true : false;
                    for (var item in currentParams[1]) {
                        if (isMark) str += "&" + item + "=" + currentParams[1][item];
                        else {
                            isMark = true;
                            str += "?" + item + "=" + currentParams[1][item];
                        };
                    }
                };
                return str;
            })();
            try {
                !function () {
                    var xmlHttpRequest = new XMLHttpRequest();
                    if (xmlHttpRequest.open("GET", currentParams[0] + params, asyncs)) {
                    } else {
                        xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        xmlHttpRequest.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    }
                    xmlHttpRequest.onreadystatechange = function () {
                        if (xmlHttpRequest.readyState == 4) {
                            msg.msg = xmlHttpRequest.responseText;
                            if (callBack) callBack(msg);
                        }
                    };
                    xmlHttpRequest.send(null);
                    xmlHttpRequest.onerror = function () {
                        msg.isSuccess = false;
                        msg.msg = arguments[0];
                        if (callBack) callBack(msg);
                    }
                }();
            } catch (e) {
                msg.isSuccess = false;
                msg.msg = e.message;
                if (callBack) callBack(msg);
            }
        };
        this.post = function () {
            var currentParams = arguments;
            var msg = { isSuccess: true, msg: "" };
            var asyncs = Object.prototype.toString.call(arguments[arguments.length - 1] == "[object Boolean]") ? arguments[arguments.length - 1] : true;
            var callBack = (function () {
                var fun;
                Array.prototype.map.call(currentParams, function (item) {
                    if (Object.prototype.toString.call(item) == "[object Function]") {
                        fun = item;
                    }
                });
                return fun;
            })();
            var params = (function () {
                var str = "";
                if (currentParams.length > 1 && Object.prototype.toString.call(currentParams[1]) == "[object Object]") {
                    var isIndex = true;
                    for (var item in currentParams[1]) {
                        if (isIndex) str += item + "=" + currentParams[1][item];
                        else {
                            isIndex = false;
                            str += "&" + item + "=" + currentParams[1][item];
                        }
                    }
                };
                return str;
            })();
            try {
                var xmlHttpRequest = new XMLHttpRequest();
                xmlHttpRequest.open("POST", arguments[0], asyncs);
                xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xmlHttpRequest.onreadystatechange = function () {
                    if (xmlHttpRequest.readyState == "4") {
                        msg.msg = xmlHttpRequest.responseText;
                        if (callBack) callBack(msg);
                    }
                };
                xmlHttpRequest.send(params);
                xmlHttpRequest.onerror = function () {
                    msg.isSuccess = false;
                    msg.msg = arguments[0];
                    if (callBack) callBack(msg);
                }
            } catch (e) {
                msg.isSuccess = false;
                msg.msg = e.message;
                if (callBack) callBack(msg);
            }
        };
        this.loadFile = function (path, option) {
            var config = {
                needInsert: true,//是否直接插入当前环境
                async: false,//是否异步
                cache: false,//是否缓存起来
                alias: "",//别名
                version: "0.0.0",//版本
                callBack: function () { },//回调函数
            };
            if (Object.prototype.toString.call(option) == "[object Object]") {
                for (var item in option) {
                    if (config[item] != null) config[item] = option[item];
                };
            };
            if (config.alias != null && config.alias != "" && localStorage[config.alias] && localStorage[config.alias] != "" && JSON.parse(localStorage[config.alias]).version == config.version) {
                var currentData = JSON.parse(localStorage[config.alias]);
                if (config.needInsert) {
                    if (currentData.type == "js") {
                        current["eval"].call(current, currentData.val);
                    } else if (currentData.type == "css") {
                        var style = document.createElement("style"); style.type = "text/css";
                        style.innerText = currentData.val;
                        document.head.appendChild(style);
                    }
                };
                config.callBack(currentData.val);
                return;
            };
            if (Object.prototype.toString.call(path) != "[object String]" || path == "") {
                console.error("路径不对");
                return;
            };
            var suffix = (function () {
                var str = "";
                var ret = path.split(".");
                if (ret.length > 1) {
                    var rets = ret[ret.length - 1];
                    str = /^css/.test(rets) ? "css" : (/^js/.test(rets) ? "js" : "");
                };
                return str;
            })();
            if (suffix != "css" && suffix != "js") {
                console.error("文件类型不支持哦");
                return;
            };
            this.get(path, function (data) {
                if (data.isSuccess) {
                    if (config.cache) {
                        if (config.alias != null && config.alias != "") {
                            localStorage[config.alias] = JSON.stringify({
                                val: data.msg,
                                type: suffix,
                                version: config.version
                            });
                        } else {
                            console.error("请设置别名");
                        }
                    };
                    if (config.needInsert) {
                        if (suffix == "js") {
                            current["eval"].call(current, data.msg);
                        } else if (suffix == "css") {
                            var style = document.createElement("style"); style.type = "text/css";
                            style.innerText = data.msg;
                            document.head.appendChild(style);
                        }
                    };
                    config.callBack(data.msg);
                } else {
                    console.error(data.msg);
                }
            }, config.async);
        }.bind(this);
    };
    current.zd = new Server();
    //缓存
    function storage() {
        this.get = function (key, callBack) {
            if (arguments.length < 1) {
                console.error("参数有误");
                return;
            };
            callBack = Object.prototype.toString.call(callBack) == "[object Function]" ? callBack : function () { };
            try {
                var db = this.getDataBae();
                db.transaction(function (tx) {
                    tx.executeSql("SELECT * FROM CACHE WHERE key=?", [key], function (tx, results) {
                        if (results.rows.length > 0) {
                            var isJson = results.rows.item(0).isJson
                            var data = isJson == "json" ? JSON.parse(results.rows.item(0).val) : results.rows.item(0).val;
                            callBack(data);
                        } else {
                            callBack();
                        }
                    });
                });
            } catch (e) {
                console.error(e.message);
                callBack();
            }
        },
        this.set = function (key, val, callBack) {
            if (arguments.length < 2) {
                console.error("参数有误");
                return;
            };
            var current = this;
            var isJson = Object.prototype.toString.call(val) == "[object String]" ? "string" : "json";
            val = isJson ? JSON.stringify(val) : val;
            callBack = Object.prototype.toString.call(callBack) == "[object Function]" ? callBack : function () { };
            try {
                var db = this.getDataBae();
                db.transaction(function (tx) {
                    tx.executeSql("CREATE TABLE IF NOT EXISTS CACHE (key unique, val,isJson)");
                    tx.executeSql("INSERT INTO CACHE (key, val,isJson) VALUES (?, ?,?)", [key, val, isJson], function () {
                        callBack({ isSuccess: true, msg: "" });
                    });
                });
            } catch (e) {
                callBack({ isSuccess: false, msg: e.message });
                console.error(e.message);
            }
        }.bind(this);
    };
    storage.prototype.getDataBae = (function () {
        var db;
        return function () {
            if (db == null) db = openDatabase("yyq_db", "1.0", "孕育桥数据库", 24 * 1024 * 1024);
            return db;
        };
    })();
    current.yyq_storage = new storage();
    //promise
    !function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e() }(this, function () { "use strict"; function t(t) { return "function" == typeof t || "object" == typeof t && null !== t } function e(t) { return "function" == typeof t } function n(t) { I = t } function r(t) { J = t } function o() { return function () { return process.nextTick(a) } } function i() { return "undefined" != typeof H ? function () { H(a) } : c() } function s() { var t = 0, e = new V(a), n = document.createTextNode(""); return e.observe(n, { characterData: !0 }), function () { n.data = t = ++t % 2 } } function u() { var t = new MessageChannel; return t.port1.onmessage = a, function () { return t.port2.postMessage(0) } } function c() { var t = setTimeout; return function () { return t(a, 1) } } function a() { for (var t = 0; t < G; t += 2) { var e = $[t], n = $[t + 1]; e(n), $[t] = void 0, $[t + 1] = void 0 } G = 0 } function f() { try { var t = require, e = t("vertx"); return H = e.runOnLoop || e.runOnContext, i() } catch (n) { return c() } } function l(t, e) { var n = arguments, r = this, o = new this.constructor(p); void 0 === o[et] && k(o); var i = r._state; return i ? !function () { var t = n[i - 1]; J(function () { return x(i, o, t, r._result) }) }() : E(r, o, t, e), o } function h(t) { var e = this; if (t && "object" == typeof t && t.constructor === e) return t; var n = new e(p); return g(n, t), n } function p() { } function v() { return new TypeError("You cannot resolve a promise with itself") } function d() { return new TypeError("A promises callback cannot return that same promise.") } function _(t) { try { return t.then } catch (e) { return it.error = e, it } } function y(t, e, n, r) { try { t.call(e, n, r) } catch (o) { return o } } function m(t, e, n) { J(function (t) { var r = !1, o = y(n, e, function (n) { r || (r = !0, e !== n ? g(t, n) : S(t, n)) }, function (e) { r || (r = !0, j(t, e)) }, "Settle: " + (t._label || " unknown promise")); !r && o && (r = !0, j(t, o)) }, t) } function b(t, e) { e._state === rt ? S(t, e._result) : e._state === ot ? j(t, e._result) : E(e, void 0, function (e) { return g(t, e) }, function (e) { return j(t, e) }) } function w(t, n, r) { n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === it ? (j(t, it.error), it.error = null) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n) } function g(e, n) { e === n ? j(e, v()) : t(n) ? w(e, n, _(n)) : S(e, n) } function A(t) { t._onerror && t._onerror(t._result), T(t) } function S(t, e) { t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && J(T, t)) } function j(t, e) { t._state === nt && (t._state = ot, t._result = e, J(A, t)) } function E(t, e, n, r) { var o = t._subscribers, i = o.length; t._onerror = null, o[i] = e, o[i + rt] = n, o[i + ot] = r, 0 === i && t._state && J(T, t) } function T(t) { var e = t._subscribers, n = t._state; if (0 !== e.length) { for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? x(n, r, o, i) : o(i); t._subscribers.length = 0 } } function M() { this.error = null } function P(t, e) { try { return t(e) } catch (n) { return st.error = n, st } } function x(t, n, r, o) { var i = e(r), s = void 0, u = void 0, c = void 0, a = void 0; if (i) { if (s = P(r, o), s === st ? (a = !0, u = s.error, s.error = null) : c = !0, n === s) return void j(n, d()) } else s = o, c = !0; n._state !== nt || (i && c ? g(n, s) : a ? j(n, u) : t === rt ? S(n, s) : t === ot && j(n, s)) } function C(t, e) { try { e(function (e) { g(t, e) }, function (e) { j(t, e) }) } catch (n) { j(t, n) } } function O() { return ut++ } function k(t) { t[et] = ut++, t._state = void 0, t._result = void 0, t._subscribers = [] } function Y(t, e) { this._instanceConstructor = t, this.promise = new t(p), this.promise[et] || k(this.promise), B(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, q()) } function q() { return new Error("Array Methods must be provided an Array") } function F(t) { return new Y(this, t).promise } function D(t) { var e = this; return new e(B(t) ? function (n, r) { for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r) } : function (t, e) { return e(new TypeError("You must pass an array to race.")) }) } function K(t) { var e = this, n = new e(p); return j(n, t), n } function L() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") } function N() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") } function U(t) { this[et] = O(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && L(), this instanceof U ? C(this, t) : N()) } function W() { var t = void 0; if ("undefined" != typeof global) t = global; else if ("undefined" != typeof self) t = self; else try { t = Function("return this")() } catch (e) { throw new Error("polyfill failed because global object is unavailable in this environment") } var n = t.Promise; if (n) { var r = null; try { r = Object.prototype.toString.call(n.resolve()) } catch (e) { } if ("[object Promise]" === r && !n.cast) return } t.Promise = U } var z = void 0; z = Array.isArray ? Array.isArray : function (t) { return "[object Array]" === Object.prototype.toString.call(t) }; var B = z, G = 0, H = void 0, I = void 0, J = function (t, e) { $[G] = t, $[G + 1] = e, G += 2, 2 === G && (I ? I(a) : tt()) }, Q = "undefined" != typeof window ? window : void 0, R = Q || {}, V = R.MutationObserver || R.WebKitMutationObserver, X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, $ = new Array(1e3), tt = void 0; tt = X ? o() : V ? s() : Z ? u() : void 0 === Q && "function" == typeof require ? f() : c(); var et = Math.random().toString(36).substring(16), nt = void 0, rt = 1, ot = 2, it = new M, st = new M, ut = 0; return Y.prototype._enumerate = function () { for (var t = this.length, e = this._input, n = 0; this._state === nt && n < t; n++) this._eachEntry(e[n], n) }, Y.prototype._eachEntry = function (t, e) { var n = this._instanceConstructor, r = n.resolve; if (r === h) { var o = _(t); if (o === l && t._state !== nt) this._settledAt(t._state, e, t._result); else if ("function" != typeof o) this._remaining--, this._result[e] = t; else if (n === U) { var i = new n(p); w(i, t, o), this._willSettleAt(i, e) } else this._willSettleAt(new n(function (e) { return e(t) }), e) } else this._willSettleAt(r(t), e) }, Y.prototype._settledAt = function (t, e, n) { var r = this.promise; r._state === nt && (this._remaining--, t === ot ? j(r, n) : this._result[e] = n), 0 === this._remaining && S(r, this._result) }, Y.prototype._willSettleAt = function (t, e) { var n = this; E(t, void 0, function (t) { return n._settledAt(rt, e, t) }, function (t) { return n._settledAt(ot, e, t) }) }, U.all = F, U.race = D, U.resolve = h, U.reject = K, U._setScheduler = n, U._setAsap = r, U._asap = J, U.prototype = { constructor: U, then: l, "catch": function (t) { return this.then(null, t) } }, U.polyfill = W, U.Promise = U, U.polyfill(), U });
})(window, document);