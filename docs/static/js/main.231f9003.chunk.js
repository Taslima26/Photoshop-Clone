(this["webpackJsonpphotoshop-clone"]=this["webpackJsonpphotoshop-clone"]||[]).push([[0],[,,,,,function(e,a,n){e.exports=n(12)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(4),c=n.n(i),u=(n(10),n(2)),m=n(1),l=(n(11),function(e){var a=e.min,n=e.max,t=e.value,i=e.handleChange;return r.a.createElement("div",{className:"slider-container"},r.a.createElement("input",{type:"range",className:"slider",min:a,max:n,value:t,onChange:i}))}),o=function(e){var a=e.name,n=e.active,t=e.handleClick;return r.a.createElement("button",{onClick:t,className:"sidebar-item ".concat(n&&"active")},a)},s=[{name:"Brightness",property:"brightness",value:100,range:{min:0,max:200},unit:"%"},{name:"Contrast",property:"contrast",value:100,range:{min:0,max:200},unit:"%"},{name:"Saturation",property:"saturate",value:100,range:{min:0,max:200},unit:"%"},{name:"Grayscale",property:"grayscale",value:0,range:{min:0,max:100},unit:"%"},{name:"Sepia",property:"sepia",value:0,range:{min:0,max:100},unit:"%"},{name:"Hue rotate",property:"hue-rotate",value:0,range:{min:0,max:360},unit:"deg"},{name:"Blur",property:"blur",value:0,range:{min:0,max:20},unit:"px"}];var p=function(){var e=Object(t.useState)(s),a=Object(m.a)(e,2),n=a[0],i=a[1],c=Object(t.useState)(0),p=Object(m.a)(c,2),v=p[0],g=p[1],d=n[v];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-image",style:{filter:n.map((function(e){var a=e.unit,n=e.property,t=e.value;return"".concat(n,"(").concat(t).concat(a,")")})).join(" ")}}),r.a.createElement("div",{className:"sidebar"},n.map((function(e,a){var n=e.name;return r.a.createElement(o,{key:n+a,name:n,active:a===v,handleClick:function(e){return function(e,a){e.target;g(a)}(e,a)}})}))),r.a.createElement(l,{min:d.range.min,max:d.range.max,value:d.value,handleChange:function(e){var a=e.target.value;i((function(e){return e.map((function(e,n){return n!==v?e:Object(u.a)(Object(u.a)({},e),{},{value:a})}))}))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.231f9003.chunk.js.map