webpackJsonp([7],{1057:function(t,e,n){var s=n(1)(n(1290),n(1577),null,null,null);t.exports=s.exports},1058:function(t,e,n){var s=n(1)(n(1291),n(1576),null,null,null);t.exports=s.exports},1059:function(t,e,n){var s=n(1)(n(1292),n(1428),null,null,null);t.exports=s.exports},1060:function(t,e,n){var s=n(1)(n(1293),n(1429),null,null,null);t.exports=s.exports},1290:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{status:{fixed1:!1,fixed2:!1,fixed3:!1}}},methods:{onchange1:function(t){this.status.fixed1=t},onchange2:function(t){this.status.fixed2=t},onchange3:function(t){this.status.fixed3=t}}}},1291:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{fixed:!1}},methods:{onchange:function(t){this.fixed=t}}}},1292:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{getTarget:function(){return document.querySelector(".right-frame")}}}},1293:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{getTarget:function(){return document.querySelector(".right-frame")}}}},1428:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("BackTop",{attrs:{target:t.getTarget,bottom:0,right:50}})},staticRenderFns:[]}},1429:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("BackTop",{attrs:{target:t.getTarget,bottom:100,right:50,"class-name":"h-backtop-custom"}},[t._v("\n  返回顶部\n")])},staticRenderFns:[]}},1576:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Affix",{attrs:{"offset-bottom":10},on:{onchange:t.onchange}},[n("button",{staticClass:"h-btn",class:{"h-btn-red":t.fixed}},[t._v("固定在距离底部偏移量10px的位置")])])},staticRenderFns:[]}},1577:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("Affix",{attrs:{"offset-top":70},on:{onchange:t.onchange1}},[n("button",{staticClass:"h-btn",class:{"h-btn-green":t.status.fixed1}},[t._v("固定在距离顶部偏移量70px的位置")])])],1),t._v(" "),n("div",{directives:[{name:"height",rawName:"v-height",value:10,expression:"10"}]}),t._v(" "),n("div",[n("Affix",{attrs:{"offset-top":120},on:{onchange:t.onchange2}},[n("button",{staticClass:"h-btn",class:{"h-btn-yellow":t.status.fixed2}},[t._v("固定在距离顶部偏移量120px的位置")])])],1),t._v(" "),n("div",{directives:[{name:"height",rawName:"v-height",value:10,expression:"10"}]}),t._v(" "),n("div",[n("Affix",{attrs:{"offset-top":170},on:{onchange:t.onchange3}},[n("button",{staticClass:"h-btn",class:{"h-btn-blue":t.status.fixed3}},[t._v("固定在距离顶部偏移量190px的位置")])])],1)])},staticRenderFns:[]}}});