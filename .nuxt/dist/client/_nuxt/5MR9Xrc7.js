import{B as G,o as a,c as l,k as A,m as S,s as H,Z as R,l as W,p as J,q as P,$ as Q,v as X,x as Y,y as ee,C as te,z as ne,A as oe,R as ie,D as re,E as se,G as ae,H as I,g as f,T as le,I as $,J as K,d as j,K as U,w as V,h as Z,e as y,a as o,f as d,F as pe,r as ce,t as h,j as F,L as de,b as ue,M as fe,N as T,O as L,_ as me}from"./B8_L-OGO.js";import{s as be}from"./T4br1-qd.js";import{F as ve}from"./CopwGUBO.js";import{O as D,s as he,a as ge}from"./g_rFK4m0.js";import{_ as ye}from"./B4SFZziU.js";import"./B9pIG8-N.js";var we=function(e){var t=e.dt;return`
.p-inputgroup,
.p-inputgroup .p-iconfield,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `.concat(t("inputgroup.addon.padding"),`;
    background: `).concat(t("inputgroup.addon.background"),`;
    color: `).concat(t("inputgroup.addon.color"),`;
    border-block-start: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    border-block-end: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
    min-width: `).concat(t("inputgroup.addon.min.width"),`;
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid `).concat(t("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iconfield > .p-component,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-iconfield:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-end-start-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-iconfield:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: `).concat(t("inputgroup.addon.border.radius"),`;
    border-end-end-radius: `).concat(t("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

.p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
    border-inline-start: 0;
}
`)},ke={root:"p-inputgroup"},xe=G.extend({name:"inputgroup",theme:we,classes:ke}),Le={name:"BaseInputGroup",extends:H,style:xe,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},M={name:"InputGroup",extends:Le,inheritAttrs:!1};function Ce(n,e,t,s,p,i){return a(),l("div",S({class:n.cx("root")},n.ptmi("root")),[A(n.$slots,"default")],16)}M.render=Ce;var _e={root:"p-inputgroupaddon"},Ee=G.extend({name:"inputgroupaddon",classes:_e}),$e={name:"BaseInputGroupAddon",extends:H,style:Ee,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},N={name:"InputGroupAddon",extends:$e,inheritAttrs:!1};function Se(n,e,t,s,p,i){return a(),l("div",S({class:n.cx("root")},n.ptmi("root")),[A(n.$slots,"default")],16)}N.render=Se;var Ie=function(e){var t=e.dt;return`
.p-popover {
    margin-block-start: `.concat(t("popover.gutter"),`;
    background: `).concat(t("popover.background"),`;
    color: `).concat(t("popover.color"),`;
    border: 1px solid `).concat(t("popover.border.color"),`;
    border-radius: `).concat(t("popover.border.radius"),`;
    box-shadow: `).concat(t("popover.shadow"),`;
}

.p-popover-content {
    padding: `).concat(t("popover.content.padding"),`;
}

.p-popover-flipped {
    margin-block-start: calc(`).concat(t("popover.gutter"),` * -1);
    margin-block-end: `).concat(t("popover.gutter"),`;
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(`).concat(t("popover.arrow.offset")," + ").concat(t("popover.arrow.left"),`);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(`).concat(t("popover.gutter"),` - 2px);
    margin-left: calc(-1 * (`).concat(t("popover.gutter"),` - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(t("popover.background"),`;
}

.p-popover:before {
    border-width: `).concat(t("popover.gutter"),`;
    margin-left: calc(-1 * `).concat(t("popover.gutter"),`);
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(t("popover.border.color"),`;
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(t("popover.background"),`;
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(t("popover.border.color"),`;
}
`)},Oe={root:"p-popover p-component",content:"p-popover-content"},Te=G.extend({name:"popover",theme:Ie,classes:Oe}),De={name:"BasePopover",extends:H,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:Te,provide:function(){return{$pcPopover:this,$parentInstance:this}}},q={name:"Popover",extends:De,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&R.clear(this.container),this.overlayEventListener&&(D.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,t){this.visible?this.hide():this.show(e,t)},show:function(e,t){this.visible=!0,this.eventTarget=e.currentTarget,this.target=t||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var t=this;W(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&R.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(s){t.container.contains(s.target)&&(t.selfClick=!0)},this.focus(),D.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),D.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&R.clear(e)},alignOverlay:function(){J(this.container,this.target,!1);var e=P(this.container),t=P(this.target),s=0;e.left<t.left&&(s=t.left-e.left),this.container.style.setProperty(Q("popover.arrow.left").name,"".concat(s,"px")),e.top<t.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&X(this.container,"p-popover-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),Y(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&ee()&&(this.outsideClickListener=function(t){e.visible&&!e.selfClick&&!e.isTargetClicked(t)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new te(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!ne()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",oe(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var t="";for(var s in this.breakpoints)t+=`
                        @media screen and (max-width: `.concat(s,`) {
                            .p-popover[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[s],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){D.emit("overlay-click",{originalEvent:e,target:this.target})}},directives:{focustrap:ve,ripple:ie},components:{Portal:he}},Ae=["aria-modal"];function Ke(n,e,t,s,p,i){var w=re("Portal"),u=se("focustrap");return a(),ae(w,{appendTo:n.appendTo},{default:I(function(){return[f(le,S({name:"p-popover",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:I(function(){return[p.visible?$((a(),l("div",S({key:0,ref:i.containerRef,role:"dialog","aria-modal":p.visible,onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),class:n.cx("root")},n.ptmi("root")),[n.$slots.container?A(n.$slots,"container",{key:0,closeCallback:i.hide,keydownCallback:function(g){return i.onButtonKeydown(g)}}):(a(),l("div",S({key:1,class:n.cx("content"),onClick:e[0]||(e[0]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onMousedown:e[1]||(e[1]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onContentKeydown&&i.onContentKeydown.apply(i,arguments)})},n.ptm("content")),[A(n.$slots,"default")],16))],16,Ae)),[[u]]):K("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}q.render=Ke;const ze={class:"card flex justify-center"},Be={class:"flex flex-col gap-4 w-[25rem]"},Re={key:1,class:"text-green-500 transition-opacity duration-500 text-xs"},Ue={class:"list-none p-0 m-0 flex flex-col gap-4"},Ve=["src","alt"],Ge={class:"font-medium"},He="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",Pe=j({__name:"ShareInvitation",props:{celebrationId:{type:String,required:!0}},async setup(n){let e,t;const s=U(),p=U(!1),i=F(),w=n,{data:u,error:k}=([e,t]=V(()=>Z(()=>`${i.public.apiUrl}/guests/celebration/${w.celebrationId}`,"$0SA81cdBNX")),e=await e,t(),e);k.value&&console.error("Failed to fetch nb of guest celebration",k.value);const g=y(()=>u.value.guests_list||[]),C=m=>{s.value.toggle(m)},_=`${i.public.url}/celebration/${w.celebrationId}`,E=async()=>{try{await navigator.clipboard.writeText(_),p.value=!0,setTimeout(()=>{p.value=!1},2e3)}catch(m){console.error("Failed to copy text: ",m)}};return(m,b)=>{const O=be,v=de,r=N,z=M;return a(),l("div",ze,[f(O,{type:"button",icon:"pi pi-share-alt",label:"Share",onClick:C}),f(d(q),{ref_key:"op",ref:s,class:"popover-container"},{default:I(()=>[o("div",Be,[o("div",null,[b[0]||(b[0]=o("span",{class:"font-medium block mb-2"},"Share this document",-1)),f(z,null,{default:I(()=>[f(v,{value:`${d(i).public.url}/celebration/${n.celebrationId}`,readonly:"",class:"w-[25rem]"},null,8,["value"]),f(r,null,{default:I(()=>[p.value?K("",!0):(a(),l("i",{key:0,class:"pi pi-copy",title:"Copy to clipboard",onClick:E})),p.value?(a(),l("span",Re," copied ")):K("",!0)]),_:1})]),_:1})]),b[1]||(b[1]=o("div",{class:"flex items-center justify-between"},[o("span",{class:"font-medium block mb-2"},"Invités")],-1)),o("div",null,[o("ul",Ue,[(a(!0),l(pe,null,ce(d(g),(x,B)=>(a(),l("li",{key:B,class:"flex items-center gap-2"},[o("img",{src:x.user_id.avatar.picture||He,alt:x.user_id.avatar.picture_description||"User avatar",style:{width:"32px"}},null,8,Ve),o("div",null,[o("span",Ge,h(x.user_id.alias),1)])]))),128))])])])]),_:1},512)])}}}),je={class:"main flex flex-col items-center"},Ze={key:0,id:"celebration-details"},Fe={class:"mx-auto mt-10 max-w-xl sm:mt-10"},Me={class:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"},Ne={for:"celebration-title",class:"block text-sm font-semibold leading-6 text-gray-900"},qe={class:"mt-2.5"},We={for:"celebration-type",class:"block text-sm font-semibold leading-6 text-gray-900"},Je={class:"mt-2.5"},Qe={class:"sm:col-span-2"},Xe={for:"celebration-description",class:"block text-sm font-semibold leading-6 text-gray-900"},Ye={class:"mt-2.5"},et={for:"celebration-date",class:"block text-sm font-semibold leading-6 text-gray-900"},tt={class:"mt-2.5"},nt={for:"celebration-hour",class:"block text-sm font-semibold leading-6 text-gray-900"},ot={class:"mt-2.5"},it={class:"sm:col-span-2"},rt={for:"celebration-address",class:"block text-sm font-semibold leading-6 text-gray-900"},st={class:"mt-2.5"},at={class:"mt-10"},lt={key:0,class:"text-sm text-red-500"},pt={key:1},ct=j({__name:"[id]",async setup(n){let e,t;const{auth:s}=ue(),{data:{user:p}}=([e,t]=V(()=>s.getUser()),e=await e,t(),e),{id:i}=fe().params,w=F(),{data:u,error:k}=([e,t]=V(()=>Z(()=>`${w.public.apiUrl}/celebration/${i}`,"$sWfZ9jOGWS")),e=await e,t(),e);k.value&&console.error("Failed to fetch celebration data",k.value);const g=y(()=>u.value.name||""),C=y(()=>u.value.celebration_type.category||""),_=y(()=>u.value.description||""),E=y(()=>u.value.date||""),m=y(()=>u.value.hour.split(":").slice(0,2).join(":")||""),b=y(()=>u.value.address||""),O=U("");return(v,r)=>{const z=Pe,x=ge,B=ye;return a(),l("main",je,[d(p)?(a(),l("div",Ze,[r[7]||(r[7]=o("div",{class:"mx-auto mt-4 max-w-2xl text-center"},[o("h1",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl"}," Modifiez votre événement ")],-1)),f(z,{"celebration-id":d(i)},null,8,["celebration-id"]),o("form",Fe,[o("div",Me,[o("div",null,[o("label",Ne,h(v.$t("celebration.title")),1),o("div",qe,[$(o("input",{id:"celebration-title","onUpdate:modelValue":r[0]||(r[0]=c=>L(g)?g.value=c:null),type:"text",name:"celebration-title",autocomplete:"celebration-title",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[T,d(g)]])])]),o("div",null,[o("label",We,h(v.$t("celebration.type")),1),o("div",Je,[$(o("input",{id:"celebration-type","onUpdate:modelValue":r[1]||(r[1]=c=>L(C)?C.value=c:null),type:"text",name:"celebration-type",autocomplete:"celebration-type",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[T,d(C)]])])]),o("div",Qe,[o("label",Xe,h(v.$t("celebration.description")),1),o("div",Ye,[$(o("textarea",{id:"celebration-description","onUpdate:modelValue":r[2]||(r[2]=c=>L(_)?_.value=c:null),name:"celebration-description",rows:"4",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[T,d(_)]])])]),o("div",null,[o("label",et,h(v.$t("celebration.date")),1),o("div",tt,[f(x,{id:"datepicker-month",modelValue:d(E),"onUpdate:modelValue":r[3]||(r[3]=c=>L(E)?E.value=c:null),class:"flex-auto","date-format":"dd/mm/yy",variant:"filled","show-icon":"",fluid:"","show-on-focus":!1,"input-id":"buttondisplay"},null,8,["modelValue"])])]),o("div",null,[o("label",nt,h(v.$t("celebration.hour")),1),o("div",ot,[f(x,{id:"datepicker-timeonly",modelValue:d(m),"onUpdate:modelValue":r[4]||(r[4]=c=>L(m)?m.value=c:null),"time-only":"",fluid:""},null,8,["modelValue"])])]),o("div",it,[o("label",rt,h(v.$t("celebration.address")),1),o("div",st,[$(o("input",{id:"celebration-address","onUpdate:modelValue":r[5]||(r[5]=c=>L(b)?b.value=c:null),type:"text",name:"celebration-address",autocomplete:"celebration-address",class:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[T,d(b)]])])])]),o("div",at,[O.value?(a(),l("span",lt,h(O.value),1)):K("",!0),r[6]||(r[6]=o("button",{id:"celebration-creation",type:"submit",class:"block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}," Modifiez mon événement ",-1))])])])):(a(),l("div",pt,[f(B,{class:"alert"})]))])}}}),ht=me(ct,[["__scopeId","data-v-881daa57"]]);export{ht as default};
