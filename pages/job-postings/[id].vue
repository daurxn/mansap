<script setup lang="ts">
import { Paperclip } from "lucide-vue-next";
import { PopoverClose } from "reka-ui";
import { toast } from "vue-sonner";
import { useToken } from "~/composables/auth/useToken";
import { useAuthStore } from "~/store/auth.store";
import type { Chat } from "~/types/chat";
import type { Job } from "~/types/job";

const { userId } = storeToRefs(useAuthStore());
const { id } = useRoute().params;
const token = useToken();
const fileRef = useTemplateRef<HTMLInputElement>("fileRef");

const headers = computed(() => ({
  Authorization: `Bearer ${token.value}`,
}));

const { data: job } = await useFetch<Job>(`/api/jobs/${id}`, {
  headers: headers.value,
  key: `/api/jobs/${id}`,
});

const { data: chat, refresh } = await useAsyncData<Chat | null>(
  `chat-${id}`,
  async () => {
    if (
      job.value &&
      userId.value &&
      job.value.filledById &&
      job.value.postedById &&
      [job.value.filledById, job.value.postedById].includes(userId.value)
    ) {
      return $fetch(`/api/chat/jobs/${id}`, {
        headers: headers.value,
      });
    } else {
      return null;
    }
  }
);

const message = ref("");
const isSending = ref(false);
const files = ref<null | FileList>(null);

const isRecruiter = computed(() => userId.value === job.value?.postedById);

async function handleFillJob(applicantId: number) {
  isSending.value = true;
  await $fetch(`/api/jobs/${id}/accept/${applicantId}`, {
    headers: {
      Authorization: `Bearer ${useToken().value}`,
    },
  });
  isSending.value = false;
  await refreshNuxtData(`/api/jobs/${id}`);
  toast.success("Заявка была принята успешно!");
}

async function handleSendMessage() {
  if (!message.value || !chat.value) return;

  await $fetch("/api/chat/message", {
    method: "POST",
    headers: headers.value,
    body: {
      chatId: chat.value.id,
      content: message.value,
    },
  });

  message.value = "";
  refresh();
}

function previewFiles(event: InputEvent) {
  const input = event.target as HTMLInputElement;
  console.log(input.files);
  files.value = input.files;
}
</script>

<template>
  <app-main>
    <app-container v-if="job">
      <div class="flex justify-between">
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
      </div>
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

      <Table v-if="isRecruiter" class="mb-8">
        <TableHeader>
          <TableRow>
            <TableHead>{{ $t("jobs.name") }}</TableHead>
            <TableHead class="w-[32rem]">
              {{ $t("jobs.cover_letter") }}
            </TableHead>
            <TableHead>{{ $t("jobs.resume") }}</TableHead>
            <TableHead>{{ $t("jobs.applied_at") }}</TableHead>
            <TableHead>{{ $t("actions") }}</TableHead>
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
              <span v-if="job.filledById === app.applicantId">Выбрано</span>

              <Popover v-if="!job.filledById">
                <PopoverTrigger as-child>
                  <Button>{{ $t("select") }}</Button>
                </PopoverTrigger>
                <PopoverContent class="w-64">
                  <p class="text-sm mb-2">
                    {{ $t("jobs.you_sure_want_to_select_this") }}
                  </p>
                  <PopoverClose class="flex gap-2 justify-end w-full">
                    <Button size="sm" variant="ghost">{{ $t("no") }}</Button>
                    <Button size="sm" @click="handleFillJob(app.applicantId)">
                      {{ $t("yes") }}
                    </Button>
                  </PopoverClose>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Card v-if="chat" class="w-[28rem]">
        <CardHeader>
          <CardTitle>Чат</CardTitle>
          <CardDescription>Между заказчиком и фрилансером</CardDescription>
        </CardHeader>

        <CardContent class="space-y-4">
          <Card
            v-for="msg in chat.messages"
            :key="msg.id"
            class="gap-0 py-4 text-xs max-w-[75%]"
            :class="{ 'ml-auto': msg.senderId === userId }"
          >
            <CardHeader class="px-4">
              <CardTitle>
                {{ msg.sender.name }}
              </CardTitle>
            </CardHeader>

            <CardContent class="px-4 text-gray-500">
              {{ msg.content }}
            </CardContent>

            <CardFooter>
              <div class="text-end w-full text-xs text-gray-600">
                {{
                  new Intl.DateTimeFormat("ru-RU", {
                    dateStyle: "short",
                    timeStyle: "short",
                  }).format(new Date(msg.createdAt))
                }}
              </div>
            </CardFooter>
          </Card>
        </CardContent>

        <CardFooter class="flex-col gap-4">
          <ul v-if="files" class="text-xs items-start">
            <li v-for="file in files" :key="file.name">
              {{ file.name }}
            </li>
          </ul>
          <form
            class="flex items-center gap-1.5 w-full"
            @submit.prevent="handleSendMessage"
          >
            <Input v-model="message" type="text" placeholder="Message..." />

            <Button variant="outline">
              <label for="file">
                <Paperclip />
              </label>
            </Button>
            <Input
              id="file"
              class="hidden"
              type="file"
              @change="previewFiles"
            />
            <Button type="submit" :disabled="isSending">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </app-container>
  </app-main>
</template>
