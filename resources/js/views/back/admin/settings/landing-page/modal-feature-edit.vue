<template>
    <v-modal ref="modal">
        <div class="bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="p-6">
                <h3 class="font-medium text-lg">Edit Feature</h3>
            </div>

            <div class="p-6">
                <div class="form-group mb-6">
                    <label class="form-label">Title</label>
                    <input class="form-input" v-model="form.title">
                    <span class="invalid-feedback" v-if="$page.errors.has('title')">{{ $page.errors.first('title') }}</span>
                </div>

                <div class="form-group mb-6">
                    <label class="form-label">Description</label>
                    <textarea class="form-textarea" v-model="form.description" rows="4"></textarea>
                    <span class="invalid-feedback" v-if="$page.errors.has('description')">{{ $page.errors.first('description') }}</span>
                </div>
            </div>

            <div class="bg-gray-50 p-4 sm:px-6 sm:py-4 sm:flex sm:flex-row-reverse">
                <button @click="submit()" type="button" class="btn btn-indigo" :disabled="form.processing">
                    Save Changes
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

        props: {
            id: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                form: new Form({
                    title: this.title,
                    description: this.description
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

                this.$inertia.put(route('admin:landing-page-features.update', {feature: this.id}), this.form.data())
                    .then(() => {
                        this.form.processing = false;
                        this.hide();
                    });
            }
        }
    }
</script>
