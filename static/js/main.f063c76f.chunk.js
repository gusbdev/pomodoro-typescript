(this["webpackJsonppomodoro-typescript"]=this["webpackJsonppomodoro-typescript"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),r=c(4),s=c.n(r),i=(c(9),c(2));var a=function(e){return Math.floor(e).toString().padStart(2,"0")};function u(e){var t=a(e/3600),c=a(e/60%60),n=a(e%60%60);return"".concat(t,"h").concat(c,"m").concat(n,"s")}var l=c(1);function j(e){return Object(l.jsx)("button",{onClick:e.onClick,className:e.className,children:e.text})}function b(e){var t=a(e/60%60),c=a(e%60%60);return"".concat(t,":").concat(c)}function d(e){return Object(l.jsx)("div",{className:"timer",children:b(e.mainTime)})}function O(e){var t=Object(n.useState)(e.pomodoroTime),c=Object(i.a)(t,2),o=c[0],r=c[1],s=Object(n.useState)(!1),a=Object(i.a)(s,2),b=a[0],O=a[1],m=Object(n.useState)(!1),f=Object(i.a)(m,2),h=f[0],p=f[1],x=Object(n.useState)(!1),v=Object(i.a)(x,2),k=v[0],y=v[1],g=Object(n.useState)(new Array(e.cycles-1).fill(!0)),T=Object(i.a)(g,2),S=T[0],C=T[1],N=Object(n.useState)(0),R=Object(i.a)(N,2),w=R[0],E=R[1],I=Object(n.useState)(0),A=Object(i.a)(I,2),J=A[0],L=A[1],M=Object(n.useState)(0),P=Object(i.a)(M,2),W=P[0],B=P[1];!function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current&&c.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){r(o-1),h&&L(J+1)}),b?1e3:null);var H=Object(n.useCallback)((function(){O(!0),p(!0),y(!1),r(e.pomodoroTime)}),[O,p,y,r,e.pomodoroTime]),Y=Object(n.useCallback)((function(t){O(!0),p(!1),y(!0),r(t?e.longRestTime:e.shortRestTime)}),[O,p,y,r,e.longRestTime,e.shortRestTime]);return Object(n.useEffect)((function(){h&&document.body.classList.add("working"),k&&document.body.classList.remove("working"),o>0||(h&&S.length>0?(Y(!1),S.pop()):h&&S.length<=0&&(Y(!0),C(new Array(e.cycles-1).fill(!0)),E(w+1)),h&&B(W+1),k&&H())}),[h,k,o,S,W,w,Y,C,H,e.cycles]),Object(l.jsxs)("div",{className:"pomodoro",children:[Object(l.jsxs)("h2",{children:["You are: ",h?"working":"resting"]}),Object(l.jsx)(d,{mainTime:o}),Object(l.jsxs)("div",{className:"controls",children:[Object(l.jsx)(j,{text:"Working",onClick:function(){return H()}}),Object(l.jsx)(j,{text:"Rest",onClick:function(){return Y(!1)}}),Object(l.jsx)(j,{className:h||k?"":"hidden",text:b?"Pause":"Play",onClick:function(){return O(!b)}})]}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsxs)("p",{children:["Completed Cycles: ",w]}),Object(l.jsxs)("p",{children:["Worked Hours: ",u(J)]}),Object(l.jsxs)("p",{children:["Number of Cycles: ",W]})]})]})}var m=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(O,{pomodoroTime:1500,shortRestTime:300,longRestTime:900,cycles:4})})};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.f063c76f.chunk.js.map