import{k as E,r as f,d as h,a as l,c as n,e,t as a,F as I,A as S,M as p,s as u,q as v,N as D,p as g,b as x,C as b,_ as O}from"./index.0e2979b8.js";import{s as _}from"./Map.ab519bd1.js";const y=E("disposaled",()=>{const o=f([{number:"P0022225OT5TG",level:2,sign:[0,1,2,3,4],type:1,address:"Calle : Calle Arquitecto Augusto Hern\xE1ndez \xC1lvarez Ote#s/n / #123E",minAddress:"Colonia: HACIENDA DE SAN FRANCISCO (HACIENDA DE LAS TORRES)",title:"ALTA",desc:"AFECTACION DE LOS SERVICIOSD\u2026"},{number:"P00111145OT5TG",level:2,sign:[0,1,2,3,4],type:1,address:"Calle : Calle Arquitecto Augusto Hern\xE1ndez \xC1lvarez Ote#s/n / #123E",minAddress:"Colonia: HACIENDA DE SAN FRANCISCO (HACIENDA DE LAS TORRES)",title:"ALTA",desc:"AFECTACION DE LOS SERVICIOSD\u2026"},{number:"P0033335OT5TG",level:2,sign:[0,1,2,3,4],type:1,address:"Calle : Calle Arquitecto Augusto Hern\xE1ndez \xC1lvarez Ote#s/n / #123E",minAddress:"Colonia: HACIENDA DE SAN FRANCISCO (HACIENDA DE LAS TORRES)",title:"ALTA",desc:"AFECTACION DE LOS SERVICIOSD\u2026"}]);return{pendingList:o,push:i=>{o.value.length>=0&&o.value.push(i)},replace:i=>{o.value=i},pop:()=>o.value.pop()}}),t=o=>(g("data-v-86a24360"),o=o(),x(),o),N={class:"left-header"},T=t(()=>e("i",{style:{color:"#FFBD2E",border:"1px solid #4277EB","border-radius":"50%"},class:"iconfont iconlevel3"},null,-1)),B={class:"right-header"},F=t(()=>e("label",null,"|",-1)),R=[F],L={class:"section-top"},z=t(()=>e("i",{style:{color:"#4277EB"},class:"iconfont iconfire"},null,-1)),H={class:"name"},k={class:"title"},P={class:"desc"},V={class:"section-bottom"},q=t(()=>e("i",{style:{color:"#4277EB","font-size":"22px"},class:"iconfont iconlacation"},null,-1)),w={class:"area"},G={class:"area-top"},j={class:"top-desc"},M={class:"area-bottom"},U={class:"bottom-desc"},J={key:0},K=t(()=>e("div",{class:"footer-left"},[e("i",{style:{color:"#4277EB"},class:"iconfont iconComplete_time"}),e("label",null,"2019-10-26 10:25:55")],-1)),Q=t(()=>e("div",{class:"footer-right"},[e("i",{style:{color:"#4277EB"},class:"iconfont iconNext_time"}),b(),e("label",null,"2019-10-26 10:25:55")],-1)),W=[K,Q],X={key:1},Y=h({__name:"DisposedBox",props:{disposedBoxProps:{type:Object,default:{backgroundColor:"#203359",border:!1,completed:!1}},alarmInfo:{type:Object,default:{number:"P0081245OT5TG",level:2,sign:[0,1,2,3,4],type:1,address:"Calle : Calle Arquitecto Augusto Hern\xE1ndez \xC1lvarez Ote#s/n / #123E",minAddress:"Colonia: HACIENDA DE SAN FRANCISCO (HACIENDA DE LAS TORRES)",title:"ALTA",desc:"AFECTACION DE LOS SERVICIOSD\u2026"}}},emits:["closeBox"],setup(o,{emit:d}){const s=o,{pendingList:A,pop:i,push:m,replace:Z}=y(),C=()=>{d("closeBox"),D("\u5904\u7F6E\u6210\u529F");let r={number:s.alarmInfo.number,level:s.alarmInfo.level,sign:s.alarmInfo.sign,type:s.alarmInfo.type,address:s.alarmInfo.address,minAddress:s.alarmInfo.minAddress,title:s.alarmInfo.title,desc:s.alarmInfo.desc};m(r)};return(r,$)=>(l(),n("div",{class:"container",style:p({background:s.disposedBoxProps.backgroundColor,borderTopLeftRadius:s.disposedBoxProps.border?"10px":"null",borderTopRightRadius:s.disposedBoxProps.border?"10px":"null"})},[e("header",null,[e("div",N,[T,e("span",null,a(s.alarmInfo.number),1)]),e("div",B,[(l(!0),n(I,null,S(s.alarmInfo.sign,c=>(l(),n("i",{key:"item",style:p({color:u(_)[c].color}),class:v("iconfont "+u(_)[c].icon)},R,6))),128))])]),e("section",null,[e("div",L,[z,e("div",H,[e("div",k,a(s.alarmInfo.title),1),e("div",P,a(s.alarmInfo.desc),1)])]),e("div",V,[q,e("div",w,[e("div",G,[e("div",j,a(s.alarmInfo.address),1)]),e("div",M,[e("div",U,a(s.alarmInfo.minAddress),1)])])])]),s.disposedBoxProps.completed?(l(),n("footer",J,W)):(l(),n("footer",X,[e("button",{onClick:C,style:{width:"100%",height:"100%",background:"linear-gradient(90deg, #0FA2E3 0%, #006DFF 100%)","border-radius":"2px",border:"none","font-family":"SFUIDisplay-Regular","font-size":"13px",color:"#FBFBFB","text-align":"center","line-height":"18px","font-weight":"400"}},"complete")]))],4))}});const oe=O(Y,[["__scopeId","data-v-86a24360"]]);export{oe as D,y as u};
