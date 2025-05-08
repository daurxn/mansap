<script setup lang="ts">
import type { Job } from '~/types/job'

const { data } = await useFetch<Job[]>('/api/jobs/mine', {
    headers: {
        Authorization: `Bearer ${useCookie('token').value}`
    }
})

const myPostings = computed(() => data.value ?? [])
</script>

<template>
    <HomeJobsList :jobs="myPostings" />
</template>