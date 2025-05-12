<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { toast } from "vue-sonner";
import * as z from "zod";
import { useToken } from "~/composables/auth/useToken";

const { jobId } = defineProps<{
  jobId: number;
}>();

const form = useForm({
  validationSchema: toTypedSchema(
    z.object({
      coverLetter: z.string().min(10).max(1000),
    })
  ),
});

const onSubmit = form.handleSubmit(async (values) => {
  const res = await $fetch("/api/jobs/application", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${useToken().value}`,
    },
    body: { ...values, jobId },
  });
  console.log(res);
  toast.success("Application has been submitted!");
});
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <form id="apply" class="space-y-5" @submit="onSubmit">
      <DialogContent class="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{{ $t("jobs.apply") }}</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <FormField v-slot="{ componentField }" name="coverLetter">
          <FormItem>
            <FormLabel>{{ $t("jobs.cover_letter") }}</FormLabel>
            <FormControl>
              <Textarea v-bind="componentField" />
            </FormControl>
          </FormItem>
        </FormField>

        <DialogFooter>
          <Button type="submit" form="apply">
            {{ $t("jobs.apply") }}
          </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>
