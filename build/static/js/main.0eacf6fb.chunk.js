(this.webpackJsonpChats=this.webpackJsonpChats||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":1,"creator":"Sergii","user":"Dmytro"},{"id":2,"creator":"Sergii","user":"Alina"},{"id":3,"creator":"Solomiya","user":"Serhii"}]')},14:function(e){e.exports=JSON.parse('{"1":[{"creator":"Hello !!!"},{"user":"And you, boy!"},{"user":"How are u?"},{"creator":"I am fine!"}],"2":[{"creator":"Hello !!!"},{"user":"And you, Alina!"},{"user":"How are u?"},{"creator":"I am fine!"},{"creator":"Hello !!!"},{"user":"And you, Alina!"},{"user":"How are u?"},{"creator":"I am fine!"}],"3":[]}')},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(0),s=n.n(o),u=n(11),j=n.n(u),h=(n(20),n(5)),l=n(10),d=n(7),b=n(4),O=n(2),f=n(3),g=f.a.strong(r||(r=Object(O.a)(["\n  display: block;\n"]))),x=n(1),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.chats,n=void 0===t?[]:t,r=e.onChatChange;return Object(x.jsxs)("div",{children:[Object(x.jsx)("header",{children:"Header"}),Object(x.jsx)(g,{children:"Chats"}),Object(x.jsx)("ul",{children:n.map((function(e){var t=e.id,n=(e.creator,e.user);return Object(x.jsx)("li",{children:Object(x.jsx)("button",{onClick:function(){return r(t)},children:n})},t)}))})]})},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active,n=e.messages,r=void 0===n?[]:n,c=e.onMessageCreate,a=Object(o.useState)(""),i=Object(b.a)(a,2),s=i[0],u=i[1],j=Object(o.useMemo)((function(){var e;return null!==(e=r[t])&&void 0!==e?e:[]}),[t,r]),h=function(e){s&&"Enter"===e.key&&(c(s),u(""))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("ul",{style:{padding:"0px 40px"},children:j.map((function(e,t){var n=e.creator,r=e.user;return Object(x.jsx)("li",{style:{textAlign:null!==n&&void 0!==n?n:"right"},children:Object(x.jsx)("p",{children:n||r})},t)}))}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",value:s,onChange:function(e){return u(e.target.value)},onKeyDown:h})})]})},m=n(13),y=n(14),C=f.a.div(c||(c=Object(O.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n"]))),S=f.a.div(a||(a=Object(O.a)(["\n  height: inherit;\n  width: 30%;\n"]))),w=f.a.main(i||(i=Object(O.a)(["\n  height: inherit;\n  width: 70%;\n"]))),k=function(){var e=Object(o.useState)(1),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(m),a=Object(b.a)(c,2),i=a[0],s=(a[1],Object(o.useState)(y)),u=Object(b.a)(s,2),j=u[0],O=u[1],f=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(e){O((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(h.a)({},n,[].concat(Object(l.a)(t[n]),[{user:e.value}])))}))}),(function(e){alert(e.message)}))};return Object(x.jsxs)(C,{children:[Object(x.jsx)(S,{children:Object(x.jsx)(v,{chats:i,onChatChange:function(e){return r(e)}})}),Object(x.jsx)(w,{children:Object(x.jsx)(p,{active:n,messages:j,onMessageCreate:function(e){return function(e){O((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(h.a)({},n,[].concat(Object(l.a)(t[n]),[{creator:e}])))})),setTimeout(f,1e3*(Math.floor(3*Math.random())+1))}(e)}})})]})};var A=function(){return Object(x.jsx)(k,{})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};j.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root")),H()}},[[25,1,2]]]);
//# sourceMappingURL=main.0eacf6fb.chunk.js.map