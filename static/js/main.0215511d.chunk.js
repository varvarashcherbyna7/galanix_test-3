(this["webpackJsonptask-3"]=this["webpackJsonptask-3"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(12),r=n.n(a),i=n(16),j=n(9),o=n.n(j),d=n(13),l=n(5),b=(n(22),n(1)),u=function(){return Object(b.jsxs)("div",{className:"containerLoader",children:[Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"}),Object(b.jsx)("div",{className:"containerLoader-element"})]})},h=(n(24),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(l.a)(a,2),j=r[0],h=r[1],O=Object(c.useState)([]),x=Object(l.a)(O,2),m=x[0],v=x[1],f=Object(c.useState)([]),p=Object(l.a)(f,2),N=p[0],y=p[1];Object(c.useEffect)((function(){try{(function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,fetch("http://universities.hipolabs.com/search?name",{method:"GET",body:void 0,referrerPolicy:"unsafe-url"});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,n.filter((function(e){return e.country.toLowerCase().includes(j.toLowerCase())}));case 9:c=e.sent,s(!1),v(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(e){console.log(e)}}),[j]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("div",{className:"inputContainer",children:Object(b.jsx)("input",{type:"text",placeholder:"",value:j,onChange:function(e){e.preventDefault(),h(e.target.value)}})}),Object(b.jsx)("div",{className:"btn",onClick:function(){y(Object(i.a)(m)),s(!1)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),Object(b.jsx)("div",{className:"btn",onClick:function(){y([]),h(""),s(!0)},children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})]})}),n?Object(b.jsx)(u,{}):N.map((function(e,t){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"nameUniversity",children:[Object(b.jsxs)("span",{children:[t+1,"."]})," ",e.name]}),Object(b.jsxs)("div",{className:"infoUniversity",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Country:"}),e.alpha_two_code," - ",e.country]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Domain:"}),e.domains.map((function(e,t){return Object(b.jsxs)("div",{children:[t+1,". ",e]},t)}))]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Web pages:"}),e.web_pages.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[t+1,". ",Object(b.jsx)("a",{href:e,children:e})]})},t)})}))]})]})]},e.name+t)}))]})}),O=n(15);r.a.render(Object(b.jsx)(O.a,{children:Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0215511d.chunk.js.map