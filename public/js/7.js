(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,19,46,48,55,60],{"38S9":function(t,e,s){"use strict";s.r(e);var a={props:{value:{type:String,default:null}},data:function(){return{content:this.value}},mounted:function(){this.autosize()},watch:{value:function(t){this.content=t}},methods:{autosize:function(){this.$el.style.height="inherit";var t=window.getComputedStyle(this.$el),e=parseInt(t.getPropertyValue("border-top-width"),10)+parseInt(t.getPropertyValue("padding-top"),10)+this.$el.scrollHeight+parseInt(t.getPropertyValue("padding-bottom"),10)+parseInt(t.getPropertyValue("border-bottom-width"),10);this.$el.style.height=e+"px"}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-textarea w-full block resize-none",domProps:{value:t.content},on:{input:[function(e){e.target.composing||(t.content=e.target.value)},function(e){t.autosize(),t.$emit("input",t.content)}]}})}),[],!1,null,null,null).exports,i=s("eeMe"),l=s.n(i),o={components:{VTextareaExapandable:r},props:{value:{type:String,default:null},taskUuid:{type:String,required:!0},projectUuid:{type:String,required:!0}},data:function(){return{content:this.value,attachments:[],dropzone:null}},watch:{value:function(t){this.content=t}},mounted:function(){var t=this;this.dropzone=new l.a(this.$refs.dz,{clickable:this.$refs.btn_attach,headers:{"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},url:route("app:project.task.attachments.store",{project:this.projectUuid,task:this.taskUuid}),previewTemplate:this.$refs.attachment.innerHTML}),this.dropzone.on("success",(function(e,s){e.previewElement.querySelector(".dz-progress").remove(),t.attachments.push(s.uuid)}))},methods:{submit:function(){var t=this;this.$inertia.post(route("app:project.task.comments.store",{project:this.projectUuid,task:this.taskUuid}),{content:this.content,attachments:this.attachments}).then((function(){t.$emit("submitted"),t.reset()}))},reset:function(){this.content="",this.attachments=[],this.dropzone.removeAllFiles(!0)}}},u=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col rounded-lg shadow-sm border border-gray-300"},[s("v-textarea-exapandable",{staticClass:"border-none shadow-none focus:outline-none focus:shadow-none rounded-lg",attrs:{placeholder:"Write somthing.."},on:{input:function(e){return t.$emit("input",t.content)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),s("div",{staticClass:"mt-2 px-3 pb-3 flex items-center justify-between"},[s("div",[s("button",{staticClass:"btn btn-sm btn-indigo",attrs:{type:"button",disabled:!t.content},on:{click:function(e){return t.submit()}}},[s("svg",{staticClass:"w-3 h-3 mr-1.5 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"}})]),t._v("\n                Send\n            ")])]),t._v(" "),s("div",[s("span",{staticClass:"btn-group shadow-none"},[s("button",{ref:"btn_attach",staticClass:"btn btn-sm btn-flat",attrs:{type:"button"}},[s("svg",{staticClass:"w-4 h-4",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{d:"M15 3H7a7 7 0 1 0 0 14h8v-2H7A5 5 0 0 1 7 5h8a3 3 0 0 1 0 6H7a1 1 0 0 1 0-2h8V7H7a3 3 0 1 0 0 6h8a5 5 0 0 0 0-10z"}})])])])])]),t._v(" "),s("div",{ref:"dz",staticClass:"flex flex-col"}),t._v(" "),s("script",{ref:"attachment",attrs:{type:"text/x-template"}},[t._v('\n        <div class="flex flex-col">\n            <div class="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">\n                <div class="w-0 flex-1 flex items-center">\n                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">\n                        <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path>\n                    </svg>\n\n                    <span class="ml-2 truncate" data-dz-name></span>\n                </div>\n\n                <div class="ml-4 flex-shrink-0">\n                    <button type="button" class="btn btn-flat btn-xs" data-dz-remove>\n                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 fill-current">\n                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n\n            <div class="dz-progress flex w-full h-1 rounded-b-lg px-4 mb-4">\n                <span class="dz-upload block bg-indigo-200" data-dz-uploadprogress></span>\n            </div>\n        </div>\n    ')])],1)}),[],!1,null,null,null);e.default=u.exports},P656:function(t,e,s){"use strict";s.r(e);var a=s("zRJh"),n=s("3+qG"),r=s("38S9"),i=s("q6nj"),l={components:{VTab:a.c,VEmptyView:n.default,VTaskCommentEditor:r.default,VTaskComment:i.default},props:{projectUuid:{type:String,required:!0},taskUuid:{type:String,required:!0}},data:function(){return{comments:[]}},mounted:function(){this.getComments()},methods:{onCommentSubmitted:function(){this.getComments(),this.$emit("new-comment")},getComments:function(){var t=this;axios.get(route("app:project.task.comments.index",{task:this.taskUuid,project:this.projectUuid})).then((function(e){t.comments=e.data}))}}},o=s("KHd+"),u=Object(o.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col"},[s("v-task-comment-editor",{attrs:{"task-uuid":t.taskUuid,"project-uuid":t.projectUuid},on:{submitted:t.onCommentSubmitted}}),t._v(" "),s("div",{staticClass:"flex flex-col mt-2"},[0===t.comments.length?s("div",{staticClass:"flex flex-col items-center"},[s("v-empty-view",{attrs:{message:"There are no comments to show here"}})],1):s("div",t._l(t.comments,(function(e){return s("v-task-comment",{key:e.uuid,attrs:{user:e.user,content:e.content,attachments:e.attachments,"created-at":e.created_at,"project-uuid":t.projectUuid,"task-uuid":t.taskUuid}})})),1)])],1)}),[],!1,null,null,null);e.default=u.exports},VVrn:function(t,e,s){"use strict";var a=s("yOFB");s.d(e,"a",(function(){return a.a}))},dNqZ:function(t,e,s){"use strict";s.r(e);var a=s("rpDG"),n=s("3Am6"),r=s("Gbwi"),i=s("iOEq"),l=s("pMeE"),o=s("VVrn"),u={metaInfo:{title:"Calendar"},components:{VAppDefaultLayout:a.default,VFullCalendar:n.a,VAlert:o.a},props:{users:{type:Array,required:!0}},data:function(){return{calendar:null,currentDate:"",calendarPlugins:[i.a,r.a]}},mounted:function(){this.calendar=this.$refs.calendar.getApi()},methods:{onEventClick:function(t){this.$modal(l.default,{users:this.users,projectUuid:t.extendedProps.project_uuid,taskUuid:t.extendedProps.uuid,content:t.title,isCompleted:t.extendedProps.is_completed,dueDate:moment(t.start).format("YYYY-MM-DD"),userUuid:t.extendedProps.user_uuid,priority:t.extendedProps.priority})},onEventDrop:function(t){this.$inertia.put(route("app:project.tasks.update",{project:t.extendedProps.project_uuid,task:t.extendedProps.uuid}),{content:t.title,due_date:moment(t.start).format("YYYY-MM-DD"),is_completed:t.extendedProps.is_completed,user_uuid:t.extendedProps.user_uuid,priority:t.extendedProps.priority})},onDatesRender:function(){var t=this;this.$nextTick((function(){t.currentDate=moment(t.calendar.getDate()).format("MMMM YYYY")}))}}},c=s("KHd+"),d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-default-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[s("div",{staticClass:"mr-6"},[s("div",{staticClass:"flex items-center"},[s("button",{staticClass:"btn btn-sm btn-white",attrs:{type:"button"},on:{click:function(e){return t.calendar.today()}}},[t._v("\n                    Today\n                ")]),t._v(" "),s("div",{staticClass:"btn-group ml-3"},[s("button",{staticClass:"btn btn-white",attrs:{type:"button"},on:{click:function(e){return t.calendar.prev()}}},[s("svg",{staticClass:"w-4 h-4",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"}})])]),t._v(" "),s("button",{staticClass:"btn btn-white",attrs:{type:"button"},on:{click:function(e){return t.calendar.next()}}},[s("svg",{staticClass:"w-4 h-4",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"}})])])])])]),t._v(" "),s("h1",{staticClass:"text-lg font-semibold ml-3 sm:ml-0"},[t._v(t._s(t.currentDate))])]},proxy:!0}])},[t._v(" "),t.$page.errors.has("plan.limit")?s("div",{staticClass:"px-8 mt-4"},[s("v-alert",{attrs:{variant:"warning",show:""}},[t._v("\n            "+t._s(t.$page.errors.first("plan.limit"))+"\n        ")])],1):t._e(),t._v(" "),[s("div",{staticClass:"flex flex-1 flex-col m-4 sm:m-6 lg:m-8"},[s("v-full-calendar",{ref:"calendar",staticClass:"bg-white shadow-sm",attrs:{"dates-render":t.onDatesRender,"display-event-time":!1,editable:!0,events:t.$page.events,header:!1,plugins:t.calendarPlugins,"default-view":"dayGridMonth",height:"parent"},on:{eventClick:function(e){return t.onEventClick(e.event)},eventDrop:function(e){return t.onEventDrop(e.event)}}})],1)]],2)}),[],!1,null,null,null);e.default=d.exports},iOOf:function(t,e,s){"use strict";var a=s("wRFS");s.d(e,"a",(function(){return a.a}))},lQT3:function(t,e,s){"use strict";s.r(e);var a={components:{VEmptyView:s("3+qG").default},props:{projectUuid:{type:String,required:!0},taskUuid:{type:String,required:!0}},data:function(){return{attachments:[]}},mounted:function(){this.getAttachments()},methods:{getAttachments:function(){var t=this;axios.get(route("app:project.task.attachments.index",{project:this.projectUuid,task:this.taskUuid})).then((function(e){t.attachments=e.data}))}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col"},[0===t.attachments.length?s("div",{staticClass:"flex flex-col items-center"},[s("v-empty-view",{attrs:{message:"There are no attachments to show here"}})],1):t._e(),t._v(" "),t.attachments.length>0?s("ul",t._l(t.attachments,(function(e){return s("li",{staticClass:"pl-3 pr-2 py-3 flex items-center justify-between text-sm leading-5 rounded-lg mb-1 hover:bg-gray-100"},[s("div",{staticClass:"w-0 flex-1 flex items-center"},[s("svg",{staticClass:"flex-shrink-0 h-5 w-5 text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clip-rule":"evenodd"}})]),t._v(" "),s("a",{staticClass:"hover:underline",attrs:{href:t.route("app:project.attachments.download",{project:t.projectUuid,attachment:e.uuid})}},[s("span",{staticClass:"ml-2 truncate"},[t._v(t._s(e.filename))])])]),t._v(" "),s("div",{staticClass:"ml-4 flex-shrink-0"},[s("a",{staticClass:"btn btn-flat btn-xs",attrs:{href:t.route("app:project.attachments.download",{project:t.projectUuid,attachment:e.uuid}),title:"Download"}},[s("svg",{staticClass:"w-3 h-3 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"}})])])])])})),0):t._e()])}),[],!1,null,null,null);e.default=r.exports},pMeE:function(t,e,s){"use strict";s.r(e);var a=s("iOOf"),n=s("TQgS"),r=s("vY6u"),i=s("Ridq"),l=s("VVrn"),o=s("zRJh"),u={components:{VRenderlessSelect:s("lduI").a,VDropdown:i.a},props:{value:{type:Number,default:null}},data:function(){return{priority:this.value,priorities:[{id:4,name:"Urgent"},{id:3,name:"High"},{id:2,name:"Medium"},{id:1,name:"Low"}]}},watch:{value:function(t){this.priority=t}}},c=s("KHd+"),d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-renderless-select",{attrs:{items:t.priorities,mode:"single","item-value":"id","item-text":"name","toggle-select":""},on:{input:function(e){return t.$emit("input",t.priority)}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.items,n=e.select,r=e.selected;return s("div",{staticClass:"flex items-center"},[s("v-dropdown",{attrs:{placement:"left-0"},scopedSlots:t._u([{key:"button",fn:function(){return[t._t("button",[s("a",{staticClass:"flex items-center text-xs text-gray-600 pl-6 hover:underline",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[s("svg",{staticClass:"w-4 h-4 mr-1.5 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z"}})]),t._v(" "),s("span",r?[t._v(t._s(r.name))]:[t._v("Priority")])])],null,{selected:r})]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"dropdown-menu"},t._l(a,(function(e){return s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),n(e)}}},[t._v("\n                        "+t._s(e.name)+"\n                    ")])})),0)]},proxy:!0}],null,!0)})],1)}}]),model:{value:t.priority,callback:function(e){t.priority=e},expression:"priority"}})}),[],!1,null,null,null).exports,p=s("2FHg"),v=s("QZnT"),m=s("MQ60"),f=s.n(m),h=s("P656"),x=s("qlrC"),g=s("lQT3"),b={components:{VModal:a.a,VTab:o.a,VTabs:o.b,VSelectTaskPriority:d,VSelectUser:p.a,VDropdown:i.a,VAlert:l.a,VInputTextEditable:n.a,VInputDate:r.a,VDraggable:f.a,VTabComments:h.default,VTabTasks:x.default,VTabAttachments:g.default},props:{users:{type:Array,default:[]},projectUuid:{type:String,required:!0},taskUuid:{type:String,required:!0},content:{type:String,required:!0},isCompleted:{type:Boolean,default:!1},userUuid:{type:String,default:null},priority:{type:Number,default:null},dueDate:{type:String,default:null}},data:function(){return{task:new v.b({uuid:this.uuid,content:this.content,is_completed:this.isCompleted,user_uuid:this.userUuid,due_date:this.dueDate,priority:this.priority})}},methods:{show:function(){this.$refs.modal.show()},hide:function(){this.$refs.modal.hide(),this.task.reset()},showDeleteTaskModal:function(){var t=this;this.$confirm("Do you want to delete this task permanently?").then((function(e){t.$inertia.delete(route("app:project.tasks.destroy",{project:t.projectUuid,task:t.taskUuid})).then((function(){e.hide()}))}))},updateTask:function(){this.$inertia.put(route("app:project.tasks.update",{project:this.projectUuid,task:this.taskUuid}),{content:this.task.content,due_date:this.task.due_date,is_completed:this.task.is_completed,user_uuid:this.task.user_uuid,priority:this.task.priority})},onNewCommentSubmitted:function(){this.$refs.tab_attachments.getAttachments()}}},w=Object(c.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-modal",{ref:"modal"},[s("div",{staticClass:"bg-white rounded-lg shadow-xl transform transition-all sm:max-w-xl sm:w-full"},[s("div",{staticClass:"flex items-center px-6 pt-6 pb-4"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.is_completed,expression:"task.is_completed"}],staticClass:"form-checkbox w-6 h-6 rounded-full text-green-400",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.task.is_completed)?t._i(t.task.is_completed,null)>-1:t.task.is_completed},on:{change:[function(e){var s=t.task.is_completed,a=e.target,n=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&t.$set(t.task,"is_completed",s.concat([null])):r>-1&&t.$set(t.task,"is_completed",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(t.task,"is_completed",n)},function(e){return t.updateTask()}]}})]),t._v(" "),s("div",{staticClass:"pl-3 w-full"},[s("v-input-text-editable",{on:{input:function(e){return t.updateTask()}},model:{value:t.task.content,callback:function(e){t.$set(t.task,"content",e)},expression:"task.content"}})],1),t._v(" "),s("div",{staticClass:"pl-3 flex items-center"},[s("v-dropdown",{scopedSlots:t._u([{key:"button",fn:function(){return[s("button",{staticClass:"btn btn-sm btn-flat"},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"dropdown-menu"},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showDeleteTaskModal()}}},[t._v("\n                                Delete\n                            ")])])]},proxy:!0}])}),t._v(" "),s("button",{staticClass:"btn btn-sm btn-flat",on:{click:function(e){return t.hide()}}},[s("svg",{staticClass:"w-4 h-4 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"}})])])],1)]),t._v(" "),s("div",{staticClass:"flex items-center px-6 pb-6 pr-6"},[s("v-select-user",{attrs:{users:t.users},on:{input:function(e){return t.updateTask()}},model:{value:t.task.user_uuid,callback:function(e){t.$set(t.task,"user_uuid",e)},expression:"task.user_uuid"}}),t._v(" "),s("v-dropdown",{attrs:{placement:"left-0"},scopedSlots:t._u([{key:"button",fn:function(){return[s("a",{staticClass:"flex items-center text-xs text-gray-600 pl-6 hover:underline",attrs:{href:"#"}},[s("svg",{staticClass:"w-4 h-4 mr-1.5 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})]),t._v(" "),t.task.due_date?s("span",[t._v(t._s(t.task.due_date))]):s("span",[t._v("Due Date")])])]},proxy:!0},{key:"content",fn:function(){return[s("v-input-date",{attrs:{inline:""},on:{input:function(e){return t.updateTask()}},model:{value:t.task.due_date,callback:function(e){t.$set(t.task,"due_date",e)},expression:"task.due_date"}})]},proxy:!0}])}),t._v(" "),s("v-select-task-priority",{on:{input:function(e){return t.updateTask()}},model:{value:t.task.priority,callback:function(e){t.$set(t.task,"priority",e)},expression:"task.priority"}})],1),t._v(" "),t.$page.errors.has("plan.limit")?s("div",{staticClass:"px-6"},[s("v-alert",{attrs:{variant:"warning",dismissible:""}},[t._v(t._s(t.$page.errors.first("plan.limit")))])],1):t._e(),t._v(" "),s("v-tabs",[s("v-tab",{staticClass:"p-6",attrs:{name:"Comments",active:""}},[s("v-tab-comments",{attrs:{"task-uuid":t.taskUuid,"project-uuid":t.projectUuid},on:{"new-comment":t.onNewCommentSubmitted}})],1),t._v(" "),s("v-tab",{staticClass:"p-6",attrs:{name:"Tasks"}},[s("v-tab-tasks",{attrs:{users:t.users,"task-uuid":t.taskUuid,"project-uuid":t.projectUuid}})],1),t._v(" "),s("v-tab",{staticClass:"p-6",attrs:{name:"Attachments"}},[s("v-tab-attachments",{ref:"tab_attachments",attrs:{"task-uuid":t.taskUuid,"project-uuid":t.projectUuid}})],1)],1)],1)])}),[],!1,null,null,null);e.default=w.exports},q6nj:function(t,e,s){"use strict";s.r(e);var a={components:{VTaskCommentEditor:s("38S9").default},props:{projectUuid:{type:String,required:!0},taskUuid:{type:String,required:!0},user:{type:Object,required:!0},createdAt:{type:String,required:!0},content:{type:String,required:!0},attachments:{type:Array,default:[]}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex mt-6 pb-4"},[s("div",{staticClass:"w-12 flex-shrink-0"},[s("img",{staticClass:"avatar avatar-sm",attrs:{src:t.user.avatar_url,alt:"avatar"}})]),t._v(" "),s("div",{staticClass:"flex flex-col flex-1"},[s("div",{staticClass:"flex items-center justify-between"},[s("div",[s("span",{staticClass:"text-sm leading-5 font-medium text-indigo-600"},[t._v(t._s(t.user.name))])]),t._v(" "),s("div",[s("span",{staticClass:"text-xs text-gray-500"},[t._v(t._s(t.createdAt))])])]),t._v(" "),s("div",{staticClass:"mt-2"},[s("p",{staticClass:"leading-5 text-gray-900"},[t._v(t._s(t.content))])]),t._v(" "),t.attachments.length>0?s("ul",{staticClass:"border border-gray-200 rounded-md mt-4"},t._l(t.attachments,(function(e){return s("li",{staticClass:"pl-3 pr-2 py-3 flex items-center justify-between text-sm leading-5"},[s("div",{staticClass:"w-0 flex-1 flex items-center"},[s("svg",{staticClass:"flex-shrink-0 h-5 w-5 text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clip-rule":"evenodd"}})]),t._v(" "),s("a",{staticClass:"hover:underline",attrs:{href:t.route("app:project.attachments.download",{project:t.projectUuid,attachment:e.uuid})}},[s("span",{staticClass:"ml-2 truncate"},[t._v(t._s(e.filename))])])]),t._v(" "),s("div",{staticClass:"ml-4 flex-shrink-0"},[s("a",{staticClass:"btn btn-flat btn-xs",attrs:{href:t.route("app:project.attachments.download",{project:t.projectUuid,attachment:e.uuid}),title:"Download"}},[s("svg",{staticClass:"w-3 h-3 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"}})])])])])})),0):t._e()])])}),[],!1,null,null,null);e.default=r.exports},rpDG:function(t,e,s){"use strict";s.r(e);var a={components:{VNavMenu:s("sHez").default},data:function(){return{sidebarOpen:!1}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-screen flex overflow-hidden bg-gray-100",attrs:{id:"app"}},[s("div",{staticClass:"md:hidden"},[s("div",{staticClass:"fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300",class:{"opacity-75 pointer-events-auto":t.sidebarOpen,"opacity-0 pointer-events-none":!t.sidebarOpen},on:{click:function(e){t.sidebarOpen=!1}}}),t._v(" "),s("div",{staticClass:"fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300 ",class:{"translate-x-0":t.sidebarOpen,"-translate-x-full":!t.sidebarOpen}},[s("div",{staticClass:"absolute top-0 right-0 -mr-14 p-1"},[t.sidebarOpen?s("button",{staticClass:"flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600",on:{click:function(e){t.sidebarOpen=!1}}},[s("svg",{staticClass:"h-6 w-6 text-white",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]):t._e()]),t._v(" "),s("v-nav-menu")],1)]),t._v(" "),s("div",{staticClass:"hidden md:flex md:flex-shrink-0"},[s("div",{staticClass:"flex flex-col w-64 bg-gray-800"},[s("v-nav-menu")],1)]),t._v(" "),s("div",{staticClass:"flex flex-col w-0 flex-1 overflow-hidden"},[s("div",{staticClass:"md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3"},[s("button",{staticClass:"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150",on:{click:function(e){e.stopPropagation(),t.sidebarOpen=!0}}},[s("svg",{staticClass:"h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),s("main",{staticClass:"flex flex-col flex-1 relative z-0 overflow-y-auto pt-6 focus:outline-none",attrs:{tabindex:"0"}},[s("div",{staticClass:"flex items-center px-4 mb-4 sm:px-6 lg:px-8"},[t._t("header")],2),t._v(" "),t._t("default")],2)])])}),[],!1,null,null,null);e.default=r.exports},sHez:function(t,e,s){"use strict";s.r(e);var a=s("KHd+"),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-0 flex-1 flex flex-col pb-4 overflow-y-auto"},[s("div",{staticClass:"flex items-center flex-shrink-0 bg-gray-900 py-4 px-4 mb-4"},[s("inertia-link",{attrs:{href:t.route("app:dashboard")}},[s("img",{staticClass:"h-8 w-auto select-none",attrs:{src:t.$page.logo_dark,alt:"logo"}})])],1),t._v(" "),s("div",{staticClass:"flex-shrink-0 flex px-6 pt-1"},[s("inertia-link",{staticClass:"flex-shrink-0 group block focus:outline-none",attrs:{href:t.route("app:profile.edit")}},[s("div",{staticClass:"flex items-center"},[s("div",[s("img",{staticClass:"inline-block h-9 w-9 rounded-full",attrs:{src:t.$page.user.avatar_url,alt:t.$page.user.name}})]),t._v(" "),s("div",{staticClass:"ml-3"},[s("p",{staticClass:"text-sm leading-5 font-medium text-white"},[t._v("\n                        "+t._s(t.$page.user.name)+"\n                    ")]),t._v(" "),s("p",{staticClass:"text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150"},[t._v("\n                        View profile\n                    ")])])])])],1),t._v(" "),s("nav",{staticClass:"mt-5 bg-gray-800"},[s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:dashboard")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:dashboard")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]),t._v("\n\n            Dashboard\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:projects.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:projects.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"}})]),t._v("\n\n            Projects\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:tasks.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:tasks.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}})]),t._v("\n\n            My Tasks\n        ")]),t._v(" "),s("inertia-link",{staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",class:[t.route().current("app:calendar.index")?"text-white bg-gray-900":"text-gray-300"],attrs:{href:t.route("app:calendar.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"}})]),t._v("\n\n            Calendar\n        ")])],1),t._v(" "),s("nav",{staticClass:"flex flex-col flex-1 mt-3 bg-gray-800"},[t._m(0),t._v(" "),t._l(t.$page.favorite_projects,(function(e){return s("inertia-link",{key:e.uuid,staticClass:"group mb-1 flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:projects.show",{project:e.uuid})}},[s("div",{staticClass:"w-3 h-3 overflow-hidden rounded-full mr-3"},[s("div",{staticClass:"w-full h-full",class:["bg-"+e.color+"-400"]})]),t._v("\n            "+t._s(e.name)+"\n        ")])}))],2),t._v(" "),s("nav",[s("inertia-link",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("app:users.index")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})]),t._v("\n\n            Settings\n        ")]),t._v(" "),s("a",{staticClass:"group flex items-center px-6 py-2 text-sm leading-6 text-gray-300 focus:outline-none focus:bg-gray-700 hover:text-white hover:bg-gray-700 transition ease-in-out duration-150",attrs:{href:t.route("logout")}},[s("svg",{staticClass:"w-4 h-4 fill-current mr-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"}})]),t._v("\n\n            Logout\n        ")])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-6 mb-2"},[e("span",{staticClass:"text-sm text-gray-500 font-semibold"},[this._v("Favorites")])])}],!1,null,null,null);e.default=n.exports},yOFB:function(t,e,s){"use strict";var a={props:{variant:{type:String,default:"success",validator:function(t){return["success","warning","failure"].includes(t)}},dismissible:{type:Boolean,default:!1}},data:function(){return{visible:!0}},computed:{alertClass:function(){return["alert","alert-"+this.variant]}},watch:{"$page.flash":{deep:!0,handler:function(){this.visible=!0}}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.visible?s("div",{class:t.alertClass},[s("p",[t._t("default")],2),t._v(" "),t.dismissible?s("button",{staticClass:"flex items-center p-1 focus:outline-none ml-auto",on:{click:function(e){t.visible=!1}}},[s("svg",{staticClass:"w-3 h-3 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"}})])]):t._e()]):t._e()}),[],!1,null,null,null);e.a=r.exports},zRJh:function(t,e,s){"use strict";s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return r}));var a={data:function(){return{tabs:[],mobileTab:null}},mounted:function(){var t=this;this.tabs.forEach((function(e){e.isVisible&&(t.mobileTab=e)}))},created:function(){this.tabs=this.$children},methods:{setActive:function(t){t.disabled||this.tabs.map((function(e){t.id===e.id?t.isVisible=!0:e.isVisible=!1}))}}},n=s("KHd+"),r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bg-gray-50 p-6 sm:hidden"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.mobileTab,expression:"mobileTab"}],staticClass:"form-select",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.mobileTab=e.target.multiple?s:s[0]},function(e){return t.setActive(t.mobileTab)}]}},t._l(t.tabs,(function(e){return s("option",{attrs:{disabled:e.disabled},domProps:{value:e}},[t._v(t._s(e.name))])})),0)]),t._v(" "),s("div",{staticClass:"hidden sm:block"},[s("div",{staticClass:"border-b border-gray-200"},[s("nav",{staticClass:"-mb-px flex"},t._l(t.tabs,(function(e){return s("a",{staticClass:"flex-1 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-600 focus:outline-none",class:{"border-indigo-500 text-indigo-500 focus:text-indigo-800 focus:border-indigo-700":e.isVisible,"text-gray-300 cursor-not-allowed":e.disabled},attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.setActive(e)}}},[t._v("\n                    "+t._s(e.name)+"\n                ")])})),0)])]),t._v(" "),t._t("tab",[t._t("default")])],2)}),[],!1,null,null,null).exports,i={props:{name:{type:String,default:null,required:!0},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},data:function(){return{isVisible:this.active}},computed:{id:function(){return this.name.toLowerCase().replace(/ /g,"-")}}},l=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("section",{directives:[{name:"show",rawName:"v-show",value:this.isVisible,expression:"isVisible"}]},[this._t("default")],2)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=7.js.map?id=a84e420092498ef2e7df