/* empty css              */import{d as I,r as l,I as D,c as f,a as e,w as r,v as S,b as F,e as p,f as b,g as P,h as g,s as V,o as v,p as L,i as N,u as U,_ as E}from"./index.156f14df.js";const n=c=>(L("data-v-97e01432"),c=c(),N(),c),A={class:"bg"},M=n(()=>e("div",{class:"logo"},null,-1)),R={class:"center"},T={class:"form"},G={class:"form-item"},O=n(()=>e("div",{class:"desc"},"Account",-1)),j=n(()=>e("div",{class:"line"},null,-1)),q={class:"error"},z={class:"form-item"},H=n(()=>e("div",{class:"desc"},"Password",-1)),J=["type"],K=n(()=>e("div",{class:"line"},null,-1)),Q={key:0,class:"error"},W={class:"error"},X=I({__name:"Login",setup(c){const s=l("admin"),o=l("123"),d=l(!1),a=l("password"),t=l(!1),k=U(),w=()=>{o.value=="123"&&s.value=="admin"?(k.push("/home"),V("\u767B\u5F55\u6210\u529F")):(d.value=!0,t.value=!1)},B=()=>{s.value="",d.value=!1},C=()=>{o.value="",d.value=!1,t.value=!0},y=h=>{h.target.value.trim()==""&&(t.value=!0)},m=()=>{a.value=="text"?a.value="password":a.value="text"},x=()=>{s.value="",o.value="",t.value=!0};return(h,i)=>{const u=D;return v(),f("div",A,[M,e("div",R,[e("div",T,[e("div",G,[O,r(e("input",{placeholder:"\u8BF7\u8F93\u5165\u8D26\u6237",onFocus:B,"onUpdate:modelValue":i[0]||(i[0]=_=>s.value=_),type:"text"},null,544),[[S,s.value]]),j,r(e("div",q,"\u8BF7\u8F93\u5165\u7528\u6237\u540D",512),[[F,s.value===""]]),p(u,{class:"lock",name:"lock"}),p(u,{name:"cross",onClick:x})]),e("div",z,[H,r(e("input",{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onFocus:C,"onUpdate:modelValue":i[1]||(i[1]=_=>o.value=_),type:a.value,onInput:y},null,40,J),[[b,o.value]]),K,o.value===""&&t.value==!0?(v(),f("div",Q,"\u8BF7\u8F93\u5165\u5BC6\u7801")):P("",!0),r(e("div",W,"\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E0D\u7B26\u5408",512),[[F,d.value]]),p(u,{name:"manager"}),a.value==="password"?(v(),g(u,{key:1,onClick:m,class:"closed",name:"closed-eye"})):(v(),g(u,{key:2,onClick:m,name:"browsing-history"}))]),e("button",{onClick:w},"LOGIN")])])])}}});const $=E(X,[["__scopeId","data-v-97e01432"]]);export{$ as default};
