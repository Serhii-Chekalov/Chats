(this.webpackJsonpChats=this.webpackJsonpChats||[]).push([[0],{13:function(n){n.exports=JSON.parse('[{"id":1,"creator":"Sergii Chekalov","user":"Dmytro","avatar":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg"},{"id":2,"creator":"Sergii Chekalov","user":"Alina","avatar":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg"},{"id":3,"creator":"Sergii Chekalov","user":"Solomiya","avatar":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg"}]')},14:function(n){n.exports=JSON.parse('{"1":[{"creator":"Hello !!!"},{"user":"And you, boy!"},{"user":"How are u?"},{"creator":"I am fine!"}],"2":[{"creator":"Hello !!!"},{"user":"And you, Alina!"},{"user":"How are u?"},{"creator":"I am fine!"},{"creator":"Hello !!!"},{"user":"And you, Alina!"},{"user":"How are u?"},{"creator":"I am fine!"}],"3":[]}')},20:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var a,r,c,o,i,s,l,d,u,b,h,p,j,g,f,x,O,m,v,w,k,y=t(1),C=t.n(y),S=t(11),M=t.n(S),z=(t(20),t(6)),A=t(10),H=t(4),I=t(5),J=t(2),_=t(3),D=_.a.div(a||(a=Object(J.a)(["\n  background-color: #f6f6f4;\n  border: 1px solid #c0c0c0;\n  height: 120px;\n"]))),F=_.a.h3(r||(r=Object(J.a)(["\n  display: block;\n  color: #4682b4;\n  margin: 30px 0px 0px 25px;\n"]))),L=_.a.div(c||(c=Object(J.a)(["\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 12px;\n"]))),N=_.a.h2(o||(o=Object(J.a)(["\n  margin: 0;\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 12px;\n"]))),T=_.a.h3(i||(i=Object(J.a)(["\n  margin: 0;\n  font-size: 12px;\n  color: #7e818a;\n  margin-top: 12px;\n  font-weight: normal;\n"]))),B=_.a.div(s||(s=Object(J.a)(["\n  margin-top: 20px;\n  display: block;\n  text-align: center;\n"]))),E=_.a.input(l||(l=Object(J.a)(["\n  margin-top: 20px;\n  margin-left: 25px;\n  width: 70%;\n  height: 35px;\n  line-height: 30px;\n  padding: 0 50px 0 20px;\n  background-color: #ffff;\n  border: 1px solid black;\n  border-radius: 30px;\n  color: black;\n"]))),P=_.a.ul(d||(d=Object(J.a)(["\n  margin-top: 50px;\n  overflow-y: scroll;\n  height: 500px;\n"]))),U=_.a.li(u||(u=Object(J.a)(["\n  margin-top: 10px;\n  font-size: 16px;\n"]))),K=_.a.button(b||(b=Object(J.a)(["\n  cursor: pointer;\n  width: 100%;\n  display: block;\n  padding: 10px;\n  font-size: 12px;\n  background-color: #fff;\n  border: 0;\n  border-bottom: 1px solid #c0c0c0;\n\n  &:hover {\n    background-color: #eee;\n  }\n"]))),q=t(0),G=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.chats,t=void 0===e?[]:e,a=n.onChatChange,r=n.onSearch;return Object(q.jsxs)("div",{children:[Object(q.jsxs)(D,{children:[Object(q.jsx)(B,{children:"Search chat"}),Object(q.jsx)(E,{onChange:function(n){return r(n.target.value)},placeholder:"Serch or start new chat",type:"text"})]}),Object(q.jsx)(F,{children:"Chats"}),Object(q.jsx)(P,{children:t.map((function(n){var e=n.id,t=(n.creator,n.user),r=n.message;n.avatar;return Object(q.jsx)(U,{children:Object(q.jsx)(K,{onClick:function(){return a(e)},children:Object(q.jsxs)(L,{children:[Object(q.jsx)(N,{children:t}),Object(q.jsx)(T,{children:r})]})})},e)}))})]})},Q=_.a.div(h||(h=Object(J.a)(["\n  background-color: #f6f6f4;\n  border: 1px solid #c0c0c0;\n  height: 60px;\n"]))),R=_.a.div(p||(p=Object(J.a)(["\n  padding: 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #4682b4;\n"]))),V=_.a.div(j||(j=Object(J.a)(["\n  background-color: #fcfbfa;\n  border: 1px solid #c0c0c0;\n  padding: 10px;\n  overflow-y: scroll;\n  height: 500px;\n"]))),W=_.a.div(g||(g=Object(J.a)(["\n  background-color: #f6f6f4;\n  border: 1px solid #c0c0c0;\n  width: 100%;\n  padding: 40px;\n"]))),X=_.a.input(f||(f=Object(J.a)(["\n  padding: 20px;\n  border-radius: 30px;\n  width: 100vh;\n"]))),Y=_.a.ul(x||(x=Object(J.a)(["\n  padding: 0 40px 0 0;\n"]))),Z=_.a.span(O||(O=Object(J.a)(["\n  line-height: 1.2;\n  display: inline-block;\n  padding: 10px 20px;\n  border-radius: 20px;\n  background-color: #2f4f4f;\n  color: #ffffff;\n  max-width: 80%;\n"]))),$=_.a.li(m||(m=Object(J.a)(["\n  display: block;\n  margin-bottom: 5px;\n\n  ","\n"])),(function(n){return n.right&&"\n    text-align: right;\n\n    span {\n      background-color:  #eee;\n      color: #000000;\n    }\n  "})),nn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.activeChat,t=n.messages,a=void 0===t?[]:t,r=n.onMessageCreate,c=Object(y.useState)(""),o=Object(I.a)(c,2),i=o[0],s=o[1],l=function(n){i&&"Enter"===n.key&&(r(i),s(""))};return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Q,{children:Object(q.jsx)(R,{children:e.user})}),Object(q.jsx)(V,{children:Object(q.jsx)(Y,{children:a.map((function(n,e){var t=n.creator,a=n.user;return Object(q.jsx)($,{right:Boolean(a),children:Object(q.jsx)(Z,{children:t||a})},e)}))})}),Object(q.jsx)(W,{children:Object(q.jsx)(X,{placeholder:"Type your message",type:"text",value:i,onChange:function(n){return s(n.target.value)},onKeyDown:l})})]})},en=t(13),tn=t(14),an=_.a.div(v||(v=Object(J.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n"]))),rn=_.a.div(w||(w=Object(J.a)(["\n  height: inherit;\n  width: 30%;\n"]))),cn=_.a.main(k||(k=Object(J.a)(["\n  height: inherit;\n  width: 70%;\n"]))),on=function(){var n=Object(y.useState)(""),e=Object(I.a)(n,2),t=e[0],a=e[1],r=Object(y.useState)(1),c=Object(I.a)(r,2),o=c[0],i=c[1],s=Object(y.useState)(localStorage.messages?JSON.parse(localStorage.messages):tn),l=Object(I.a)(s,2),d=l[0],u=l[1],b=Object(y.useMemo)((function(){return en.map((function(n){var e=d[n.id],t=e[e.length-1];return Object(H.a)(Object(H.a)({},n),{},{message:(null===t||void 0===t?void 0:t.creator)||(null===t||void 0===t?void 0:t.user)})}))}),[d,t]),h=Object(y.useMemo)((function(){return b.filter((function(n){return n.user.toLowerCase().includes(t.toLowerCase())}))}),[b]),p=b.find((function(n){return n.id===o}));Object(y.useEffect)((function(){localStorage.setItem("messages",JSON.stringify(d))}),[d]);var j=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(n){return n.json()})).then((function(n){u((function(e){return Object(H.a)(Object(H.a)({},e),{},Object(z.a)({},o,[].concat(Object(A.a)(e[o]),[{user:n.value,lastUpdate:Date.now()}])))}))}),(function(n){alert(n.message)}))};return Object(q.jsxs)(an,{children:[Object(q.jsx)(rn,{children:Object(q.jsx)(G,{chats:h,onChatChange:function(n){return i(n)},onSearch:a})}),Object(q.jsx)(cn,{children:Object(q.jsx)(nn,{activeChat:p,messages:d[o],onMessageCreate:function(n){return function(n){u((function(e){return Object(H.a)(Object(H.a)({},e),{},Object(z.a)({},o,[].concat(Object(A.a)(e[o]),[{creator:n,lastUpdate:Date.now()}])))})),setTimeout(j,1e3*(Math.floor(3*Math.random())+1))}(n)}})})]})};var sn=function(){return Object(q.jsx)(on,{})},ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),a(n),r(n),c(n),o(n)}))};M.a.render(Object(q.jsx)(C.a.StrictMode,{children:Object(q.jsx)(sn,{})}),document.getElementById("root")),ln()}},[[25,1,2]]]);
//# sourceMappingURL=main.54393f40.chunk.js.map