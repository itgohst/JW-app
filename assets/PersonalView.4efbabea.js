/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{s as g,_ as w}from"./avatar.dbe13b5f.js";import{d as I,r as f,l as x,W as C,c as r,a as e,K as u,t as o,F as B,z as P,e as k,x as D,o as p,p as S,i as V,u as b,_ as y}from"./index.a4e59f8d.js";const d=t=>(S("data-v-a3b1653d"),t=t(),V(),t),T={class:"personal-center"},$={class:"personal-info"},F=d(()=>e("i",{class:"iconfont iconUnfold"},null,-1)),M={class:"basic-info"},N=d(()=>e("p",{class:"avatar"},[e("img",{src:w})],-1)),U={class:"user-name"},z={class:"user-role"},E={class:"extension-info"},H=d(()=>e("i",{class:"iconfont iconUnfold"},null,-1)),K=I({__name:"PersonalView",setup(t){const a=f({name:"Mohsen Salehi",role:"Police officer",extensionInfo:[{title:"department",value:"First Police Station"},{title:"gender",value:"Male"},{title:"ID",value:"Be23243435432423435435IX"},{title:"phone",value:"18772324322"},{title:"Mail",value:"44series3434@gamil.com"},{title:"Description",value:"This is a description of the police officer"}]}),{t:l}=x(),_=b(),m=()=>{_.push({name:"home"})},h=()=>{g({message:l("logoutConfirm"),showCancelButton:!0,showConfirmButton:!0,confirmButtonText:l("confirm"),cancelButtonText:l("cancel")}).then(()=>{_.push({name:"login"})})},i=f(!1);return(c,n)=>{const v=C;return p(),r("div",T,[e("article",$,[e("h1",{onClick:m},[F,u(" "+o(c.$t("personalInfo")),1)]),e("section",M,[N,e("p",U,o(a.value.name),1),e("p",z,o(a.value.role),1)])]),e("article",E,[(p(!0),r(B,null,P(a.value.extensionInfo,s=>(p(),r("div",{class:"info-item",key:s.title},[e("label",null,o(s.title),1),e("div",null,o(s.value),1)]))),128)),e("p",{class:"change-pwd",onClick:n[0]||(n[0]=s=>i.value=!0)},[u(o(c.$t("changePwd"))+" ",1),H]),e("p",{class:"logout",onClick:h},o(c.$t("logout")),1)]),k(v,{show:i.value,"onUpdate:show":n[1]||(n[1]=s=>i.value=s)},{default:D(()=>[u(" 123 ")]),_:1},8,["show"])])}}});const A=y(K,[["__scopeId","data-v-a3b1653d"]]);export{A as default};
