<template>
    <v-modal ref="modal">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="p-6">
                <h3 class="font-medium text-lg">Edit Project</h3>
            </div>

            <v-tabs>
                <v-tab name="General Info" active>
                    <div class="flex flex-col px-6 pt-6 pb-6">
                        <div class="mb-6">
                            <div class="form-group">
                                <label for="project-name" class="form-label">Name</label>
                                <input id="project-name" class="form-input" placeholder="Project Name" v-model="form.name">
                                <p class="invalid-feedback" v-if="$page.errors.has('name')">{{ $page.errors.first('name') }}</p>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="form-group">
                                <label for="project-description" class="form-label">Description</label>
                                <input id="project-description" class="form-input" placeholder="Project Description" v-model="form.description">
                                <p class="invalid-feedback" v-if="$page.errors.has('description')">{{ $page.errors.first('description') }}</p>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div class="form-group">
                                <label for="project-timeline" class="form-label">Timeline</label>
                                <v-input-date id="project-timeline" mode="range" placeholder="YYYY-MM-DD to YYYY-MM-DD" v-model="form.timeline"></v-input-date>
                            </div>
                        </div>

                        <div class="mb-6">
                            <v-input-color label="Project Color" v-model="form.color"></v-input-color>
                        </div>

                        <div>
                            <div class="relative flex items-start">
                                <div class="form-check">
                                    <input id="visibility-only-me" type="radio" class="form-radio" value="1" v-model.number="form.visibility">
                                </div>

                                <div class="pl-7 text-sm leading-5">
                                    <label for="visibility-only-me" class="font-medium text-gray-700">
                                        Only me
                                        <span class="block font-normal text-gray-500">You only can see this project</span>
                                    </label>
                                </div>
                            </div>

                            <div class="relative flex items-start mt-4">
                                <div class="form-check">
                                    <input id="visibility-team-members" type="radio" class="form-radio" value="2" v-model.number="form.visibility">
                                </div>

                                <div class="pl-7 text-sm leading-5">
                                    <label for="visibility-team-members" class="font-medium text-gray-700">
                                        Team Members
                                        <span class="block font-normal text-gray-500">Only selected team members can see this project</span>
                                    </label>
                                </div>
                            </div>

                            <div class="relative flex items-start mt-4">
                                <div class="form-check">
                                    <input id="visibility-organization" type="radio" class="form-radio" value="3" v-model.number="form.visibility">
                                </div>

                                <div class="pl-7 text-sm leading-5">
                                    <label for="visibility-organization" class="font-medium text-gray-700">
                                        Organization
                                        <span class="block font-normal text-gray-500">All members of this organization can see the project</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-tab>

                <v-tab name="Team Members" :disabled="form.visibility !== 2">
                    <v-renderless-select mode="multiple" item-text="name" item-value="uuid" :items="$page.users" toggle-select v-model="form.team_members">
                        <div class="flex flex-col" style="height: 530px" slot-scope="{ items : users, search, isSelected, select }">
                            <div class="px-6 pt-6">
                                <input class="form-input" placeholder="Search Users.." @input="search($event.target.value)"/>
                            </div>

                            <div class="mt-4 pb-2 flex flex-col overflow-y-auto">
                                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100" v-for="user in users" @click.prevent="select(user)">
                                    <div>
                                        <div v-if="isSelected(user)" class="flex items-center justify-center w-5 h-5 p-1 overflow-hidden rounded-full bg-green-400 text-green-100">
                                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                                            </svg>
                                        </div>

                                        <div v-else class="flex items-center justify-center w-5 h-5 p-1 overflow-hidden rounded-full border"></div>
                                    </div>

                                    <div class="flex flex-col ml-6">
                                        <p class="text-sm leading-5 text-gray-700 group-hover:text-gray-900">{{ user.name }}</p>
                                        <p class="text-xs leading-4 text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">{{ user.email }}</p>
                                    </div>

                                    <div class="ml-auto">
                                        <img class="avatar avatar-sm" :src="user.avatar_url" alt="avatar">
                                    </div>
                                </a>
                            </div>
                        </div>
                    </v-renderless-select>
                </v-tab>
            </v-tabs>

            <div class="bg-gray-50 p-4 sm:px-6 sm:py-4 sm:flex sm:flex-row-reverse">
                <button type="button" class="btn btn-indigo" @click="submit()" :disabled="form.processing">
                    Save Project
                </button>

                <button type="button" class="btn btn-flat mr-3" @click="hide()">
                    Cancel
                </button>
            </div>
        </div>
    </v-modal>
</template>

<script>
    import VInputColor from '@/components/input-color'
    import VInputDate from '@/components/input-date'
    import VModal from '@/components/modal'
    import VRenderlessSelect from '@/components/renderless/select'
    import {Tab as VTab, Tabs as VTabs} from '@/components/tabs'
    import Form from '@/utils/form'

    export default {
        components: {
            VInputColor,
            VInputDate,
            VModal,
            VTabs,
            VTab,
            VRenderlessSelect,
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    description: '',
                    timeline: '',
                    color: 'indigo',
                    visibility: 1,
                    team_members: []
                })
            }
        },

        mounted() {
            this.form.name = this.$page.project.name;
            this.form.description = this.$page.project.description;
            this.form.timeline = this.$page.project.timeline;
            this.form.color = this.$page.project.color;
            this.form.visibility = this.$page.project.visibility;
            this.form.team_members = this.$page.project.team_members;
        },

        methods: {
            show() {
                this.$refs.modal.show();
            },

            hide() {
                this.$refs.modal.hide();
            },

            submit() {
                this.form.processing = true;

                this.$inertia.put(route('app:projects.update', {project: this.$page.project.uuid}), {
                    name: this.form.name,
                    description: this.form.description,
                    timeline: this.form.timeline,
                    color: this.form.color,
                    visibility: this.form.visibility,
                    team_members: this.form.team_members
                }).then(() => {
                    this.form.processing = false;

                    if (this.$page.errors.none()) {
                        this.hide();
                    }
                });
            }
        }
    }
</script>
