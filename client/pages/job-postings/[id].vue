<script setup lang="ts">
import { PopoverClose } from "reka-ui";
import { toast } from "vue-sonner";
import { useToken } from "~/composables/auth/useToken";
import { useAuthStore } from "~/store/auth.store";
import type { Job } from "~/types/job";

const { userId } = storeToRefs(useAuthStore());
const { id } = useRoute().params;

const { data: job } = useFetch<Job>(`/api/jobs/${id}`, {
  headers: {
    Authorization: `Bearer ${useToken().value}`,
  },
  key: `/api/jobs/${id}`,
});

console.log(job.value);

const isRecruiter = computed(() => userId.value === job.value?.postedById);

async function handleFillJob(applicantId: number) {
  console.log("test");
  await $fetch(`/api/jobs/${id}/accept/${applicantId}`, {
    headers: {
      Authorization: `Bearer ${useToken().value}`,
    },
  });
  await refreshNuxtData(`/api/jobs/${id}`);
  toast.success("Заявка была принята успешно!");
}

console.log(job.value);
</script>

<template>
  <app-main>
    <app-container v-if="job">
      <h1 class="text-2xl font-medium mb-2">{{ job.name }}</h1>
      <ul class="flex gap-2 font-medium mb-4">
        <li
          v-for="tag in job.tags"
          :key="tag.id"
          class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-xs"
        >
          {{ tag.name }}
        </li>
      </ul>
      <p class="text-gray-600 mb-5">{{ job.description }}</p>
      <ul class="mb-4">
        <li>
          {{ $t("jobs.exp_level") }}:
          <b>{{ $t(`exp_level.${job.experienceLevel}`) }}</b>
        </li>
        <li>
          {{ $t("jobs.job_type") }}:
          <b>{{ $t(job.jobType) }}</b>
        </li>
        <li>
          {{ $t("salary") }}:
          <b>${{ job.salary }}</b>
        </li>
        <li>
          {{ $t("posted_at") }}:
          <b>{{
            new Intl.DateTimeFormat("ru-RU", {
              dateStyle: "long",
              timeStyle: "long",
            }).format(new Date(job.createdAt))
          }}</b>
        </li>
      </ul>

      <template v-if="!isRecruiter">
        <JobsApplyDialog v-if="!job.applied" :job-id="job.id">
          <Button>{{ $t("jobs.apply") }}</Button>
        </JobsApplyDialog>
        <Button v-else disabled>
          {{ $t("you_applied") }}
        </Button>
      </template>

      <Table v-if="isRecruiter">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead class="w-[500px]">Cover Letter</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Applied at</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="app in job.applications" :key="app.id">
            <TableCell class="font-medium">
              {{ app.applicant.name }}
            </TableCell>
            <TableCell class="font-medium">
              {{ app.coverLetter }}
            </TableCell>
            <TableCell class="font-medium">
              <JobsResumeViewerDialog :resume="app.resume">
                <Button variant="link"> Resume #{{ app.resumeId }} </Button>
              </JobsResumeViewerDialog>
            </TableCell>
            <TableCell class="font-semibold">
              {{
                new Intl.DateTimeFormat("ru-RU", {
                  dateStyle: "long",
                  timeStyle: "long",
                }).format(new Date(app.appliedAt))
              }}
            </TableCell>
            <TableCell>
              <Popover>
                <PopoverTrigger as-child>
                  <Button>{{ "select" }}</Button>
                </PopoverTrigger>
                <PopoverContent class="w-64">
                  <p class="text-sm mb-2">Are you sure you want to delete?</p>
                  <PopoverClose class="flex gap-2 justify-end w-full">
                    <Button size="sm" variant="ghost">No</Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      @click="handleFillJob(app.applicantId)"
                    >
                      Yes
                    </Button>
                  </PopoverClose>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </app-container>
  </app-main>
</template>
