<template>
    <nav>
        <inertia-link
            :href="route('app:profile.edit')"
            :class="{ 'bg-white' : route().current('app:profile.edit') }"
            class="flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150"
        >
            Edit Profile
        </inertia-link>

        <inertia-link
            :href="route('app:password.edit')"
            :class="{ 'bg-white' : route().current('app:password.edit') }"
            class="flex items-center px-4 py-2 rounded-lg text-sm mb-1 hover:bg-white font-semibold transition duration-150"
        >
            Change Password
        </inertia-link>
    </nav>
</template>
