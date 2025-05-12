<script setup lang="ts">
import type { Job } from "~/types/job";

const props = defineProps<{
  search: string;
}>();

const { search } = toRefs(props);

const { data, refresh } = useFetch<Job[]>("/api/jobs", { query: { search } });

const jobPostings = computed(() => data.value ?? []);

console.log(data.value);

watch(search, () => {
  refresh();
});
</script>

<template>
  <app-container>
    <HomeJobsListResult :count="jobPostings.length" />
    <div class="flex gap-4 py-4">
      <HomeJobsList :jobs="jobPostings" />
    </div>
  </app-container>
</template>
