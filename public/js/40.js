(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{VDKg:function(t,e,n){"use strict";n.r(e);var s=n("iOOf"),a=n("QZnT"),o={components:{VModal:s.a},data:function(){return{form:new a.b({name:""})}},methods:{show:function(){this.$refs.modal.show()},hide:function(){this.$refs.modal.hide()},submit:function(){var t=this;this.form.processing=!0,this.$inertia.post(route("app:project.columns.store",{project:this.$page.project.uuid}),this.form.data()).then((function(){t.form.processing=!1,t.$page.errors.none()&&(t.hide(),t.form.reset())}))}}},r=n("KHd+"),i=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-modal",{ref:"modal"},[n("div",{staticClass:"bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"},[n("div",{staticClass:"p-6"},[n("h3",{staticClass:"font-medium text-lg"},[t._v("Create Column")])]),t._v(" "),n("div",{staticClass:"p-6"},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-label"},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input",domProps:{value:t.form.name},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()},input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.$page.errors.has("name")?n("span",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("name")))]):t._e()])]),t._v(" "),n("div",{staticClass:"bg-gray-50 p-4 sm:px-6 sm:py-4 sm:flex sm:flex-row-reverse"},[n("button",{staticClass:"btn btn-indigo",attrs:{type:"button",disabled:t.form.processing||""===t.form.name},on:{click:function(e){return t.submit()}}},[t._v("\n                Save Column\n            ")]),t._v(" "),n("button",{staticClass:"btn btn-flat mr-3",attrs:{type:"button"},on:{click:function(e){return t.hide()}}},[t._v("\n                Cancel\n            ")])])])])}),[],!1,null,null,null);e.default=i.exports},iOOf:function(t,e,n){"use strict";var s=n("wRFS");n.d(e,"a",(function(){return s.a}))}}]);
//# sourceMappingURL=40.js.map?id=e38ac68e15ae5f5893eb