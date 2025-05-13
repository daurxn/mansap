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
    <div class="background-hero">
      <AppHeader main />
      <app-main>
        <EditProfileDialog />

        <Hero />
      </app-main>
    </div>
    <Jobs :search="searchQuery" />
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
