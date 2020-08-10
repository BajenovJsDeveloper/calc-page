(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,a,n){},11:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(4),l=n.n(c),o=n(1),i=function(e){var a=e.handleAction,n=e.tabId,t=r.a.createElement(r.a.Fragment,null,"\xf7"),c=r.a.createElement(r.a.Fragment,null,"\xd7"),l=r.a.createElement(r.a.Fragment,null,"\u2013"),o=[r.a.createElement(r.a.Fragment,null,"+"),l,c,t],i=function(e){var n=e.target;n.dataset.act&&a(n.dataset.act)},u=function(e){var a=e.target;32===e.keyCode&&a.click()};return r.a.createElement("div",{className:"actions"},["+","-","*",":"].map((function(e,a){return r.a.createElement("div",{role:"button",key:e,className:"box action",onClick:i,onKeyDown:u,tabIndex:a+n,"data-act":e},o[a])})))},u=function(e){var a=e.handleDigit,n=function(e){var a=e.target;32===e.keyCode&&a.click()};return r.a.createElement(r.a.Fragment,null,[0,7,8,9,4,5,6,1,2,3].map((function(e,t){return r.a.createElement("div",{role:"button",key:"".concat(e,"a"),onClick:function(e){return function(e){var n=e.target;a(n.dataset.id)}(e)},className:"box","data-id":e,onKeyDown:n,tabIndex:e+2},e)})))},s=function(e){var a=e.handleClear,n=e.tabId;return r.a.createElement("div",{role:"button",className:"box action clear",tabIndex:n,onKeyDown:function(e){var a=e.target;32===e.keyCode&&a.click()},onClick:a},"CLR")},b=function(e){var a=e.handleEqual,n=e.tabId;return r.a.createElement("div",{role:"button",className:"box equal",tabIndex:n,onKeyDown:function(e){var a=e.target;32===e.keyCode&&a.click()},onClick:a},"=")},m=function(e){var a=e.result,n=(a=null===a?"0":a).split(""),t=n.indexOf("*");return-1!==t&&(n[t]=String.fromCharCode(215)),n=n.join(""),r.a.createElement("div",{className:"box result"},n)},d={res:null,a:null,b:null,action:null},f=n(2);function E(e,a,n){if(null!==e&&null!==a&&null!==n){var t="";switch(n){case"+":t=(Number(e)+Number(a)).toString();break;case"-":t=(Number(e)-Number(a)).toString();break;case"*":t=(Number(e)*Number(a)).toString();break;case":":var r=(Number(e)/Number(a)).toString();t=isNaN(Number(r))?"0":r,t="Infinity"===r||"-Infinity"===r?"Error":t}return t}return""}function v(e,a){var n=a;if(Number(n)>Number.MAX_SAFE_INTEGER||Number(n)<Number.MIN_SAFE_INTEGER)return{res:n=Number(n).toExponential(),a:null,b:null,action:null};var t=n;return{res:null===e?t:"".concat(t," ").concat(e," "),a:t,b:null,action:e}}function C(e,a){var n=Object(f.a)({},e);switch(a.type){case"DIGIT_CLICK":var t=a.data;if(t){var r=function(e,a){var n=null===a.a?"":a.a,t=null===a.b?"":a.b,r=null===a.action?"":a.action;return""===r?n=(n+e).length<16?Number("".concat(n).concat(e)).toString().split("").slice(0,15).join(""):n:t=(t+e).length<16?Number("".concat(t).concat(e)).toString().split("").slice(0,15).join(""):t,[n,t,"".concat(n," ").concat(r," ").concat(t)]}(t,e),c=Object(o.a)(r,3),l=c[0],i=c[1],u=c[2];n=null===e.action?{res:u,a:l,b:e.b,action:e.action}:{res:u,a:e.a,b:i,action:e.action}}break;case"EQUAL_CLICK":if(e.a&&e.b&&e.action){var s=E(e.a,e.b,e.action);n="Error"===s?{res:"Error",a:null,b:null,action:null}:Object(f.a)({},v(null,s))}break;case"ACTION_CLICK":var b=null===e.res?"":e.res,m=e.a,d=e.b;if(null!==m){var C=a.data;if(null===d)n={res:b=e.action?"".concat(b.split("").slice(0,-3).join("")," ").concat(C," "):"".concat(m," ").concat(C," "),a:m,b:null,action:C};else{var N=E(e.a,d,e.action);n="Error"===N?{res:"Error",a:null,b:null,action:null}:Object(f.a)({},v(C,N))}}break;case"CLEAR_CLICK":n={res:null,a:null,b:null,action:null}}return n}n(10);var N=function(){var e=Object(t.useReducer)(C,d),a=Object(o.a)(e,2),n=a[0],c=a[1],l=r.a.createRef(),f=function(e){c({type:"DIGIT_CLICK",data:e})},E=function(){c({type:"EQUAL_CLICK"})},v=function(){c({type:"CLEAR_CLICK"})},N=function(e){c({type:"ACTION_CLICK",data:e})};return Object(t.useEffect)((function(){l.current&&l.current.focus()}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Calculator"),r.a.createElement("div",{role:"grid",className:"container",onKeyDown:function(e){var a=e.key,n=e.key,t=e.keyCode;switch(a){case"+":case"-":case"*":N(a);break;case"/":N(":");break;case"Enter":E()}"0123456789".includes(n)&&f(n),8!==t&&46!==t&&27!==t||v()},tabIndex:-1,ref:l},r.a.createElement(m,{result:n.res}),r.a.createElement("div",{className:"digits"},r.a.createElement("div",{className:"d-grid"},r.a.createElement(s,{handleClear:v,tabId:1}),r.a.createElement(b,{handleEqual:E,tabId:2}),r.a.createElement(u,{handleDigit:f}))),r.a.createElement(i,{handleAction:N,tabId:12})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,a,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.5bf3d24a.chunk.js.map