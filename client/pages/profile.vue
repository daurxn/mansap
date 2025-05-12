<script setup lang="ts">
import EditProfileDialog from "~/components/EditProfileDialog.vue";
import Separator from "~/components/ui/separator/Separator.vue";
import { useToken } from "~/composables/auth/useToken";

const headers = {
  Authorization: `Bearer ${useToken().value}`,
};

const { data } = useFetch<Record<string, unknown>>("/api/profile", {
  headers,
  key: "profile",
});

const { data: resume } = useFetch("/api/profile/resume", {
  headers,
  key: "resume",
});

console.log(resume.value);

const profileLength = computed(() => Object.keys(data.value ?? {}).length);
</script>

<template>
  <app-main>
    <app-container class="flex gap-8">
      <div class="basis-1/2">
        <h1 class="text-3xl font-medium mb-6">{{ $t("profile.heading") }}</h1>

        <div class="mb-8">
          <template v-for="(value, key, idx) in data" :key="key">
            <div class="space-y-1">
              <h4 class="text-sm font-medium leading-none">
                {{ $t(`profile.${key}`) }}
              </h4>
              <p class="text-sm text-muted-foreground">
                {{ value }}
              </p>
            </div>
            <Separator v-if="idx < profileLength - 1" class="my-4" />
          </template>
        </div>

        <EditProfileDialog>
          <Button size="lg">{{ $t("profile.edit") }}</Button>
        </EditProfileDialog>
      </div>

      <div class="basis-1/2">
        <h1 class="text-3xl font-medium mb-6">{{ $t("profile.resume") }}</h1>
        <ProfileCreateEditResumeDialog v-if="!resume">
          <Button size="lg">{{ $t("create") }}</Button>
        </ProfileCreateEditResumeDialog>
        <template v-else>
          <div class="space-y-1">
            <h4 class="text-sm font-medium leading-none">
              {{ $t(`jobs.exp_level`) }}
            </h4>
            <p class="text-sm text-muted-foreground">
              {{ resume.workExperience }}
            </p>
          </div>
          <Separator class="my-4" />
          <div class="space-y-1">
            <h4 class="text-sm font-medium leading-none">
              {{ $t(`jobs.education`) }}
            </h4>
            <p class="text-sm text-muted-foreground">
              {{ resume.education }}
            </p>
          </div>
        </template>
      </div>
    </app-container>
  </app-main>
</template>
