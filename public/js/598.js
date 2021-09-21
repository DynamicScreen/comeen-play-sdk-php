"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[598],{4040:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8191),_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9038),_Components_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5440),_Components_SimpleNotification_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8720);const __WEBPACK_DEFAULT_EXPORT__=(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({name:"App",components:{Breadcrumb:_Components_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_2__.Z,SimpleNotification:_Components_SimpleNotification_vue__WEBPACK_IMPORTED_MODULE_3__.Z,Link:_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.rU},props:{name:{type:String,default:""}},setup:function setup(props){var dropdownState=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!1),showNotificationPanel=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(!0),page=(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.qt)(),hasNotification=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){return!!Object.keys(page.props.value.flash.notif.success).length||!!Object.keys(page.props.value.flash.notif.error).length||!!Object.keys(page.props.value.flash.notif.warning).length})),notificationType=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){var e;return Object.keys(page.props.value.flash.notif.success).length?e="success":Object.keys(page.props.value.flash.notif.error).length?e="error":Object.keys(page.props.value.flash.notif.warning).length&&(e="warning"),e})),notificationContent=(0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)((function(){return eval("page.props.value.flash.notif."+notificationType)})),dismissNotification=function dismissNotification(){eval("page.props.value.flash.notif."+notificationType+" = []")};return{dropdownState,showNotificationPanel,hasNotification,notificationType,notificationContent,dismissNotification}}})},5598:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var o=r(8191),a={class:"bg-white shadow"},n={class:"px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8"},i={class:"py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200"},s={class:"flex-1 min-w-0"},l={class:"flex items-center"},c={class:"flex items-center"},d={class:"ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate"},m={class:"flex items-center"},u={class:"ml-3 mt-2 flex items-center text-sm text-gray-500"},p=(0,o.createElementVNode)("div",{class:"mt-6 flex space-x-3 md:mt-0 md:ml-4"},[(0,o.createElementVNode)("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"}," Edit "),(0,o.createElementVNode)("button",{type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"}," Some Thing ")],-1),f={class:"bg-white shadow overflow-hidden mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"},h={class:"divide-y divide-gray-200"},x=["href"],g={class:"flex items-center px-4 py-4 sm:px-6"},v={class:"min-w-0 flex-1 flex items-center"},w={class:"flex-shrink-0"},y={class:"min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"},_={class:"text-sm font-medium text-indigo-600 truncate"},N={class:"mt-2 flex items-center text-sm text-gray-500"},E={class:"truncate"},V=(0,o.createStaticVNode)('<div class="hidden md:block"><div><p class="text-sm text-gray-900"> Applied on <time datetime="2020-01-07">January 7, 2020</time></p><p class="mt-2 flex items-center text-sm text-gray-500">\x3c!-- Heroicon name: solid/check-circle --\x3e<svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Completed phone screening </p></div></div>',1),b=(0,o.createElementVNode)("div",null,[(0,o.createCommentVNode)(" Heroicon name: solid/chevron-right "),(0,o.createElementVNode)("svg",{class:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})])],-1),k=r(4264);const C=(0,o.defineComponent)({layout:k.Z,props:{bundle:{type:Object,required:!0}},data:function(){},setup:function(e){return{applications:(0,o.computed)((function(){return e.bundle.applications}))}},computed:{}});C.render=function(e,t,r,k,C,M){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",s,[(0,o.createCommentVNode)(" Profile "),(0,o.createCommentVNode)("                    <Breadcrumb />"),(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("h1",d,(0,o.toDisplayString)(e.bundle.name),1)]),(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("p",u,(0,o.toDisplayString)(e.bundle.description),1)])])])]),p])])]),(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("ul",h,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.applications,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.id},[(0,o.createElementVNode)("a",{href:/applications/+e.id,class:"block hover:bg-gray-50"},[(0,o.createElementVNode)("div",g,[(0,o.createElementVNode)("div",v,[(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("i",{class:(0,o.normalizeClass)(e.logo)},null,2)]),(0,o.createElementVNode)("div",y,[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("p",_,(0,o.toDisplayString)(e.name),1),(0,o.createElementVNode)("p",N,[(0,o.createCommentVNode)(" Heroicon name: solid/mail "),(0,o.createElementVNode)("span",E,(0,o.toDisplayString)(e.description),1)])]),V])]),b])],8,x)])})),128))])])],64)};const M=C},5440:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(8191),a=[(0,o.createStaticVNode)('<ol class="bg-white rounded-md shadow px-6 flex space-x-4"><li class="flex"><div class="flex items-center"><a href="#" class="text-gray-400 hover:text-gray-500">\x3c!-- Heroicon name: solid/home --\x3e<svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg><span class="sr-only">Home</span></a></div></li><li class="flex"><div class="flex items-center"><svg class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path></svg><a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Projects</a></div></li><li class="flex"><div class="flex items-center"><svg class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path></svg><a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">Project Nero</a></div></li></ol>',1)];const n=(0,o.defineComponent)({name:"Breadcrumb",props:{className:{type:String,default:""}},setup:function(e){return{}}});n.render=function(e,t,r,n,i,s){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createCommentVNode)(" This example requires Tailwind CSS v2.0+ "),(0,o.createElementVNode)("nav",{class:(0,o.normalizeClass)([e.className,"flex"]),"aria-label":"Breadcrumb"},a,2)],2112)};const i=n},8720:(e,t,r)=>{r.d(t,{Z:()=>v});var o=r(8191),a={class:"max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"},n={class:"p-4"},i={class:"flex items-start"},s={class:"flex-shrink-0"},l={key:0,class:"text-green-400 far fa-check-circle text-xl"},c={key:1,class:"text-red-400 far fa-times-circle text-xl"},d={key:2,class:"text-yellow-400 far fa-exclamation-triangle text-xl"},m={class:"ml-3 w-0 flex-1 pt-0.5"},u={class:"text-sm font-medium text-gray-900"},p={class:"mt-1 text-sm text-gray-500"},f={class:"ml-4 flex-shrink-0 flex"},h=(0,o.createElementVNode)("span",{class:"sr-only"},"Close",-1),x=(0,o.createElementVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1);const g=(0,o.defineComponent)({name:"SimpleNotification",props:{className:{type:String,default:""},flash:{type:Object,required:!0},duration:{type:Number,default:6e3},type:{type:String,default:"success"}},emits:["dismiss"],data:function(){},setup:function(e,t){var r=t.emit,a=0;(0,o.onMounted)((function(){a=window.setTimeout((function(){return r("dismiss")}),e.duration)}));var n=(0,o.computed)((function(){return e.flash.title})),i=(0,o.computed)((function(){return e.flash.content}));return{dismissTimeout:a,title:n,body:i,dismiss:function(){a&&clearTimeout(a),r("dismiss")}}}});g.render=function(e,t,r,g,v,w){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createCommentVNode)(" This example requires Tailwind CSS v2.0+ "),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)([e.className,"fixed inset-0 z-30 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"]),"aria-live":"assertive"},[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",s,["success"===e.type?((0,o.openBlock)(),(0,o.createElementBlock)("i",l)):(0,o.createCommentVNode)("v-if",!0),"error"===e.type?((0,o.openBlock)(),(0,o.createElementBlock)("i",c)):(0,o.createCommentVNode)("v-if",!0),"warning"===e.type?((0,o.openBlock)(),(0,o.createElementBlock)("i",d)):(0,o.createCommentVNode)("v-if",!0)]),(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("p",u,(0,o.toDisplayString)(e.title),1),(0,o.createElementVNode)("p",p,(0,o.toDisplayString)(e.body),1)]),(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("button",{onClick:t[0]||(t[0]=function(t){return e.dismiss()}),class:"bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},[h,(0,o.createCommentVNode)(" Heroicon name: solid/x "),x])])])])])],2)],2112)};const v=g},4264:(e,t,r)=>{r.d(t,{Z:()=>Q});var o=r(8191),a={class:"h-screen flex overflow-hidden bg-gray-100"},n={class:"lg:hidden"},i={class:"fixed inset-0 flex z-40"},s=(0,o.createElementVNode)("div",{class:"fixed inset-0"},[(0,o.createElementVNode)("div",{class:"absolute inset-0 bg-gray-600 opacity-75","aria-hidden":"true"})],-1),l={class:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary-700"},c=(0,o.createStaticVNode)('<div class="absolute top-0 right-0 -mr-12 pt-2"><button class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"><span class="sr-only">Close sidebar</span>\x3c!-- Heroicon name: outline/x --\x3e<svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="flex-shrink-0 flex items-center px-4"><img class="h-8 w-auto" src="https://test-corentin.dynamicscreen.xyz/img/logo_white.png" alt="Easywire logo"></div>',2),d={class:"mt-5 flex-shrink-0 h-full divide-y divide-primary-500 overflow-y-auto","aria-label":"Sidebar"},m={class:"px-2 space-y-1"},u=(0,o.createElementVNode)("svg",{class:"mr-4 h-6 w-6 text-primary-200",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1),p=(0,o.createTextVNode)(" Home "),f=(0,o.createElementVNode)("svg",{class:"mr-4 h-6 w-6 text-primary-200",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),h=(0,o.createTextVNode)(" Applications "),x=(0,o.createElementVNode)("svg",{class:"mr-4 h-6 w-6 text-primary-200",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"})],-1),g=(0,o.createTextVNode)(" Users "),v=(0,o.createStaticVNode)('<a href="#" class="text-primary-100 hover:text-white hover:bg-primary-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">\x3c!-- Heroicon name: outline/credit-card --\x3e<svg class="mr-4 h-6 w-6 text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg> Cards </a><a href="#" class="text-primary-100 hover:text-white hover:bg-primary-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">\x3c!-- Heroicon name: outline/user-group --\x3e<svg class="mr-4 h-6 w-6 text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> Recipients </a><a href="#" class="text-primary-100 hover:text-white hover:bg-primary-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">\x3c!-- Heroicon name: outline/document-report --\x3e<svg class="mr-4 h-6 w-6 text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg> Reports </a>',3),w=(0,o.createStaticVNode)('<div class="mt-6 pt-6"><div class="px-2 space-y-1"><a href="#" class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600">\x3c!-- Heroicon name: outline/cog --\x3e<svg class="mr-4 h-6 w-6 text-primary-200 group-hover:text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> Settings </a><a href="#" class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600">\x3c!-- Heroicon name: outline/question-mark-circle --\x3e<svg class="mr-4 h-6 w-6 text-primary-300 group-hover:text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Help </a><a href="#" class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600">\x3c!-- Heroicon name: outline/shield-check --\x3e<svg class="mr-4 h-6 w-6 text-primary-300 group-hover:text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> Privacy </a></div></div>',1),y=(0,o.createElementVNode)("div",{class:"flex-shrink-0 w-14","aria-hidden":"true"},[(0,o.createCommentVNode)(" Dummy element to force sidebar to shrink to fit close icon ")],-1),_={class:"hidden lg:flex lg:flex-shrink-0"},N={class:"flex flex-col w-64"},E={class:"flex flex-col flex-grow bg-primary-700 pt-5 pb-4 overflow-y-auto"},V=(0,o.createElementVNode)("div",{class:"flex items-center flex-shrink-0 px-4"},[(0,o.createElementVNode)("img",{class:"h-14 w-auto",src:"https://test-corentin.dynamicscreen.xyz/img/logo_white.png",alt:"Easywire logo"})],-1),b={class:"mt-5 flex-1 flex flex-col divide-y divide-primary-800 overflow-y-auto","aria-label":"Sidebar"},k={class:"px-2 space-y-1"},C=(0,o.createTextVNode)(" Home "),M=(0,o.createTextVNode)(" Applications "),B=(0,o.createTextVNode)(" Users "),T=(0,o.createTextVNode)(" Bundles "),S=(0,o.createTextVNode)(" Authorizations "),D={class:"mt-6 pt-6"},O={class:"px-2 space-y-1"},P=(0,o.createElementVNode)("svg",{class:"mr-4 h-6 w-6 text-primary-200",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})],-1),j=(0,o.createTextVNode)(" Settings "),H=(0,o.createStaticVNode)('<a href="#" class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600">\x3c!-- Heroicon name: outline/question-mark-circle --\x3e<svg class="mr-4 h-6 w-6 text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Help </a><a href="#" class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600">\x3c!-- Heroicon name: outline/shield-check --\x3e<svg class="mr-4 h-6 w-6 text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> Privacy </a>',2),z={class:"flex-1 overflow-auto focus:outline-none",tabindex:"0"},L={class:"relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none"},A=(0,o.createElementVNode)("button",{class:"px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"},[(0,o.createElementVNode)("span",{class:"sr-only"},"Open sidebar"),(0,o.createCommentVNode)(" Heroicon name: outline/menu-alt-1 "),(0,o.createElementVNode)("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h8m-8 6h16"})])],-1),R={class:"flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8"},U=(0,o.createElementVNode)("div",{class:"flex-1 flex"},[(0,o.createElementVNode)("form",{class:"w-full flex md:ml-0",action:"#",method:"GET"},[(0,o.createElementVNode)("label",{for:"search_field",class:"sr-only"},"Search"),(0,o.createElementVNode)("div",{class:"relative w-full text-gray-400 focus-within:text-gray-600"},[(0,o.createElementVNode)("div",{class:"absolute inset-y-0 left-0 flex items-center pointer-events-none","aria-hidden":"true"},[(0,o.createCommentVNode)(" Heroicon name: solid/search "),(0,o.createElementVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])]),(0,o.createElementVNode)("input",{id:"search_field",name:"search_field",class:"block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm",placeholder:"Search transactions",type:"search"})])])],-1),K={class:"ml-4 flex items-center md:ml-6"},W=(0,o.createElementVNode)("button",{class:"bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},[(0,o.createElementVNode)("span",{class:"sr-only"},"View notifications"),(0,o.createCommentVNode)(" Heroicon name: outline/bell "),(0,o.createElementVNode)("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})])],-1),q={class:"ml-3 relative"},I=(0,o.createElementVNode)("img",{class:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=SYSCo7DT3K&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""},null,-1),F={class:"hidden ml-3 text-gray-700 text-sm font-medium lg:block"},Z=(0,o.createElementVNode)("span",{class:"sr-only"},"Open user menu for ",-1),J=(0,o.createElementVNode)("svg",{class:"hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),X={class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5",role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"},Y=[(0,o.createElementVNode)("a",{href:"#",class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"},"Your Profile",-1),(0,o.createElementVNode)("a",{href:"#",class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"},"Settings",-1),(0,o.createElementVNode)("a",{href:"#",class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem"},"Logout",-1)],$={class:"flex-1 relative pb-8 overflow-y-auto"},G=r(4040);G.Z.render=function(e,t,r,G,Q,ee){var te=(0,o.resolveComponent)("Link"),re=(0,o.resolveComponent)("simple-notification");return(0,o.openBlock)(),(0,o.createElementBlock)("div",a,[(0,o.createCommentVNode)(" Off-canvas menu for mobile, show/hide based on off-canvas menu state. "),(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",i,[(0,o.createCommentVNode)('\n                  Off-canvas menu overlay, show/hide based on off-canvas menu state.\n\n                  Entering: "transition-opacity ease-linear duration-300"\n                    From: "opacity-0"\n                    To: "opacity-100"\n                  Leaving: "transition-opacity ease-linear duration-300"\n                    From: "opacity-100"\n                    To: "opacity-0"\n                '),s,(0,o.createCommentVNode)('\n                  Off-canvas menu, show/hide based on off-canvas menu state.\n\n                  Entering: "transition ease-in-out duration-300 transform"\n                    From: "-translate-x-full"\n                    To: "translate-x-0"\n                  Leaving: "transition ease-in-out duration-300 transform"\n                    From: "translate-x-0"\n                    To: "-translate-x-full"\n                '),(0,o.createElementVNode)("div",l,[c,(0,o.createElementVNode)("nav",d,[(0,o.createElementVNode)("div",m,[(0,o.createCommentVNode)(' Current: "bg-primary-800 text-white", Default: "text-priamary-100 hover:text-white hover:bg-primary-600" '),(0,o.createVNode)(te,{href:"/",class:"bg-primary-600 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md","aria-current":"page"},{default:(0,o.withCtx)((function(){return[(0,o.createCommentVNode)(" Heroicon name: outline/home "),u,p]})),_:1}),(0,o.createVNode)(te,{href:"/applications",class:"text-primary-100 hover:text-white hover:bg-primary-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"},{default:(0,o.withCtx)((function(){return[(0,o.createCommentVNode)(" Heroicon name: outline/clock "),f,h]})),_:1}),(0,o.createVNode)(te,{href:"/users",class:"text-primary-100 hover:text-white hover:bg-primary-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"},{default:(0,o.withCtx)((function(){return[(0,o.createCommentVNode)(" Heroicon name: outline/scale "),x,g]})),_:1}),v]),w])]),y])]),(0,o.createCommentVNode)(" Static sidebar for desktop "),(0,o.createElementVNode)("div",_,[(0,o.createElementVNode)("div",N,[(0,o.createCommentVNode)(" Sidebar component, swap this element with another sidebar if you like "),(0,o.createElementVNode)("div",E,[V,(0,o.createElementVNode)("nav",b,[(0,o.createElementVNode)("div",k,[(0,o.createCommentVNode)(' Current: "bg-primary-800 text-white", Default: "text-primary-100 hover:text-white hover:bg-primary-600" '),(0,o.createVNode)(te,{href:"/",class:"bg-primary-800 text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md","aria-current":"page"},{default:(0,o.withCtx)((function(){return[C]})),_:1}),(0,o.createVNode)(te,{href:"/applications",class:"text-primary-100 hover:text-white hover:bg-primary-600 text-sm group flex items-center px-2 py-2 font-medium rounded-md"},{default:(0,o.withCtx)((function(){return[M]})),_:1}),(0,o.createVNode)(te,{href:"/users",class:"group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600"},{default:(0,o.withCtx)((function(){return[B]})),_:1}),(0,o.createVNode)(te,{href:"/bundles",class:"group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600"},{default:(0,o.withCtx)((function(){return[T]})),_:1}),(0,o.createVNode)(te,{href:"/authorizations",class:"group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600"},{default:(0,o.withCtx)((function(){return[S]})),_:1})]),(0,o.createElementVNode)("div",D,[(0,o.createElementVNode)("div",O,[(0,o.createVNode)(te,{href:"/settings",class:"group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-primary-100 hover:text-white hover:bg-primary-600"},{default:(0,o.withCtx)((function(){return[(0,o.createCommentVNode)(" Heroicon name: outline/cog "),P,j]})),_:1}),H])])])])])]),(0,o.createElementVNode)("div",z,[(0,o.createElementVNode)("div",L,[A,(0,o.createCommentVNode)(" Search bar "),(0,o.createElementVNode)("div",R,[U,(0,o.createElementVNode)("div",K,[W,(0,o.createCommentVNode)(" Profile dropdown "),(0,o.createElementVNode)("div",q,[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("button",{onClick:t[0]||(t[0]=function(t){return e.dropdownState=!e.dropdownState}),onBlur:t[1]||(t[1]=function(t){return e.dropdownState=!1}),class:"max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50",id:"user-menu","aria-haspopup":"true"},[I,(0,o.createElementVNode)("span",F,[Z,(0,o.createTextVNode)((0,o.toDisplayString)(e.$page.props.auth.user.full_name),1)]),(0,o.createCommentVNode)(" Heroicon name: solid/chevron-down "),J],32)]),(0,o.createCommentVNode)('\n                              Profile dropdown panel, show/hide based on dropdown state.\n\n                              Entering: "transition ease-out duration-100"\n                                From: "transform opacity-0 scale-95"\n                                To: "transform opacity-100 scale-100"\n                              Leaving: "transition ease-in duration-75"\n                                From: "transform opacity-100 scale-100"\n                                To: "transform opacity-0 scale-95"\n                            '),(0,o.withDirectives)((0,o.createElementVNode)("div",X,Y,512),[[o.vShow,e.dropdownState]])])])])]),(0,o.createElementVNode)("main",$,[(0,o.renderSlot)(e.$slots,"default")]),(0,o.createVNode)(o.Transition,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,o.withCtx)((function(){return[e.showNotificationPanel&&e.hasNotifications?((0,o.openBlock)(),(0,o.createBlock)(re,{key:0,class:"z-50",flash:e.notificationContent,type:e.notificationType,onDismiss:e.dismissNotification},null,8,["flash","type","onDismiss"])):(0,o.createCommentVNode)("v-if",!0)]})),_:1})])])};const Q=G.Z}}]);