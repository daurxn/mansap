<script setup lang="ts">
import { useAuthStore } from "~/store/auth.store";
import LocaleSelect from "../home/LocaleSelect.vue";

const { isAuthenticated, name } = storeToRefs(useAuthStore());
const route = useRoute();

const isIndexPage = computed(() => route.name === "index");

const linkClass = computed(() => (isIndexPage.value ? "text-white" : ""));
</script>

<template>
  <header class="py-5">
    <div class="container mx-auto">
      <nav
        class="flex mx-auto items-center justify-between text-sm text-gray-500 dark:text-gray-400 transition-colors"
      >
        <div class="flex gap-10 items-center">
          <NuxtLink to="/">
            <span
              class="text-2xl font-bold text-gray-800 dark:text-gray-300"
              :class="{ 'text-white': isIndexPage }"
            >
              Ms
            </span>
          </NuxtLink>

          <div
            v-if="isAuthenticated"
            class="flex gap-0.5 sm:gap-2 md:gap-6 items-center"
          >
            <NuxtLink to="/find-work" :class="linkClass">
              {{ $t("find_work") }}
            </NuxtLink>
            <NuxtLink to="/job-postings" :class="linkClass">
              {{ $t("jobs.my_vacancies") }}
            </NuxtLink>
            <NuxtLink to="/applications" :class="linkClass">
              {{ $t("jobs.my_applications") }}
            </NuxtLink>
          </div>
        </div>

        <div
          class="flex gap-5 items-center"
          :class="{ 'text-white': isIndexPage }"
        >
          <NuxtLink
            v-if="!isAuthenticated"
            to="/auth"
            @click="useCookie('token').value = null"
          >
            {{ $t("login_sign-up") }}
          </NuxtLink>
          <UserDropdown :main="route.name === 'index'" v-else>
            {{ name }}
          </UserDropdown>

          <div class="flex gap-1">
            <LocaleSelect />
            <ClientOnly>
              <ColorModeDropdown />
            </ClientOnly>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
