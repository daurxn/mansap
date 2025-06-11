<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignupForm from "~/components/auth/SignupForm.vue";
import LoginForm from "~/components/auth/LoginForm.vue";
</script>

<template>
  <app-container
    class="grid lg:grid-cols-2 min-h-[90vh] p-4 md:p-8 items-center"
  >
    <div>
      <h1 class="font-semibold leading-11 text-4xl mb-10">
        {{ $t('auth.landing.hero_title_part1') }}
        <br />
        {{ $t('auth.landing.hero_title_part2') }}
      </h1>

      <div class="flex justify-between gap-10">
        <div>
          <h5 class="text-2xl font-semibold mb-2">
            {{ $t("auth.landing.post_job_title") }}
          </h5>
          <p>
            {{ $t("auth.landing.post_job_description") }}
          </p>
        </div>

        <div>
          <h5 class="text-2xl font-semibold mb-2">
            {{ $t("auth.landing.choose_freelancers_title") }}
          </h5>
          <p>
            {{ $t("auth.landing.choose_freelancers_description") }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <Tabs default-value="signup" class="lg:w-sm w-full max-w-md">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="signup">
            {{ $t("auth.signup_title") }}
          </TabsTrigger>
          <TabsTrigger value="login">
            {{ $t("auth.signin_title") }}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
      </Tabs>
    </div>
  </app-container>
</template>
