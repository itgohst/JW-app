import{B as s,C as a,D as r,E as c,e as i,G as u,H as m}from"./index.179d9c75.js";let o;const p={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let f=s({},p);function d(){({instance:o}=r({setup(){const{state:e,toggle:t}=c();return()=>i(m,u(e,{"onUpdate:show":t}),null)}}))}function w(l){return a?new Promise((e,t)=>{o||d(),o.open(s({},f,l,{callback:n=>{(n==="confirm"?e:t)(n)}}))}):Promise.resolve()}const C=""+new URL("avatar.07957502.png",import.meta.url).href;export{C as _,w as s};
