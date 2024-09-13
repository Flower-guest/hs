import{d as h,D as x,p as V,v,a as D,c as q,h as d,u as f,t as A,g as M,K as z,_ as T,L as E,s as S,o as R,f as U}from"./index-54672c58.js";import{g as C}from"./index-f79d2a50.js";const I={class:"dialog"},W=["src"],K={class:"dialog-title"},L=h({__name:"Dialog",props:{show:{type:Boolean},title:{},width:{default:1122},height:{default:810}},emits:["update:show"],setup(s,{emit:a}){const n=s,t=x(()=>({width:(n.width/192).toFixed(2)+"rem",height:(n.height/192).toFixed(2)+"rem"})),u=a,c=()=>{u("update:show",!1)};return(e,p)=>V((D(),q("div",I,[d("div",{class:"dialog-box",style:z(f(t))},[d("img",{class:"dialog-gb",onClick:c,src:f(C)("pc/gb1.png")},null,8,W),d("div",K,A(e.title),1),M(e.$slots,"dialogContent",{},void 0,!0)],4)],512)),[[v,e.show]])}});const Z=T(L,[["__scopeId","data-v-423b314e"]]);let F=0;const b="webkit moz ms o".split(" ");let i,r;const j=typeof window>"u";if(j)i=function(){},r=function(){};else{i=window.requestAnimationFrame,r=window.cancelAnimationFrame;let s;for(let a=0;a<b.length&&!(i&&r);a++)s=b[a],i=i||window[s+"RequestAnimationFrame"],r=r||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];(!i||!r)&&(i=function(a){const n=new Date().getTime(),t=Math.max(0,16-(n-F)),u=window.setTimeout(()=>{a(n+t)},t);return F=n+t,u},r=function(a){window.clearTimeout(a)})}const ee=h({__name:"index",props:{start:{type:Number,required:!1,default:0},end:{type:Number,required:!1,default:0},duration:{type:Number,required:!1,default:5e3},autoPlay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(s){return s>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default(s,a,n,t){return n*(-Math.pow(2,-10*s/t)+1)*1024/1023+a}}},emits:["onMountedcallback","callback"],setup(s,{expose:a,emit:n}){const t=s,u=l=>!isNaN(parseFloat(l)),c=l=>{l=l.toFixed(0),l+="";const o=l.split(".");let m=o[0];const P=o.length>1?t.decimal+o[1]:"",y=/(\d+)(\d{3})/;if(t.separator&&!u(t.separator))for(;y.test(m);)m=m.replace(y,"$1"+t.separator+"$2");return t.prefix+m+P+t.suffix},e=E({localStart:t.start,displayValue:c(t.start),printVal:null,paused:!1,localDuration:t.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),p=x(()=>t.start>t.end),w=n,_=()=>{e.localStart=t.start,e.startTime=null,e.localDuration=t.duration,e.paused=!1,e.rAF=i(g)};S(()=>t.start,()=>{t.autoPlay&&_()}),S(()=>t.end,()=>{t.autoPlay&&_()}),R(()=>{t.autoPlay&&_(),w("onMountedcallback")});const k=()=>{r(e.rAF)},N=()=>{e.startTime=null,e.localDuration=+e.remaining,e.localStart=+e.printVal,i(g)},B=()=>{e.paused?(N(),e.paused=!1):(k(),e.paused=!0)},$=()=>{e.startTime=null,r(e.rAF),e.displayValue=c(t.start)},g=l=>{e.startTime||(e.startTime=l),e.timestamp=l;const o=l-e.startTime;e.remaining=e.localDuration-o,t.useEasing?p.value?e.printVal=e.localStart-t.easingFn(o,0,e.localStart-t.end,e.localDuration):e.printVal=t.easingFn(o,e.localStart,t.end-e.localStart,e.localDuration):p.value?e.printVal=e.localStart-(e.localStart-t.end)*(o/e.localDuration):e.printVal=e.localStart+(t.end-e.localStart)*(o/e.localDuration),p.value?e.printVal=e.printVal<t.end?t.end:e.printVal:e.printVal=e.printVal>t.end?t.end:e.printVal,e.displayValue=c(e.printVal),o<e.localDuration?e.rAF=i(g):w("callback")};return U(()=>{r(e.rAF)}),a({pauseResume:B,reset:$}),(l,o)=>A(f(e).displayValue)}}),G={class:"iframe z-3333"},H=["src"],J={class:"i-img"},O=["src"],Q=h({__name:"PCWebView",props:{show:{type:Boolean},pageUrl:{}},emits:["update:show"],setup(s,{emit:a}){const n=a,t=()=>{n("update:show",!1)};return(u,c)=>V((D(),q("div",G,[d("iframe",{class:"inlineFrameExample w-100% h-100%",src:u.pageUrl},null,8,H),d("div",J,[d("img",{loading:"lazy",onClick:t,src:f(C)("pc/gb2.png"),alt:"关闭"},null,8,O)])],512)),[[v,u.show]])}});const te=T(Q,[["__scopeId","data-v-0c793649"]]);export{ee as _,Z as a,te as b};
