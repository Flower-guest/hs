import{d as L,r as V,D as C,o as I,h as i,m as t,u as s,L as m,M as h,J as S,F as l,I as d,y as B,q as y,f as o,V as f,H as r,R as _,A as p,k as z,p as D,_ as E}from"./index-5d65f175.js";import{S as H,a as N}from"./index-62228310.js";const P={class:"bg"},q=["src"],A={class:"video"},F={class:"w-full h-full"},M=["src"],R=["src"],T=["src"],j=["src"],J={class:"box"},Q={class:"title simli"},Y=["src"],$=["src"],G={class:"tag"},K={class:"tab"},O=["onClick"],U={class:"main"},W=["src"],X={class:"flex flex-col simli swipe-tag"},Z=L({__name:"walkInHS",setup(ee){const u=[{label:"交通区位",id:2},{label:"优势产业",id:3},{label:"文旅资源",id:4}],v=V(),e=C({video:"",tag:[],playVideo:!1,active:0,imgList:[],concent:[],tagList:[]}),w=()=>{e.playVideo=!0,v.value.play()},g=n=>{n.id!==e.active&&(e.active=n.id,e.imgList=window.data.base[n.id].img,e.concent=window.data.base[n.id].tag,e.tagList=e.concent[0])},b=n=>{e.tagList=e.concent[n]};return I(()=>{e.video=window.data.base[1].video,e.tag=window.data.base[1].tag[0],g(u[0])}),(n,c)=>{const k=N,x=H;return o(),i("div",P,[t("img",{class:"back",onClick:c[0]||(c[0]=(...a)=>s(f)&&s(f)(...a)),src:s(r)("h5/back.png")},null,8,q),t("div",A,[m(t("div",F,[t("img",{onClick:w,class:"play",src:s(r)("h5/play.png")},null,8,M),t("img",{src:s(_)(s(e).video)+"?vframe/jpg/offset/1"},null,8,R)],512),[[h,!s(e).playVideo]]),m(t("video",{ref_key:"videoElement",ref:v,controls:"",controlslist:"nodownload noremoteplayback noplaybackrate",disablePictureInPicture:"true",disableRemotePlayback:"true"},[t("source",{src:s(_)(s(e).video),type:"video/webm"},null,8,T),t("source",{src:s(_)(s(e).video),type:"video/mp4"},null,8,j)],512),[[h,s(e).playVideo]])]),t("div",J,[t("div",Q,[t("img",{src:s(r)("h5/yqzl-icon.png")},null,8,Y),c[1]||(c[1]=S(" 常德汉寿县 ")),t("img",{src:s(r)("h5/yqzl-icon.png")},null,8,$)]),t("div",G,[(o(!0),i(l,null,d(s(e).tag,a=>(o(),i("span",{class:"tag-item",key:a},p(a),1))),128))]),t("div",K,[(o(),i(l,null,d(u,a=>t("span",{class:z({active:s(e).active===a.id}),onClick:se=>g(a),key:a.id},p(a.label),11,O)),64))]),t("div",U,[B(x,{class:"my-swipe","lazy-render":"",autoplay:3e3,"indicator-color":"#65BBE0",onChange:b},{default:y(()=>[(o(!0),i(l,null,d(s(e).imgList,a=>(o(),D(k,{key:a},{default:y(()=>[t("img",{class:"w-full h-full",src:s(_)(a)},null,8,W)]),_:2},1024))),128))]),_:1}),t("div",X,[(o(!0),i(l,null,d(s(e).tagList,a=>(o(),i("span",{key:a},"“"+p(a)+"”",1))),128))])])])])}}});const oe=E(Z,[["__scopeId","data-v-9f31e353"]]);export{oe as default};
