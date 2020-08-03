<template>
    <v-modal ref="modal">
        <div class="mx-auto max-w-lg">
            <div class="flex flex-col rounded-lg bg-white shadow">
                <div class="p-6">
                    <h3 class="font-semibold text-lg">Confirmation</h3>
                </div>

                <div class="p-6">
                    {{ message }}
                </div>

                <div class="p-6 flex justify-end">
                    <button @click="cancel()" class="btn btn-flat mr-3" type="button">Cancel</button>
                    <button :class="['btn-' + confirmButtonColor]" :disabled="processing" @click="confirm()" class="btn" type="button">{{ confirmButtonText }}</button>
                </div>
            </div>
        </div>
    </v-modal>
</template>

<script>
    import VModal from '@/components/modal/modal'
    export default {
        components: {
            VModal
        },
        props: {
            message: {
                type: String,
                required: true
            },
            confirmButtonText: {
                type: String,
                default: 'Confirm'
            },
            confirmButtonColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return {
                processing: false,
                resolve: null,
            }
        },
        methods: {
            show() {
                this.$refs.modal.show();
                return new Promise(resolve => {
                    this.resolve = resolve;
                });
            },
            cancel() {
                this.$refs.modal.hide();
            },
            confirm() {
                this.processing = true;
                this.resolve(this.$refs.modal);
            }
        }
    }
</script>
