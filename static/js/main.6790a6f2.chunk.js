(this["webpackJsonptask-3"]=this["webpackJsonptask-3"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(12),i=n.n(a),r=n(16),j=n(9),o=n.n(j),d=n(13),l=n(5),b=(n(22),n(23),n(1)),u=function(){return Object(b.jsxs)("div",{className:"containerLoader",children:[Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"})]})},O=(n(25),function(){return Object(b.jsxs)("div",{className:"spinner",children:[Object(b.jsx)("div",{className:"bounce1"}),Object(b.jsx)("div",{className:"bounce2"}),Object(b.jsx)("div",{className:"bounce3"})]})}),h=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(l.a)(a,2),j=i[0],h=i[1],x=Object(c.useState)([]),m=Object(l.a)(x,2),v=m[0],f=m[1],p=Object(c.useState)([]),N=Object(l.a)(p,2),y=N[0],w=N[1];Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://universities.hipolabs.com/search?name");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=n.filter((function(e){return e.country.toLowerCase().includes(j.toLowerCase())})),f(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("div",{className:"inputContainer",children:Object(b.jsx)("input",{type:"text",placeholder:"",value:j,onChange:function(e){e.preventDefault(),h(e.target.value)}})}),Object(b.jsx)("div",{className:"btn",onClick:function(){w(Object(r.a)(v)),s(!1)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),Object(b.jsx)("div",{className:"btn",onClick:function(){w([]),h(""),s(!0)},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})]})}),n?Object(b.jsx)(u,{}):y.map((function(e,t){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"nameUniversity",children:[t+1,". ",e.name]}),Object(b.jsxs)("div",{className:"infoUniversity",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Country:"}),e.alpha_two_code," - ",e.country]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Domain:"}),e.domains.map((function(e,t){return Object(b.jsxs)("div",{children:[t+1,". ",e]},t)}))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Web pages:"}),n?Object(b.jsx)(O,{}):e.web_pages.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[t+1,". ",Object(b.jsx)("a",{href:e,children:e})]})},t)})}))]})]})]},t)}))]})},x=n(15);i.a.render(Object(b.jsx)(x.a,{children:Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6790a6f2.chunk.js.map