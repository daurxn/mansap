<script setup lang="ts">
import type { Job } from "~/types/job";
import Card from "../ui/card/Card.vue";
import CardHeader from "../ui/card/CardHeader.vue";
import CardTitle from "../ui/card/CardTitle.vue";
import { CircleDollarSign, Image, MapPin } from "lucide-vue-next";
import CardContent from "../ui/card/CardContent.vue";

const { job } = defineProps<{
  job: Job;
}>();
</script>

<template>
  <li>
    <Card class="gap-4">
      <CardHeader>
        <CardTitle class="font-normal">
          <div class="flex items-center gap-4">
            <Image :size="42" />
            <div class="flex flex-col gap-2">
              <span class="font-semibold">{{ job.name }}</span>
              <div class="flex gap-2 text-sm">
                <span class="font-medium">{{ job.postedBy.name }}</span>
                <span>&#x2022;</span>
                <div class="flex items-center gap-0.5">
                  <MapPin :size="16" />
                  <span> {{ job.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent class="text-sm">
        <p class="text-gray-800 dark:text-gray-200 mb-3">
          {{ job.description }}
        </p>
        <ul class="flex gap-2 font-medium mb-7">
          <li
            v-for="tag in job.tags"
            :key="tag.id"
            class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-xs"
          >
            {{ tag.name }}
          </li>
        </ul>

        <div class="flex justify-between">
          <div class="flex gap-2 items-center">
            <div class="flex items-center gap-1">
              <CircleDollarSign color="#5D3FD3" :size="20" />
              ${{ job.salary }}/{{ job.job_type }}
            </div>

            <span>&#x2022;</span>

            <span>X proposals</span>
          </div>

          <Button>Apply now</Button>
        </div>
      </CardContent>
    </Card>
  </li>
</template>
