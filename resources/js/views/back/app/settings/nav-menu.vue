<template>
    <nav>
        <inertia-link
            :href="route('app:users.index')"
            :class="{ 'bg-white' : route().current('app:users.index') }"
            class="flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150"
        >
            Team Members
        </inertia-link>

        <inertia-link
            :href="route('app:subscription')"
            :class="{ 'bg-white' : route().current('app:subscription') }"
            class="flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150"
        >
            Subscription
        </inertia-link>
    </nav>
</template>
