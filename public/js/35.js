(window.webpackJsonp=window.webpackJsonp||[]).push([[35,56],{"5ELV":function(t,e,s){"use strict";s.r(e);var a=s("MQ60"),n=s.n(a),r=s("r2d4"),o=s("Ridq"),l=s("QZnT"),i={components:{VDraggable:n.a,VCardTask:r.default,VDropdown:o.a},props:{column:{type:Object,required:!0}},data:function(){return{addTaskForm:new l.b({content:null,visible:!1})}},methods:{showAddTaskForm:function(){var t=this;this.addTaskForm.reset(),this.addTaskForm.visible=!0,this.$nextTick((function(){t.$refs.input_new_task.focus()}))},hideAddTaskForm:function(){this.addTaskForm.reset()},storeTask:function(){var t=this;this.$inertia.post(route("app:project.tasks.store",{project:this.$page.project.uuid,column:this.column.uuid}),{content:this.addTaskForm.content}).then((function(){t.$page.errors.none()&&t.hideAddTaskForm()}))}}},c=s("KHd+"),u=Object(c.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column max-w-xs w-full flex-shrink-0 rounded-lg mr-3"},[s("div",{staticClass:"flex flex-col h-full rounded-lg shadow-sm bg-gray-200"},[s("div",{staticClass:"flex items-center"},[s("span",{staticClass:"font-bold text-sm text-gray-700 truncate px-4 py-4"},[t._v(t._s(t.column.name))]),t._v(" "),s("div",{staticClass:"ml-auto flex items-center pr-3"},[s("button",{staticClass:"flex items-center p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600",on:{click:function(e){return t.showAddTaskForm()}}},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"}})])]),t._v(" "),s("v-dropdown",{scopedSlots:t._u([{key:"button",fn:function(){return[s("button",{staticClass:"flex items-center p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"w-48 rounded-md bg-white shadow-xs"},[s("div",{staticClass:"py-1"},[s("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("column-edit",t.column)}}},[t._v("\n                                    Edit\n                                ")]),t._v(" "),s("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("column-delete",t.column)}}},[t._v("\n                                    Delete\n                                ")])])])]},proxy:!0}])})],1)]),t._v(" "),s("div",{staticClass:"flex flex-col h-full px-4 overflow-y-auto"},[t.addTaskForm.visible?s("div",{staticClass:"flex flex-col mb-4 mt-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addTaskForm.content,expression:"addTaskForm.content"}],ref:"input_new_task",staticClass:"form-input",attrs:{placeholder:"Write task"},domProps:{value:t.addTaskForm.content},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.storeTask()},input:function(e){e.target.composing||t.$set(t.addTaskForm,"content",e.target.value)}}}),t._v(" "),s("div",{staticClass:"flex justify-end mt-3"},[s("button",{staticClass:"btn btn-link text-xs px-4 py-1 mr-2",attrs:{type:"button"},on:{click:function(e){return t.hideAddTaskForm()}}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn btn-blue text-xs px-4 py-1",attrs:{disabled:null===t.addTaskForm.content,type:"button"},on:{click:function(e){return t.storeTask()}}},[t._v("Submit")])])]):t._e(),t._v(" "),s("v-draggable",t._b({staticClass:"flex flex-col flex-1",attrs:{"data-column":t.column.uuid,"ghost-class":"draggable-ghost",group:"tasks"},on:{end:function(e){return t.$emit("tasks-sort-change",e)}},model:{value:t.column.tasks,callback:function(e){t.$set(t.column,"tasks",e)},expression:"column.tasks"}},"v-draggable",{fallbackTolerance:5},!1),t._l(t.column.tasks,(function(e){return s("v-card-task",{key:e.uuid,attrs:{task:e},on:{click:function(s){return t.$emit("task-click",e)}}})})),1)],1)])])}),[],!1,null,null,null);e.default=u.exports},Ridq:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var a={props:{placement:{type:String,default:"right-0"}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}},mounted:function(){var t=this;document.addEventListener("click",(function(e){e.stopPropagation(),t.$el.contains(e.target)||(t.open=!1)}))}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative inline-block text-left",on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.open=!1}}},[s("div",{on:{click:function(e){return t.toggle()}}},[t._t("button")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"origin-top-right absolute mt-2 w-auto rounded-md shadow-lg z-40",class:[t.placement]},[t._t("content")],2)])}),[],!1,null,null,null).exports},r2d4:function(t,e,s){"use strict";s.r(e);var a={props:{task:{type:Object,required:!0}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"flex flex-col bg-white rounded-lg shadow mb-3 select-none focus:outline-none",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("click",t.task)}}},[t.task.is_completed?s("div",{staticClass:"flex items-center py-2 px-4 rounded-t-lg bg-green-100 text-green-500 text-xs"},[s("svg",{staticClass:"w-3 h-3 mr-1.5",attrs:{height:"100%",viewBox:"0 0 20 20",width:"100%"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("circle",{attrs:{cx:"10",cy:"10",fill:"currentColor",r:"10"}}),t._v(" "),s("path",{attrs:{d:"M7.76 11.911L5.632 9.782a.5.5 0 0 0-.707 0l-.848.85a.5.5 0 0 0 0 .706l3.685 3.684 7.693-7.69a.5.5 0 0 0 0-.708l-.848-.848a.5.5 0 0 0-.707 0L7.76 11.91z",fill:"#FFF","fill-rule":"nonzero"}})])]),t._v("\n\n        Completed\n    ")]):t._e(),t._v(" "),s("span",{staticClass:"text-sm p-4"},[t._v("\n        "+t._s(t.task.content)+"\n    ")]),t._v(" "),t.task.due_date||t.task.sub_tasks.total||null!==t.task.user.name?s("div",{staticClass:"flex items-center text-xs justify-between text-gray-500 px-4 pb-4"},[s("div",{staticClass:"flex items-center -mx-3"},[t.task.priority?s("div",{staticClass:"px-3",class:{"text-red-700":4===t.task.priority,"text-orange-500":3===t.task.priority,"text-blue-500":2===t.task.priority}},[s("svg",{staticClass:"w-3 h-3 flex-shrink-0 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z"}})])]):t._e(),t._v(" "),t.task.due_date?s("div",{staticClass:"flex items-center px-3"},[s("svg",{staticClass:"w-4 h-4 fill-current mr-1.5",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})]),t._v("\n\n                "+t._s(t.task.due_date)+"\n            ")]):t._e(),t._v(" "),t.task.sub_tasks.total>0?s("div",{staticClass:"flex items-center px-3"},[s("svg",{staticClass:"w-4 h-4 fill-current mr-1.5",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]),t._v("\n\n                "+t._s(t.task.sub_tasks.completed+"/"+t.task.sub_tasks.total)+"\n            ")]):t._e()]),t._v(" "),null!==t.task.user.name?s("div",{staticClass:"ml-auto"},[s("img",{staticClass:"avatar avatar-xs",attrs:{src:t.task.user.avatar_url,alt:"avatar"}})]):t._e()]):t._e()])}),[],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=35.js.map?id=2c1a8ffd58701e619358