import{d as R,r as b,D as k,H as d,c as z,o as F,h as l,m as t,y as u,u as s,q as E,F as m,I as g,A as a,K as H,P as O,f as i,V as K,p as L,B as M,R as Q,J as W,_ as Y}from"./index-09662e76.js";import{a as G,_ as X}from"./PCWebView-267b0e1e.js";import{q as Z,T as tt}from"./topInfo-051176e1.js";import{E as st}from"./el-popper-26f4cf0e.js";import{S as et}from"./swiper-e07ee265.js";import{_ as ot}from"./qrCode.vue_vue_type_script_setup_true_lang-0ad12f77.js";import"./index-c2e46c99.js";const nt={class:"bg"},it={class:"detail pt-77px pr-82px pl-32px"},lt={class:"flex justify-between"},pt=["src"],at={class:"info w-414px h-733px mt-32px pt-30px pr-14px pl-19px"},ct={class:"info-title w-260px text-24px left-60px ellipsi1 ysbth"},dt={class:"animation top-12px right-8px"},xt={class:"title text-20px mt-16px ysbth"},rt=["src"],_t={class:"pl-5px grid grid-cols-2"},ut=["src"],mt={class:"grid"},ht={class:"text-26px din count-to text-#405D80"},gt={key:0,class:"pfjzht text-24px"},wt={class:"text-15px"},ft={class:"text-[#7D95B3] text-16px"},vt={class:"detail-list max-h-240px px-32px py-13px mt-21px rounded-8px"},yt=["src"],bt={class:"text-16px text-#405D80 line-height-24px"},kt={class:"detail-list max-h-240px px-32px py-13px mt-21px rounded-8px"},Ct=["src"],Dt={class:"text-16px text-#405D80 line-height-24px"},$t={class:"mt-40px"},Nt={class:"flex justify-between mb-18px"},St={class:"contrast-state w-128px h-40px leading-40px text-26px rounded-tl-16px rounded-br-16px"},qt={class:"contact w-260px h-290px rounded-16px border-1px"},Bt=["src"],Tt={class:"detail-iframe w-1356px h-474px rounded-16px"},Vt=["src"],It=["src"],Ut={class:"detail-status mt-75px w-1822px h-22px px-43px"},jt=["src"],zt={key:0,class:"pt-98px pl-52px"},Et={class:"text-#405D80 text-48px flex items-center mb-99px"},Pt=["src"],At=["src"],Jt={class:"text-#405D80 simli text-48px leading-60px"},Rt={class:"text-bg"},Ft={class:"text-48px simli"},Ht={class:"text-40px fzchsjt"},Ot=["src"],Kt=R({__name:"detail",setup(Lt){const C=O().params,D=C.type,w=C.id,$=b(),n=b(),_=k({list:[],idx:null}),N=k({text:"",logo:d("pc/code-logo.png")}),p=k({show:!1,width:700,height:724,title:"",type:"",imgUrl:""}),f=b(!1),S=z(()=>w==="23"||w==="22"?"项目详情":"地块概况"),P=z(()=>c=>{if(c===_.idx)return{height:`${112/192}rem`,marginTop:`${-48/192}rem`}});F(()=>{var o;n.value=window.data.marker[D].find(x=>x.id==w),$.value=window.data.base.detailCount.map(x=>{var v;return{...x,content:((v=n.value)==null?void 0:v[x.props])??""}});const c=JSON.parse(JSON.stringify(window.data.base.detailStatus));(o=n.value)!=null&&o.status&&(_.idx=c.findIndex(x=>x.includes(n.value.status)),c[_.idx]=`detail_status/${n.value.status}-a.png`),_.list=c,N.text=window.location.href.split("#")[0]+`#/h5/detail/${D}/${w}/${n.value.name}详情`});const q=(c,o="")=>{switch(p.show=!0,p.type=c,c){case"contact":p.title="联系我们";break;case"qrCode":p.title="二维码",p.imgUrl=o;break}};return(c,o)=>{var B,T,V,I,U,j;const x=st,v=X,A=Z,J=G;return i(),l(m,null,[t("div",nt,[u(tt),t("div",it,[t("div",lt,[t("div",null,[t("img",{onClick:o[0]||(o[0]=e=>s(K)()),class:"w-132px h-56px",src:s(d)("pc/icon-go-back.png")},null,8,pt),t("div",at,[u(x,{class:"w-300px",effect:"dark",content:(B=s(n))==null?void 0:B.name,placement:"top"},{default:E(()=>{var e;return[t("div",ct,a((e=s(n))==null?void 0:e.name),1)]}),_:1},8,["content"]),t("div",dt,[(i(),l(m,null,g(2,e=>t("div",{key:e,class:"ling w-12px h-12px mr-5px"})),64))]),t("div",xt,[t("span",null,a(s(S)),1),t("img",{class:"line",src:s(d)("pc/special-train-line.png")},null,8,rt)]),t("div",_t,[(i(!0),l(m,null,g(s($),e=>(i(),l("div",{key:e.content,class:"mt-24px flex items-end"},[t("img",{loading:"lazy",class:"w-64px h-64px mr-12px",src:s(d)(e.img),alt:"img"},null,8,ut),t("div",mt,[t("div",ht,[isNaN(Number(e.content))?(i(),l("span",gt,a(e.content),1)):(i(),L(v,{key:1,end:Number(e.content),autoPlay:!0,duration:3e3},null,8,["end"])),t("span",wt," "+a(e.unit),1)]),t("span",ft,a(e.title),1)])]))),128))]),t("div",vt,[t("img",{class:"w-12px h-12px mr-8px",src:s(d)("pc/detail-icon.png")},null,8,yt),t("span",bt,a(s(S))+"："+a((T=s(n))==null?void 0:T.info),1)]),t("div",kt,[t("img",{class:"w-12px h-12px mr-8px",src:s(d)("pc/detail-icon.png")},null,8,Ct),t("span",Dt,"周边概况："+a((V=s(n))==null?void 0:V.overview),1)])])]),t("div",$t,[t("div",Nt,[(i(!0),l(m,null,g((I=s(n))==null?void 0:I.imgStatus,(e,r)=>{var y,h;return i(),l("div",{class:"contrast w-532px h-290px rounded-tl-16px",key:e},[t("div",St,a(e),1),u(et,{"border-radius":0,height:290,list:(h=(y=s(n))==null?void 0:y.img)==null?void 0:h[r]},null,8,["list"])])}),128)),t("div",qt,[u(ot,{"qr-code":s(N),class:"w-200px h-200px mx-30px mt-19px mb-15px",onHandel:o[1]||(o[1]=e=>q("qrCode",e))},null,8,["qr-code"]),t("div",{onClick:o[2]||(o[2]=e=>q("contact")),class:"w-full h-56px box-border bg-#8AB0E3 pl-15px py-9px"},[t("img",{class:"contact-icon w-228px h-38px",src:s(d)("pc/detail-contact.png")},null,8,Bt)])])]),t("div",Tt,[t("img",{class:"bottom-120px right-16px w-44px h-44px",onClick:o[3]||(o[3]=e=>f.value=!0),src:s(d)("pc/tool-qp1.png")},null,8,Vt),t("iframe",{class:"w-full h-full",src:(U=s(n))==null?void 0:U.link},null,8,It)])])]),t("div",Ut,[(i(!0),l(m,null,g(s(_).list,(e,r)=>(i(),l("img",{class:"w-112px h-40px mt-[-10px]",key:e,style:M(s(P)(r)),src:s(Q)(e)},null,12,jt))),128))])]),u(A,{width:s(p).width,height:s(p).height,title:s(p).title,show:s(p).show,"onUpdate:show":o[4]||(o[4]=e=>s(p).show=e)},{dialogContent:E(()=>{var e;return[s(p).type==="contact"?(i(),l("div",zt,[t("div",Et,[t("img",{class:"w-28px h-48px mr-17px",src:s(d)("com/contact-icon.png")},null,8,Pt),o[6]||(o[6]=W("联系我们 "))]),(i(!0),l(m,null,g((e=s(n))==null?void 0:e.contacts,(r,y)=>{var h;return i(),l("div",{class:"flex items-start mb-54px",key:r},[t("img",{class:"w-41px h-57px mt-10px mr-16px",src:s(d)("pc/contact-icon1.png")},null,8,At),t("div",Jt,[t("p",Rt,a((h=s(n))==null?void 0:h.unit[y]),1),t("p",null,[t("span",Ft,a(r.split(":")[0]+":"),1),t("span",Ht,a(r.split(":")[1]),1)])])])}),128))])):(i(),l("img",{key:1,class:"dialog-img",src:s(p).imgUrl},null,8,Ot))]}),_:1},8,["width","height","title","show"])]),u(J,{"page-url":(j=s(n))==null?void 0:j.link,show:s(f),"onUpdate:show":o[5]||(o[5]=e=>H(f)?f.value=e:null)},null,8,["page-url","show"])],64)}}});const ss=Y(Kt,[["__scopeId","data-v-ce8fac4e"]]);export{ss as default};
