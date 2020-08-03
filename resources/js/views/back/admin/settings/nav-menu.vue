<template>
    <nav>
        <inertia-link
            :href="route('admin:system-settings.edit')"
            :class="{ 'bg-white' : route().current('admin:system-settings.edit') }"
            class="flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150"
        >
            System
        </inertia-link>

        <inertia-link
            :href="route('admin:landing-page-settings.edit')"
            :class="{ 'bg-white' : route().current('admin:landing-page-settings.edit') }"
            class="flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150"
        >
            Landing Page
        </inertia-link>

        <inertia-link
            :href="route('admin:webhook')"
            :class="{ 'bg-white' : route().current('admin:webhook') }"
            class="flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150"
        >
            Gateway Webhook
        </inertia-link>
    </nav>
</template>
