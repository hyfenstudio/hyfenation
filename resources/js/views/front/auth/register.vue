<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-12 w-auto select-none" :src="$page.logo_light" alt="logo"/>
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Sign up to get started</h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
                <form action="#" method="POST" @submit.prevent="submit()">
                    <div class="form-group mb-6">
                        <div class="form-group mb-6">
                            <span class="form-label">Business Name</span>
                            <input class="form-input" v-model="form.business_name">
                            <p class="invalid-feedback" v-if="$page.errors.has('business_name')">{{ $page.errors.first('business_name') }}</p>
                        </div>

                        <div class="form-group mb-6">
                            <span class="form-label">Full Name</span>
                            <input class="form-input" v-model="form.name">
                            <p class="invalid-feedback" v-if="$page.errors.has('name')">{{ $page.errors.first('name') }}</p>
                        </div>

                        <span class="form-label">Email</span>
                        <input type="email" class="form-input" v-model="form.email">
                        <p class="invalid-feedback" v-if="$page.errors.has('email')">{{ $page.errors.first('email') }}</p>
                    </div>

                    <div class="form-group mb-6">
                        <span class="form-label">Password</span>
                        <input type="password" class="form-input" v-model="form.password">
                        <p class="invalid-feedback" v-if="$page.errors.has('password')">{{ $page.errors.first('password') }}</p>
                    </div>

                    <div class="form-group mb-6">
                        <span class="form-label">Password Confirmation</span>
                        <input type="password" class="form-input" v-model="form.password_confirmation">
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="btn btn-block btn-indigo" :disabled="form.processing">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from '@/utils/form'

    export default {
        metaInfo: {
            title: 'Sign up'
        },

        data() {
            return {
                form: new Form({
                    business_name: '',
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                })
            }
        },

        methods: {
            submit() {
                this.form.processing = true;

                this.$inertia.post(route('register'), this.form.data())
                    .then(() => this.form.processing = false);
            }
        }
    }
</script>
