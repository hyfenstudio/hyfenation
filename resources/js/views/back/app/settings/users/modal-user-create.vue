<template>
    <v-modal ref="modal">
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="p-6">
                <h3 class="font-medium text-lg">Add Team Member</h3>
            </div>

            <div class="p-6">
                <div class="form-group mb-6">
                    <label class="form-label">Name</label>
                    <input class="form-input" v-model="form.name">
                    <span class="invalid-feedback" v-if="$page.errors.has('name')">{{ $page.errors.first('name') }}</span>
                </div>

                <div class="form-group mb-6">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-input" v-model="form.email">
                    <span class="invalid-feedback" v-if="$page.errors.has('email')">{{ $page.errors.first('email') }}</span>
                </div>

                <div class="form-group mb-6">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-input" v-model="form.password">
                    <span class="invalid-feedback" v-if="$page.errors.has('password')">{{ $page.errors.first('password') }}</span>
                </div>

                <div class="form-group">
                    <label class="form-label">Role</label>
                    <select class="form-select" v-model="form.role">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <span class="invalid-feedback" v-if="$page.errors.has('role')">{{ $page.errors.first('role') }}</span>
                </div>
            </div>

            <div class="bg-gray-50 p-4 sm:px-6 sm:py-4 sm:flex sm:flex-row-reverse">
                <button type="button" class="btn btn-indigo" @click="submit()" :disabled="form.processing">
                    Save Team Member
                </button>

                <button type="button" class="btn btn-flat mr-3" @click="hide()">
                    Cancel
                </button>
            </div>
        </div>
    </v-modal>
</template>

<script>
    import VModal from '@/components/modal'
    import Form from '@/utils/form'

    export default {
        components: {
            VModal
        },

        data() {
            return {
                form: new Form({
                    name: '',
                    email: '',
                    password: '',
                    role: 'user',
                })
            }
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

                this.$inertia.post(route('app:users.store'), this.form.data())
                    .then(() => {
                        this.form.processing = false;

                        if (this.$page.errors.none()) {
                            this.hide();
                            this.form.reset();
                        }
                    });
            }
        }
    }
</script>
