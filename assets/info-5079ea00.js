import{d as P,D as k,o as T,G as U,h as i,m as n,u as e,F as d,I as u,J as m,j as V,y as X,P as N,f as c,V as z,H as r,z as R,A as p,E as x,k as b,R as S,_ as q}from"./index-a0e73d8d.js";import{l as B}from"./textLayer-d95b278e.js";const F=""+new URL("left-plan-b449af71.png",import.meta.url).href,M={class:"bg"},$=["src"],j={key:0,class:"special-train"},A={class:"din",style:{"font-size":"28px"}},H={style:{"font-size":"16px"}},I={class:"special-box"},G={class:"title simli"},J=["src"],Q=["src"],W={class:"list"},Y=["src"],K={key:1,class:"pdf-preview"},O={class:"tab"},Z=["onClick"],ss={key:0,class:"loading"},es={key:2,class:"zsrx"},ts={class:"zsrx-box"},ns={class:"zsrx-title"},os=["src"],as=["src"],is=["src"],cs=P({__name:"info",setup(ls){const l=N().params.type,g=k({company:[],count:[]}),t=k({active:0,isLoading:!0,page:1,pageCount:0,pdfUrl:"",height:700}),h={sc:[{label:"装备制造",id:5},{label:"生物医药",id:6}],zs:[{img:"h5/zsrc-icon.png",value:["汉寿县人民政府","策划：楚林集团"]},{img:"h5/zsrc-icon.png",value:["汉寿县自然资源局","***：***********"]},{value:["楚林集团","梅宁:1989119917"]}]},_=()=>{const o=window.innerWidth;console.log(),o<=375?t.height=580:o<430?t.height=700:t.height=800},v=o=>{t.active!==o.id&&(t.active=o.id,t.pdfUrl=window.data.base[o.id].pdfUrl,t.isLoading=!0,t.page=1,t.pageCount=0)};let y;const C=o=>{y=o.touches[0].clientX},L=o=>{const s=o.changedTouches[0].clientX-y;s<-30?w("next"):s>30&&w("last")},w=o=>{if(o==="last"){if(t.page<=1)return;t.page--}else{if(t.page>=t.pageCount)return;t.page++}},D=({numPages:o})=>{t.pageCount=o},E=()=>{t.isLoading=!1};return T(()=>{l==="sc"?v(h[l][0]):l==="yqzl"&&(g.company=window.data.special.company,g.count=window.data.special.h5Count),_(),window.addEventListener("resize",_)}),U(()=>{window.removeEventListener("resize",_)}),(o,a)=>(c(),i("div",M,[n("img",{class:"back",onClick:a[0]||(a[0]=(...s)=>e(z)&&e(z)(...s)),src:e(r)("h5/back.png")},null,8,$),e(l)==="yqzl"?(c(),i("div",j,[n("div",{class:"special-count",onClick:a[2]||(a[2]=s=>e(x)("h5/mainMap","park/找地块"))},[(c(!0),i(d,null,u(e(g).count,s=>(c(),i("div",{onClick:a[1]||(a[1]=R(()=>{},["stop"])),class:"flex flex-col justify-center items-center",key:s},[n("span",A,p(s.value),1),n("span",H,p(s.label),1)]))),128))]),n("div",I,[n("div",G,[n("img",{src:e(r)("h5/yqzl-icon.png")},null,8,J),a[4]||(a[4]=m(" 入园企业 ")),n("img",{src:e(r)("h5/yqzl-icon.png")},null,8,Q)]),n("div",W,[(c(!0),i(d,null,u(e(g).company,s=>(c(),i("div",{key:s,class:"item"},[n("img",{src:e(r)("com/special-train-org-icon.png")},null,8,Y),m(" "+p(s),1)]))),128))])])])):e(l)==="sc"?(c(),i("div",K,[n("div",O,[(c(!0),i(d,null,u(h[e(l)],s=>(c(),i("span",{class:b({active:e(t).active===s.id}),onClick:f=>v(s),key:s},p(s.label),11,Z))),128))]),e(t).isLoading?(c(),i("p",ss,"pdf加载中...")):V("",!0),n("div",{class:"box flex justify-between",onTouchstart:C,onTouchend:L},[X(e(B),{height:e(t).height,source:e(S)(e(t).pdfUrl),page:e(t).page,onLoaded:D,onRendered:E},null,8,["height","source","page"])],32)])):(c(),i("div",es,[a[6]||(a[6]=n("img",{class:"zsrx-logo",src:F},null,-1)),n("div",ts,[n("div",ns,[n("img",{src:e(r)("com/contact-icon.png")},null,8,os),a[5]||(a[5]=m("招商热线"))]),(c(!0),i(d,null,u(h[e(l)],s=>(c(),i("div",{class:"zsrx-main simli",key:s},[n("img",{class:b([s!=null&&s.img?"":"opacity-0"]),src:e(r)(s.img)},null,10,as),n("div",null,[(c(!0),i(d,null,u(s.value,f=>(c(),i("p",{key:f},p(f),1))),128))])]))),128))]),n("img",{onClick:a[3]||(a[3]=s=>e(x)("h5/webView","https://www.hanshou.gov.cn/",!0)),class:"zfwz",src:e(r)("com/icon-zfwz.png")},null,8,is)]))]))}});const gs=q(cs,[["__scopeId","data-v-ff5f0bca"]]);export{gs as default};
