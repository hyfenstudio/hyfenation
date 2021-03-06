<template>
    <v-app-default-layout>
        <template v-slot:header>
            <h1 class="text-2xl font-semibold text-gray-900">Subscriptions</h1>
        </template>

        <template>
            <div class="container mx-auto px-4 sm:px-6 md:px-8 py-4">
                <div v-if="$page.subscriptions.data.length > 0" class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-gray-200">
                    <table class="min-w-full">
                        <thead>
                        <tr>
                            <th class="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th class="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Plan</th>
                            <th class="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Trial End</th>
                            <th class="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Ends at</th>
                            <th class="pl-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr @click="showSubscriptionModal(subscription)" v-for="subscription in $page.subscriptions.data" class="bg-white hover:bg-gray-100 transition duration-150 ease-in-out cursor-pointer">
                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 font-medium">
                                {{ subscription.customer }}
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                {{ subscription.plan }}
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                <span v-if="subscription.trial_end">{{ subscription.trial_end }}</span>
                                <span v-else>-</span>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                <span v-if="subscription.ends_at">{{ subscription.ends_at }}</span>
                                <span v-else>-</span>
                            </td>

                            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                <span class="badge badge-green" v-if="subscription.status === 1">Active</span>
                                <span class="badge badge-yellow" v-else-if="subscription.status === 2">Past Due</span>
                                <span class="badge" v-else-if="subscription.status === 3">Canceled</span>
                                <span class="badge badge-red" v-else-if="subscription.status === 4">Incomplete</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <v-pagination :links="$page.subscriptions.links"></v-pagination>
                </div>

                <div v-else class="flex justify-center">
                    <v-empty message="There are no subscriptions data to show here"></v-empty>
                </div>
            </div>
        </template>
    </v-app-default-layout>
</template>

<script>
    import VAppDefaultLayout from '@/views/back/admin/layouts/default'
    import VSubscriptionModal from '@/views/back/admin/subscriptions/modal-subscription'
    import VEmpty from '@/views/common/empty'
    import VPagination from '@/components/pagination'

    export default {
        metaInfo: {
            title: 'Subscriptions'
        },

        components: {
            VAppDefaultLayout,
            VEmpty,
            VPagination
        },

        methods: {
            showSubscriptionModal(subscription) {
                this.$modal(VSubscriptionModal, {
                    subscriptionId: subscription.id
                });
            }
        }
    }
</script>
