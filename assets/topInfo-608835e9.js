import{u as $,t as x,i as F,a as S,r as T,b as N,c as Q}from"./index-bd6ad598.js";import{r as d,Q as j,s as C,d as A,D as B,o as D,a as R,c as q,h as i,u as c,t as m,_ as H}from"./index-54672c58.js";import{g as v}from"./index-f79d2a50.js";function M(n){var e;const t=T(n);return(e=t==null?void 0:t.$el)!=null?e:t}const E=S?window:void 0;function W(n,e=!1){const t=d(),s=()=>t.value=!!n();return s(),N(s,e),t}const O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w="__vueuse_ssr_handlers__";O[w]=O[w]||{};var b=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,G=(n,e)=>{var t={};for(var s in n)Y.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&b)for(var s of b(n))e.indexOf(s)<0&&z.call(n,s)&&(t[s]=n[s]);return t};function de(n,e,t={}){const s=t,{window:a=E}=s,o=G(s,["window"]);let r;const u=W(()=>a&&"ResizeObserver"in a),p=()=>{r&&(r.disconnect(),r=void 0)},f=C(()=>M(n),_=>{p(),u.value&&a&&_&&(r=new ResizeObserver(e),r.observe(_,o))},{immediate:!0,flush:"post"}),l=()=>{p(),f()};return x(l),{isSupported:u,stop:l}}function U(n,e={}){const{immediate:t=!0,window:s=E}=e,a=d(!1);let o=0,r=null;function u(l){if(!a.value||!s)return;const _=l-o;n({delta:_,timestamp:l}),o=l,r=s.requestAnimationFrame(u)}function p(){!a.value&&s&&(a.value=!0,r=s.requestAnimationFrame(u))}function f(){a.value=!1,r!=null&&s&&(s.cancelAnimationFrame(r),r=null)}return t&&p(),x(f),{isActive:j(a),pause:f,resume:p}}var V=Object.defineProperty,y=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,I=(n,e,t)=>e in n?V(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,K=(n,e)=>{for(var t in e||(e={}))k.call(e,t)&&I(n,t,e[t]);if(y)for(var t of y(e))L.call(e,t)&&I(n,t,e[t]);return n};function J(n={}){const{controls:e=!1,interval:t="requestAnimationFrame"}=n,s=d(new Date),a=()=>s.value=new Date,o=t==="requestAnimationFrame"?U(a,{immediate:!0}):$(a,t,{immediate:!0});return e?K({now:s},o):s}var h;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(h||(h={}));var X=Object.defineProperty,g=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,P=(n,e,t)=>e in n?X(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,te=(n,e)=>{for(var t in e||(e={}))Z.call(e,t)&&P(n,t,e[t]);if(g)for(var t of g(e))ee.call(e,t)&&P(n,t,e[t]);return n};const ne={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};te({linear:F},ne);const se={class:"top-info"},ae={class:"top-info-left"},re=["src"],oe={class:"mx-4px"},ie={class:"mx-4px"},ue=["src"],le={class:"mt-8px"},pe=A({__name:"topInfo",setup(n){const e=d(),t=Q(J(),"YYYY-MM-DD  HH:mm:ss"),s=B(()=>e.value?v(`pc/icon_weather/${e.value.weather}.png`):"");return D(()=>{fetch("https://restapi.amap.com/v3/weather/weatherInfo?city=430722&key=68ebee603e40b6448eebff20ad735e9b",{method:"GET"}).then(a=>a.json()).then(a=>e.value=a.lives[0])}),(a,o)=>{var r,u;return R(),q("div",se,[i("div",ae,[o[0]||(o[0]=i("span",{class:"mr-4px"},"汉寿",-1)),o[1]||(o[1]=i("div",{class:"separator"},"|",-1)),i("img",{class:"w-19px h-15px ml-4px",src:c(s),alt:"icon"},null,8,re),i("span",oe,m((r=c(e))==null?void 0:r.weather),1),o[2]||(o[2]=i("div",{class:"separator"},"|",-1)),i("span",ie,m((u=c(e))==null?void 0:u.temperature)+"℃",1)]),i("img",{class:"title",src:c(v)("pc/top-info-title.png"),alt:"title"},null,8,ue),i("div",le,m(c(t)),1)])}}});const me=H(pe,[["__scopeId","data-v-a0eb8cb1"]]);export{me as T,de as u};
