<script setup lang="ts">
import { useAuthStore } from "~/store/auth.store";
import LocaleSelect from "../home/LocaleSelect.vue";

const { isAuthenticated, name } = storeToRefs(useAuthStore());
</script>

<template>
  <header class="py-5">
    <div class="container mx-auto">
      <nav
        class="flex mx-auto items-center justify-between text-sm text-gray-500 dark:text-gray-400 transition-colors"
      >
        <div class="flex gap-10 items-center">
          <NuxtLink to="/">
            <span class="text-2xl font-bold text-gray-800 dark:text-gray-300">
              Ms
            </span>
          </NuxtLink>

          <div
            v-if="isAuthenticated"
            class="flex gap-0.5 sm:gap-2 md:gap-6 items-center"
          >
            <NuxtLink to="/job-postings">
              {{ $t("jobs.my_vacancies") }}
            </NuxtLink>
          </div>
        </div>

        <div class="flex gap-2 items-center">
          <NuxtLink
            v-if="!isAuthenticated"
            to="/auth"
            @click="useCookie('token').value = null"
          >
            Login / Sign up
          </NuxtLink>
          <UserDropdown v-else>
            {{ name }}
          </UserDropdown>
          <LocaleSelect />
          <ColorModeDropdown />
        </div>
      </nav>
    </div>
  </header>
</template>
