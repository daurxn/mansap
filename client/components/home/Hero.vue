<script setup lang="ts">
import { useRouter } from "vue-router";
import HeroDescription from "./HeroDescription.vue";
import HeroHeading from "./HeroHeading.vue";

const router = useRouter();

function navigateToFindWork() {
  router.push("/find-work");
}
</script>

<template>
  <div class="mx-36 mt-[14vh] max-w-[32rem]">
    <HeroHeading />
    <HeroDescription />
    <Button variant="outline" size="lg" @click="navigateToFindWork">
      Найти работу мечты
    </Button>
  </div>
</template>
