(this["webpackJsonpnlw06-letmeask"]=this["webpackJsonpnlw06-letmeask"]||[]).push([[0],{40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),s=a(25),c=a.n(s),i=a(16),o=a(5),u=a(7),l=a.n(u),j=a(13),d=a(11),b=a(18);a(33),a(35);b.a.initializeApp({apiKey:"AIzaSyBlDfnWyafzcVmS4Lmn07e7T5JQN68zPC4",authDomain:"nlw06-letmeask-1b60e.firebaseapp.com",databaseURL:"https://nlw06-letmeask-1b60e-default-rtdb.firebaseio.com",projectId:"nlw06-letmeask-1b60e",storageBucket:"nlw06-letmeask-1b60e.appspot.com",messagingSenderId:"654038683491",appId:"1:654038683491:web:d9f61a0893d2b6ad934d56"});var p=b.a.auth(),m=b.a.database(),h=a(1),f=Object(n.createContext)({});function x(e){var t=e.children,a=Object(n.useState)(),r=Object(d.a)(a,2),s=r[0],c=r[1];function i(){return(i=Object(j.a)(l.a.mark((function e(){var t,a,n,r,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.a.auth.GoogleAuthProvider,e.next=3,p.signInWithPopup(t);case 3:if(!(a=e.sent).user){e.next=9;break}if(n=a.user,r=n.displayName,s=n.photoURL,i=n.uid,r&&s){e.next=8;break}throw new Error("Missing information from Google Account");case 8:c({id:i,name:r,avatar:s});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){if(e){var t=e.displayName,a=e.photoURL,n=e.uid;if(!t||!a)throw new Error("Missing information from Google Account");c({id:n,name:t,avatar:a})}}));return function(){e()}}),[]),Object(h.jsx)(f.Provider,{value:{user:s,signInWithGoogle:function(){return i.apply(this,arguments)}},children:t})}var O=a.p+"static/media/illustration.ae7276f0.svg",v=a.p+"static/media/logo.a88331cb.svg",g=a.p+"static/media/google-icon.df15d8e5.svg",w=a(27);a(40);function k(e){return Object(h.jsx)("button",Object(w.a)({className:"button"},e))}function y(){return Object(n.useContext)(f)}a(41);function C(){var e=Object(o.f)(),t=y(),a=t.user,r=t.signInWithGoogle,s=Object(n.useState)(""),c=Object(d.a)(s,2),i=c[0],u=c[1];function b(){return(b=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return t.next=3,r();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=Object(j.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==i.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,m.ref("rooms/".concat(i)).get();case 5:if(t.sent.exists()){t.next=9;break}return alert("Room does not exist."),t.abrupt("return");case 9:e.push("/rooms/".concat(i));case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{id:"page-auth",children:[Object(h.jsxs)("aside",{children:[Object(h.jsx)("img",{src:O,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(h.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(h.jsx)("p",{children:"Tire as d\xfavidas  da sua audi\xeancia em tempo-real"})]}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsx)("img",{src:v,alt:"Letmeask"}),Object(h.jsxs)("button",{className:"create-room",onClick:function(){return b.apply(this,arguments)},children:[Object(h.jsx)("img",{src:g,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(h.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(h.jsxs)("form",{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return u(e.target.value)},value:i}),Object(h.jsx)(k,{type:"submit",children:"Entrar na sala"})]})]})})]})}a(46);function S(){var e=y().user,t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],s=a[1],c=Object(o.f)();function u(){return(u=Object(j.a)(l.a.mark((function t(a){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==r.trim()){t.next=3;break}return t.abrupt("return");case 3:return n=m.ref("rooms"),t.next=6,n.push({title:r,authorId:null===e||void 0===e?void 0:e.id});case 6:s=t.sent,c.push("/rooms/".concat(s.key));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{id:"page-auth",children:[Object(h.jsxs)("aside",{children:[Object(h.jsx)("img",{src:O,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(h.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(h.jsx)("p",{children:"Tire as d\xfavidas  da sua audi\xeancia em tempo-real"})]}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsx)("img",{src:v,alt:"Letmeask"}),Object(h.jsx)("h2",{children:"Criar uma nova sala"}),Object(h.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return s(e.target.value)},value:r}),Object(h.jsx)(k,{type:"submit",children:"Criar sala"})]}),Object(h.jsxs)("p",{children:["Quer entrar em uma sala j\xe1 existente? ",Object(h.jsx)(i.b,{to:"/",children:"Clique aqui"})]})]})})]})}var N=a.p+"static/media/copy.2f36f99e.svg";a(47);function A(e){var t=e.code;return Object(h.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(t)},children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:N,alt:"Copiar c\xf3digo da sala"})}),Object(h.jsxs)("span",{children:["Sala #",t]})]})}a(48);function I(){var e=y().user,t=Object(o.g)(),a=Object(n.useState)(""),r=Object(d.a)(a,2),s=r[0],c=r[1],i=Object(n.useState)([]),u=Object(d.a)(i,2),b=u[0],p=u[1],f=Object(n.useState)(""),x=Object(d.a)(f,2),O=x[0],g=x[1],w=t.id;function C(){return(C=Object(j.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("You must be logged in");case 5:return n={content:s,author:{name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},t.next=8,m.ref("rooms/".concat(w,"/questions")).push(n);case 8:c("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){m.ref("rooms/".concat(w)).on("value",(function(e){var t,a=e.val(),n=null!==(t=a.questions)&&void 0!==t?t:{},r=Object.entries(n).map((function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return{id:a,content:n.content,author:n.author,isHighlighted:n.isHighlighted,isAnswered:n.isAnswered}}));g(a.title),p(r)}))}),[w]),Object(h.jsxs)("div",{id:"page-room",children:[Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("img",{src:v,alt:"Letmeask"}),Object(h.jsx)(A,{code:w})]})}),Object(h.jsxs)("main",{children:[Object(h.jsxs)("div",{className:"room-title",children:[Object(h.jsxs)("h1",{children:["Sala ",O]}),b.length>0&&Object(h.jsxs)("span",{children:[b.length," pergunta(s)"]})]}),Object(h.jsxs)("form",{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(h.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return c(e.target.value)},value:s}),Object(h.jsxs)("div",{className:"form-footer",children:[e?Object(h.jsxs)("div",{className:"user-info",children:[Object(h.jsx)("img",{src:e.avatar,alt:e.name}),Object(h.jsx)("span",{children:e.name})]}):Object(h.jsxs)("span",{children:["Para enviar uma pergunta, ",Object(h.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(h.jsx)(k,{type:"submit",disabled:!e,children:"Enviar pergunta"})]})]})]})]})}function E(){return Object(h.jsx)(i.a,{basename:"/nlw06-letmeask",children:Object(h.jsx)(x,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:C}),Object(h.jsx)(o.a,{path:"/rooms/new",component:S}),Object(h.jsx)(o.a,{path:"/rooms/:id",component:I})]})})})}a(49);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b8aa0122.chunk.js.map