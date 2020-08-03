<template>
    <v-app-default-layout>
        <template v-slot:header>
            <h1 class="text-2xl font-semibold text-gray-900">Gateway Webhook</h1>
        </template>

        <template>
            <div class="container mx-auto px-4 sm:px-6 md:px-8 py-4">
                <div class="md:grid md:gap-6 md:grid-cols-8">
                    <div class="mb-6 sm:col-span-2">
                        <v-nav-menu/>
                    </div>

                    <div class="md:col-span-6">
                        <div class="bg-white shadow rounded-lg">
                            <div class="px-4 py-5 sm:px-6">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">
                                    Gateway Webhook
                                </h3>

                                <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                                    Use below link to link events from the payment gateway and your system
                                </p>
                            </div>

                            <div class="px-4 py-5 sm:px-6">
                                <v-alert variant="warning" show>
                                    This URL is secret. Sharing it with public leads to security issues
                                </v-alert>

                                <div class="form-group">
                                    <label class="form-label">Webhook Handler</label>
                                    <input class="form-input" :value="$page.url" readonly>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </v-app-default-layout>
</template>

<script>
    import VAppDefaultLayout from '@/views/back/admin/layouts/default'
    import VNavMenu from '@/views/back/admin/settings/nav-menu'
    import VAlert from '@/components/alert'

    export default {
        metaInfo: {
            title: 'Gateway Webhook'
        },

        components: {
            VAppDefaultLayout,
            VNavMenu,
            VAlert
        }
    }
</script>
