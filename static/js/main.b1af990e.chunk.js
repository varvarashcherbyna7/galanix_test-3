(this["webpackJsonptask-3"]=this["webpackJsonptask-3"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),r=n.n(a),i=n(9),j=n(6),o=n.n(j),d=n(8),l=n(2),b=(n(15),n(0)),u=function(){return Object(b.jsxs)("div",{className:"containerLoader",children:[Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"})]})},O=(n(17),function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!0),r=Object(l.a)(a,2),j=r[0],O=r[1],h=Object(c.useState)(""),m=Object(l.a)(h,2),x=m[0],v=m[1],f=Object(c.useState)([]),p=Object(l.a)(f,2),N=p[0],g=p[1],y=Object(c.useState)([]),w=Object(l.a)(y,2),L=w[0],k=w[1];Object(c.useEffect)((function(){try{(function(){var e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://universities.hipolabs.com/search?name/?format=json",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var e=n.filter((function(e){return e.country.toLowerCase().includes(x.toLowerCase())}));g(e)}catch(t){console.log(t)}}),[x]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("div",{className:"inputContainer",children:Object(b.jsx)("input",{type:"text",placeholder:"",value:x,onChange:function(e){e.preventDefault(),v(e.target.value)}})}),Object(b.jsx)("div",{className:"btn",onClick:function(){console.log(N),O(!0),k(Object(i.a)(N)),O(!1)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),Object(b.jsx)("div",{className:"btn",onClick:function(){k([]),v(""),O(!0)},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})]})}),j?Object(b.jsx)(u,{}):L.map((function(e,t){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"nameUniversity",children:[Object(b.jsxs)("span",{children:[t+1,"."]})," ",e.name]}),Object(b.jsxs)("div",{className:"infoUniversity",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Country:"}),e.alpha_two_code," - ",e.country]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Domain:"}),e.domains.map((function(e,t){return Object(b.jsxs)("div",{children:[t+1,". ",e]},"domain".concat(t))}))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Web pages:"}),e.web_pages.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[t+1,". ",Object(b.jsx)("a",{href:e,children:e})]})},"page".concat(t))})}))]})]})]},e.name+t)}))]})});r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b1af990e.chunk.js.map