import{c as T,u as A,r as $,K as F,w as P,aU as Y,aV as x,g as H,o as L,n as R}from"./index-a0e73d8d.js";var h;const p=typeof window<"u",C=t=>typeof t=="function",W=t=>typeof t=="string",D=()=>{},G=p&&((h=window==null?void 0:window.navigator)==null?void 0:h.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function m(t){return typeof t=="function"?t():A(t)}function y(t,e){function n(...r){return new Promise((o,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(o).catch(s)})}return n}function E(t,e={}){let n,r,o=D;const s=a=>{clearTimeout(a),o(),o=D};return a=>{const i=m(t),c=m(e.maxWait);return n&&s(n),i<=0||c!==void 0&&c<=0?(r&&(s(r),r=null),Promise.resolve(a())):new Promise((l,d)=>{o=e.rejectOnCancel?d:l,c&&!r&&(r=setTimeout(()=>{n&&s(n),r=null,l(a())},c)),n=setTimeout(()=>{r&&s(r),r=null,l(a())},i)})}}function I(t,e=!0,n=!0,r=!1){let o=0,s,u=!0,a=D,i;const c=()=>{s&&(clearTimeout(s),s=void 0,a(),a=D)};return d=>{const f=m(t),S=Date.now()-o,g=()=>i=d();return c(),f<=0?(o=Date.now(),g()):(S>f&&(n||!u)?(o=Date.now(),g()):e&&(i=new Promise((w,v)=>{a=r?v:w,s=setTimeout(()=>{o=Date.now(),u=!0,w(g()),c()},Math.max(0,f-S))})),!n&&!s&&(s=setTimeout(()=>u=!0,f)),u=!1,i)}}function N(t){return t}function M(t){return Y()?(x(t),!0):!1}function U(t,e=200,n={}){return y(E(e,n),t)}function X(t,e=200,n=!1,r=!0,o=!1){return y(I(e,n,r,o),t)}function Z(t,e=!0){H()?L(t):e?t():R(t)}const O=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b=(t,e,n,r)=>{let o=t<12?"AM":"PM";return r&&(o=o.split("").reduce((s,u)=>s+=`${u}.`,"")),n?o.toLowerCase():o},k=(t,e,n={})=>{var r;const o=t.getFullYear(),s=t.getMonth(),u=t.getDate(),a=t.getHours(),i=t.getMinutes(),c=t.getSeconds(),l=t.getMilliseconds(),d=t.getDay(),f=(r=n.customMeridiem)!=null?r:b,S={YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>s+1,MM:()=>`${s+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(u),DD:()=>`${u}`.padStart(2,"0"),H:()=>String(a),HH:()=>`${a}`.padStart(2,"0"),h:()=>`${a%12||12}`.padStart(1,"0"),hh:()=>`${a%12||12}`.padStart(2,"0"),m:()=>String(i),mm:()=>`${i}`.padStart(2,"0"),s:()=>String(c),ss:()=>`${c}`.padStart(2,"0"),SSS:()=>`${l}`.padStart(3,"0"),d:()=>d,dd:()=>t.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>f(a,i),AA:()=>f(a,i,!1,!0),a:()=>f(a,i,!0),aa:()=>f(a,i,!0,!0)};return e.replace(_,(g,w)=>w||S[g]())},j=t=>{if(t===null)return new Date(NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(O);if(e){const n=e[2]-1||0,r=(e[7]||"0").substring(0,3);return new Date(e[1],n,e[3]||1,e[4]||0,e[5]||0,e[6]||0,r)}}return new Date(t)};function z(t,e="HH:mm:ss",n={}){return T(()=>k(j(m(t)),m(e),n))}function K(t,e=1e3,n={}){const{immediate:r=!0,immediateCallback:o=!1}=n;let s=null;const u=$(!1);function a(){s&&(clearInterval(s),s=null)}function i(){u.value=!1,a()}function c(){const l=m(e);l<=0||(u.value=!0,o&&t(),a(),s=setInterval(t,l))}if(r&&p&&c(),F(e)||C(e)){const l=P(e,()=>{u.value&&p&&c()});M(l)}return M(i),{isActive:u,pause:i,resume:c}}export{X as a,K as b,N as c,W as d,Z as e,G as f,z as g,p as i,D as n,m as r,M as t,U as u};
