(window.webpackJsonp=window.webpackJsonp||[]).push([[24,45,49,50],{LR3V:function(t,s,e){"use strict";e.r(s);var a=e("yQXo"),i=e("eYCd"),r=e("VVrn"),n=e("QZnT"),o={metaInfo:{title:"Change Password"},components:{VAppDefaultLayout:a.default,VNavMenu:i.default,VAlert:r.a},data:function(){return{form:new n.b({password:"",password_confirmation:""})}},methods:{submit:function(){var t=this;this.form.processing=!0,this.$inertia.put(route("admin:password.update"),this.form.data()).then((function(){t.form.processing=!1,t.form.reset()}))}}},l=e("KHd+"),c=Object(l.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-app-default-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[e("h1",{staticClass:"text-2xl font-semibold text-gray-900"},[t._v("Change Password")])]},proxy:!0}])},[t._v(" "),[e("div",{staticClass:"container mx-auto px-4 sm:px-6 md:px-8 py-4"},[e("div",{staticClass:"md:grid md:gap-6 md:grid-cols-8"},[e("div",{staticClass:"mb-6 sm:col-span-2"},[e("v-nav-menu")],1),t._v(" "),e("div",{staticClass:"md:col-span-6"},[t.$page.flash?e("v-alert",{attrs:{dismissible:""}},[t._v("\n                        "+t._s(t.$page.flash)+"\n                    ")]):t._e(),t._v(" "),t.$page.errors.has("demo.restrict")?e("v-alert",{attrs:{variant:"failure",dismissible:""}},[t._v("\n                        "+t._s(t.$page.errors.first("demo.restrict"))+"\n                    ")]):t._e(),t._v(" "),e("div",{staticClass:"flex flex-col bg-white rounded-lg shadow mb-6"},[e("div",{staticClass:"px-4 py-5 sm:p-6"},[e("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                                Change Password\n                            ")])]),t._v(" "),e("div",{staticClass:"px-4 py-5 sm:p-6"},[e("div",{staticClass:"form-group mb-6"},[e("label",{staticClass:"form-label"},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-input",attrs:{type:"password"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}}),t._v(" "),t.$page.errors.has("password")?e("span",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("password")))]):t._e()]),t._v(" "),e("div",{staticClass:"form-group mb-6"},[e("label",{staticClass:"form-label"},[t._v("Password Confirmation")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-input",attrs:{type:"password"},domProps:{value:t.form.password_confirmation},on:{input:function(s){s.target.composing||t.$set(t.form,"password_confirmation",s.target.value)}}}),t._v(" "),t.$page.errors.has("password_confirmation")?e("span",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("password_confirmation")))]):t._e()])]),t._v(" "),e("div",{staticClass:"bg-gray-50 text-right rounded-b-lg px-4 py-5 sm:p-6"},[e("button",{staticClass:"btn btn-indigo",attrs:{type:"button",disabled:t.form.processing},on:{click:function(s){return t.submit()}}},[t._v("\n                                Change Password\n                            ")])])])],1)])])]],2)}),[],!1,null,null,null);s.default=c.exports},VVrn:function(t,s,e){"use strict";var a=e("yOFB");e.d(s,"a",(function(){return a.a}))},eYCd:function(t,s,e){"use strict";e.r(s);var a=e("KHd+"),i=Object(a.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("nav",[s("inertia-link",{staticClass:"flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150",class:{"bg-white":this.route().current("admin:profile.edit")},attrs:{href:this.route("admin:profile.edit")}},[this._v("\n        Edit Profile\n    ")]),this._v(" "),s("inertia-link",{staticClass:"flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150",class:{"bg-white":this.route().current("admin:password.edit")},attrs:{href:this.route("admin:password.edit")}},[this._v("\n        Change Password\n    ")])],1)}),[],!1,null,null,null);s.default=i.exports},fDts:function(t,s,e){"use strict";e.r(s);var a=e("KHd+"),i=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"h-0 flex-1 flex flex-col pb-4 overflow-y-auto"},[e("div",{staticClass:"flex items-center flex-shrink-0 bg-gray-900 py-4 px-4 mb-4"},[e("inertia-link",{attrs:{href:t.route("admin:dashboard")}},[e("img",{staticClass:"h-8 w-auto select-none",attrs:{src:t.$page.logo_dark,alt:"logo"}})])],1),t._v(" "),e("div",{staticClass:"flex-shrink-0 flex px-6 pt-1"},[e("inertia-link",{staticClass:"flex-shrink-0 group block focus:outline-none",attrs:{href:t.route("admin:profile.edit")}},[e("div",{staticClass:"flex items-center"},[e("div",[e("img",{staticClass:"inline-block h-9 w-9 rounded-full",attrs:{src:t.$page.user.avatar_url,alt:t.$page.user.name}})]),t._v(" "),e("div",{staticClass:"ml-3"},[e("p",{staticClass:"text-sm leading-5 font-medium text-white"},[t._v("\n                        "+t._s(t.$page.user.name)+"\n                    ")]),t._v(" "),e("p",{staticClass:"text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150"},[t._v("\n                        Edit profile\n                    ")])])])])],1),t._v(" "),e("nav",{staticClass:"mt-5 bg-gray-800"},[e("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("admin:dashboard")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("admin:dashboard")}},[e("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]),t._v("\n\n            Dashboard\n        ")]),t._v(" "),e("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("admin:subscriptions.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("admin:subscriptions.index")}},[e("svg",{staticClass:"h-4 w-4 fill-current mr-3",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"}})]),t._v("\n\n            Subscriptions\n        ")]),t._v(" "),e("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("admin:plans.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("admin:plans.index")}},[e("svg",{staticClass:"h-4 w-4 fill-current mr-3",attrs:{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z"}})]),t._v("\n\n            Plans\n        ")])],1),t._v(" "),e("nav",{staticClass:"mt-auto"},[e("inertia-link",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("admin:system-settings.edit")}},[e("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v("\n\n            Settings\n        ")]),t._v(" "),e("a",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("logout")}},[e("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"}})]),t._v("\n\n            Logout\n        ")])],1)])}),[],!1,null,null,null);s.default=i.exports},yOFB:function(t,s,e){"use strict";var a={props:{variant:{type:String,default:"success",validator:function(t){return["success","warning","failure"].includes(t)}},dismissible:{type:Boolean,default:!1}},data:function(){return{visible:!0}},computed:{alertClass:function(){return["alert","alert-"+this.variant]}},watch:{"$page.flash":{deep:!0,handler:function(){this.visible=!0}}}},i=e("KHd+"),r=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.visible?e("div",{class:t.alertClass},[e("p",[t._t("default")],2),t._v(" "),t.dismissible?e("button",{staticClass:"flex items-center p-1 focus:outline-none ml-auto",on:{click:function(s){t.visible=!1}}},[e("svg",{staticClass:"w-3 h-3 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"}})])]):t._e()]):t._e()}),[],!1,null,null,null);s.a=r.exports},yQXo:function(t,s,e){"use strict";e.r(s);var a={components:{VNavMenu:e("fDts").default},data:function(){return{sidebarOpen:!1}}},i=e("KHd+"),r=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"h-screen flex overflow-hidden bg-gray-100",attrs:{id:"app"}},[e("div",{staticClass:"md:hidden"},[e("div",{staticClass:"fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300",class:{"opacity-75 pointer-events-auto":t.sidebarOpen,"opacity-0 pointer-events-none":!t.sidebarOpen},on:{click:function(s){t.sidebarOpen=!1}}}),t._v(" "),e("div",{staticClass:"fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300 ",class:{"translate-x-0":t.sidebarOpen,"-translate-x-full":!t.sidebarOpen}},[e("div",{staticClass:"absolute top-0 right-0 -mr-14 p-1"},[t.sidebarOpen?e("button",{staticClass:"flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600",on:{click:function(s){t.sidebarOpen=!1}}},[e("svg",{staticClass:"h-6 w-6 text-white",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]):t._e()]),t._v(" "),e("v-nav-menu")],1)]),t._v(" "),e("div",{staticClass:"hidden md:flex md:flex-shrink-0"},[e("div",{staticClass:"flex flex-col w-64 bg-gray-800"},[e("v-nav-menu")],1)]),t._v(" "),e("div",{staticClass:"flex flex-col w-0 flex-1 overflow-hidden"},[e("div",{staticClass:"md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3"},[e("button",{staticClass:"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150",on:{click:function(s){s.stopPropagation(),t.sidebarOpen=!0}}},[e("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),e("main",{staticClass:"flex flex-col flex-1 relative z-0 overflow-y-auto pt-6 focus:outline-none",attrs:{tabindex:"0"}},[e("div",{staticClass:"flex items-center px-4 mb-4 sm:px-6 lg:px-8"},[t._t("header")],2),t._v(" "),t._t("default")],2)])])}),[],!1,null,null,null);s.default=r.exports}}]);
//# sourceMappingURL=24.js.map?id=9d3c3e96a1ecec405388