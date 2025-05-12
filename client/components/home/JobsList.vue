<script setup lang="ts">
import { CircleDollarSign } from "lucide-vue-next";
import type { Job } from "~/types/job";
import JobsListItem from "./JobsListItem.vue";

const { jobs } = defineProps<{
  jobs: Job[];
}>();
</script>

<template>
  <ul class="w-full space-y-4">
    <JobsListItem v-for="job in jobs" :key="job.id" :job="job">
      <template #footer>
        <div class="flex justify-between w-full">
          <div class="flex gap-2 items-center">
            <div class="flex items-center gap-1">
              <CircleDollarSign color="#5D3FD3" :size="20" />
              ${{ job.salary }}/{{ job.job_type }}
            </div>

            <span>&#x2022;</span>

            <span>
              {{ job._count.applications + " " + $t("applications") }}
            </span>
          </div>

          <JobsApplyDialog :job-id="job.id">
            <Button>{{ $t("jobs.apply") }}</Button>
          </JobsApplyDialog>
        </div>
      </template>
    </JobsListItem>
  </ul>
</template>
