(this.webpackJsonpchallenge_2=this.webpackJsonpchallenge_2||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),i=n.n(r),o=(n(9),n(3)),s=(n(10),n(11),n(0));var u=function(e){return Object(s.jsxs)("form",{className:"Searcher-box",onSubmit:function(t){t.preventDefault(),e.getDataFromApi()},children:[Object(s.jsx)("label",{htmlFor:"city",children:Object(s.jsx)("input",{id:"city",type:"text",placeholder:"Enter a city",value:e.city,onChange:function(t){e.handleFilter(t.target.value),console.log(t.target.value)}})}),Object(s.jsx)("button",{type:"submit",children:"Buscar"})]})};n(13);var l=function(e){return Object(s.jsxs)("div",{className:"Results-box",children:[Object(s.jsx)("h2",{children:e.weather.name}),Object(s.jsx)("h3",{children:e.weather.country}),Object(s.jsx)("p",{children:e.weather.main}),Object(s.jsx)("span",{children:e.weather.temp})]})},h="ed3ba494204f4abf63ac338fab10dd22",j="https://api.openweathermap.org/data/2.5/";var b=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),b=i[0],d=i[1];return console.log(b),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{className:"App-header",children:"Weather APP"}),Object(s.jsxs)("main",{children:[Object(s.jsx)(u,{handleFilter:function(e){a(e),console.log("Se tiene que buscar",e)},getDataFromApi:function(){return fetch("".concat(j,"weather?q=").concat(n,"&units=metric&APPID=").concat(h)).then((function(e){return e.json()})).then((function(e){var t={name:e.name,country:e.sys.country,main:e.weather[0].main,temp:e.main.temp};d(t),a("")}))},city:n}),Object(s.jsx)(l,{weather:b})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),d()}],[[14,1,2]]]);
//# sourceMappingURL=main.4cd5d731.chunk.js.map