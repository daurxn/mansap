<script setup lang="ts">
import Hero from '~/components/home/Hero.vue';
import Jobs from '~/components/home/Jobs.vue';
import JobSearch from '~/components/home/JobSearch.vue';

const searchQuery = ref('')
</script>

<template>
	<app-main>
		<Hero />

		<app-container class="flex py-12 justify-center">
			<JobSearch v-model="searchQuery" />
			<!-- <LocationSelect /> -->
		</app-container>

		<Jobs :search="searchQuery" />
	</app-main>
</template>

<style scoped>
/* .hero-bg {
	background-color: #fff;
	background-image: radial-gradient(circle at 20% 25%,
			rgba(252, 231, 255, 0.6) 0%,
			rgba(252, 231, 255, 0) 60%),
		radial-gradient(circle at 80% 75%,
			rgba(224, 234, 255, 0.6) 0%,
			rgba(224, 234, 255, 0) 60%);
} */
</style>
