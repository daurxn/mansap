<script setup lang="ts">
import Hero from "~/components/home/Hero.vue";
import Jobs from "~/components/home/Jobs.vue";
import JobSearch from "~/components/home/JobSearch.vue";

const searchQuery = ref("");

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <div class="bg mb-8">
      <AppHeader main />
      <app-main>
        <EditProfileDialog />

        <Hero />
        <app-container class="flex py-12 justify-center">
          <JobSearch v-model="searchQuery" />
        </app-container>
      </app-main>
    </div>
    <Jobs :search="searchQuery" />
  </div>
</template>

<style scoped>
.bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/bg.jpg");
  background-size: cover; /* Or your preferred background-size */
  background-position: center; /* Or your preferred background-position */
}
</style>
