
/*
	* WOW - v1.0.1 - 2014-08-15
	* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT 
*/

(function ($) {

    (function () { var a, b, c, d = function (a, b) { return function () { return a.apply(b, arguments) } }, e = [].indexOf || function (a) { for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b; return -1 }; b = function () { function a() { } return a.prototype.extend = function (a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function (a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a }(), c = this.WeakMap || this.MozWeakMap || (c = function () { function a() { this.keys = [], this.values = [] } return a.prototype.get = function (a) { var b, c, d, e, f; for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b] }, a.prototype.set = function (a, b) { var c, d, e, f, g; for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b); return this.keys.push(a), this.values.push(b) }, a }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () { function a() { console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") } return a.notSupported = !0, a.prototype.observe = function () { }, a }()), this.WOW = function () { function f(a) { null == a && (a = {}), this.scrollCallback = d(this.scrollCallback, this), this.scrollHandler = d(this.scrollHandler, this), this.start = d(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c } return f.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0 }, f.prototype.init = function () { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = [] }, f.prototype.start = function () { var b, c, d, e; if (this.stopped = !1, this.boxes = function () { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function () { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else { for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0); window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50) } return this.config.live ? new a(function (a) { return function (b) { var c, d, e, f, g; for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function () { var a, b, e, f; for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c)); return f }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, f.prototype.stop = function () { return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0 }, f.prototype.sync = function () { return a.notSupported ? this.doSync(this.element) : void 0 }, f.prototype.doSync = function (a) { var b, c, d, f, g; if (!this.stopped) { if (null == a && (a = this.element), 1 !== a.nodeType) return; for (a = a.parentNode || a, f = a.querySelectorAll("." + this.config.boxClass), g = [], c = 0, d = f.length; d > c; c++) b = f[c], e.call(this.all, b) < 0 ? (this.applyStyle(b, !0), this.boxes.push(b), this.all.push(b), g.push(this.scrolled = !0)) : g.push(void 0); return g } }, f.prototype.show = function (a) { return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass }, f.prototype.applyStyle = function (a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) { return function () { return f.customStyle(a, b, d, c, e) } }(this)) }, f.prototype.animate = function () { return "requestAnimationFrame" in window ? function (a) { return window.requestAnimationFrame(a) } : function (a) { return a() } }(), f.prototype.resetStyle = function () { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;")); return e }, f.prototype.customStyle = function (a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, f.prototype.vendors = ["moz", "webkit"], f.prototype.vendorSet = function (a, b) { var c, d, e, f; f = []; for (c in b) d = b[c], a["" + c] = d, f.push(function () { var b, f, g, h; for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d); return h }.call(this)); return f }, f.prototype.vendorCSS = function (a, b) { var c, d, e, f, g, h; for (d = window.getComputedStyle(a), c = d.getPropertyCSSValue(b), h = this.vendors, f = 0, g = h.length; g > f; f++) e = h[f], c = c || d.getPropertyCSSValue("-" + e + "-" + b); return c }, f.prototype.animationName = function (a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = window.getComputedStyle(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, f.prototype.cacheAnimationName = function (a) { return this.animationNameCache.set(a, this.animationName(a)) }, f.prototype.cachedAnimationName = function (a) { return this.animationNameCache.get(a) }, f.prototype.scrollHandler = function () { return this.scrolled = !0 }, f.prototype.scrollCallback = function () { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function () { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, f.prototype.offsetTop = function (a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, f.prototype.isVisible = function (a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, innerHeight) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, f.prototype.util = function () { return null != this._util ? this._util : this._util = new b }, f.prototype.disabled = function () { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, f }() }).call(this);

}(jQuery));

/*
	*jQuery OwlCarousel v1.27
	*Copyright (c) 2013 Bartosz Wojciechowski
	*http://www.owlgraphic.com/owlcarousel
	*Licensed under MIT
*/

(function ($) {

    eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p }('7(F 3v.2K!=="9"){3v.2K=9(e){9 t(){}t.5C=e;q 5B t}}(9(e,t,n,r){b i={1K:9(t,n){b r=c;r.6=e.3F({},e.3g.28.6,t);r.27=t;b i=n;b s=e(n);r.$k=s;r.3G()},3G:9(){b t=c;7(F t.6.2Y==="9"){t.6.2Y.U(c,[t.$k])}7(F t.6.38==="3a"){b n=t.6.38;9 r(e){7(F t.6.3d==="9"){t.6.3d.U(c,[e])}p{b n="";1Z(b r 3x e["h"]){n+=e["h"][r]["1W"]}t.$k.29(n)}t.2R()}e.5w(n,r)}p{t.2R()}},2R:9(e){b t=c;t.$k.A({23:0});t.2n=t.6.v;t.3M();t.5p=0;t.21;t.1L()},1L:9(){b e=c;7(e.$k.1Q().14===0){q d}e.1M();e.3T();e.$V=e.$k.1Q();e.J=e.$V.14;e.3Z();e.$L=e.$k.Z(".h-1W");e.$H=e.$k.Z(".h-1g");e.3e="R";e.1i=0;e.m=0;e.40();e.42()},42:9(){b e=c;e.2H();e.2I();e.4c();e.2L();e.4e();e.4f();e.22();e.4l();7(e.6.2j!==d){e.4o(e.6.2j)}7(e.6.N===j){e.6.N=4I}e.1b();e.$k.Z(".h-1g").A("4D","4E");7(!e.$k.2x(":32")){e.37()}p{e.$k.A("23",1)}e.5j=d;e.2l();7(F e.6.3b==="9"){e.6.3b.U(c,[e.$k])}},2l:9(){b e=c;7(e.6.1J===j){e.1J()}7(e.6.1q===j){e.1q()}7(e.6.2g===j){e.2g()}7(F e.6.3i==="9"){e.6.3i.U(c,[e.$k])}},3j:9(){b e=c;7(F e.6.3l==="9"){e.6.3l.U(c,[e.$k])}e.37();e.2H();e.2I();e.4C();e.2L();e.2l();7(F e.6.3o==="9"){e.6.3o.U(c,[e.$k])}},4B:9(e){b t=c;19(9(){t.3j()},0)},37:9(){b e=c;7(e.$k.2x(":32")===d){e.$k.A({23:0});1a(e.1u);1a(e.21)}p{q d}e.21=4z(9(){7(e.$k.2x(":32")){e.4B();e.$k.4y({23:1},2E);1a(e.21)}},4J)},3Z:9(){b e=c;e.$V.4U(\'<M K="h-1g">\').4u(\'<M K="h-1W"></M>\');e.$k.Z(".h-1g").4u(\'<M K="h-1g-4t">\');e.1D=e.$k.Z(".h-1g-4t");e.$k.A("4D","4E")},1M:9(){b e=c;b t=e.$k.1H(e.6.1M);b n=e.$k.1H(e.6.24);e.$k.w("h-4s",e.$k.2c("2d")).w("h-4r",e.$k.2c("K"));7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.24)}},2H:9(){b t=c;7(t.6.2V===d){q d}7(t.6.4q===j){t.6.v=t.2n=1;t.6.1v=d;t.6.1I=d;t.6.1X=d;t.6.1A=d;t.6.1E=d;q d}b n=e(t.6.4p).1h();7(n>(t.6.1v[0]||t.2n)){t.6.v=t.2n}7(n<=t.6.1v[0]&&t.6.1v!==d){t.6.v=t.6.1v[1]}7(n<=t.6.1I[0]&&t.6.1I!==d){t.6.v=t.6.1I[1]}7(n<=t.6.1X[0]&&t.6.1X!==d){t.6.v=t.6.1X[1]}7(n<=t.6.1A[0]&&t.6.1A!==d){t.6.v=t.6.1A[1]}7(n<=t.6.1E[0]&&t.6.1E!==d){t.6.v=t.6.1E[1]}7(t.6.v>t.J){t.6.v=t.J}},4e:9(){b n=c,r;7(n.6.2V!==j){q d}b i=e(t).1h();n.33=9(){7(e(t).1h()!==i){7(n.6.N!==d){1a(n.1u)}4V(r);r=19(9(){i=e(t).1h();n.3j()},n.6.4n)}};e(t).4m(n.33)},4C:9(){b e=c;7(e.B.1j===j){7(e.D[e.m]>e.2a){e.1k(e.D[e.m])}p{e.1k(0);e.m=0}}p{7(e.D[e.m]>e.2a){e.16(e.D[e.m])}p{e.16(0);e.m=0}}7(e.6.N!==d){e.3f()}},4i:9(){b t=c;b n=0;b r=t.J-t.6.v;t.$L.2h(9(i){b s=e(c);s.A({1h:t.P}).w("h-1W",3k(i));7(i%t.6.v===0||i===r){7(!(i>r)){n+=1}}s.w("h-2y",n)})},4h:9(){b e=c;b t=0;b t=e.$L.14*e.P;e.$H.A({1h:t*2,X:0});e.4i()},2I:9(){b e=c;e.4g();e.4h();e.4b();e.3t()},4g:9(){b e=c;e.P=1P.57(e.$k.1h()/e.6.v)},3t:9(){b e=c;e.E=e.J-e.6.v;b t=e.J*e.P-e.6.v*e.P;t=t*-1;e.2a=t;q t},47:9(){q 0},4b:9(){b e=c;e.D=[0];b t=0;1Z(b n=0;n<e.J;n++){t+=e.P;e.D.58(-t)}},4c:9(){b t=c;7(t.6.25===j||t.6.1t===j){t.G=e(\'<M K="h-59"/>\').5a("5b",!t.B.Y).5d(t.$k)}7(t.6.1t===j){t.3V()}7(t.6.25===j){t.3R()}},3R:9(){b t=c;b n=e(\'<M K="h-5l"/>\');t.G.1e(n);t.1s=e("<M/>",{"K":"h-1o",29:t.6.2P[0]||""});t.1z=e("<M/>",{"K":"h-R",29:t.6.2P[1]||""});n.1e(t.1s).1e(t.1z);n.z("2s.G 2u.G",\'M[K^="h"]\',9(n){n.1r();7(e(c).1H("h-R")){t.R()}p{t.1o()}})},3V:9(){b t=c;t.1p=e(\'<M K="h-1t"/>\');t.G.1e(t.1p);t.1p.z("2s.G 2u.G",".h-1n",9(n){n.1r();7(3k(e(c).w("h-1n"))!==t.m){t.1m(3k(e(c).w("h-1n")),j)}})},3J:9(){b t=c;7(t.6.1t===d){q d}t.1p.29("");b n=0;b r=t.J-t.J%t.6.v;1Z(b i=0;i<t.J;i++){7(i%t.6.v===0){n+=1;7(r===i){b s=t.J-t.6.v}b o=e("<M/>",{"K":"h-1n"});b u=e("<3H></3H>",{5x:t.6.31===j?n:"","K":t.6.31===j?"h-5y":""});o.1e(u);o.w("h-1n",r===i?s:i);o.w("h-2y",n);t.1p.1e(o)}}t.2O()},2O:9(){b t=c;7(t.6.1t===d){q d}t.1p.Z(".h-1n").2h(9(n,r){7(e(c).w("h-2y")===e(t.$L[t.m]).w("h-2y")){t.1p.Z(".h-1n").S("2e");e(c).I("2e")}})},36:9(){b e=c;7(e.6.25===d){q d}7(e.6.2f===d){7(e.m===0&&e.E===0){e.1s.I("15");e.1z.I("15")}p 7(e.m===0&&e.E!==0){e.1s.I("15");e.1z.S("15")}p 7(e.m===e.E){e.1s.S("15");e.1z.I("15")}p 7(e.m!==0&&e.m!==e.E){e.1s.S("15");e.1z.S("15")}}},2L:9(){b e=c;e.3J();e.36();7(e.G){7(e.6.v===e.J){e.G.3E()}p{e.G.3B()}}},5A:9(){b e=c;7(e.G){e.G.3c()}},R:9(e){b t=c;7(t.1S){q d}t.1T=t.m;t.m+=t.6.1U===j?t.6.v:1;7(t.m>t.E+(t.6.1U==j?t.6.v-1:0)){7(t.6.2f===j){t.m=0;e="2m"}p{t.m=t.E;q d}}t.1m(t.m,e)},1o:9(e){b t=c;7(t.1S){q d}t.1T=t.m;7(t.6.1U===j&&t.m>0&&t.m<t.6.v){t.m=0}p{t.m-=t.6.1U===j?t.6.v:1}7(t.m<0){7(t.6.2f===j){t.m=t.E;e="2m"}p{t.m=0;q d}}t.1m(t.m,e)},1m:9(e,t,n){b r=c;7(r.1S){q d}r.3h();7(F r.6.1V==="9"){r.6.1V.U(c,[r.$k])}7(e>=r.E){e=r.E}p 7(e<=0){e=0}r.m=r.h.m=e;7(r.6.2j!==d&&n!=="4w"&&r.6.v===1&&r.B.1j===j){r.1x(0);7(r.B.1j===j){r.1k(r.D[e])}p{r.16(r.D[e],1)}r.3z();r.2q();q d}b i=r.D[e];7(r.B.1j===j){r.1Y=d;7(t===j){r.1x("1y");19(9(){r.1Y=j},r.6.1y)}p 7(t==="2m"){r.1x(r.6.2t);19(9(){r.1Y=j},r.6.2t)}p{r.1x("1f");19(9(){r.1Y=j},r.6.1f)}r.1k(i)}p{7(t===j){r.16(i,r.6.1y)}p 7(t==="2m"){r.16(i,r.6.2t)}p{r.16(i,r.6.1f)}}r.2q()},3h:9(){b e=c;e.1i=e.h.1i=e.1T===r?e.m:e.1T;e.1T=r},3r:9(e){b t=c;t.3h();7(F t.6.1V==="9"){t.6.1V.U(c,[t.$k])}7(e>=t.E||e===-1){e=t.E}p 7(e<=0){e=0}t.1x(0);7(t.B.1j===j){t.1k(t.D[e])}p{t.16(t.D[e],1)}t.m=t.h.m=e;t.2q()},2q:9(){b e=c;e.2O();e.36();e.2l();7(F e.6.3s==="9"){e.6.3s.U(c,[e.$k])}7(e.6.N!==d){e.3f()}},W:9(){b e=c;e.3u="W";1a(e.1u)},3f:9(){b e=c;7(e.3u!=="W"){e.1b()}},1b:9(){b e=c;e.3u="1b";7(e.6.N===d){q d}1a(e.1u);e.1u=4z(9(){e.R(j)},e.6.N)},1x:9(e){b t=c;7(e==="1f"){t.$H.A(t.2w(t.6.1f))}p 7(e==="1y"){t.$H.A(t.2w(t.6.1y))}p 7(F e!=="3a"){t.$H.A(t.2w(e))}},2w:9(e){b t=c;q{"-1G-1d":"2p "+e+"1w 2i","-1R-1d":"2p "+e+"1w 2i","-o-1d":"2p "+e+"1w 2i",1d:"2p "+e+"1w 2i"}},3C:9(){q{"-1G-1d":"","-1R-1d":"","-o-1d":"",1d:""}},3D:9(e){q{"-1G-O":"1l("+e+"T, C, C)","-1R-O":"1l("+e+"T, C, C)","-o-O":"1l("+e+"T, C, C)","-1w-O":"1l("+e+"T, C, C)",O:"1l("+e+"T, C,C)"}},1k:9(e){b t=c;t.$H.A(t.3D(e))},3I:9(e){b t=c;t.$H.A({X:e})},16:9(e,t){b n=c;n.26=d;n.$H.W(j,j).4y({X:e},{5r:t||n.6.1f,3L:9(){n.26=j}})},3M:9(){b e=c;b r="1l(C, C, C)",i=n.5q("M");i.2d.3N="  -1R-O:"+r+"; -1w-O:"+r+"; -o-O:"+r+"; -1G-O:"+r+"; O:"+r;b s=/1l\\(C, C, C\\)/g,o=i.2d.3N.5n(s),u=o!==18&&o.14===1;b a="4F"3x t||5h.5e;e.B={1j:u,Y:a}},4f:9(){b e=c;7(e.6.1C!==d||e.6.1B!==d){e.3X();e.3Y()}},3T:9(){b e=c;b t=["s","e","x"];e.13={};7(e.6.1C===j&&e.6.1B===j){t=["41.h 2b.h","2A.h 44.h","2s.h 45.h 2u.h"]}p 7(e.6.1C===d&&e.6.1B===j){t=["41.h","2A.h","2s.h 45.h"]}p 7(e.6.1C===j&&e.6.1B===d){t=["2b.h","44.h","2u.h"]}e.13["46"]=t[0];e.13["2z"]=t[1];e.13["3w"]=t[2]},3Y:9(){b t=c;t.$k.z("55.h",9(e){e.1r()});t.$k.z("2b.4a",9(t){q e(t.1c).2x("54, 52, 51, 4Y")})},3X:9(){9 o(e){7(e.3p){q{x:e.3p[0].3m,y:e.3p[0].4j}}p{7(e.3m!==r){q{x:e.3m,y:e.4j}}p{q{x:e.4X,y:e.4W}}}}9 u(t){7(t==="z"){e(n).z(i.13["2z"],f);e(n).z(i.13["3w"],l)}p 7(t==="Q"){e(n).Q(i.13["2z"]);e(n).Q(i.13["3w"])}}9 a(n){b n=n.35||n||t.34;7(i.26===d&&!i.6.30){q d}7(i.1Y===d&&!i.6.30){q d}7(i.6.N!==d){1a(i.1u)}7(i.B.Y!==j&&!i.$H.1H("2W")){i.$H.I("2W")}i.11=0;i.12=0;e(c).A(i.3C());b r=e(c).2k();s.2J=r.X;s.2G=o(n).x-r.X;s.2F=o(n).y-r.4H;u("z");s.2o=d;s.2C=n.1c||n.4A}9 f(r){b r=r.35||r||t.34;i.11=o(r).x-s.2G;i.3q=o(r).y-s.2F;i.12=i.11-s.2J;7(F i.6.3n==="9"&&s.39!==j&&i.12!==0){s.39=j;i.6.3n.U(c)}7(i.12>8||i.12<-8&&i.B.Y===j){r.1r?r.1r():r.4G=d;s.2o=j}7((i.3q>10||i.3q<-10)&&s.2o===d){e(n).Q("2A.h")}b u=9(){q i.12/5};b a=9(){q i.2a+i.12/5};i.11=1P.3t(1P.47(i.11,u()),a());7(i.B.1j===j){i.1k(i.11)}p{i.3I(i.11)}}9 l(n){b n=n.35||n||t.34;n.1c=n.1c||n.4A;s.39=d;7(i.B.Y!==j){i.$H.S("2W")}7(i.12!==0){b r=i.4x();i.1m(r,d,"4w");7(s.2C===n.1c&&i.B.Y!==j){e(n.1c).z("2X.3y",9(t){t.4K();t.4L();t.1r();e(n.1c).Q("2X.3y")});b o=e.4M(n.1c,"4N")["2X"];b a=o.4O();o.4P(0,0,a)}}u("Q")}b i=c;b s={2G:0,2F:0,4Q:0,2J:0,2k:18,4R:18,4S:18,2o:18,4T:18,2C:18};i.26=j;i.$k.z(i.13["46"],".h-1g",a)},4x:9(){b e=c,t;b t=e.4v();7(t>e.E){e.m=e.E;t=e.E}p 7(e.11>=0){t=0;e.m=0}q t},4v:9(){b t=c;b n=t.D;b r=t.11;b i=18;e.2h(n,9(e,s){7(r-t.P/20>n[e+1]&&r-t.P/20<s&&t.2Q()==="X"){i=s;t.m=e}p 7(r+t.P/20<s&&r+t.P/20>n[e+1]&&t.2Q()==="4k"){i=n[e+1];t.m=e+1}});q t.m},2Q:9(){b e=c,t;7(e.12<0){t="4k";e.3e="R"}p{t="X";e.3e="1o"}q t},40:9(){b e=c;e.$k.z("h.R",9(){e.R()});e.$k.z("h.1o",9(){e.1o()});e.$k.z("h.1b",9(t,n){e.6.N=n;e.1b();e.2N="1b"});e.$k.z("h.W",9(){e.W();e.2N="W"});e.$k.z("h.1m",9(t,n){e.1m(n)});e.$k.z("h.3r",9(t,n){e.3r(n)})},22:9(){b e=c;7(e.6.22===j&&e.B.Y!==j&&e.6.N!==d){e.$k.z("4Z",9(){e.W()});e.$k.z("50",9(){7(e.2N!=="W"){e.1b()}})}},1J:9(){b t=c;7(t.6.1J===d){q d}1Z(b n=0;n<t.J;n++){b i=e(t.$L[n]);7(i.w("h-17")==="17"){4d}b s=i.w("h-1W"),o=i.Z(".53"),u;7(F o.w("2r")!=="3a"){i.w("h-17","17");4d}7(i.w("h-17")===r){o.3E();i.I("49").w("h-17","56")}7(t.6.48===j){u=s>=t.m}p{u=j}7(u&&s<t.m+t.6.v&&o.14){t.43(i,o)}}},43:9(e,t){9 i(){r+=1;7(n.2D(t.2B(0))){s()}p 7(r<=2v){19(i,2v)}p{s()}}9 s(){e.w("h-17","17").S("49");t.5c("w-2r");n.6.3W==="3U"?t.5f(5g):t.3B()}b n=c,r=0;t[0].2r=t.w("2r");i()},1q:9(){9 s(){i+=1;7(t.2D(n.2B(0))){o()}p 7(i<=2v){19(s,2v)}p{t.1D.A("2S","")}}9 o(){b n=e(t.$L[t.m]).2S();t.1D.A("2S",n+"T");7(!t.1D.1H("1q")){19(9(){t.1D.I("1q")},0)}}b t=c;b n=e(t.$L[t.m]).Z("5i");7(n.2B(0)!==r){b i=0;s()}p{o()}},2D:9(e){7(!e.3L){q d}7(F e.3S!=="5k"&&e.3S==0){q d}q j},2g:9(){b t=c;t.$L.S("2e");1Z(b n=t.m;n<t.m+t.6.v;n++){e(t.$L[n]).I("2e")}},4o:9(e){b t=c;t.3Q="h-"+e+"-5m";t.3P="h-"+e+"-3x"},3z:9(){9 u(e,t){q{2k:"5o",X:e+"T"}}b e=c;e.1S=j;b t=e.3Q,n=e.3P,r=e.$L.1O(e.m),i=e.$L.1O(e.1i),s=1P.3O(e.D[e.m])+e.D[e.1i],o=1P.3O(e.D[e.m])+e.P/2;e.$H.I("h-1F").A({"-1G-O-1F":o+"T","-1R-3K-1F":o+"T","3K-1F":o+"T"});b a="5s 5t 5u 5v";i.A(u(s,10)).I(t).z(a,9(){e.2T=j;i.Q(a);e.2U(i,t)});r.I(n).z(a,9(){e.2Z=j;r.Q(a);e.2U(r,n)})},2U:9(e,t){b n=c;e.A({2k:"",X:""}).S(t);7(n.2T&&n.2Z){n.$H.S("h-1F");n.2T=d;n.2Z=d;n.1S=d}},4l:9(){b e=c;e.h={27:e.27,5z:e.$k,V:e.$V,L:e.$L,m:e.m,1i:e.1i,Y:e.B.Y,B:e.B}},3A:9(){b r=c;r.$k.Q(".h h 2b.4a");e(n).Q(".h h");e(t).Q("4m",r.33)},1N:9(){b e=c;7(e.$k.1Q().14!==0){e.$H.2M();e.$V.2M().2M();7(e.G){e.G.3c()}}e.3A();e.$k.2c("2d",e.$k.w("h-4s")||"").2c("K",e.$k.w("h-4r"))},5D:9(){b e=c;e.W();1a(e.21);e.1N();e.$k.5E()},5F:9(t){b n=c;b r=e.3F({},n.27,t);n.1N();n.1K(r,n.$k)},5G:9(e,t){b n=c,i;7(!e){q d}7(n.$k.1Q().14===0){n.$k.1e(e);n.1L();q d}n.1N();7(t===r||t===-1){i=-1}p{i=t}7(i>=n.$V.14||i===-1){n.$V.1O(-1).5H(e)}p{n.$V.1O(i).5I(e)}n.1L()},5J:9(e){b t=c,n;7(t.$k.1Q().14===0){q d}7(e===r||e===-1){n=-1}p{n=e}t.1N();t.$V.1O(n).3c();t.1L()}};e.3g.28=9(t){q c.2h(9(){7(e(c).w("h-1K")===j){q d}e(c).w("h-1K",j);b n=3v.2K(i);n.1K(t,c);e.w(c,"28",n)})};e.3g.28.6={v:5,1v:[5K,4],1I:[5L,3],1X:[5M,2],1A:d,1E:[5N,1],4q:d,1f:2E,1y:5O,2t:5P,N:d,22:d,25:d,2P:["1o","R"],2f:j,1U:d,1t:j,31:d,2V:j,4n:2E,4p:t,1M:"h-5Q",24:"h-24",1J:d,48:j,3W:"3U",1q:d,38:d,3d:d,30:j,1C:j,1B:j,2g:d,2j:d,3l:d,3o:d,2Y:d,3b:d,1V:d,3s:d,3i:d,3n:d}})(5R,5S,5T)', 62, 366, '||||||options|if||function||var|this|false||||owl||true|elem||currentItem|||else|return|||||items|data|||on|css|browser|0px|positionsInArray|maximumItem|typeof|owlControls|owlWrapper|addClass|itemsAmount|class|owlItems|div|autoPlay|transform|itemWidth|off|next|removeClass|px|apply|userItems|stop|left|isTouch|find||newPosX|newRelativeX|ev_types|length|disabled|css2slide|loaded|null|setTimeout|clearInterval|play|target|transition|append|slideSpeed|wrapper|width|prevItem|support3d|transition3d|translate3d|goTo|page|prev|paginationWrapper|autoHeight|preventDefault|buttonPrev|pagination|autoPlayInterval|itemsDesktop|ms|swapSpeed|paginationSpeed|buttonNext|itemsTabletSmall|touchDrag|mouseDrag|wrapperOuter|itemsMobile|origin|webkit|hasClass|itemsDesktopSmall|lazyLoad|init|setVars|baseClass|unWrap|eq|Math|children|moz|isTransition|storePrevItem|scrollPerPage|beforeMove|item|itemsTablet|isCss3Finish|for||checkVisible|stopOnHover|opacity|theme|navigation|isCssFinish|userOptions|owlCarousel|html|maximumPixels|mousedown|attr|style|active|rewindNav|addClassActive|each|ease|transitionStyle|position|eachMoveUpdate|rewind|orignalItems|sliding|all|afterGo|src|touchend|rewindSpeed|mouseup|100|addCssSpeed|is|roundPages|move|touchmove|get|targetElement|completeImg|200|offsetY|offsetX|updateItems|calculateAll|relativePos|create|updateControls|unwrap|hoverStatus|checkPagination|navigationText|moveDirection|logIn|height|endPrev|clearTransStyle|responsive|grabbing|click|beforeInit|endCurrent|dragBeforeAnimFinish|paginationNumbers|visible|resizer|event|originalEvent|checkNavigation|watchVisibility|jsonPath|dragging|string|afterInit|remove|jsonSuccess|playDirection|checkAp|fn|getPrevItem|afterAction|updateVars|Number|beforeUpdate|pageX|startDragging|afterUpdate|touches|newPosY|jumpTo|afterMove|max|apStatus|Object|end|in|disable|singleItemTransition|clearEvents|show|removeTransition|doTranslate|hide|extend|loadContent|span|css2move|updatePagination|perspective|complete|checkBrowser|cssText|abs|inClass|outClass|buildButtons|naturalWidth|eventTypes|fade|buildPagination|lazyEffect|gestures|disabledEvents|wrapItems|customEvents|touchstart|onStartup|lazyPreload|mousemove|touchcancel|start|min|lazyFollow|loading|disableTextSelect|loops|buildControls|continue|response|moveEvents|calculateWidth|appendWrapperSizes|appendItemsSizes|pageY|right|owlStatus|resize|responsiveRefreshRate|transitionTypes|responsiveBaseWidth|singleItem|originalClasses|originalStyles|outer|wrap|improveClosest|drag|getNewPosition|animate|setInterval|srcElement|reload|updatePosition|display|block|ontouchstart|returnValue|top|5e3|500|stopImmediatePropagation|stopPropagation|_data|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|wrapAll|clearTimeout|clientY|clientX|option|mouseover|mouseout|select|textarea|lazyOwl|input|dragstart|checked|round|push|controls|toggleClass|clickable|removeAttr|appendTo|msMaxTouchPoints|fadeIn|400|navigator|img|onstartup|undefined|buttons|out|match|relative|wrapperWidth|createElement|duration|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|text|numbers|baseElement|destroyControls|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'), 0, {}))

}(jQuery));


/*
	*@author       Constantin Saguin - @brutaldesign
	*@link            http://bsign.co
	*@github        http://github.com/brutaldesign/swipebox
	*@version     1.1.2
	*@license      MIT License
*/


(function ($) {

    (function (e, t, n, r) { n.swipebox = function (i, s) { var o = { useCSS: true, hideBarsDelay: 3e3 }, u = this, a = n(i), i = i, f = i.selector, l = n(f), c = t.createTouch !== r || "ontouchstart" in e || "onmsgesturechange" in e || navigator.msMaxTouchPoints, h = !!e.SVGSVGElement, p = '<div id="swipebox-overlay">					<div id="swipebox-slider"></div>					<div id="swipebox-caption"></div>					<div id="swipebox-action">						<a id="swipebox-close"></a>						<a id="swipebox-prev"></a>						<a id="swipebox-next"></a>					</div>			</div>'; u.settings = {}; u.init = function () { u.settings = n.extend({}, o, s); l.click(function (e) { e.preventDefault(); e.stopPropagation(); index = a.index(n(this)); d.target = n(e.target); d.init(index) }) }; var d = { init: function (e) { this.target.trigger("swipebox-start"); this.build(); this.openSlide(e); this.openImg(e); this.preloadImg(e + 1); this.preloadImg(e - 1) }, build: function () { var t = this; n("body").append(p); if (t.doCssTrans()) { n("#swipebox-slider").css({ "-webkit-transition": "left 0.4s ease", "-moz-transition": "left 0.4s ease", "-o-transition": "left 0.4s ease", "-khtml-transition": "left 0.4s ease", transition: "left 0.4s ease" }); n("#swipebox-overlay").css({ "-webkit-transition": "opacity 1s ease", "-moz-transition": "opacity 1s ease", "-o-transition": "opacity 1s ease", "-khtml-transition": "opacity 1s ease", transition: "opacity 1s ease" }); n("#swipebox-action, #swipebox-caption").css({ "-webkit-transition": "0.5s", "-moz-transition": "0.5s", "-o-transition": "0.5s", "-khtml-transition": "0.5s", transition: "0.5s" }) } if (h) { var r = n("#swipebox-action #swipebox-close").css("background-image"); r = r.replace("png", "svg"); n("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({ "background-image": r }) } a.each(function () { n("#swipebox-slider").append('<div class="slide"></div>') }); t.setDim(); t.actions(); t.keyboard(); t.gesture(); t.animBars(); n(e).resize(function () { t.setDim() }).resize() }, setDim: function () { var t = { width: n(e).width(), height: e.innerHeight ? e.innerHeight : n(e).height() }; n("#swipebox-overlay").css(t) }, supportTransition: function () { var e = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" "); for (var n = 0; n < e.length; n++) { if (t.createElement("div").style[e[n]] !== r) { return e[n] } } return false }, doCssTrans: function () { if (u.settings.useCSS && this.supportTransition()) { return true } }, gesture: function () { if (c) { var e = this, t = null, r = 10, i = {}, s = {}; var o = n("#swipebox-caption, #swipebox-action"); o.addClass("visible-bars"); e.setTimeout(); n("body").bind("touchstart", function (e) { n(this).addClass("touching"); s = e.originalEvent.targetTouches[0]; i.pageX = e.originalEvent.targetTouches[0].pageX; n(".touching").bind("touchmove", function (e) { e.preventDefault(); e.stopPropagation(); s = e.originalEvent.targetTouches[0] }); return false }).bind("touchend", function (u) { u.preventDefault(); u.stopPropagation(); t = s.pageX - i.pageX; if (t >= r) { e.getPrev() } else if (t <= -r) { e.getNext() } else { if (!o.hasClass("visible-bars")) { e.showBars(); e.setTimeout() } else { e.clearTimeout(); e.hideBars() } } n(".touching").off("touchmove").removeClass("touching") }) } }, setTimeout: function () { if (u.settings.hideBarsDelay > 0) { var t = this; t.clearTimeout(); t.timeout = e.setTimeout(function () { t.hideBars() }, u.settings.hideBarsDelay) } }, clearTimeout: function () { e.clearTimeout(this.timeout); this.timeout = null }, showBars: function () { var e = n("#swipebox-caption, #swipebox-action"); if (this.doCssTrans()) { e.addClass("visible-bars") } else { n("#swipebox-caption").animate({ top: 0 }, 500); n("#swipebox-action").animate({ bottom: 0 }, 500); setTimeout(function () { e.addClass("visible-bars") }, 1e3) } }, hideBars: function () { var e = n("#swipebox-caption, #swipebox-action"); if (this.doCssTrans()) { e.removeClass("visible-bars") } else { n("#swipebox-caption").animate({ top: "-50px" }, 500); n("#swipebox-action").animate({ bottom: "-50px" }, 500); setTimeout(function () { e.removeClass("visible-bars") }, 1e3) } }, animBars: function () { var e = this; var t = n("#swipebox-caption, #swipebox-action"); t.addClass("visible-bars"); e.setTimeout(); n("#swipebox-slider").click(function (n) { if (!t.hasClass("visible-bars")) { e.showBars(); e.setTimeout() } }); n("#swipebox-action").hover(function () { e.showBars(); t.addClass("force-visible-bars"); e.clearTimeout() }, function () { t.removeClass("force-visible-bars"); e.setTimeout() }) }, keyboard: function () { var t = this; n(e).bind("keyup", function (e) { e.preventDefault(); e.stopPropagation(); if (e.keyCode == 37) { t.getPrev() } else if (e.keyCode == 39) { t.getNext() } else if (e.keyCode == 27) { t.closeSlide() } }) }, actions: function () { var e = this; if (a.length < 2) { n("#swipebox-prev, #swipebox-next").hide() } else { n("#swipebox-prev").bind("click touchend", function (t) { t.preventDefault(); t.stopPropagation(); e.getPrev(); e.setTimeout() }); n("#swipebox-next").bind("click touchend", function (t) { t.preventDefault(); t.stopPropagation(); e.getNext(); e.setTimeout() }) } n("#swipebox-close").bind("click touchend", function (t) { e.closeSlide() }) }, setSlide: function (e, t) { t = t || false; var r = n("#swipebox-slider"); if (this.doCssTrans()) { r.css({ left: -e * 100 + "%" }) } else { r.animate({ left: -e * 100 + "%" }) } n("#swipebox-slider .slide").removeClass("current"); n("#swipebox-slider .slide").eq(e).addClass("current"); this.setTitle(e); if (t) { r.fadeIn() } n("#swipebox-prev, #swipebox-next").removeClass("disabled"); if (e == 0) { n("#swipebox-prev").addClass("disabled") } else if (e == a.length - 1) { n("#swipebox-next").addClass("disabled") } }, openSlide: function (t) { n("html").addClass("swipebox"); n(e).trigger("resize"); this.setSlide(t, true) }, preloadImg: function (e) { var t = this; setTimeout(function () { t.openImg(e) }, 1e3) }, openImg: function (e) { var t = this; if (e < 0 || e >= a.length) { return false } t.loadImg(a.eq(e).attr("href"), function () { n("#swipebox-slider .slide").eq(e).html(this) }) }, setTitle: function (e, t) { n("#swipebox-caption").empty(); if (a.eq(e).attr("title")) { n("#swipebox-caption").append(a.eq(e).attr("title")) } }, loadImg: function (e, t) { var r = n("<img>").on("load", function () { t.call(r) }); r.attr("src", e) }, getNext: function () { var e = this; index = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current")); if (index + 1 < a.length) { index++; e.setSlide(index); e.preloadImg(index + 1) } else { n("#swipebox-slider").addClass("rightSpring"); setTimeout(function () { n("#swipebox-slider").removeClass("rightSpring") }, 500) } }, getPrev: function () { var e = this; index = n("#swipebox-slider .slide").index(n("#swipebox-slider .slide.current")); if (index > 0) { index--; e.setSlide(index); e.preloadImg(index - 1) } else { n("#swipebox-slider").addClass("leftSpring"); setTimeout(function () { n("#swipebox-slider").removeClass("leftSpring") }, 500) } }, closeSlide: function () { var t = this; n(e).trigger("resize"); n("html").removeClass("swipebox"); t.destroy() }, destroy: function () { var t = this; n(e).unbind("keyup"); n("body").unbind("touchstart"); n("body").unbind("touchmove"); n("body").unbind("touchend"); n("#swipebox-slider").unbind(); n("#swipebox-overlay").remove(); a.removeData("_swipebox"); t.target.trigger("swipebox-destroy") } }; u.init() }; n.fn.swipebox = function (e) { if (!n.data(this, "_swipebox")) { var t = new n.swipebox(this, e); this.data("_swipebox", t) } } })(window, document, jQuery)

}(jQuery));

/*
	* Snap.js
	*
	* Copyright 2013, Jacob Kelley - http://jakiestfu.com/
	* Released under the MIT Licence
	* http://opensource.org/licenses/MIT
	*
	* Github:  http://github.com/jakiestfu/Snap.js/
	* Version: 1.9.2
*/
/*jslint browser: true*/
/*global define, module, ender*/

(function ($) {

    (function (e, t) { "use strict"; var n = n || function (n) { var r = { element: null, dragger: null, disable: "right", addBodyClasses: true, hyperextensible: false, resistance: .5, flickThreshold: 50, transitionSpeed: .3, easing: "ease-in-out", maxPosition: 272, minPosition: 0, tapToClose: true, touchToDrag: true, slideIntent: 40, minDragDistance: 5 }, i = { simpleStates: { opening: null, towards: null, hyperExtending: null, halfway: null, flick: null, translation: { absolute: 0, relative: 0, sinceDirectionChange: 0, percentage: 0 } } }, s = {}, o = { hasTouch: t.ontouchstart === null, eventType: function (e) { var t = { down: o.hasTouch ? "touchstart" : "mousedown", move: o.hasTouch ? "touchmove" : "mousemove", up: o.hasTouch ? "touchend" : "mouseup", out: o.hasTouch ? "touchcancel" : "mouseout" }; return t[e] }, page: function (e, t) { return o.hasTouch && t.touches.length && t.touches[0] ? t.touches[0]["page" + e] : t["page" + e] }, klass: { has: function (e, t) { return e.className.indexOf(t) !== -1 }, add: function (e, t) { if (!o.klass.has(e, t) && r.addBodyClasses) { e.className += " " + t } }, remove: function (e, t) { if (r.addBodyClasses) { e.className = e.className.replace(t, "").replace(/^\s+|\s+$/g, "") } } }, dispatchEvent: function (e) { if (typeof s[e] === "function") { return s[e].call() } }, vendor: function () { var e = t.createElement("div"), n = "webkit Moz O ms".split(" "), r; for (r in n) { if (typeof e.style[n[r] + "Transition"] !== "undefined") { return n[r] } } }, transitionCallback: function () { return i.vendor === "Moz" || i.vendor === "ms" ? "transitionend" : i.vendor + "TransitionEnd" }, canTransform: function () { return typeof r.element.style[i.vendor + "Transform"] !== "undefined" }, deepExtend: function (e, t) { var n; for (n in t) { if (t[n] && t[n].constructor && t[n].constructor === Object) { e[n] = e[n] || {}; o.deepExtend(e[n], t[n]) } else { e[n] = t[n] } } return e }, angleOfDrag: function (e, t) { var n, r; r = Math.atan2(-(i.startDragY - t), i.startDragX - e); if (r < 0) { r += 2 * Math.PI } n = Math.floor(r * (180 / Math.PI) - 180); if (n < 0 && n > -180) { n = 360 - Math.abs(n) } return Math.abs(n) }, events: { addEvent: function (t, n, r) { if (t.addEventListener) { return t.addEventListener(n, r, false) } else if (t.attachEvent) { return t.attachEvent("on" + n, r) } }, removeEvent: function (t, n, r) { if (t.addEventListener) { return t.removeEventListener(n, r, false) } else if (t.attachEvent) { return t.detachEvent("on" + n, r) } }, prevent: function (e) { if (e.preventDefault) { e.preventDefault() } else { e.returnValue = false } } }, parentUntil: function (e, t) { var n = typeof t === "string"; while (e.parentNode) { if (n && e.getAttribute && e.getAttribute(t)) { return e } else if (!n && e === t) { return e } e = e.parentNode } return null } }, u = { translate: { get: { matrix: function (t) { if (!o.canTransform()) { return parseInt(r.element.style.left, 10) } else { var n = e.getComputedStyle(r.element)[i.vendor + "Transform"].match(/\((.*)\)/), s = 8; if (n) { n = n[1].split(","); if (n.length === 16) { t += s } return parseInt(n[t], 10) } return 0 } } }, easeCallback: function () { r.element.style[i.vendor + "Transition"] = ""; i.translation = u.translate.get.matrix(4); i.easing = false; clearInterval(i.animatingInterval); if (i.easingTo === 0) { o.klass.remove(t.body, "snapjs-right"); o.klass.remove(t.body, "snapjs-left") } o.dispatchEvent("animated"); o.events.removeEvent(r.element, o.transitionCallback(), u.translate.easeCallback) }, easeTo: function (e) { if (!o.canTransform()) { i.translation = e; u.translate.x(e) } else { i.easing = true; i.easingTo = e; r.element.style[i.vendor + "Transition"] = "all " + r.transitionSpeed + "s " + r.easing; i.animatingInterval = setInterval(function () { o.dispatchEvent("animating") }, 1); o.events.addEvent(r.element, o.transitionCallback(), u.translate.easeCallback); u.translate.x(e) } if (e === 0) { r.element.style[i.vendor + "Transform"] = "" } }, x: function (n) { if (r.disable === "left" && n > 0 || r.disable === "right" && n < 0) { return } if (!r.hyperextensible) { if (n === r.maxPosition || n > r.maxPosition) { n = r.maxPosition } else if (n === r.minPosition || n < r.minPosition) { n = r.minPosition } } n = parseInt(n, 10); if (isNaN(n)) { n = 0 } if (o.canTransform()) { var s = "translate3d(" + n + "px, 0,0)"; r.element.style[i.vendor + "Transform"] = s } else { r.element.style.width = (e.innerWidth || t.documentElement.clientWidth) + "px"; r.element.style.left = n + "px"; r.element.style.right = "" } } }, drag: { listen: function () { i.translation = 0; i.easing = false; o.events.addEvent(r.element, o.eventType("down"), u.drag.startDrag); o.events.addEvent(r.element, o.eventType("move"), u.drag.dragging); o.events.addEvent(r.element, o.eventType("up"), u.drag.endDrag) }, stopListening: function () { o.events.removeEvent(r.element, o.eventType("down"), u.drag.startDrag); o.events.removeEvent(r.element, o.eventType("move"), u.drag.dragging); o.events.removeEvent(r.element, o.eventType("up"), u.drag.endDrag) }, startDrag: function (e) { var t = e.target ? e.target : e.srcElement, n = o.parentUntil(t, "data-snap-ignore"); if (n) { o.dispatchEvent("ignore"); return } if (r.dragger) { var s = o.parentUntil(t, r.dragger); if (!s && i.translation !== r.minPosition && i.translation !== r.maxPosition) { return } } o.dispatchEvent("start"); r.element.style[i.vendor + "Transition"] = ""; i.isDragging = true; i.hasIntent = null; i.intentChecked = false; i.startDragX = o.page("X", e); i.startDragY = o.page("Y", e); i.dragWatchers = { current: 0, last: 0, hold: 0, state: "" }; i.simpleStates = { opening: null, towards: null, hyperExtending: null, halfway: null, flick: null, translation: { absolute: 0, relative: 0, sinceDirectionChange: 0, percentage: 0 } } }, dragging: function (e) { if (i.isDragging && r.touchToDrag) { var n = o.page("X", e), s = o.page("Y", e), a = i.translation, f = u.translate.get.matrix(4), l = n - i.startDragX, c = f > 0, h = l, p; if (i.intentChecked && !i.hasIntent) { return } if (r.addBodyClasses) { if (f > 0) { o.klass.add(t.body, "snapjs-left"); o.klass.remove(t.body, "snapjs-right") } else if (f < 0) { o.klass.add(t.body, "snapjs-right"); o.klass.remove(t.body, "snapjs-left") } } if (i.hasIntent === false || i.hasIntent === null) { var d = o.angleOfDrag(n, s), v = d >= 0 && d <= r.slideIntent || d <= 360 && d > 360 - r.slideIntent, m = d >= 180 && d <= 180 + r.slideIntent || d <= 180 && d >= 180 - r.slideIntent; if (!m && !v) { i.hasIntent = false } else { i.hasIntent = true } i.intentChecked = true } if (r.minDragDistance >= Math.abs(n - i.startDragX) || i.hasIntent === false) { return } o.events.prevent(e); o.dispatchEvent("drag"); i.dragWatchers.current = n; if (i.dragWatchers.last > n) { if (i.dragWatchers.state !== "left") { i.dragWatchers.state = "left"; i.dragWatchers.hold = n } i.dragWatchers.last = n } else if (i.dragWatchers.last < n) { if (i.dragWatchers.state !== "right") { i.dragWatchers.state = "right"; i.dragWatchers.hold = n } i.dragWatchers.last = n } if (c) { if (r.maxPosition < f) { p = (f - r.maxPosition) * r.resistance; h = l - p } i.simpleStates = { opening: "left", towards: i.dragWatchers.state, hyperExtending: r.maxPosition < f, halfway: f > r.maxPosition / 2, flick: Math.abs(i.dragWatchers.current - i.dragWatchers.hold) > r.flickThreshold, translation: { absolute: f, relative: l, sinceDirectionChange: i.dragWatchers.current - i.dragWatchers.hold, percentage: f / r.maxPosition * 100 } } } else { if (r.minPosition > f) { p = (f - r.minPosition) * r.resistance; h = l - p } i.simpleStates = { opening: "right", towards: i.dragWatchers.state, hyperExtending: r.minPosition > f, halfway: f < r.minPosition / 2, flick: Math.abs(i.dragWatchers.current - i.dragWatchers.hold) > r.flickThreshold, translation: { absolute: f, relative: l, sinceDirectionChange: i.dragWatchers.current - i.dragWatchers.hold, percentage: f / r.minPosition * 100 } } } u.translate.x(h + a) } }, endDrag: function (e) { if (i.isDragging) { o.dispatchEvent("end"); var t = u.translate.get.matrix(4); if (i.dragWatchers.current === 0 && t !== 0 && r.tapToClose) { o.dispatchEvent("close"); o.events.prevent(e); u.translate.easeTo(0); i.isDragging = false; i.startDragX = 0; return } if (i.simpleStates.opening === "left") { if (i.simpleStates.halfway || i.simpleStates.hyperExtending || i.simpleStates.flick) { if (i.simpleStates.flick && i.simpleStates.towards === "left") { u.translate.easeTo(0) } else if (i.simpleStates.flick && i.simpleStates.towards === "right" || i.simpleStates.halfway || i.simpleStates.hyperExtending) { u.translate.easeTo(r.maxPosition) } } else { u.translate.easeTo(0) } } else if (i.simpleStates.opening === "right") { if (i.simpleStates.halfway || i.simpleStates.hyperExtending || i.simpleStates.flick) { if (i.simpleStates.flick && i.simpleStates.towards === "right") { u.translate.easeTo(0) } else if (i.simpleStates.flick && i.simpleStates.towards === "left" || i.simpleStates.halfway || i.simpleStates.hyperExtending) { u.translate.easeTo(r.minPosition) } } else { u.translate.easeTo(0) } } i.isDragging = false; i.startDragX = o.page("X", e) } } } }, a = function (e) { if (e.element) { o.deepExtend(r, e); i.vendor = o.vendor(); u.drag.listen() } }; this.open = function (e) { o.dispatchEvent("open"); o.klass.remove(t.body, "snapjs-expand-left"); o.klass.remove(t.body, "snapjs-expand-right"); if (e === "left") { i.simpleStates.opening = "left"; i.simpleStates.towards = "right"; o.klass.add(t.body, "snapjs-left"); o.klass.remove(t.body, "snapjs-right"); u.translate.easeTo(r.maxPosition) } else if (e === "right") { i.simpleStates.opening = "right"; i.simpleStates.towards = "left"; o.klass.remove(t.body, "snapjs-left"); o.klass.add(t.body, "snapjs-right"); u.translate.easeTo(r.minPosition) } }; this.close = function () { o.dispatchEvent("close"); u.translate.easeTo(0) }; this.expand = function (n) { var r = e.innerWidth || t.documentElement.clientWidth; if (n === "left") { o.dispatchEvent("expandLeft"); o.klass.add(t.body, "snapjs-expand-left"); o.klass.remove(t.body, "snapjs-expand-right") } else { o.dispatchEvent("expandRight"); o.klass.add(t.body, "snapjs-expand-right"); o.klass.remove(t.body, "snapjs-expand-left"); r *= -1 } u.translate.easeTo(r) }; this.on = function (e, t) { s[e] = t; return this }; this.off = function (e) { if (s[e]) { s[e] = false } }; this.enable = function () { o.dispatchEvent("enable"); u.drag.listen() }; this.disable = function () { o.dispatchEvent("disable"); u.drag.stopListening() }; this.settings = function (e) { o.deepExtend(r, e) }; this.state = function () { var e, t = u.translate.get.matrix(4); if (t === r.maxPosition) { e = "left" } else if (t === r.minPosition) { e = "right" } else { e = "closed" } return { state: e, info: i.simpleStates } }; a(n) }; if (typeof module !== "undefined" && module.exports) { module.exports = n } if (typeof ender === "undefined") { this.Snap = n } if (typeof define === "function" && define.amd) { define("snap", [], function () { return n }) } }).call(this, window, document)

}(jQuery));


/*
	* countdown is a simple jquery plugin for countdowns
	* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	* and GPL-3.0 (http://opensource.org/licenses/GPL-3.0) licenses.
	* @source: http://github.com/rendro/countdown/
	* @autor: Robert Fleischmann
	* @version: 1.0.1
*/


(function ($) {

    (function () { (function (e) { e.countdown = function (t, n) { var r, i = this; this.el = t; this.$el = e(t); this.$el.data("countdown", this); this.init = function () { i.options = e.extend({}, e.countdown.defaultOptions, n); if (i.options.refresh) { i.interval = setInterval(function () { return i.render() }, i.options.refresh) } i.render(); return i }; r = function (t) { var n, r; t = Date.parse(e.isPlainObject(i.options.date) ? i.options.date : new Date(i.options.date)); r = (t - Date.parse(new Date)) / 1e3; if (r <= 0) { r = 0; if (i.interval) { i.stop() } i.options.onEnd.apply(i) } n = { years: 0, days: 0, hours: 0, min: 0, sec: 0, millisec: 0 }; if (r >= 365.25 * 86400) { n.years = Math.floor(r / (365.25 * 86400)); r -= n.years * 365.25 * 86400 } if (r >= 86400) { n.days = Math.floor(r / 86400); r -= n.days * 86400 } if (r >= 3600) { n.hours = Math.floor(r / 3600); r -= n.hours * 3600 } if (r >= 60) { n.min = Math.floor(r / 60); r -= n.min * 60 } n.sec = r; return n }; this.leadingZeros = function (e, t) { if (t == null) { t = 2 } e = String(e); while (e.length < t) { e = "0" + e } return e }; this.update = function (e) { i.options.date = e; return i }; this.render = function () { i.options.render.apply(i, [r(i.options.date)]); return i }; this.stop = function () { if (i.interval) { clearInterval(i.interval) } i.interval = null; return i }; this.start = function (t) { if (t == null) { t = i.options.refresh || e.countdown.defaultOptions.refresh } if (i.interval) { clearInterval(i.interval) } i.render(); i.options.refresh = t; i.interval = setInterval(function () { return i.render() }, i.options.refresh); return i }; return this.init() }; e.countdown.defaultOptions = { date: "June 7, 2087 15:03:25", refresh: 1e3, onEnd: e.noop, render: function (t) { return e(this.el).html("" + t.years + " years, " + t.days + " days, " + this.leadingZeros(t.hours) + " hours, " + this.leadingZeros(t.min) + " min and " + this.leadingZeros(t.sec) + " sec") } }; e.fn.countdown = function (t) { return e.each(this, function (n, r) { var i; i = e(r); if (!i.data("countdown")) { return i.data("countdown", new e.countdown(r, t)) } }) }; return void 0 })(jQuery) }).call(this)

}(jQuery));

/*
	*jQuery Contact form developed by CosminCotor & Enabled
	*Licensed to be used ONLY by CosminCotor & Enabled on the Envato Marketplaces 
	*DO NOT use in commercial projects outside Regular or Extended licenses for the marketplaces.
*/

(function ($) {

    var $ = jQuery.noConflict(); var formSubmitted = "false"; jQuery(document).ready(function (e) { function t(t, n) { formSubmitted = "true"; var r = e("#" + t).serialize(); e.post(e("#" + t).attr("action"), r, function (n) { e("#" + t).hide(); e("#formSuccessMessageWrap").fadeIn(500) }) } function n(n, r) { e(".formValidationError").hide(); e(".fieldHasError").removeClass("fieldHasError"); e("#" + n + " .requiredField").each(function (i) { if (e(this).val() == "" || e(this).val() == e(this).attr("data-dummy")) { e(this).val(e(this).attr("data-dummy")); e(this).focus(); e(this).addClass("fieldHasError"); e("#" + e(this).attr("id") + "Error").fadeIn(300); return false } if (e(this).hasClass("requiredEmailField")) { var s = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; var o = "#" + e(this).attr("id"); if (!s.test(e(o).val())) { e(o).focus(); e(o).addClass("fieldHasError"); e(o + "Error2").fadeIn(300); return false } } if (formSubmitted == "false" && i == e("#" + n + " .requiredField").length - 1) { t(n, r) } }) } e("#formSuccessMessageWrap").hide(0); e(".formValidationError").fadeOut(0); e('input[type="text"], input[type="password"], textarea').focus(function () { if (e(this).val() == e(this).attr("data-dummy")) { e(this).val("") } }); e("input, textarea").blur(function () { if (e(this).val() == "") { e(this).val(e(this).attr("data-dummy")) } }); e("#contactSubmitButton").click(function () { n(e(this).attr("data-formId")); return false }) })

}(jQuery));




(function ($) {

    /*jshint eqeqeq:false curly:false latedef:false */
    "use strict";

    function setup($) {
        $.fn._fadeIn = $.fn.fadeIn;

        var noOp = $.noop || function () { };

        // this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
        // confusing userAgent strings on Vista)
        var msie = /MSIE/.test(navigator.userAgent);
        var ie6 = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
        var mode = document.documentMode || 0;
        var setExpr = $.isFunction(document.createElement('div').style.setExpression);

        // global $ methods for blocking/unblocking the entire page
        $.blockUI = function (opts) { install(window, opts); };
        $.unblockUI = function (opts) { remove(window, opts); };

        // convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
        $.growlUI = function (title, message, timeout, onClose) {
            var $m = $('<div class="growlUI"></div>');
            if (title) $m.append('<h1>' + title + '</h1>');
            if (message) $m.append('<h2>' + message + '</h2>');
            if (timeout === undefined) timeout = 3000;

            // Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
            var callBlock = function (opts) {
                opts = opts || {};

                $.blockUI({
                    message: $m,
                    fadeIn: typeof opts.fadeIn !== 'undefined' ? opts.fadeIn : 700,
                    fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
                    timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
                    centerY: false,
                    showOverlay: false,
                    onUnblock: onClose,
                    css: $.blockUI.defaults.growlCSS
                });
            };

            callBlock();
            var nonmousedOpacity = $m.css('opacity');
            $m.mouseover(function () {
                callBlock({
                    fadeIn: 0,
                    timeout: 30000
                });

                var displayBlock = $('.blockMsg');
                displayBlock.stop(); // cancel fadeout if it has started
                displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
            }).mouseout(function () {
                $('.blockMsg').fadeOut(1000);
            });
            // End konapun additions
        };

        // plugin method for blocking element content
        $.fn.block = function (opts) {
            if (this[0] === window) {
                $.blockUI(opts);
                return this;
            }
            var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
            this.each(function () {
                var $el = $(this);
                if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
                    return;
                $el.unblock({ fadeOut: 0 });
            });

            return this.each(function () {
                if ($.css(this, 'position') == 'static') {
                    this.style.position = 'relative';
                    $(this).data('blockUI.static', true);
                }
                this.style.zoom = 1; // force 'hasLayout' in ie
                install(this, opts);
            });
        };

        // plugin method for unblocking element content
        $.fn.unblock = function (opts) {
            if (this[0] === window) {
                $.unblockUI(opts);
                return this;
            }
            return this.each(function () {
                remove(this, opts);
            });
        };

        $.blockUI.version = 2.70; // 2nd generation blocking at no extra cost!

        // override these in your code to change the default behavior and style
        $.blockUI.defaults = {
            // message displayed when blocking (use null for no message)
            message: '<h1>Please wait...</h1>',

            title: null,		// title string; only used when theme == true
            draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

            theme: false, // set to true to use with jQuery UI themes

            // styles for the message when blocking; if you wish to disable
            // these and use an external stylesheet then do this in your code:
            // $.blockUI.defaults.css = {};
            css: {
                padding: 0,
                margin: 0,
                width: '30%',
                top: '40%',
                left: '35%',
                textAlign: 'center',
                color: '#000',
                border: '3px solid #aaa',
                backgroundColor: '#fff',
                cursor: 'wait'
            },

            // minimal style set used when themes are used
            themedCSS: {
                width: '30%',
                top: '40%',
                left: '35%'
            },

            // styles for the overlay
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0.6,
                cursor: 'wait'
            },

            // style to replace wait cursor before unblocking to correct issue
            // of lingering wait cursor
            cursorReset: 'default',

            // styles applied when using $.growlUI
            growlCSS: {
                width: '350px',
                top: '10px',
                left: '',
                right: '10px',
                border: 'none',
                padding: '5px',
                opacity: 0.6,
                cursor: 'default',
                color: '#fff',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                'border-radius': '10px'
            },

            // IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
            // (hat tip to Jorge H. N. de Vasconcelos)
            /*jshint scripturl:true */
            iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

            // force usage of iframe in non-IE browsers (handy for blocking applets)
            forceIframe: false,

            // z-index for the blocking overlay
            baseZ: 1000,

            // set these to true to have the message automatically centered
            centerX: true, // <-- only effects element blocking (page block controlled via css above)
            centerY: true,

            // allow body element to be stetched in ie6; this makes blocking look better
            // on "short" pages.  disable if you wish to prevent changes to the body height
            allowBodyStretch: true,

            // enable if you want key and mouse events to be disabled for content that is blocked
            bindEvents: true,

            // be default blockUI will supress tab navigation from leaving blocking content
            // (if bindEvents is true)
            constrainTabKey: true,

            // fadeIn time in millis; set to 0 to disable fadeIn on block
            fadeIn: 200,

            // fadeOut time in millis; set to 0 to disable fadeOut on unblock
            fadeOut: 400,

            // time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
            timeout: 0,

            // disable if you don't want to show the overlay
            showOverlay: true,

            // if true, focus will be placed in the first available input field when
            // page blocking
            focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

            // suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
            // no longer needed in 2012
            // applyPlatformOpacityRules: true,

            // callback method invoked when fadeIn has completed and blocking message is visible
            onBlock: null,

            // callback method invoked when unblocking has completed; the callback is
            // passed the element that has been unblocked (which is the window object for page
            // blocks) and the options that were passed to the unblock call:
            //	onUnblock(element, options)
            onUnblock: null,

            // callback method invoked when the overlay area is clicked.
            // setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
            onOverlayClick: null,

            // don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
            quirksmodeOffsetHack: 4,

            // class name of the message block
            blockMsgClass: 'blockMsg',

            // if it is already blocked, then ignore it (don't unblock and reblock)
            ignoreIfBlocked: false
        };

        // private data and functions follow...

        var pageBlock = null;
        var pageBlockEls = [];

        function install(el, opts) {
            var css, themedCSS;
            var full = (el == window);
            var msg = (opts && opts.message !== undefined ? opts.message : undefined);
            opts = $.extend({}, $.blockUI.defaults, opts || {});

            if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
                return;

            opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
            css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
            if (opts.onOverlayClick)
                opts.overlayCSS.cursor = 'pointer';

            themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
            msg = msg === undefined ? opts.message : msg;

            // remove the current block (if there is one)
            if (full && pageBlock)
                remove(window, { fadeOut: 0 });

            // if an existing element is being used as the blocking content then we capture
            // its current place in the DOM (and current display style) so we can restore
            // it when we unblock
            if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
                var node = msg.jquery ? msg[0] : msg;
                var data = {};
                $(el).data('blockUI.history', data);
                data.el = node;
                data.parent = node.parentNode;
                data.display = node.style.display;
                data.position = node.style.position;
                if (data.parent)
                    data.parent.removeChild(node);
            }

            $(el).data('blockUI.onUnblock', opts.onUnblock);
            var z = opts.baseZ;

            // blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
            // layer1 is the iframe layer which is used to supress bleed through of underlying content
            // layer2 is the overlay layer which has opacity and a wait cursor (by default)
            // layer3 is the message content that is displayed while blocking
            var lyr1, lyr2, lyr3, s;
            if (msie || opts.forceIframe)
                lyr1 = $('<iframe class="blockUI" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + opts.iframeSrc + '"></iframe>');
            else
                lyr1 = $('<div class="blockUI" style="display:none"></div>');

            if (opts.theme)
                lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + (z++) + ';display:none"></div>');
            else
                lyr2 = $('<div class="blockUI blockOverlay" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

            if (opts.theme && full) {
                s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (z + 10) + ';display:none;position:fixed">';
                if (opts.title) {
                    s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (opts.title || '&nbsp;') + '</div>';
                }
                s += '<div class="ui-widget-content ui-dialog-content"></div>';
                s += '</div>';
            }
            else if (opts.theme) {
                s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (z + 10) + ';display:none;position:absolute">';
                if (opts.title) {
                    s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (opts.title || '&nbsp;') + '</div>';
                }
                s += '<div class="ui-widget-content ui-dialog-content"></div>';
                s += '</div>';
            }
            else if (full) {
                s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:' + (z + 10) + ';display:none;position:fixed"></div>';
            }
            else {
                s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:' + (z + 10) + ';display:none;position:absolute"></div>';
            }
            lyr3 = $(s);

            // if we have a message, style it
            if (msg) {
                if (opts.theme) {
                    lyr3.css(themedCSS);
                    lyr3.addClass('ui-widget-content');
                }
                else
                    lyr3.css(css);
            }

            // style the overlay
            if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
                lyr2.css(opts.overlayCSS);
            lyr2.css('position', full ? 'fixed' : 'absolute');

            // make iframe layer transparent in IE
            if (msie || opts.forceIframe)
                lyr1.css('opacity', 0.0);

            //$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
            var layers = [lyr1, lyr2, lyr3], $par = full ? $('body') : $(el);
            $.each(layers, function () {
                this.appendTo($par);
            });

            if (opts.theme && opts.draggable && $.fn.draggable) {
                lyr3.draggable({
                    handle: '.ui-dialog-titlebar',
                    cancel: 'li'
                });
            }

            // ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
            var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
            if (ie6 || expr) {
                // give body 100% height
                if (full && opts.allowBodyStretch && $.support.boxModel)
                    $('html,body').css('height', '100%');

                // fix ie6 issue when blocked element has a border width
                if ((ie6 || !$.support.boxModel) && !full) {
                    var t = sz(el, 'borderTopWidth'), l = sz(el, 'borderLeftWidth');
                    var fixT = t ? '(0 - ' + t + ')' : 0;
                    var fixL = l ? '(0 - ' + l + ')' : 0;
                }

                // simulate fixed position
                $.each(layers, function (i, o) {
                    var s = o[0].style;
                    s.position = 'absolute';
                    if (i < 2) {
                        if (full)
                            s.setExpression('height', 'Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:' + opts.quirksmodeOffsetHack + ') + "px"');
                        else
                            s.setExpression('height', 'this.parentNode.offsetHeight + "px"');
                        if (full)
                            s.setExpression('width', 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
                        else
                            s.setExpression('width', 'this.parentNode.offsetWidth + "px"');
                        if (fixL) s.setExpression('left', fixL);
                        if (fixT) s.setExpression('top', fixT);
                    }
                    else if (opts.centerY) {
                        if (full) s.setExpression('top', '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
                        s.marginTop = 0;
                    }
                    else if (!opts.centerY && full) {
                        var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
                        var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + ' + top + ') + "px"';
                        s.setExpression('top', expression);
                    }
                });
            }

            // show the message
            if (msg) {
                if (opts.theme)
                    lyr3.find('.ui-widget-content').append(msg);
                else
                    lyr3.append(msg);
                if (msg.jquery || msg.nodeType)
                    $(msg).show();
            }

            if ((msie || opts.forceIframe) && opts.showOverlay)
                lyr1.show(); // opacity is zero
            if (opts.fadeIn) {
                var cb = opts.onBlock ? opts.onBlock : noOp;
                var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
                var cb2 = msg ? cb : noOp;
                if (opts.showOverlay)
                    lyr2._fadeIn(opts.fadeIn, cb1);
                if (msg)
                    lyr3._fadeIn(opts.fadeIn, cb2);
            }
            else {
                if (opts.showOverlay)
                    lyr2.show();
                if (msg)
                    lyr3.show();
                if (opts.onBlock)
                    opts.onBlock.bind(lyr3)();
            }

            // bind key and mouse events
            bind(1, el, opts);

            if (full) {
                pageBlock = lyr3[0];
                pageBlockEls = $(opts.focusableElements, pageBlock);
                if (opts.focusInput)
                    setTimeout(focus, 20);
            }
            else
                center(lyr3[0], opts.centerX, opts.centerY);

            if (opts.timeout) {
                // auto-unblock
                var to = setTimeout(function () {
                    if (full)
                        $.unblockUI(opts);
                    else
                        $(el).unblock(opts);
                }, opts.timeout);
                $(el).data('blockUI.timeout', to);
            }
        }

        // remove the block
        function remove(el, opts) {
            var count;
            var full = (el == window);
            var $el = $(el);
            var data = $el.data('blockUI.history');
            var to = $el.data('blockUI.timeout');
            if (to) {
                clearTimeout(to);
                $el.removeData('blockUI.timeout');
            }
            opts = $.extend({}, $.blockUI.defaults, opts || {});
            bind(0, el, opts); // unbind events

            if (opts.onUnblock === null) {
                opts.onUnblock = $el.data('blockUI.onUnblock');
                $el.removeData('blockUI.onUnblock');
            }

            var els;
            if (full) // crazy selector to handle odd field errors in ie6/7
                els = $('body').children().filter('.blockUI').add('body > .blockUI');
            else
                els = $el.find('>.blockUI');

            // fix cursor issue
            if (opts.cursorReset) {
                if (els.length > 1)
                    els[1].style.cursor = opts.cursorReset;
                if (els.length > 2)
                    els[2].style.cursor = opts.cursorReset;
            }

            if (full)
                pageBlock = pageBlockEls = null;

            if (opts.fadeOut) {
                count = els.length;
                els.stop().fadeOut(opts.fadeOut, function () {
                    if (--count === 0)
                        reset(els, data, opts, el);
                });
            }
            else
                reset(els, data, opts, el);
        }

        // move blocking element back into the DOM where it started
        function reset(els, data, opts, el) {
            var $el = $(el);
            if ($el.data('blockUI.isBlocked'))
                return;

            els.each(function (i, o) {
                // remove via DOM calls so we don't lose event handlers
                if (this.parentNode)
                    this.parentNode.removeChild(this);
            });

            if (data && data.el) {
                data.el.style.display = data.display;
                data.el.style.position = data.position;
                data.el.style.cursor = 'default'; // #59
                if (data.parent)
                    data.parent.appendChild(data.el);
                $el.removeData('blockUI.history');
            }

            if ($el.data('blockUI.static')) {
                $el.css('position', 'static'); // #22
            }

            if (typeof opts.onUnblock == 'function')
                opts.onUnblock(el, opts);

            // fix issue in Safari 6 where block artifacts remain until reflow
            var body = $(document.body), w = body.width(), cssW = body[0].style.width;
            body.width(w - 1).width(w);
            body[0].style.width = cssW;
        }

        // bind/unbind the handler
        function bind(b, el, opts) {
            var full = el == window, $el = $(el);

            // don't bother unbinding if there is nothing to unbind
            if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
                return;

            $el.data('blockUI.isBlocked', b);

            // don't bind events when overlay is not in use or if bindEvents is false
            if (!full || !opts.bindEvents || (b && !opts.showOverlay))
                return;

            // bind anchors and inputs for mouse and key events
            var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
            if (b)
                $(document).bind(events, opts, handler);
            else
                $(document).unbind(events, handler);

            // former impl...
            //		var $e = $('a,:input');
            //		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
        }

        // event handler to suppress keyboard/mouse events when blocking
        function handler(e) {
            // allow tab navigation (conditionally)
            if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
                if (pageBlock && e.data.constrainTabKey) {
                    var els = pageBlockEls;
                    var fwd = !e.shiftKey && e.target === els[els.length - 1];
                    var back = e.shiftKey && e.target === els[0];
                    if (fwd || back) {
                        setTimeout(function () { focus(back); }, 10);
                        return false;
                    }
                }
            }
            var opts = e.data;
            var target = $(e.target);
            if (target.hasClass('blockOverlay') && opts.onOverlayClick)
                opts.onOverlayClick(e);

            // allow events within the message content
            if (target.parents('div.' + opts.blockMsgClass).length > 0)
                return true;

            // allow events for content that is not being blocked
            return target.parents().children().filter('div.blockUI').length === 0;
        }

        function focus(back) {
            if (!pageBlockEls)
                return;
            var e = pageBlockEls[back === true ? pageBlockEls.length - 1 : 0];
            if (e)
                e.focus();
        }

        function center(el, x, y) {
            var p = el.parentNode, s = el.style;
            var l = ((p.offsetWidth - el.offsetWidth) / 2) - sz(p, 'borderLeftWidth');
            var t = ((p.offsetHeight - el.offsetHeight) / 2) - sz(p, 'borderTopWidth');
            if (x) s.left = l > 0 ? (l + 'px') : '0';
            if (y) s.top = t > 0 ? (t + 'px') : '0';
        }

        function sz(el, p) {
            return parseInt($.css(el, p), 10) || 0;
        }

    }


    /*global define:true */
    if (typeof define === 'function' && define.amd && define.amd.jQuery) {
        define(['jquery'], setup);
    } else {
        setup(jQuery);
    }


}(jQuery));

var BloqueiaTela = function BloqueiaTela(mensagem) {

    jQuery.blockUI({

        css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff'
        },
        message: "<img src='img/LOGO_eXCHANGE_BRANCO.png' width='128' height='70' /><br/> <label style='font-size:16px; color:white;'>" + mensagem + "</label>",
    });
}

var ExibeMensagem = function ExibeMensagem(mensagem) {


    jQuery.blockUI({

        css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .5,
            color: '#fff'
        },
        message: "<label style='font-size:16px; color:white;'>" + mensagem + "</label>",
    });

    DesbloqueiaTelaDelay(2000);
}

var DesbloqueiaTelaDelay = function DesbloqueiaTelaDelay(milissegundos) {
    setTimeout(jQuery.unblockUI, milissegundos);
}

var DesbloqueiaTela = function DesbloqueiaTela() {
    jQuery.unblockUI();
}

var ERROCONEXAO = function ERROCONEXAO(data) {

    var status = data.status;
        
    switch (status) {
        case 0:
            ExibeMensagem("Dispositivo desconectado!!");

            break;
        case 400:
            break;

    }

    return status;
   
}


var EqualizaTamanhoTela= function EqualizaTamanhoTela() {
    var tam =jQuery("#sidebar").height();
    jQuery("#content").css('min-height', (tam));
}