import{d as k,r as v,c as C,a as e,L as x,t as _,q as g,w as s,b as a,e as d,x as u,y as b,p as y,i as S,o as B,$ as I,_ as V}from"./index.7688218b.js";const o=c=>(y("data-v-a20f5ac8"),c=c(),S(),c),z={class:"face-page"},E=o(()=>e("i",{class:"iconfont icona-arrowback"},null,-1)),F={class:"recoginition-rect"},N=o(()=>e("div",{class:"focus-img"},[e("div",{class:"face-img"})],-1)),R={class:"text1"},$={class:"text2"},A={class:"text3"},D={class:"select-img"},q=o(()=>e("i",{class:"iconfont icona-Flashon",style:{"font-size":"36px"}},null,-1)),H=o(()=>e("i",{class:"iconfont iconReset1",style:{"font-size":"36px"}},null,-1)),O=o(()=>e("i",{class:"iconfont iconpicture",style:{"font-size":"36px"}},null,-1)),T=k({__name:"FaceView",setup(c){const l="linear-gradient(147deg, #1667A7 0%, #575EE9 98%)",t=v(!0),p=I("returnHome"),f=()=>{t.value=!1};let h=v(null);const m=()=>{navigator.mediaDevices.getUserMedia().then(i=>{h.value=i})};return(n,i)=>{const r=b;return B(),C("div",z,[e("h1",{class:"face-header",onClick:i[0]||(i[0]=(...w)=>g(p)&&g(p)(...w))},[E,x(" "+_(n.$t("faceRecognition")),1)]),e("main",F,[N,s(e("p",R,"FACE",512),[[a,t.value]]),s(e("p",$,"RECOGNITION",512),[[a,t.value]]),s(e("p",A,"Art posters is a surprising answer for many of my clients that come with questions. ",512),[[a,t.value]]),s(e("div",{class:"start-btn",onClick:f},_(n.$t("getStart")),513),[[a,t.value]]),s(e("div",D,[d(r,{size:54,btnBackground:l,onClick:m},{default:u(()=>[q]),_:1}),d(r,{size:54,btnBackground:l},{default:u(()=>[H]),_:1}),d(r,{size:54,btnBackground:l},{default:u(()=>[O]),_:1})],512),[[a,!t.value]]),s(e("div",{class:"start-btn",onClick:f},_(n.$t("faceRecognition")),513),[[a,!t.value]])])])}}});const G=V(T,[["__scopeId","data-v-a20f5ac8"]]);export{G as default};
