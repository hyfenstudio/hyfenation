(window.webpackJsonp=window.webpackJsonp||[]).push([[20,46,55,56],{"5ELV":function(t,e,s){"use strict";s.r(e);var a=s("MQ60"),r=s.n(a),o=s("r2d4"),i=s("Ridq"),n=s("QZnT"),l={components:{VDraggable:r.a,VCardTask:o.default,VDropdown:i.a},props:{column:{type:Object,required:!0}},data:function(){return{addTaskForm:new n.b({content:null,visible:!1})}},methods:{showAddTaskForm:function(){var t=this;this.addTaskForm.reset(),this.addTaskForm.visible=!0,this.$nextTick((function(){t.$refs.input_new_task.focus()}))},hideAddTaskForm:function(){this.addTaskForm.reset()},storeTask:function(){var t=this;this.$inertia.post(route("app:project.tasks.store",{project:this.$page.project.uuid,column:this.column.uuid}),{content:this.addTaskForm.content}).then((function(){t.$page.errors.none()&&t.hideAddTaskForm()}))}}},c=s("KHd+"),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column max-w-xs w-full flex-shrink-0 rounded-lg mr-3"},[s("div",{staticClass:"flex flex-col h-full rounded-lg shadow-sm bg-gray-200"},[s("div",{staticClass:"flex items-center"},[s("span",{staticClass:"font-bold text-sm text-gray-700 truncate px-4 py-4"},[t._v(t._s(t.column.name))]),t._v(" "),s("div",{staticClass:"ml-auto flex items-center pr-3"},[s("button",{staticClass:"flex items-center p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600",on:{click:function(e){return t.showAddTaskForm()}}},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"}})])]),t._v(" "),s("v-dropdown",{scopedSlots:t._u([{key:"button",fn:function(){return[s("button",{staticClass:"flex items-center p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"w-48 rounded-md bg-white shadow-xs"},[s("div",{staticClass:"py-1"},[s("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("column-edit",t.column)}}},[t._v("\n                                    Edit\n                                ")]),t._v(" "),s("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("column-delete",t.column)}}},[t._v("\n                                    Delete\n                                ")])])])]},proxy:!0}])})],1)]),t._v(" "),s("div",{staticClass:"flex flex-col h-full px-4 overflow-y-auto"},[t.addTaskForm.visible?s("div",{staticClass:"flex flex-col mb-4 mt-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.addTaskForm.content,expression:"addTaskForm.content"}],ref:"input_new_task",staticClass:"form-input",attrs:{placeholder:"Write task"},domProps:{value:t.addTaskForm.content},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.storeTask()},input:function(e){e.target.composing||t.$set(t.addTaskForm,"content",e.target.value)}}}),t._v(" "),s("div",{staticClass:"flex justify-end mt-3"},[s("button",{staticClass:"btn btn-link text-xs px-4 py-1 mr-2",attrs:{type:"button"},on:{click:function(e){return t.hideAddTaskForm()}}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn btn-blue text-xs px-4 py-1",attrs:{disabled:null===t.addTaskForm.content,type:"button"},on:{click:function(e){return t.storeTask()}}},[t._v("Submit")])])]):t._e(),t._v(" "),s("v-draggable",t._b({staticClass:"flex flex-col flex-1",attrs:{"data-column":t.column.uuid,"ghost-class":"draggable-ghost",group:"tasks"},on:{end:function(e){return t.$emit("tasks-sort-change",e)}},model:{value:t.column.tasks,callback:function(e){t.$set(t.column,"tasks",e)},expression:"column.tasks"}},"v-draggable",{fallbackTolerance:5},!1),t._l(t.column.tasks,(function(e){return s("v-card-task",{key:e.uuid,attrs:{task:e},on:{click:function(s){return t.$emit("task-click",e)}}})})),1)],1)])])}),[],!1,null,null,null);e.default=u.exports},"5JsX":function(t,e,s){"use strict";s.r(e);var a=s("MQ60"),r=s.n(a),o=s("rpDG"),i=s("5ELV"),n=s("pMeE"),l=s("RXpa"),c=s("VDKg"),u=s("J07/"),d=s("Ridq"),m=s("VVrn"),p={metaInfo:function(){return{title:this.project.name}},components:{VDraggable:r.a,VAppDefaultLayout:o.default,VCardProjectColumn:i.default,VDropdown:d.a,VAlert:m.a},props:{project:{type:Object,required:!0}},methods:{showTaskModal:function(t){this.$modal(n.default,{users:this.$page.users,projectUuid:this.project.uuid,taskUuid:t.uuid,userUuid:t.user.uuid,content:t.content,isCompleted:t.is_completed,dueDate:t.due_date,priority:t.priority})},showAddColumnModal:function(){this.$modal(c.default)},showEditColumnModal:function(t){this.$modal(l.default,{uuid:t.uuid,name:t.name})},showDeleteColumnModal:function(t){var e=this;this.$confirm("Do you want to permanently delete this column?",{confirmText:"Delete"}).then((function(s){e.$inertia.delete(route("app:project.columns.destroy",{project:e.project.uuid,column:t.uuid})).then((function(){s.hide()}))}))},showEditProjectModal:function(){this.$modal(u.default)},showDeleteProjectModal:function(){var t,e,s=this;"archived"===this.project.status?(t="Do you want to permanently delete ".concat(this.project.name,"?"),e="Delete"):(t="Do you want to archive ".concat(this.project.name,"?"),e="Archive"),this.$confirm(t,{confirmButtonText:e}).then((function(t){s.$inertia.delete(route("app:projects.destroy",{project:s.project.uuid})).then((function(){t.hide()}))}))},showRestoreProjectModal:function(){var t=this;this.$confirm("Do you want to restore this project?",{confirmButtonText:"Restore",confirmButtonColor:"indigo"}).then((function(e){t.$inertia.put(route("app:projects.restore",{project:t.project.uuid})).then((function(){return e.hide()}))}))},onColumnSortChange:function(){var t=this;this.project.columns.forEach((function(e,s){t.project.columns[s].index=s})),this.$inertia.put(route("app:project.columns.sort.update",{project:this.project.uuid}),{columns:this.project.columns.map((function(t){return t.uuid}))})},onTasksSortChange:function(t){var e=t.from.dataset.column,s=t.to.dataset.column;this.sortTasks(e),e!==s&&this.sortTasks(s)},sortTasks:function(t){var e=this,s=this.project.columns.findIndex((function(e){return e.uuid===t})),a=this.project.columns[s].tasks.length-1;this.project.columns[s].tasks.forEach((function(t,r){e.project.columns[s].tasks[r].index=a,a--})),this.$inertia.put(route("app:project.tasks.sort.update",{project:this.project.uuid,column:t}),{tasks:this.project.columns[s].tasks.map((function(t){return t.uuid})).reverse()})}}},f=s("KHd+"),v=Object(f.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-default-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[s("h1",{staticClass:"text-2xl font-semibold text-gray-900"},[t._v(t._s(t.project.name))]),t._v(" "),s("div",{staticClass:"ml-auto"},[s("v-dropdown",{scopedSlots:t._u([{key:"button",fn:function(){return[s("button",{staticClass:"flex items-center p-1 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"w-48 rounded-md bg-white shadow-xs"},[s("div",{staticClass:"py-1"},[t.$page.can.update_project?s("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showEditProjectModal()}}},[t._v("\n                                Edit\n                            ")]):t._e(),t._v(" "),t.project.is_favorite?s("inertia-link",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:t.route("app:favorite-projects.destroy",{project:t.project.uuid}),method:"delete"}},[t._v("\n                                Remove Favorite\n                            ")]):"archived"!==t.project.status?s("inertia-link",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{data:{project:t.project.uuid},href:t.route("app:favorite-projects.store"),method:"post"}},[t._v("\n                                Add Favorite\n                            ")]):t._e(),t._v(" "),t.project.is_completed&&"archived"!==t.project.status?s("inertia-link",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:t.route("app:projects.complete.destroy",{project:t.project.uuid}),method:"delete"}},[t._v("\n                                Mark as Incomplete\n                            ")]):t.project.is_completed||"archived"===t.project.status?t._e():s("inertia-link",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:t.route("app:projects.complete.store",{project:t.project.uuid}),method:"post"}},[t._v("\n                                Mark as Completed\n                            ")]),t._v(" "),t.$page.can.delete_project||t.$page.can.archive_project?s("a",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showDeleteProjectModal()}}},["archived"===t.project.status?s("span",[t._v("Delete")]):s("span",[t._v("Archive")])]):t._e(),t._v(" "),(t.$page.can.delete_project||t.$page.can.archive_project)&&t.project.is_archived?s("a",{staticClass:"flex items-center px-4 py-2 text-sm leading-tight hover:bg-gray-200",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showRestoreProjectModal()}}},[t._v("\n                                Restore\n                            ")]):t._e()],1)])]},proxy:!0}])})],1)]},proxy:!0}])},[t._v(" "),t.$page.flash?s("div",{staticClass:"px-6"},[s("v-alert",{attrs:{dismissible:""}},[t._v(t._s(t.$page.flash))])],1):t._e(),t._v(" "),t.$page.errors.has("plan.limit")?s("div",{staticClass:"px-6"},[s("v-alert",{attrs:{variant:"warning",dismissible:""}},[t._v("\n            "+t._s(t.$page.errors.first("plan.limit"))+"\n        ")])],1):t._e(),t._v(" "),[s("v-draggable",t._b({staticClass:"flex flex-1 max-h-screen h-full overflow-x-auto px-6 pb-3 mx-2",attrs:{"ghost-class":"draggable-ghost",group:"columns",handle:".column"},on:{end:t.onColumnSortChange},model:{value:t.project.columns,callback:function(e){t.$set(t.project,"columns",e)},expression:"project.columns"}},"v-draggable",{fallbackTolerance:5},!1),[t._l(t.$page.project.columns,(function(e){return s("v-card-project-column",{key:e.uuid,attrs:{column:e},on:{"task-click":t.showTaskModal,"tasks-sort-change":t.onTasksSortChange,"column-edit":t.showEditColumnModal,"column-delete":t.showDeleteColumnModal}})})),t._v(" "),s("div",{staticClass:"max-w-xs w-full flex-shrink-0 rounded-lg px-2"},[s("div",{staticClass:"flex flex-col h-full rounded-lg"},[s("a",{staticClass:"flex items-center justify-center text-sm rounded-lg border border-dashed p-6 text-gray-600 hover:text-gray-700 hover:border-gray-400 focus:outline-none",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showAddColumnModal()}}},[s("div",{staticClass:"w-4 h-4 overflow-hidden mr-3"},[s("svg",{staticClass:"w-full h-full fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"}})])]),t._v("\n\n                        Add Column\n                    ")])])])],2)]],2)}),[],!1,null,null,null);e.default=v.exports},"J07/":function(t,e,s){"use strict";s.r(e);var a=s("emqX"),r=s("vY6u"),o=s("iOOf"),i=s("lduI"),n=s("zRJh"),l=s("QZnT"),c={components:{VInputColor:a.a,VInputDate:r.a,VModal:o.a,VTabs:n.b,VTab:n.a,VRenderlessSelect:i.a},data:function(){return{form:new l.b({name:"",description:"",timeline:"",color:"indigo",visibility:1,team_members:[]})}},mounted:function(){this.form.name=this.$page.project.name,this.form.description=this.$page.project.description,this.form.timeline=this.$page.project.timeline,this.form.color=this.$page.project.color,this.form.visibility=this.$page.project.visibility,this.form.team_members=this.$page.project.team_members},methods:{show:function(){this.$refs.modal.show()},hide:function(){this.$refs.modal.hide()},submit:function(){var t=this;this.form.processing=!0,this.$inertia.put(route("app:projects.update",{project:this.$page.project.uuid}),{name:this.form.name,description:this.form.description,timeline:this.form.timeline,color:this.form.color,visibility:this.form.visibility,team_members:this.form.team_members}).then((function(){t.form.processing=!1,t.$page.errors.none()&&t.hide()}))}}},u=s("KHd+"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-modal",{ref:"modal"},[s("div",{staticClass:"bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"},[s("div",{staticClass:"p-6"},[s("h3",{staticClass:"font-medium text-lg"},[t._v("Edit Project")])]),t._v(" "),s("v-tabs",[s("v-tab",{attrs:{name:"General Info",active:""}},[s("div",{staticClass:"flex flex-col px-6 pt-6 pb-6"},[s("div",{staticClass:"mb-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"project-name"}},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input",attrs:{id:"project-name",placeholder:"Project Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.$page.errors.has("name")?s("p",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("name")))]):t._e()])]),t._v(" "),s("div",{staticClass:"mb-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"project-description"}},[t._v("Description")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"form-input",attrs:{id:"project-description",placeholder:"Project Description"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}}),t._v(" "),t.$page.errors.has("description")?s("p",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("description")))]):t._e()])]),t._v(" "),s("div",{staticClass:"mb-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"project-timeline"}},[t._v("Timeline")]),t._v(" "),s("v-input-date",{attrs:{id:"project-timeline",mode:"range",placeholder:"YYYY-MM-DD to YYYY-MM-DD"},model:{value:t.form.timeline,callback:function(e){t.$set(t.form,"timeline",e)},expression:"form.timeline"}})],1)]),t._v(" "),s("div",{staticClass:"mb-6"},[s("v-input-color",{attrs:{label:"Project Color"},model:{value:t.form.color,callback:function(e){t.$set(t.form,"color",e)},expression:"form.color"}})],1),t._v(" "),s("div",[s("div",{staticClass:"relative flex items-start"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.visibility,expression:"form.visibility",modifiers:{number:!0}}],staticClass:"form-radio",attrs:{id:"visibility-only-me",type:"radio",value:"1"},domProps:{checked:t._q(t.form.visibility,t._n("1"))},on:{change:function(e){t.$set(t.form,"visibility",t._n("1"))}}})]),t._v(" "),s("div",{staticClass:"pl-7 text-sm leading-5"},[s("label",{staticClass:"font-medium text-gray-700",attrs:{for:"visibility-only-me"}},[t._v("\n                                    Only me\n                                    "),s("span",{staticClass:"block font-normal text-gray-500"},[t._v("You only can see this project")])])])]),t._v(" "),s("div",{staticClass:"relative flex items-start mt-4"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.visibility,expression:"form.visibility",modifiers:{number:!0}}],staticClass:"form-radio",attrs:{id:"visibility-team-members",type:"radio",value:"2"},domProps:{checked:t._q(t.form.visibility,t._n("2"))},on:{change:function(e){t.$set(t.form,"visibility",t._n("2"))}}})]),t._v(" "),s("div",{staticClass:"pl-7 text-sm leading-5"},[s("label",{staticClass:"font-medium text-gray-700",attrs:{for:"visibility-team-members"}},[t._v("\n                                    Team Members\n                                    "),s("span",{staticClass:"block font-normal text-gray-500"},[t._v("Only selected team members can see this project")])])])]),t._v(" "),s("div",{staticClass:"relative flex items-start mt-4"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.form.visibility,expression:"form.visibility",modifiers:{number:!0}}],staticClass:"form-radio",attrs:{id:"visibility-organization",type:"radio",value:"3"},domProps:{checked:t._q(t.form.visibility,t._n("3"))},on:{change:function(e){t.$set(t.form,"visibility",t._n("3"))}}})]),t._v(" "),s("div",{staticClass:"pl-7 text-sm leading-5"},[s("label",{staticClass:"font-medium text-gray-700",attrs:{for:"visibility-organization"}},[t._v("\n                                    Organization\n                                    "),s("span",{staticClass:"block font-normal text-gray-500"},[t._v("All members of this organization can see the project")])])])])])])]),t._v(" "),s("v-tab",{attrs:{name:"Team Members",disabled:2!==t.form.visibility}},[s("v-renderless-select",{attrs:{mode:"multiple","item-text":"name","item-value":"uuid",items:t.$page.users,"toggle-select":""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.items,r=e.search,o=e.isSelected,i=e.select;return s("div",{staticClass:"flex flex-col",staticStyle:{height:"530px"}},[s("div",{staticClass:"px-6 pt-6"},[s("input",{staticClass:"form-input",attrs:{placeholder:"Search Users.."},on:{input:function(t){return r(t.target.value)}}})]),t._v(" "),s("div",{staticClass:"mt-4 pb-2 flex flex-col overflow-y-auto"},t._l(a,(function(e){return s("a",{staticClass:"flex items-center px-6 py-3 hover:bg-gray-100",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),i(e)}}},[s("div",[o(e)?s("div",{staticClass:"flex items-center justify-center w-5 h-5 p-1 overflow-hidden rounded-full bg-green-400 text-green-100"},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M0 11l2-2 5 5L18 3l2 2L7 18z"}})])]):s("div",{staticClass:"flex items-center justify-center w-5 h-5 p-1 overflow-hidden rounded-full border"})]),t._v(" "),s("div",{staticClass:"flex flex-col ml-6"},[s("p",{staticClass:"text-sm leading-5 text-gray-700 group-hover:text-gray-900"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"text-xs leading-4 text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150"},[t._v(t._s(e.email))])]),t._v(" "),s("div",{staticClass:"ml-auto"},[s("img",{staticClass:"avatar avatar-sm",attrs:{src:e.avatar_url,alt:"avatar"}})])])})),0)])}}]),model:{value:t.form.team_members,callback:function(e){t.$set(t.form,"team_members",e)},expression:"form.team_members"}})],1)],1),t._v(" "),s("div",{staticClass:"bg-gray-50 p-4 sm:px-6 sm:py-4 sm:flex sm:flex-row-reverse"},[s("button",{staticClass:"btn btn-indigo",attrs:{type:"button",disabled:t.form.processing},on:{click:function(e){return t.submit()}}},[t._v("\n                Save Project\n            ")]),t._v(" "),s("button",{staticClass:"btn btn-flat mr-3",attrs:{type:"button"},on:{click:function(e){return t.hide()}}},[t._v("\n                Cancel\n            ")])])],1)])}),[],!1,null,null,null);e.default=d.exports},RXpa:function(t,e,s){"use strict";s.r(e);var a=s("iOOf"),r=s("QZnT"),o={components:{VModal:a.a},props:{uuid:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{form:new r.b({uuid:this.uuid,name:this.name})}},methods:{show:function(){this.$refs.modal.show()},hide:function(){this.$refs.modal.hide()},submit:function(){var t=this;this.form.processing=!0,this.$inertia.put(route("app:project.columns.update",{project:this.$page.project.uuid,column:this.form.uuid}),{name:this.form.name}).then((function(){t.form.processing=!1,t.$page.errors.none()&&(t.hide(),t.form.reset())}))}}},i=s("KHd+"),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-modal",{ref:"modal"},[s("div",{staticClass:"bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"},[s("div",{staticClass:"p-6"},[s("h3",{staticClass:"font-medium text-lg"},[t._v("Create Column")])]),t._v(" "),s("div",{staticClass:"p-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input",domProps:{value:t.form.name},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()},input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.$page.errors.has("name")?s("span",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("name")))]):t._e()])]),t._v(" "),s("div",{staticClass:"bg-gray-50 p-4 sm:px-6 sm:py-4 sm:flex sm:flex-row-reverse"},[s("button",{staticClass:"btn btn-indigo",attrs:{type:"button",disabled:t.form.processing||""===t.form.name},on:{click:function(e){return t.submit()}}},[t._v("\n                Save Column\n            ")]),t._v(" "),s("button",{staticClass:"btn btn-flat mr-3",attrs:{type:"button"},on:{click:function(e){return t.hide()}}},[t._v("\n                Cancel\n            ")])])])])}),[],!1,null,null,null);e.default=n.exports},VDKg:function(t,e,s){"use strict";s.r(e);var a=s("iOOf"),r=s("QZnT"),o={components:{VModal:a.a},data:function(){return{form:new r.b({name:""})}},methods:{show:function(){this.$refs.modal.show()},hide:function(){this.$refs.modal.hide()},submit:function(){var t=this;this.form.processing=!0,this.$inertia.post(route("app:project.columns.store",{project:this.$page.project.uuid}),this.form.data()).then((function(){t.form.processing=!1,t.$page.errors.none()&&(t.hide(),t.form.reset())}))}}},i=s("KHd+"),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-modal",{ref:"modal"},[s("div",{staticClass:"bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"},[s("div",{staticClass:"p-6"},[s("h3",{staticClass:"font-medium text-lg"},[t._v("Create Column")])]),t._v(" "),s("div",{staticClass:"p-6"},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label"},[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-input",domProps:{value:t.form.name},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()},input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.$page.errors.has("name")?s("span",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("name")))]):t._e()])]),t._v(" "),s("div",{staticClass:"bg-gray-50 p-4 sm:px-6 sm:py-4 sm:flex sm:flex-row-reverse"},[s("button",{staticClass:"btn btn-indigo",attrs:{type:"button",disabled:t.form.processing||""===t.form.name},on:{click:function(e){return t.submit()}}},[t._v("\n                Save Column\n            ")]),t._v(" "),s("button",{staticClass:"btn btn-flat mr-3",attrs:{type:"button"},on:{click:function(e){return t.hide()}}},[t._v("\n                Cancel\n            ")])])])])}),[],!1,null,null,null);e.default=n.exports},emqX:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var a={props:{value:{type:String,default:null},label:{type:String,default:null}},data:function(){return{color:this.value,colors:["blue","red","green","indigo","orange","purple","teal","pink"]}},methods:{select:function(t){this.color=t,this.$emit("input",this.color)}}},r=s("KHd+"),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"block text-sm font-medium leading-5 text-gray-700",domProps:{textContent:t._s(t.label)}}):t._e(),t._v(" "),s("div",{staticClass:"flex flex-wrap items-center mt-1 -mx-1"},t._l(t.colors,(function(e){return s("div",{staticClass:"px-1"},[s("a",{staticClass:"bg-gray-600 flex items-center text-white text-xs justify-center w-6 h-6 overflow-hidden rounded-md focus:outline-none focus:shadow-outline-blue",class:["bg-"+e+"-400"],attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.select(e)}}},[e===t.color?s("svg",{staticClass:"w-4 h-4 fill-current inline-block",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 11l2-2 5 5L18 3l2 2L7 18z"}})]):t._e()])])})),0)])}),[],!1,null,null,null).exports},r2d4:function(t,e,s){"use strict";s.r(e);var a={props:{task:{type:Object,required:!0}}},r=s("KHd+"),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"flex flex-col bg-white rounded-lg shadow mb-3 select-none focus:outline-none",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$emit("click",t.task)}}},[t.task.is_completed?s("div",{staticClass:"flex items-center py-2 px-4 rounded-t-lg bg-green-100 text-green-500 text-xs"},[s("svg",{staticClass:"w-3 h-3 mr-1.5",attrs:{height:"100%",viewBox:"0 0 20 20",width:"100%"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("circle",{attrs:{cx:"10",cy:"10",fill:"currentColor",r:"10"}}),t._v(" "),s("path",{attrs:{d:"M7.76 11.911L5.632 9.782a.5.5 0 0 0-.707 0l-.848.85a.5.5 0 0 0 0 .706l3.685 3.684 7.693-7.69a.5.5 0 0 0 0-.708l-.848-.848a.5.5 0 0 0-.707 0L7.76 11.91z",fill:"#FFF","fill-rule":"nonzero"}})])]),t._v("\n\n        Completed\n    ")]):t._e(),t._v(" "),s("span",{staticClass:"text-sm p-4"},[t._v("\n        "+t._s(t.task.content)+"\n    ")]),t._v(" "),t.task.due_date||t.task.sub_tasks.total||null!==t.task.user.name?s("div",{staticClass:"flex items-center text-xs justify-between text-gray-500 px-4 pb-4"},[s("div",{staticClass:"flex items-center -mx-3"},[t.task.priority?s("div",{staticClass:"px-3",class:{"text-red-700":4===t.task.priority,"text-orange-500":3===t.task.priority,"text-blue-500":2===t.task.priority}},[s("svg",{staticClass:"w-3 h-3 flex-shrink-0 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z"}})])]):t._e(),t._v(" "),t.task.due_date?s("div",{staticClass:"flex items-center px-3"},[s("svg",{staticClass:"w-4 h-4 fill-current mr-1.5",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})]),t._v("\n\n                "+t._s(t.task.due_date)+"\n            ")]):t._e(),t._v(" "),t.task.sub_tasks.total>0?s("div",{staticClass:"flex items-center px-3"},[s("svg",{staticClass:"w-4 h-4 fill-current mr-1.5",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]),t._v("\n\n                "+t._s(t.task.sub_tasks.completed+"/"+t.task.sub_tasks.total)+"\n            ")]):t._e()]),t._v(" "),null!==t.task.user.name?s("div",{staticClass:"ml-auto"},[s("img",{staticClass:"avatar avatar-xs",attrs:{src:t.task.user.avatar_url,alt:"avatar"}})]):t._e()]):t._e()])}),[],!1,null,null,null);e.default=o.exports},rpDG:function(t,e,s){"use strict";s.r(e);var a={components:{VNavMenu:s("sHez").default},data:function(){return{sidebarOpen:!1}}},r=s("KHd+"),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-screen flex overflow-hidden bg-gray-100",attrs:{id:"app"}},[s("div",{staticClass:"md:hidden"},[s("div",{staticClass:"fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300",class:{"opacity-75 pointer-events-auto":t.sidebarOpen,"opacity-0 pointer-events-none":!t.sidebarOpen},on:{click:function(e){t.sidebarOpen=!1}}}),t._v(" "),s("div",{staticClass:"fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300 ",class:{"translate-x-0":t.sidebarOpen,"-translate-x-full":!t.sidebarOpen}},[s("div",{staticClass:"absolute top-0 right-0 -mr-14 p-1"},[t.sidebarOpen?s("button",{staticClass:"flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600",on:{click:function(e){t.sidebarOpen=!1}}},[s("svg",{staticClass:"h-6 w-6 text-white",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]):t._e()]),t._v(" "),s("v-nav-menu")],1)]),t._v(" "),s("div",{staticClass:"hidden md:flex md:flex-shrink-0"},[s("div",{staticClass:"flex flex-col w-64 bg-gray-800"},[s("v-nav-menu")],1)]),t._v(" "),s("div",{staticClass:"flex flex-col w-0 flex-1 overflow-hidden"},[s("div",{staticClass:"md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3"},[s("button",{staticClass:"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150",on:{click:function(e){e.stopPropagation(),t.sidebarOpen=!0}}},[s("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),s("main",{staticClass:"flex flex-col flex-1 relative z-0 overflow-y-auto pt-6 focus:outline-none",attrs:{tabindex:"0"}},[s("div",{staticClass:"flex items-center px-4 mb-4 sm:px-6 lg:px-8"},[t._t("header")],2),t._v(" "),t._t("default")],2)])])}),[],!1,null,null,null);e.default=o.exports},sHez:function(t,e,s){"use strict";s.r(e);var a=s("KHd+"),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-0 flex-1 flex flex-col pb-4 overflow-y-auto"},[s("div",{staticClass:"flex items-center flex-shrink-0 bg-gray-900 py-4 px-4 mb-4"},[s("inertia-link",{attrs:{href:t.route("app:dashboard")}},[s("img",{staticClass:"h-8 w-auto select-none",attrs:{src:t.$page.logo_dark,alt:"logo"}})])],1),t._v(" "),s("div",{staticClass:"flex-shrink-0 flex px-6 pt-1"},[s("inertia-link",{staticClass:"flex-shrink-0 group block focus:outline-none",attrs:{href:t.route("app:profile.edit")}},[s("div",{staticClass:"flex items-center"},[s("div",[s("img",{staticClass:"inline-block h-9 w-9 rounded-full",attrs:{src:t.$page.user.avatar_url,alt:t.$page.user.name}})]),t._v(" "),s("div",{staticClass:"ml-3"},[s("p",{staticClass:"text-sm leading-5 font-medium text-white"},[t._v("\n                        "+t._s(t.$page.user.name)+"\n                    ")]),t._v(" "),s("p",{staticClass:"text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150"},[t._v("\n                        View profile\n                    ")])])])])],1),t._v(" "),s("nav",{staticClass:"mt-5 bg-gray-800"},[s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:dashboard")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:dashboard")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]),t._v("\n\n            Dashboard\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:projects.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:projects.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"}})]),t._v("\n\n            Projects\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:tasks.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:tasks.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]),t._v("\n\n            My Tasks\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:calendar.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:calendar.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})]),t._v("\n\n            Calendar\n        ")])],1),t._v(" "),s("nav",{staticClass:"flex flex-col flex-1 mt-3 bg-gray-800"},[t._m(0),t._v(" "),t._l(t.$page.favorite_projects,(function(e){return s("inertia-link",{key:e.uuid,staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:projects.show",{project:e.uuid})}},[s("div",{staticClass:"w-3 h-3 overflow-hidden rounded-full mr-3"},[s("div",{staticClass:"w-full h-full",class:["bg-"+e.color+"-400"]})]),t._v("\n            "+t._s(e.name)+"\n        ")])}))],2),t._v(" "),s("nav",[s("inertia-link",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:users.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v("\n\n            Settings\n        ")]),t._v(" "),s("a",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("logout")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"}})]),t._v("\n\n            Logout\n        ")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-6 mb-2"},[e("span",{staticClass:"text-sm text-gray-500 font-semibold"},[this._v("Favorites")])])}],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=20.js.map?id=fb53a96654b7706813d6