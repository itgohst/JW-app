/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{d as w,r as d,m as I,D as C,c,e,C as u,t as o,F as P,A as x,g as B,x as S,a as p,p as D,b as V,u as b,_ as k}from"./index.0d6abaaf.js";import{s as y}from"./function-call.7cad0288.js";const T=""+new URL("avatar.07957502.png",import.meta.url).href,_=s=>(D("data-v-331e13a9"),s=s(),V(),s),$={class:"personal-center"},M={class:"personal-info"},U=_(()=>e("i",{class:"iconfont iconUnfold"},null,-1)),F={class:"basic-info"},N=_(()=>e("p",{class:"avatar"},[e("img",{src:T})],-1)),j={class:"user-name"},L={class:"user-role"},O={class:"extension-info"},R=_(()=>e("i",{class:"iconfont iconUnfold"},null,-1)),z=w({__name:"PersonalView",emits:["show"],setup(s,{emit:f}){const a=d({name:"Mohsen Salehi",role:"Police officer",extensionInfo:[{title:"department",value:"First Police Station"},{title:"gender",value:"Male"},{title:"ID",value:"Be23243435432423435435IX"},{title:"phone",value:"18772324322"},{title:"Mail",value:"44series3434@gamil.com"},{title:"Description",value:"This is a description of the police officer"}]}),{t:l}=I(),m=b(),h=()=>{f("show",!1)},v=()=>{y({message:l("logoutConfirm"),showCancelButton:!0,showConfirmButton:!0,confirmButtonText:l("confirm"),cancelButtonText:l("cancel")}).then(()=>{m.push({name:"login"})})},i=d(!1);return(r,n)=>{const g=C;return p(),c("div",$,[e("article",M,[e("h1",{onClick:h},[U,u(" "+o(r.$t("personalInfo")),1)]),e("section",F,[N,e("p",j,o(a.value.name),1),e("p",L,o(a.value.role),1)])]),e("article",O,[(p(!0),c(P,null,x(a.value.extensionInfo,t=>(p(),c("div",{class:"info-item",key:t.title},[e("label",null,o(t.title),1),e("div",null,o(t.value),1)]))),128)),e("p",{class:"change-pwd",onClick:n[0]||(n[0]=t=>i.value=!0)},[u(o(r.$t("changePwd"))+" ",1),R]),e("p",{class:"logout",onClick:v},o(r.$t("logout")),1)]),B(g,{show:i.value,"onUpdate:show":n[1]||(n[1]=t=>i.value=t)},{default:S(()=>[u(" 123 ")]),_:1},8,["show"])])}}});const A=k(z,[["__scopeId","data-v-331e13a9"]]),K=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{A as P,T as _,K as a};
