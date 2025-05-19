<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLogin } from "~/composables/auth/useLogin";

const { onSubmit, loggingIn } = useLogin();
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ $t("auth.signin_title") }}</CardTitle>
    </CardHeader>
    <form @submit="onSubmit">
      <CardContent class="mb-6">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem class="mb-4">
            <FormLabel>{{ $t("auth.email") }}</FormLabel>
            <FormControl>
              <Input
                :disabled="loggingIn"
                type="text"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="mb-4">
            <FormLabel>{{ $t("auth.password") }}</FormLabel>
            <FormControl>
              <Input
                :disabled="loggingIn"
                autocomplete="on"
                type="password"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </CardContent>
      <CardFooter>
        <Button :disabled="loggingIn" type="submit">{{
          $t("auth.login")
        }}</Button>
      </CardFooter>
    </form>
  </Card>
</template>
