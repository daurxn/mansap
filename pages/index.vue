<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import Hero from "~/components/home/Hero.vue";
import Jobs from "~/components/home/Jobs.vue";
import JobSearch from "~/components/home/JobSearch.vue";

definePageMeta({
  layout: "custom",
});

interface UserProfile {
  id: number;
  userId: number;
  name: string;
  age?: number;
  bio?: string;
  gender?: string;
  location?: string;
  imageUrl?: string;
}

const { t } = useI18n();

// Fetch profiles directly with useFetch
const {
  data: profilesData,
  pending,
  error: fetchError,
} = await useFetch("/api/profile/all");

// Computed properties based on fetch results
const profiles = computed(() => (profilesData.value as UserProfile[]) || []);
const isLoading = computed(() => pending.value);
const error = computed(() =>
  fetchError.value ? t("errors.failedToLoadProfiles") : null
);
</script>

<template>
  <div>
    <div class="background-hero">
      <AppHeader />
      <app-main>
        <EditProfileDialog />
        <Hero />
      </app-main>
    </div>

    <!-- Users Grid Section -->
    <div class="users-section container mx-auto py-16 px-4">
      <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
        {{ t("freelancers.title") }}
      </h2>

      <div v-if="isLoading" class="flex justify-center items-center h-32">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
        />
      </div>

      <div v-else-if="error" class="text-center text-red-500 py-4">
        {{ error }}
      </div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="profile in profiles"
          :key="profile.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div class="h-48 bg-gray-200 relative">
            <NuxtImg
              v-if="profile.imageUrl"
              :src="profile.imageUrl"
              alt="Profile image"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-full flex items-center justify-center bg-gray-300"
            >
              <span class="text-4xl text-gray-500 font-bold">{{
                profile.name.charAt(0).toUpperCase()
              }}</span>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-1">{{ profile.name }}</h3>
            <p v-if="profile.location" class="text-gray-600 text-sm mb-2">
              <span class="inline-block mr-1">📍</span> {{ profile.location }}
            </p>
            <p v-if="profile.bio" class="text-gray-700 text-sm line-clamp-2">
              {{ profile.bio }}
            </p>
            <NuxtLink
              :to="`/users/${profile.userId}`"
              class="mt-3 inline-block py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              {{ t("freelancers.viewProfile") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/bg.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin-bottom: 2rem;
}
</style>
