(function(t){function n(n){for(var r,s,l=n[0],o=n[1],c=n[2],p=0,f=[];p<l.length;p++)s=l[p],a[s]&&f.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(n);while(f.length)f.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,l=1;l<e.length;l++){var o=e[l];0!==a[o]&&(r=!1)}r&&(i.splice(n--,1),t=s(s.s=e[0]))}return t}var r={},a={app:0},i=[];function s(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)s.d(e,r,function(n){return t[n]}.bind(null,r));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var u=o;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"007e":function(t,n,e){"use strict";var r=e("a862"),a=e.n(r);a.a},"2d35":function(t,n,e){"use strict";var r=e("a859"),a=e.n(r);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Dashboard"),e("Footer")],1)},i=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("ul",{staticClass:"row"},[t._m(0),t._l(t.list,function(n,r){return e("li",{key:r,staticClass:"col-sm-6 col-md-4"},[e("div",{staticClass:"card"},[e("div",{staticClass:"main-header"},[t._v("\n          "+t._s(n.multiplicand)+"\n        ")]),t._l(n.multiplier,function(r,a){return e("p",{key:a},[t._v("\n          "+t._s(n.multiplicand)+" x "+t._s(r)+" = "+t._s(n.multiplicand*r)+"\n        ")])})],2)])})],2)])},l=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"col-sm-6 col-md-4"},[e("div",{staticClass:"head-box"},[e("div",{staticClass:"x-line"},[e("span",{staticClass:"sign"},[t._v("x")]),e("span",{staticClass:"line"}),e("span",{staticClass:"sign"},[t._v("x")])]),e("h1",[t._v("九九乘法表")]),e("h3",[t._v("mulitiplication chart")]),e("div",{staticClass:"x-line"},[e("span",{staticClass:"sign"},[t._v("x")]),e("span",{staticClass:"line"}),e("span",{staticClass:"sign"},[t._v("x")])])])])}],o={name:"Dashboard",data:function(){return{list:[]}},methods:{createData:function(){for(var t=2;t<10;t++){for(var n={multiplicand:t,multiplier:[]},e=1;e<10;e++)n.multiplier.push(e);this.list.push(n)}}},mounted:function(){this.createData()}},c=o,u=(e("007e"),e("2877")),p=Object(u["a"])(c,s,l,!1,null,"3c552b38",null),f=p.exports,d=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",[e("div",{staticClass:"wrapper"},[e("span",[t._v("\n      Copyright © 2019 HexSchool. All rights reserved.\n    ")])])])}],h={name:"Footer"},m=h,_=(e("2d35"),Object(u["a"])(m,d,v,!1,null,"9b539592",null)),b=_.exports,g={name:"app",components:{Dashboard:f,Footer:b}},x=g,y=(e("5c0b"),Object(u["a"])(x,a,i,!1,null,null,null)),C=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var r=e("5e27"),a=e.n(r);a.a},"5e27":function(t,n,e){},a859:function(t,n,e){},a862:function(t,n,e){}});
//# sourceMappingURL=app.a171554a.js.map