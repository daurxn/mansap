<script setup lang="ts">
import type { Job } from '~/types/job';
import JobsListItem from './JobsListItem.vue';

const { jobs } = defineProps<{
    jobs: Job[]
}>()
</script>

<template>
    <ul class="w-full space-y-4">
        <JobsListItem v-for="job in jobs" :key="job.id" :job="job" />
    </ul>
</template>