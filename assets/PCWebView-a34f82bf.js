import{d as V,D as T,c as v,w as y,o as k,a as C,A as N,u as S,L as B,M,f as P,h as E,m as _,H as z,_ as R}from"./index-06f8d280.js";let h=0;const F="webkit moz ms o".split(" ");let l,i;const U=typeof window>"u";if(U)l=function(){},i=function(){};else{l=window.requestAnimationFrame,i=window.cancelAnimationFrame;let n;for(let a=0;a<F.length&&!(l&&i);a++)n=F[a],l=l||window[n+"RequestAnimationFrame"],i=i||window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"];(!l||!i)&&(l=function(a){const o=new Date().getTime(),t=Math.max(0,16-(o-h)),u=window.setTimeout(()=>{a(o+t)},t);return h=o+t,u},i=function(a){window.clearTimeout(a)})}const G=V({__name:"index",props:{start:{type:Number,required:!1,default:0},end:{type:Number,required:!1,default:0},duration:{type:Number,required:!1,default:5e3},autoPlay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(n){return n>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default(n,a,o,t){return o*(-Math.pow(2,-10*n/t)+1)*1024/1023+a}}},emits:["onMountedcallback","callback"],setup(n,{expose:a,emit:o}){const t=n,u=r=>!isNaN(parseFloat(r)),c=r=>{r=r.toFixed(0),r+="";const s=r.split(".");let d=s[0];const D=s.length>1?t.decimal+s[1]:"",g=/(\d+)(\d{3})/;if(t.separator&&!u(t.separator))for(;g.test(d);)d=d.replace(g,"$1"+t.separator+"$2");return t.prefix+d+D+t.suffix},e=T({localStart:t.start,displayValue:c(t.start),printVal:null,paused:!1,localDuration:t.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),p=v(()=>t.start>t.end),w=o,m=()=>{e.localStart=t.start,e.startTime=null,e.localDuration=t.duration,e.paused=!1,e.rAF=l(f)};y(()=>t.start,()=>{t.autoPlay&&m()}),y(()=>t.end,()=>{t.autoPlay&&m()}),k(()=>{t.autoPlay&&m(),w("onMountedcallback")});const x=()=>{i(e.rAF)},b=()=>{e.startTime=null,e.localDuration=+e.remaining,e.localStart=+e.printVal,l(f)},A=()=>{e.paused?(b(),e.paused=!1):(x(),e.paused=!0)},q=()=>{e.startTime=null,i(e.rAF),e.displayValue=c(t.start)},f=r=>{e.startTime||(e.startTime=r),e.timestamp=r;const s=r-e.startTime;e.remaining=e.localDuration-s,t.useEasing?p.value?e.printVal=e.localStart-t.easingFn(s,0,e.localStart-t.end,e.localDuration):e.printVal=t.easingFn(s,e.localStart,t.end-e.localStart,e.localDuration):p.value?e.printVal=e.localStart-(e.localStart-t.end)*(s/e.localDuration):e.printVal=e.localStart+(t.end-e.localStart)*(s/e.localDuration),p.value?e.printVal=e.printVal<t.end?t.end:e.printVal:e.printVal=e.printVal>t.end?t.end:e.printVal,e.displayValue=c(e.printVal),s<e.localDuration?e.rAF=l(f):w("callback")};return C(()=>{i(e.rAF)}),a({pauseResume:A,reset:q}),(r,s)=>N(S(e).displayValue)}}),$={class:"iframe z-3333"},W=["src"],H={class:"i-img"},I=["src"],L=V({__name:"PCWebView",props:{show:{type:Boolean},pageUrl:{}},emits:["update:show"],setup(n,{emit:a}){const o=a,t=()=>{o("update:show",!1)};return(u,c)=>B((P(),E("div",$,[_("iframe",{class:"inlineFrameExample w-100% h-100%",src:u.pageUrl},null,8,W),_("div",H,[_("img",{loading:"lazy",onClick:t,src:S(z)("pc/gb2.png"),alt:"关闭"},null,8,I)])],512)),[[M,u.show]])}});const J=R(L,[["__scopeId","data-v-0c793649"]]);export{G as _,J as a};
