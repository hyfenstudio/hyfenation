<template>
    <v-app-default-layout>
        <template v-slot:header>
            <h1 class="text-2xl font-semibold text-gray-900">Edit Plan</h1>
        </template>

        <template>
            <div class="container mx-auto px-4 sm:px-6 md:px-8 py-4">
                <v-alert variant="failure" v-if="$page.errors.has('demo.restrict')" dismissible>
                    {{ $page.errors.first('demo.restrict') }}
                </v-alert>

                <div class="bg-white shadow sm:rounded-lg">
                    <div class="md:grid md:grid-cols-3 px-4 py-5 sm:p-6 md:gap-6">
                        <div class="md:col-span-1">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">General Information</h3>
                            <p class="mt-1 text-sm leading-5 text-gray-500">
                                Plan information that are visible to the customers
                            </p>
                        </div>

                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Name</label>
                                            <input class="form-input" v-model="form.name">
                                            <span class="invalid-feedback" v-if="$page.errors.has('name')">
                                                {{ $page.errors.first('name') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Description</label>
                                            <input class="form-input" v-model="form.description">
                                            <span class="invalid-feedback" v-if="$page.errors.has('description')">
                                                {{ $page.errors.first('description') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Monthly Price</label>
                                            <input type="number" class="form-input" v-model.number="form.price">
                                            <span class="invalid-feedback" v-if="$page.errors.has('price')">
                                                {{ $page.errors.first('price') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Is Featured</label>
                                            <select class="form-select" v-model="form.is_featured">
                                                <option :value="true">Yes</option>
                                                <option :value="false">No</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Status</label>
                                            <select class="form-select" v-model="form.status">
                                                <option :value="true">Active</option>
                                                <option :value="false">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="md:grid md:grid-cols-3 md:gap-6 px-4 py-5 sm:p-6">
                        <div class="md:col-span-1">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Stripe / PayPal Info</h3>
                            <p class="mt-1 text-sm leading-5 text-gray-500">
                                Plan ID as entered or generated in Stripe or PayPal admin panel
                            </p>
                        </div>

                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Plan ID</label>
                                            <input class="form-input" v-model="form.plan_id" :disabled="plan.id === 1">
                                            <span class="invalid-feedback" v-if="$page.errors.has('plan_id')">
                                                {{ $page.errors.first('plan_id') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="md:grid md:grid-cols-3 md:gap-6 px-4 py-5 sm:p-6">
                        <div class="md:col-span-1">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Features</h3>
                            <p class="mt-1 text-sm leading-5 text-gray-500">
                                Plan features and limitations. Leave empty for unlimited.
                            </p>
                        </div>

                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Max Projects</label>
                                            <input type="number" class="form-input" v-model.number="form.max_projects">
                                            <span class="invalid-feedback" v-if="$page.errors.has('max_projects')">
                                                {{ $page.errors.first('max_projects') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Max Users per Project</label>
                                            <input type="number" class="form-input" v-model.number="form.max_users_per_project">
                                            <span class="invalid-feedback" v-if="$page.errors.has('max_users_per_project')">
                                                {{ $page.errors.first('max_users_per_project') }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Disk Space (MB)</label>
                                            <input type="number" class="form-input" v-model.number="form.disk_space">
                                        </div>
                                        <span class="invalid-feedback" v-if="$page.errors.has('disk_space')">
                                            {{ $page.errors.first('disk_space') }}
                                        </span>
                                    </div>
                                </div>

                                <div class="grid grid-cols-3 gap-6 mb-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <div class="form-group">
                                            <label class="form-label">Trial Days</label>
                                            <input type="number" class="form-input" v-model.number="form.trial_days" :disabled="plan.id === 1">
                                        </div>
                                        <span class="invalid-feedback" v-if="$page.errors.has('trial_days')">
                                            {{ $page.errors.first('trial_days') }}
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="px-4 py-3 bg-gray-50 text-right px-4 py-5 rounded-b-lg sm:p-6">
                        <button @click="submit()" type="submit" class="btn btn-indigo" :disabled="form.processing">
                            Save Plan
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </v-app-default-layout>
</template>

<script>
    import VAppDefaultLayout from '@/views/back/admin/layouts/default'
    import VAlert from '@/components/alert'
    import Form from '@/utils/form'

    export default {
        metaInfo: {
            title: 'Edit Plan'
        },

        components: {
            VAppDefaultLayout,
            VAlert
        },

        props: {
            plan: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                form: new Form({
                    name: this.plan.name,
                    description: this.plan.description,
                    price: this.plan.price,
                    plan_id: this.plan.external_id,
                    is_featured: this.plan.is_featured === 1,
                    status: this.plan.status === 1,
                    max_projects: this.plan.max_projects,
                    max_users_per_project: this.plan.max_users_per_project,
                    disk_space: this.plan.disk_space,
                    trial_days: this.plan.trial_days
                })
            }
        },

        methods: {
            submit() {
                this.form.processing = true;

                this.$inertia.put(route('admin:plans.update', {plan: this.plan.id}), this.form.data())
                    .then(() => this.form.processing = false);
            }
        }
    }
</script>
