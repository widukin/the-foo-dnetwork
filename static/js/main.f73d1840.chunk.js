(this["webpackJsonpthe-foo-dnetwork"]=this["webpackJsonpthe-foo-dnetwork"]||[]).push([[0],{21:function(e,n,t){},32:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t(0),r=t.n(s),i=t(25),a=t(23),l=t.n(a),o=(t(32),t(26)),u=t(4),d=t(7),j=t.n(d);t(21);function h(e){var n=e.name,t=e.description,r=e.origin,i=e.pictureURL,a=e.user,l=Object(s.useState)("info"),o=Object(u.a)(l,2),d=o[0],j=o[1],h=Object(s.useState)("Read More"),f=Object(u.a)(h,2),O=f[0],b=f[1],m=function(e){b("Read More"===O?"Read Less":"Read More"),j("info"===d?"info-selected":"info")};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"dishItem",children:[Object(c.jsx)("img",{src:i}),Object(c.jsxs)("div",{className:"hoverPanel",children:[Object(c.jsx)("h3",{children:n}),Object(c.jsxs)("div",{className:"extra",children:[Object(c.jsxs)("p",{children:[" ","by ",a.name," ",a.surname]}),Object(c.jsxs)("p",{onClick:m,className:"pointer",children:[" ",O," "]})]})]})]}),Object(c.jsxs)("div",{className:d,children:[Object(c.jsx)("div",{className:"close",onClick:m,children:"Close"}),Object(c.jsxs)("h5",{children:["\u2013",r]}),Object(c.jsx)("h2",{children:n}),Object(c.jsxs)("h4",{children:[" ","by ",a.name," ",a.surname]}),Object(c.jsxs)("p",{children:[t," "]}),Object(c.jsx)("div",{className:"imageContainer",children:Object(c.jsx)("img",{src:i})})]})]})}function f(e){var n=e.dishesCollection;return Object(c.jsx)("div",{className:"collection",children:n.map((function(e,n){return Object(c.jsx)(h,{name:e.name,description:e.description,pictureURL:e.pictureURL,origin:e.origin,user:e.user},n)}))})}var O=function(e){var n=e.changeQuery,t=Object(s.useState)(""),r=Object(u.a)(t,2),i=r[0],a=r[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(i)},children:[Object(c.jsx)("input",{type:"text",className:"queryField",id:"queryField",name:"queryField",value:i,onChange:function(e){var n=e.target.value;a(n)}}),Object(c.jsx)("button",{type:"submit",className:"bttn",children:"Search"})]})})},b=function(e){var n=e.changeOrigin,t=e.origins,s=e.users,r=e.changeUser,i=e.allDishesHandler,a=function(e){e.preventDefault(),n(e.target.innerText)};return Object(c.jsxs)("div",{className:"origins",children:[Object(c.jsx)("h2",{onClick:i,className:"pointer",children:"All Dishes"}),Object(c.jsx)("h2",{children:"By Provenance"}),Object(c.jsx)("ul",{children:t?t.map((function(e,n){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://#",onClick:a,children:e})},n)})):null}),Object(c.jsx)("h2",{children:"By Writer"}),Object(c.jsx)("ul",{children:s?s.map((function(e,n){return Object(c.jsx)("li",{children:Object(c.jsxs)("a",{href:"https://#",onClick:function(n){var t;n.preventDefault(),t=e.sys.id,r(t)},children:[e.fields.name," ",e.fields.surname]})},n)})):null})]})},m=function(e){var n=e.changeQuery,t=e.changeOrigin,s=e.origins,r=e.users,i=e.changeUser,a=e.allDishesHandler;return Object(c.jsxs)("div",{className:"sideBar",children:[Object(c.jsxs)("div",{className:"logo",children:["THE FOO___D ",Object(c.jsx)("br",{})," NETWORK"]}),Object(c.jsx)(O,{changeQuery:n}),Object(c.jsx)(b,{changeOrigin:t,origins:s,users:r,changeUser:i,allDishesHandler:a})]})};var p=function(){var e=Object(s.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],i=Object(s.useState)(""),a=Object(u.a)(i,2),l=a[0],d=a[1],h=Object(s.useState)([]),O=Object(u.a)(h,2),b=O[0],p=O[1],g=Object(s.useState)(""),x=Object(u.a)(g,2),v=x[0],y=x[1],D=Object(s.useState)([]),N=Object(u.a)(D,2),k=N[0],R=N[1],U=Object(s.useState)(""),S=Object(u.a)(U,2),C=S[0],F=S[1],_=Object(s.useState)(Date.now()),T=Object(u.a)(_,2),B=T[0],E=T[1],I=function(e){var n=[];e.data.items.map((function(t){var c={name:t.fields.dishName,description:t.fields.description,origin:t.fields.origin,user:{id:t.fields.author.sys.id},pictureId:t.fields.picture.sys.id};return e.data.includes.Entry.map((function(e){return e.sys.id===c.user.id&&(c.user.name=e.fields.name,c.user.surname=e.fields.surname,c.user.username=e.fields.username),null})),e.data.includes.Asset.map((function(e){return e.sys.id===c.pictureId&&(c.pictureURL=e.fields.file.url),null})),n.push(c),null})),R(n)};return Object(s.useEffect)((function(){j.a.get("https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&query="+C).then((function(e){return I(e)})).catch((function(e){return console.error(e)}))}),[C]),Object(s.useEffect)((function(){j.a.get("https://cdn.contentful.com//spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&fields.author.sys.contentType.sys.id=user&fields.author.sys.id="+l).then((function(e){return I(e)})).catch((function(e){return console.error(e)}))}),[l]),Object(s.useEffect)((function(){j.a.get("https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&fields.origin[match]="+v).then((function(e){return I(e)})).catch((function(e){return console.error(e)}))}),[v]),Object(s.useEffect)((function(){j.a.get("https://cdn.contentful.com/spaces/ngczliqhmrc5/environments/master/entries?access_token=47FZlMTfDlGKzrXJnRUXR5t1DP70hkaQVUfjt0BO-lI&content_type=dish&order=fields.dishName").then((function(e){I(e),r(e.data.includes.Entry)})).catch((function(e){return console.error(e)}))}),[B]),k&&k.map((function(e){return b.includes(e.origin.trim())||p([].concat(Object(o.a)(b),[e.origin.trim()])),null})),Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(m,{changeQuery:function(e){return F(e)},changeOrigin:function(e){y(e)},changeUser:function(e){return d(e)},allDishesHandler:function(e){e.preventDefault(),E(Date.now())},origins:b,users:t}),k.length?Object(c.jsx)(f,{dishesCollection:k}):Object(c.jsx)("h2",{id:"noDishes",children:"Sorry, no dishes for you!!  \ud83d\ude2c"})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),c(e),s(e),r(e),i(e)}))},x=document.getElementById("root");l.a.render(Object(c.jsx)(i.a,{children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(p,{})})}),x),g()}},[[56,1,2]]]);
//# sourceMappingURL=main.f73d1840.chunk.js.map