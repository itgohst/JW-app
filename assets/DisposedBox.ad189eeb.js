import{d as _,o as n,c,a as o,t as i,F as p,z as u,J as a,q as d,n as h,p as f,i as m,K as x,_ as b}from"./index.a4e59f8d.js";const r=[{icon:"iconic_ps_undone",color:"#4277EB"},{icon:"iconic_ps_major",color:"#F94837"},{icon:"iconic_ps_orange",color:"#FF7814"},{icon:"iconic_ps_exercise",color:"#2FD25D"},{icon:"iconic_ps_anonymous",color:"#7C85A2"}],e=t=>(f("data-v-4299c0e0"),t=t(),m(),t),g={class:"left-header"},v=e(()=>o("i",{style:{color:"#FFBD2E",border:"1px solid #4277EB","border-radius":"50%"},class:"iconfont iconlevel3"},null,-1)),y={class:"right-header"},B=e(()=>o("label",null,"|",-1)),E=[B],I={class:"section-top"},A=e(()=>o("i",{style:{color:"#4277EB"},class:"iconfont iconfire"},null,-1)),C={class:"name"},F={class:"title"},D={class:"desc"},S={class:"section-bottom"},k=e(()=>o("i",{style:{color:"#4277EB","font-size":"22px"},class:"iconfont iconlacation"},null,-1)),O={class:"area"},N={class:"area-top"},R={class:"top-desc"},T={class:"area-bottom"},z={class:"bottom-desc"},P={key:0},L=e(()=>o("div",{class:"footer-left"},[o("i",{style:{color:"#4277EB"},class:"iconfont iconComplete_time"}),o("label",null,"2019-10-26 10:25:55")],-1)),j=e(()=>o("div",{class:"footer-right"},[o("i",{style:{color:"#4277EB"},class:"iconfont iconNext_time"}),x(),o("label",null,"2019-10-26 10:25:55")],-1)),w=[L,j],H={key:1},V=e(()=>o("button",{style:{width:"100%",height:"100%",background:"linear-gradient(90deg, #0FA2E3 0%, #006DFF 100%)","border-radius":"2px",border:"none","font-family":"SFUIDisplay-Regular","font-size":"13px",color:"#FBFBFB","text-align":"center","line-height":"18px","font-weight":"400"}},"complete",-1)),q=[V],G=_({__name:"DisposedBox",props:{disposedBoxProps:{type:Object,default:{backgroundColor:"#203359",border:!1,completed:!1}},alarmInfo:{type:Object,default:{number:"P0081245OT5TG",level:2,sign:[0,1,2,3,4],type:1,address:"Calle : Calle Arquitecto Augusto Hern\xE1ndez \xC1lvarez Ote#s/n / #123E",minAddress:"Colonia: HACIENDA DE SAN FRANCISCO (HACIENDA DE LAS TORRES)",title:"ALTA",desc:"AFECTACION DE LOS SERVICIOSD\u2026"}}},setup(t){const s=t;return(J,K)=>(n(),c("div",{class:"container",style:a({background:s.disposedBoxProps.backgroundColor,borderTopLeftRadius:s.disposedBoxProps.border?"10px":"null",borderTopRightRadius:s.disposedBoxProps.border?"10px":"null"})},[o("header",null,[o("div",g,[v,o("span",null,i(s.alarmInfo.number),1)]),o("div",y,[(n(!0),c(p,null,u(s.alarmInfo.sign,l=>(n(),c("i",{key:"item",style:a({color:d(r)[l].color}),class:h("iconfont "+d(r)[l].icon)},E,6))),128))])]),o("section",null,[o("div",I,[A,o("div",C,[o("div",F,i(s.alarmInfo.title),1),o("div",D,i(s.alarmInfo.desc),1)])]),o("div",S,[k,o("div",O,[o("div",N,[o("div",R,i(s.alarmInfo.address),1)]),o("div",T,[o("div",z,i(s.alarmInfo.minAddress),1)])])])]),s.disposedBoxProps.completed?(n(),c("footer",P,w)):(n(),c("footer",H,q))],4))}});const U=b(G,[["__scopeId","data-v-4299c0e0"]]);export{U as D};
