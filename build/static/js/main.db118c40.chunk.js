(this.webpackJsonpChats=this.webpackJsonpChats||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":1,"creator":"Sergii Chekalov","user":"Dmytro"},{"id":2,"creator":"Sergii Chekalov","user":"Alina"},{"id":3,"creator":"Sergii Chekalov","user":"Solomiya"}]')},14:function(e){e.exports=JSON.parse('{"1":[{"creator":"Hello !!!"},{"user":"And you, boy!"},{"user":"How are u?"},{"creator":"I am fine!"}],"2":[{"creator":"Hello !!!"},{"user":"And you, Alina!"},{"user":"How are u?"},{"creator":"I am fine!"},{"creator":"Hello !!!"},{"user":"And you, Alina!"},{"user":"How are u?"},{"creator":"I am fine!"}],"3":[]}')},20:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,u,d,l,h,b,j,p,g,x,O=t(1),f=t.n(O),m=t(11),v=t.n(m),C=(t(20),t(6)),k=t(10),y=t(4),S=t(5),w=t(2),M=t(3),A=M.a.strong(r||(r=Object(w.a)(["\n  display: block;\n  color: #0000ff;\n  margin-left: 20px;\n  margin-top: 30px;\n"]))),H=M.a.div(a||(a=Object(w.a)(["\n  margin-top: 20px;\n  display: block;\n  text-align: center;\n"]))),I=M.a.input(c||(c=Object(w.a)(["\n  margin-top: 20px;\n  margin-left: 60px;\n  width: 50%;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 50px 0 20px;\n  background-color: #eee;\n  border: none;\n  border-radius: 3px;\n  color: black;\n"]))),J=M.a.ul(o||(o=Object(w.a)(["\n  padding: 20px;\n"]))),D=M.a.li(i||(i=Object(w.a)(["\n  margin-top: 10px;\n  font-size: 16px;\n"]))),F=M.a.button(s||(s=Object(w.a)(["\n  cursor: pointer;\n  width: 100%;\n  display: block;\n  padding: 20px;\n  font-size: 12px;\n  background-color: #fff;\n  border: 1px solid grey;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #eee;\n  }\n"]))),L=t(0),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.chats,t=void 0===n?[]:n,r=e.onChatChange,a=e.onSearch;return Object(L.jsxs)("div",{children:[Object(L.jsx)(H,{children:"Search chat"}),Object(L.jsx)(I,{onChange:function(e){return a(e.target.value)},placeholder:"Serch or start new chat",type:"text"}),Object(L.jsx)(A,{children:"Chats"}),Object(L.jsx)(J,{children:t.map((function(e){var n=e.id,t=(e.creator,e.user),a=e.message;return Object(L.jsx)(D,{children:Object(L.jsxs)(F,{onClick:function(){return r(n)},children:[Object(L.jsx)("span",{children:t}),Object(L.jsx)("p",{children:a})]})},n)}))})]})},T=M.a.div(u||(u=Object(w.a)(["\n  padding: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #4682b4;\n"]))),B=M.a.input(d||(d=Object(w.a)(["\n  padding: 10px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  border-radius: 30px;\n  width: 70vh;\n"]))),E=M.a.ul(l||(l=Object(w.a)(["\n  padding: 0 40px 0 0;\n"]))),z=M.a.span(h||(h=Object(w.a)(["\n  line-height: 1.2;\n  display: inline-block;\n  padding: 10px 20px;\n  border-radius: 20px;\n  background-color: #eee;\n  max-width: 80%;\n"]))),P=M.a.li(b||(b=Object(w.a)(["\n  display: block;\n  margin-bottom: 5px;\n\n  ","\n"])),(function(e){return e.right&&"\n    text-align: right;\n\n    span {\n      color: white;\n      background-color: black;\n    }\n  "})),U=(M.a.div(j||(j=Object(w.a)(["\n  padding: 20px;\n  color: green;\n  line-height: 25px;\n  max-width: 90%;\n\n  text-align: right;\n  border-radius: 5px;\n"]))),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.activeChat,t=e.messages,r=void 0===t?[]:t,a=e.onMessageCreate,c=Object(O.useState)(""),o=Object(S.a)(c,2),i=o[0],s=o[1],u=function(e){i&&"Enter"===e.key&&(a(i),s(""))};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(T,{children:n.creator}),Object(L.jsx)(E,{children:r.map((function(e,n){var t=e.creator,r=e.user;return Object(L.jsx)(P,{right:Boolean(r),children:Object(L.jsx)(z,{children:t||r})},n)}))}),Object(L.jsx)("div",{children:Object(L.jsx)(B,{placeholder:"Type your message",type:"text",value:i,onChange:function(e){return s(e.target.value)},onKeyDown:u})})]})}),K=t(13),q=t(14),G=M.a.div(p||(p=Object(w.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n"]))),Q=M.a.div(g||(g=Object(w.a)(["\n  height: inherit;\n  width: 30%;\n"]))),R=M.a.main(x||(x=Object(w.a)(["\n  height: inherit;\n  width: 70%;\n"]))),V=function(){var e=Object(O.useState)(""),n=Object(S.a)(e,2),t=n[0],r=n[1],a=Object(O.useState)(1),c=Object(S.a)(a,2),o=c[0],i=c[1],s=Object(O.useState)(localStorage.messages?JSON.parse(localStorage.messages):q),u=Object(S.a)(s,2),d=u[0],l=u[1],h=Object(O.useMemo)((function(){return K.map((function(e){var n=d[e.id],t=n[n.length-1];return Object(y.a)(Object(y.a)({},e),{},{message:(null===t||void 0===t?void 0:t.creator)||(null===t||void 0===t?void 0:t.user)})}))}),[d,t]),b=Object(O.useMemo)((function(){return h.filter((function(e){return e.user.toLowerCase().includes(t.toLowerCase())}))}),[h]),j=h.find((function(e){return e.id===o}));Object(O.useEffect)((function(){localStorage.setItem("messages",JSON.stringify(d))}),[d]);var p=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(e){l((function(n){return Object(y.a)(Object(y.a)({},n),{},Object(C.a)({},o,[].concat(Object(k.a)(n[o]),[{user:e.value,lastUpdate:Date.now()}])))}))}),(function(e){alert(e.message)}))};return Object(L.jsxs)(G,{children:[Object(L.jsx)(Q,{children:Object(L.jsx)(N,{chats:b,onChatChange:function(e){return i(e)},onSearch:r})}),Object(L.jsx)(R,{children:Object(L.jsx)(U,{activeChat:j,messages:d[o],onMessageCreate:function(e){return function(e){l((function(n){return Object(y.a)(Object(y.a)({},n),{},Object(C.a)({},o,[].concat(Object(k.a)(n[o]),[{creator:e,lastUpdate:Date.now()}])))})),setTimeout(p,1e3*(Math.floor(3*Math.random())+1))}(e)}})})]})};var W=function(){return Object(L.jsx)(V,{})},X=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};v.a.render(Object(L.jsx)(f.a.StrictMode,{children:Object(L.jsx)(W,{})}),document.getElementById("root")),X()}},[[25,1,2]]]);
//# sourceMappingURL=main.db118c40.chunk.js.map