import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { toast } from "vue-sonner";
import * as z from "zod";
import { useToken } from "../auth/useToken";

export function useApplyToJob(jobId: number, callback: () => void) {
  const form = useForm({
    validationSchema: toTypedSchema(
      z.object({
        coverLetter: z.string().min(10).max(1000),
      })
    ),
  });

  const isApplying = ref(false);

  const onSubmit = form.handleSubmit(async (values) => {
    isApplying.value = true;
    await $fetch("/api/jobs/applications", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${useToken().value}`,
      },
      body: { ...values, jobId },
    });
    isApplying.value = false;

    await refreshNuxtData(["/api/jobs", `/api/jobs/${jobId}`]);
    toast.success("Application has been submitted!");
    callback();
  });

  return { onSubmit, isApplying };
}
