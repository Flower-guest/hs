import{d as j,r as h,c as z,o as A,h as r,m as s,u as n,y as q,q as k,F as m,I as v,A as l,J as B,P as D,f as i,V as S,H as d,p as E,R as F,k as L,E as R,_ as $}from"./index-426c09d7.js";import{_ as H}from"./ContactButton-92c7dd10.js";import{S as J,a as M}from"./index-f78b67b2.js";const Q=["src"],T={class:"top"},Y=["src"],G={class:"custom-indicator"},K={class:"btn"},O=["onClick"],U={class:"main"},W={class:"main-top flex items-start justify-between"},X={class:"name"},Z={class:"flex"},ss=["src"],ts={class:"park"},ns={class:"title simli"},es=["src"],os=["src"],ls={class:"count"},as={class:"project"},is={class:"title simli"},cs=["src"],rs=["src"],ds={class:"list"},us=j({__name:"detail",setup(_s){const y=D().params,V=y.type,g=y.id,f=h(0),a=h(),u=h(),N=z(()=>{var c,e,_,p;return[(e=(c=u.value)==null?void 0:c[0])==null?void 0:e.content,(p=(_=u.value)==null?void 0:_[3])==null?void 0:p.content]}),I=z(()=>g==="23"||g==="22"?"项目详情":"地块概况");return A(()=>{a.value=window.data.marker[V].find(c=>c.id==g),u.value=window.data.base.detailCount.map(c=>{var e;return{...c,content:((e=a.value)==null?void 0:e[c.props])??""}})}),(c,e)=>{var w,C,b,x;const _=M,p=J,P=H;return i(),r("div",null,[s("img",{class:"back",onClick:e[0]||(e[0]=(...t)=>n(S)&&n(S)(...t)),src:n(d)("h5/back.png")},null,8,Q),s("div",T,[q(p,{class:"w-full h-full"},{indicator:k(({active:t,total:o})=>[s("div",G,l(t+1)+"/"+l(o),1)]),default:k(()=>{var t;return[(i(!0),r(m,null,v((t=n(a))==null?void 0:t.img[n(f)],o=>(i(),E(_,{key:o},{default:k(()=>[s("img",{class:"w-full h-full",src:n(F)(o),"lazy-load":""},null,8,Y)]),_:2},1024))),128))]}),_:1}),s("div",K,[(i(!0),r(m,null,v((w=n(a))==null?void 0:w.imgStatus,(t,o)=>(i(),r("span",{key:t,onClick:ms=>f.value=o,class:L({"span-active":n(f)===o})},l(t),11,O))),128))])]),s("div",U,[s("div",W,[s("div",null,[s("div",X,l((C=n(a))==null?void 0:C.name),1),s("div",Z,[(i(!0),r(m,null,v(n(N),t=>(i(),r("span",{key:t,class:"tag"},l(t),1))),128))])]),s("img",{class:"vr",onClick:e[1]||(e[1]=t=>{var o;return n(R)("h5/webView",(o=n(a))==null?void 0:o.link,!0)}),src:n(d)("h5/icon-vr.png")},null,8,ss)]),e[4]||(e[4]=s("div",{class:"line"},null,-1)),s("div",ts,[s("div",ns,[s("img",{src:n(d)("h5/yqzl-icon.png")},null,8,es),e[2]||(e[2]=B(" 地块概况 ")),s("img",{src:n(d)("h5/yqzl-icon.png")},null,8,os)]),s("div",ls,[(i(!0),r(m,null,v(n(u),t=>(i(),r("span",{key:t},l(t==null?void 0:t.title)+":"+l((t==null?void 0:t.content)+(t==null?void 0:t.unit)),1))),128))])]),e[5]||(e[5]=s("div",{class:"line-24"},null,-1)),s("div",as,[s("div",is,[s("img",{src:n(d)("h5/yqzl-icon.png")},null,8,cs),e[3]||(e[3]=B(" 项目描述 ")),s("img",{src:n(d)("h5/yqzl-icon.png")},null,8,rs)]),s("div",ds,[s("p",null,"周边概况："+l((b=n(a))==null?void 0:b.overview),1),s("p",null,l(n(I))+"："+l((x=n(a))==null?void 0:x.info),1)])]),e[6]||(e[6]=s("div",{class:"line-24",style:{margin:"4px 0 0"}},null,-1))]),q(P,{info:{...n(a),cla:"contact"}},null,8,["info"])])}}});const hs=$(us,[["__scopeId","data-v-1e563091"]]);export{hs as default};
