<template>
    <v-modal ref="modal">
        <form class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div class="hidden sm:block absolute top-0 right-0 pt-6 pr-6">
                <button @click="hide()" type="button" class="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <div class="flex justify-between p-6">
                <h3 class="font-medium text-lg">Add PayPal Account</h3>
            </div>

            <div class="p-6" ref="form">
                <div id="paypal-button"></div>
            </div>
        </form>
    </v-modal>
</template>

<script>
    import VModal from '@/components/modal'
    import braintree from 'braintree-web'

    export default {
        components: {
            VModal
        },

        props: {
            token: {
                type: String,
                default: null
            }
        },

        data() {
            return {
                //
            }
        },

        methods: {
            show() {
                this.$refs.modal.show();
            },

            hide() {
                this.$refs.modal.hide();
            },
        },

        created() {
            braintree.client.create({
                authorization: this.token
            }).then(clientInstance => {
                return braintree.paypalCheckout.create({
                    client: clientInstance
                });
            }).then(paypalCheckoutInstance => {
                return paypal.Button.render({
                    env: 'sandbox',
                    style: {
                        size: 'responsive',
                        color: 'black'
                    },

                    payment: () => {
                        return paypalCheckoutInstance.createPayment({
                            flow: 'vault',
                        });
                    },

                    onAuthorize: data => {
                        return paypalCheckoutInstance.tokenizePayment(data)
                            .then(payload => {
                                this.$inertia.post(route('app:payment-methods.store'), {nonce: payload.nonce}).then(() => {
                                    this.hide();
                                });
                            });
                    },

                    onError: err => {
                        console.error('checkout.js error', err);
                    }
                }, '#paypal-button');
            });
        }
    }
</script>
