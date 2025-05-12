<script setup lang="ts">
import Hero from "~/components/home/Hero.vue";
import Jobs from "~/components/home/Jobs.vue";
import JobSearch from "~/components/home/JobSearch.vue";

const searchQuery = ref("");
</script>

<template>
  <app-main>
    <EditProfileDialog />
    <Hero />
    <app-container class="flex py-12 justify-center">
      <JobSearch v-model="searchQuery" />
    </app-container>

    <Jobs :search="searchQuery" />
  </app-main>
</template>
