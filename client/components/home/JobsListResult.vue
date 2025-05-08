<script setup lang="ts">
const { count } = defineProps<{
    count: number
}>()
</script>

<template>
    <span class="font-medium">Showing results ({{ count }})</span>
</template>
