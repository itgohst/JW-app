import{k as V,r as p,d as D,l as W,m as y,n as J,c as f,e as a,q as x,t as M,s as S,a as h,_ as k,j,g as r,x as m,w as N,f as P,T as q,P as G,y as U,z as K,F as Q,A as X,B as Y,u as Z,p as ee,b as se}from"./index.0e2979b8.js";/* empty css              *//* empty css              */import{P as oe,_ as te}from"./PersonalView.1c044318.js";import{D as ae}from"./DisposedBox.1b2040a2.js";import{s as ne}from"./function-call.10872d04.js";/* empty css              *//* empty css              */import"./Map.ab519bd1.js";const O=V("disposal",()=>{const e=p([]);return{pendingList:e,push:i=>{e.value.length>=0&&(e.value.splice(0,1),e.value.push(i))},replace:i=>{e.value=i},pop:()=>e.value.pop()}}),le=[0,1,2,3,4],ie=[0,1,2,3,4],re=[0,1,2,3,4],ce=["Se produjo una pelea.","Personas robadas","Se produce un grave accidente de tr\xE1fico","El edificio se incendia","Tr\xE1fico de drogas","Robo de billetera","Tiroteo","Alguien roba un banco"],ue=["Blvrd Rufino Tamayo 369","Dr. Ignacio Ch\xE1vez 216","Blvd. Jesus Valdez Sanchez 365,Sin Nombre de Col 29,25010 Saltillo, Coah.","Rom\xE1n Cepeda 2550","Blvd. Venustiano Carranza 3222","Residencial los Reales","Blvd. Jos\xE9 Mar\xEDa Rodr\xEDguez","Blvd. Jos\xE9 Mar\xEDa Rodr\xEDguez,Residencial los Reales,Saltillo, Coah.","Christus Muguerza"],de=()=>{var e="ABCDEFGHJKMNPQRSTWXYZ012345678",t=e.length,s="";for(let o=0;o<12;o++)s+=e.charAt(Math.floor(Math.random()*t));return"P"+s},C=e=>e[Math.floor(Math.random()*e.length)],pe=e=>{let t=e.slice(0),s=e.length,o=s-Math.floor(Math.random()*e.length),i,u;for(;s-- >o;)u=Math.floor((s+1)*Math.random()),i=t[u],t[u]=t[s],t[s]=i;return t.slice(o)};let w=null;const{push:_e}=O();function z(e){w=setTimeout(()=>{const t={number:de(),level:C(le),sign:pe(ie),type:C(re),discripe:C(ce),address:C(ue)};_e(t),z(Math.floor(Math.random()*5)*1e3)},e)}const me=()=>{z(Math.floor(Math.random()*5)*1e3)},R=()=>{w!=null&&clearTimeout(w)},he={class:"state-box-over"},fe={class:"state-discript"},ve=D({__name:"AppState",props:{state:Boolean},emits:["change"],setup(e,{emit:t}){const s=e,o=p(!1);W(()=>s.state,(c,g)=>{c!==g&&(o.value=c)});const{t:i}=y(),u=()=>{o.value=!o.value,t("change",o.value)},E=J(()=>o.value?i("waitingForAssign"):i("waitingForEnable"));return(c,g)=>(h(),f("div",{class:x(["state-box-out",o.value?"enable":"disabled"])},[a("div",he,[a("div",{class:"state-inside",onClick:u},[a("p",{class:x(["state-text",{visibility:o.value}])},"Disabled state",2),a("p",fe,M(S(E)),1)])])],2))}});const ge=k(ve,[["__scopeId","data-v-c139046b"]]),Ce=D({__name:"PendingCard",props:{alarmInfo:{type:Object,default:{number:"P0081245OT5TG",level:2,sign:[0,1,2,3,4],type:1,address:"Calle : Calle Arquitecto Augusto Hern\xE1ndez \xC1lvarez Ote#s/n / #123E",minAddress:"Colonia: HACIENDA DE SAN FRANCISCO (HACIENDA DE LAS TORRES)",title:"ALTA",desc:"AFECTACION DE LOS SERVICIOSD\u2026"}}},emits:["closeOuterBox"],setup(e,{emit:t}){const s=e,o=()=>{t("closeOuterBox",!1)};return(i,u)=>(h(),j(ae,{disposedBoxProps:{backgroundColor:"linear-gradient(225deg, #0762BB 0%, #132C71 100%)",border:!0},alarmInfo:s.alarmInfo,onCloseBox:o},null,8,["disposedBoxProps","alarmInfo"]))}}),v=e=>(ee("data-v-0181746c"),e=e(),se(),e),Se={class:"main-page"},xe=v(()=>a("img",{src:te},null,-1)),Ee=[xe],Ae=v(()=>a("i",{class:"iconfont iconalarme",style:{"font-size":"24px"}},null,-1)),Ie=v(()=>a("i",{class:"iconfont iconPosition",style:{"font-size":"28px"}},null,-1)),be=v(()=>a("i",{class:"iconfont iconFunctionmenu",style:{"font-size":"28px"}},null,-1)),we=["onClick"],De={class:"icon","aria-hidden":"true",width:60,height:60},Be=["xlink:href"],Te={class:"app-name"},Ne={class:"disposing-card"},Pe=v(()=>a("i",{class:"iconfont iconup"},null,-1)),Re=[Pe],ye=D({__name:"HomeView",setup(e){const t=Z(),{pendingList:s,pop:o,push:i,replace:u}=O(),{t:E}=y(),c=p(!1),g=_=>{t.push({name:_})},A=p(!1),H=()=>{A.value=!0},d=p(!1),I=p(!1),L=_=>{I.value=_,_?me():R()},F=()=>{ne({message:E("reciveNewAlarm")}).then(()=>{R(),d.value=!0,I.value=!1,s[0].minAddress="THIS IS NEW THIS IS NEW Colonia: HACIENDA DE SAN FRANCISCO (HACIENDA DE LAS TORRES)",s[0].sign=[0,1,2,3,4],s[0].title="ALTA",s[0].desc="THIS IS NEW THIS THISAFECTACION DE LOS SERVICIOSD\u2026 THIS IS NEW",console.log("pendingList",s[0])})},B=p(),$=()=>{B.value.getCurrentPosition()};return(_,n)=>{const T=G,b=U;return h(),f("main",Se,[r(K,{ref_key:"map",ref:B},null,512),a("div",{class:"avatar",onClick:n[0]||(n[0]=l=>c.value=!0)},Ee),r(T,{show:c.value,"onUpdate:show":n[2]||(n[2]=l=>c.value=l),position:"left",style:{width:"100%",height:"100%",padding:0,"border-radius":0}},{default:m(()=>[r(oe,{onShow:n[1]||(n[1]=l=>c.value=!1)})]),_:1},8,["show"]),r(b,{class:"message-btn",onClick:F,size:40,dot:S(s).length===1},{default:m(()=>[Ae]),_:1},8,["dot"]),r(b,{class:x(["location-btn",{"move-up":d.value}]),onClick:$},{default:m(()=>[Ie]),_:1},8,["class"]),r(b,{class:x(["func-menu-btn",{"move-up":d.value}]),onClick:H},{default:m(()=>[be]),_:1},8,["class"]),r(T,{show:A.value,"onUpdate:show":n[3]||(n[3]=l=>A.value=l)},{default:m(()=>[(h(!0),f(Q,null,X(S(Y),l=>(h(),f("div",{class:"app-card",onClick:Me=>g(l.name),key:l.name},[(h(),f("svg",De,[a("use",{"xlink:href":`#${l.iconfont}`},null,8,Be)])),a("p",Te,M(_.$t(l.text)),1)],8,we))),128))]),_:1},8,["show"]),N(r(ge,{class:"app-state",state:I.value,ref:"appState",onChange:L},null,8,["state"]),[[P,!d.value]]),r(q,{name:"slide"},{default:m(()=>[N(a("div",Ne,[a("div",{class:"hidden-control",onClick:n[4]||(n[4]=l=>d.value=!1)},Re),r(Ce,{onCloseOuterBox:n[5]||(n[5]=l=>d.value=!1),class:"pending-card",alarmInfo:S(s)[0]},null,8,["alarmInfo"])],512),[[P,d.value]])]),_:1})])}}});const Je=k(ye,[["__scopeId","data-v-0181746c"]]);export{Je as default};
