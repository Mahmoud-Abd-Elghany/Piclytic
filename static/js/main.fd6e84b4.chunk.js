(this.webpackJsonppiclytic=this.webpackJsonppiclytic||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),i=c(38),r=c.n(i),l=(c(46),c(47),c(14)),o=c(22),u=c.n(o),j=c(39),d=c(15),b=Object(a.createContext)(),h=c(49),O=new h.App({apiKey:"f16c637d19a6480092f9984c3b0b3665"}),m=function(e){var t=Object(a.useState)([{value:"null"}]),c=Object(d.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)([{value:"null"}]),l=Object(d.a)(r,2),o=l[0],m=l[1],x=Object(a.useState)(""),v=Object(d.a)(x,2),f=v[0],p=v[1],g=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.models.initModel({id:h.GENERAL_MODEL,version:"aa7f35c01e0642fda5cf400f543e7c40"}).then((function(e){return e.predict(t)})).then((function(e){m(e.outputs[0].data.concepts)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(b.Provider,{value:{colors:s,tags:o,analyzeTags:g,analyzeColors:function(e){O.models.predict("eeed0b6733a644cea07cf4c60f87ebb7",e).then((function(e){return i(e.outputs[0].data.colors)}))},image:f,updateImage:p,setTags:m,setColors:i},children:e.children})};function x(){var e=Object(a.useContext)(b),t=e.setTags,c=e.setColors;return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("ul",{className:"list",children:Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{onClick:function(){t([{value:"null"}]),c([{value:"null"}]),console.log("clicked!")},className:"list_item",to:"/Piclytic/",children:"Home"})})})})})})}c(91);var v=c(2),f=Object(v.e)((function(e){var t=Object(a.useContext)(b),c=t.analyzeTags,s=t.analyzeColors,i=t.updateImage,r=Object(a.useState)(""),l=Object(d.a)(r,2),o=l[0],u=l[1];return Object(n.jsxs)("div",{className:"form_container",children:[Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(o),o&&(c(o),s(o),i(o),setTimeout((function(){e.history.push("/Piclytic/Analyze")}),1e3))},children:[Object(n.jsx)("p",{className:"paragraph",children:"Place your image to analyze the colors and the components of the image"}),Object(n.jsxs)("div",{className:"inputForm",children:[Object(n.jsx)("input",{className:"input",type:"text",placeholder:"Copy your image address here..",value:o,onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("button",{className:"btn",type:"submit",children:"Analyze"})]})]}),Object(n.jsx)("img",{className:"image",src:o,alt:""})]})}));c(92),c(93);function p(e){var t=e.name;return Object(n.jsx)("div",{className:"element",children:t})}c(94);function g(){var e=Object(a.useContext)(b).tags.map((function(e,t){if(t<20)return Object(n.jsx)("div",{children:Object(n.jsx)(p,{name:e.name},e.id)})}));return Object(n.jsx)("div",{className:"bar_container",children:Object(n.jsx)("div",{className:"bar",children:e})})}c(95),c(96);function y(e){var t=e.value,c=e.perc;console.log("perc",~~c);var a=~~c,s={backgroundColor:"".concat(t),width:"".concat(a,"%")};return Object(n.jsx)("div",{style:s,className:"style_continue",children:Object(n.jsx)("p",{className:"hex-value",children:t})})}function N(){var e=Object(a.useContext)(b).colors.map((function(e){if(e.value>.01)return Object(n.jsx)(y,{value:e.raw_hex,perc:100*e.value})}));return Object(n.jsx)("div",{className:"bar-container",children:e})}var C=Object(v.e)((function(e){var t=Object(a.useContext)(b),c=t.tags,s=t.colors,i=t.image;console.log("tags",c),console.log("colors",s);var r={backgroundImage:"url(".concat(i,")")};return"null"===c[0].value&&"null"===s[0].value&&e.history.push("/Piclytic/invalid"),Object(n.jsxs)("div",{className:"grid-container",children:[Object(n.jsx)("div",{className:"img-container",style:r,children:Object(n.jsx)("img",{src:i,alt:"img",className:"img"})}),Object(n.jsx)("div",{className:"tagBar",children:Object(n.jsx)(g,{})}),Object(n.jsx)("div",{className:"colorBar",children:Object(n.jsx)(N,{})})]})}));c(97);function P(){return Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"main-p",children:" The Address you Entered is invalid. Please try again with the correct Address"})})}c(98);var w=function(){return Object(n.jsx)(m,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(v.a,{exact:!0,path:"/Piclytic/",children:Object(n.jsx)(f,{})}),Object(n.jsx)(v.a,{exact:!0,path:"/Piclytic/Analyze",children:Object(n.jsx)(C,{})}),Object(n.jsx)(v.a,{exact:!0,path:"/Piclytic/invalid",children:Object(n.jsx)(P,{})})]})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),z()}},[[99,1,2]]]);
//# sourceMappingURL=main.fd6e84b4.chunk.js.map