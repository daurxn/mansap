<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
  <app-container class="grid lg:grid-cols-2 min-h-[90vh] p-4 md:p-8">
    <div class="hidden lg:block" />
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
          <AuthSignupForm />
        </TabsContent>

        <TabsContent value="login">
          <AuthLoginForm />
        </TabsContent>
      </Tabs>
    </div>
  </app-container>
</template>
