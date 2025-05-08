<script setup lang="ts">
import AppHeader from '~/components/app/Header.vue';

</script>

<template>
    <div class="h-screen">
        <AppHeader />
        <slot />
    </div>
</template>