import{o as d,c as p,a as e,d as k,K as c,G as $,H as l,g as a,f as n,P as B,t as u,Q as V,b as L,I as j,O as w,J as y,af as z,L as A,_ as F}from"./B8_L-OGO.js";import{F as S}from"./CopwGUBO.js";import{s as T}from"./T4br1-qd.js";import{_ as G,s as M,a as D}from"./D1XAytX0.js";import{Y as P,h as b,G as R,V as U,S as Y}from"./B9pIG8-N.js";function q(g,i){return d(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})])}const H={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},J={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},K={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},O={class:"sm:flex sm:items-start"},Q={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"},W={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},Z={class:"mt-2"},X={class:"text-sm text-gray-500"},ee={class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},te=k({__name:"AlertLoggedIn",setup(g){const i=c(!0);return(r,t)=>{const m=V;return d(),$(n(Y),{as:"template",show:i.value},{default:l(()=>[a(n(P),{class:"relative z-10",onClose:t[1]||(t[1]=f=>i.value=!1)},{default:l(()=>[a(n(b),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>t[2]||(t[2]=[e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1)])),_:1}),e("div",H,[e("div",J,[a(n(b),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[a(n(R),{class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:l(()=>[e("div",K,[e("div",O,[e("div",Q,[a(n(q),{class:"h-6 w-6 text-green-600","aria-hidden":"true"})]),e("div",W,[a(n(U),{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:l(()=>[B(u(r.$t("login.successfull")),1)]),_:1}),e("div",Z,[e("p",X,u(r.$t("login.success_message")),1)])])])]),e("div",ee,[a(m,{to:"/"},{default:l(()=>[e("button",{ref:"cancelButtonRef",type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:t[0]||(t[0]=f=>i.value=!1)},u(r.$t("button.ok")),513)]),_:1})])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}}),se={class:"main flex flex-col items-center"},ae={id:"login",class:"card w-full sm:w-80 p-6 mb-6"},oe={id:"login-container",class:"w-full sm:w-80 flex flex-col gap-6"},le={class:"sm:mx-auto sm:w-full sm:max-w-sm"},ne={class:"mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},ie={class:"password-container"},re={id:"password-forgot",class:"text-sm"},ue={href:"#",class:"font-semibold text-indigo-600 hover:text-indigo-500"},de={key:0,class:"text-sm text-red-500"},ce={class:"register-container text-xs"},me={id:"sign-up-link"},pe=k({__name:"login",setup(g){const i=c(""),r=c(""),t=c(""),m=c(!1),{auth:f}=L(),I=async()=>{try{const{data:o,error:s}=await f.signInWithPassword({email:i.value,password:r.value});if(s)throw s;i.value="",r.value="",m.value=!0}catch(o){if(z(o))switch(o.code){case"400":t.value="Erreur de requête. Veuillez vérifier vos informations.";break;case"401":t.value="Non autorisé. Vérifiez vos identifiants.";break;default:t.value="Erreur d'authentification inconnue.";break}else if(o){switch(o.name){case"InvalidCredentialsError":t.value="Identifiants incorrects.";break;case"NetworkError":t.value="Erreur réseau. Veuillez réessayer.";break;default:t.value="Erreur d'authentification du client.";break}setTimeout(()=>{t.value=""},3e3)}}};return(o,s)=>{const v=M,x=A,h=D,C=T,E=V,N=S;return d(),p("main",se,[s[5]||(s[5]=e("div",{class:"card flex justify-center"},null,-1)),e("div",ae,[j((d(),p("div",oe,[e("div",le,[s[2]||(s[2]=e("img",{class:"mx-auto h-14 w-auto",src:G,alt:"Logo Festivo"},null,-1)),e("h3",ne,u(o.$t("login.title")),1)]),a(h,null,{default:l(()=>[a(v,null,{default:l(()=>s[3]||(s[3]=[e("i",{class:"pi pi-user"},null,-1)])),_:1}),a(x,{id:"email",modelValue:n(i),"onUpdate:modelValue":s[0]||(s[0]=_=>w(i)?i.value=_:null),class:"text",type:"text",placeholder:o.$t("user.email"),autofocus:"",fluid:""},null,8,["modelValue","placeholder"])]),_:1}),e("div",ie,[a(h,null,{default:l(()=>[a(v,null,{default:l(()=>s[4]||(s[4]=[e("i",{class:"pi pi-key"},null,-1)])),_:1}),a(x,{id:"password",modelValue:n(r),"onUpdate:modelValue":s[1]||(s[1]=_=>w(r)?r.value=_:null),class:"text",type:"password",placeholder:o.$t("user.password"),fluid:""},null,8,["modelValue","placeholder"])]),_:1}),e("div",re,[e("a",ue,u(o.$t("login.password_forgot")),1)]),n(t)?(d(),p("span",de,u(n(t)),1)):y("",!0)]),a(C,{id:"sign-in",type:"submit",label:o.$t("login.button"),class:"mt-2 button-validation-form",onClick:I},null,8,["label"])])),[[N]])]),e("div",ce,[e("p",null,u(o.$t("login.no_account")),1),a(E,{to:"/register"},{default:l(()=>[e("p",me,u(o.$t("login.sign_up")),1)]),_:1})]),n(m)?(d(),$(te,{key:0,class:"alert"})):y("",!0)])}}}),he=F(pe,[["__scopeId","data-v-d6117879"]]);export{he as default};
