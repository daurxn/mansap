<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";
import { cn } from "@/lib/utils";
import { toTypedSchema } from "@vee-validate/zod";
import { Check, ChevronsUpDown } from "lucide-vue-next";
import { useForm } from "vee-validate";
import { toast } from "vue-sonner";
import * as z from "zod";
import { useLocations } from "~/composables/jobs/useLocations";

const router = useRouter();

const locations = await useLocations();

const ExperienceLevelEnumValues = ["JUNIOR", "MID", "SENIOR"] as const;
const UnitEnumValues = ["HOUR", "DAY", "PROJECT"] as const;
const JobTypeEnumValues = ["FULL_TIME", "PART_TIME", "CONTRACT"] as const;

const formSchema = toTypedSchema(
  z.object({
    name: z
      .string({ required_error: "Job name is required." })
      .min(3, { message: "Job name must be at least 3 characters." })
      .max(100, { message: "Job name cannot be longer than 100 characters." }),
    description: z
      .string({ required_error: "Description is required." })
      .min(10, { message: "Description must be at least 10 characters." })
      .max(5000, {
        message: "Description cannot be longer than 5000 characters.",
      }),
    salary: z.coerce
      .number({
        invalid_type_error: "Salary must be a number.",
        required_error: "Salary is required.",
      })
      .positive({ message: "Salary must be a positive number." })
      .multipleOf(0.01, {
        message: "Salary can have up to two decimal places.",
      }),
    unit: z.enum(UnitEnumValues, {
      required_error: "Salary unit is required.",
    }),
    experienceLevel: z.enum(ExperienceLevelEnumValues, {
      required_error: "Experience level is required.",
    }),
    jobType: z.enum(JobTypeEnumValues, {
      required_error: "Job type is required.",
    }),
    locationId: z.coerce
      .number()
      .int({ message: "Location ID must be an integer." })
      .positive({ message: "Location ID must be a positive number." })
      .optional(),
    tags: z
      .array(
        z
          .string()
          .min(2, { message: "Each tag must be at least 2 characters." })
          .max(50, { message: "Each tag cannot be longer than 50 characters." })
      )
      .min(1, {
        message: "If tags are provided, there must be at least one tag.",
      })
      .optional(),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  console.log(values);
  await $fetch("/api/jobs", {
    method: "POST",

    body: values,

    headers: {
      Authorization: `Bearer ${useCookie("token").value}`,
    },
  });

  toast("Creating job posting", {
    description: "Job post was created successfully",

    duration: 2000,
  });

  router.push("/");
});
</script>

<template>
  <form id="newJob" @submit="onSubmit">
    <Dialog>
      <DialogTrigger as-child>
        <Button size="lg"> Post a job </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Posting a job</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <FormField v-slot="{ componentField }" name="name">
          <FormItem class="mb-2">
            <FormLabel>{{ $t("jobs.name") }}</FormLabel>

            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="description">
          <FormItem class="mb-2">
            <FormLabel>
              {{ $t("description") }}
            </FormLabel>

            <FormControl>
              <Input type="text" v-bind="componentField" />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField }"
          name="experienceLevel"
          type="radio"
        >
          <FormItem class="mb-2 flex gap-4">
            <FormLabel>Experience Level</FormLabel>

            <FormControl>
              <RadioGroup v-bind="componentField" class="flex">
                <FormItem class="flex items-center">
                  <FormControl>
                    <RadioGroupItem value="JUNIOR" />
                  </FormControl>

                  <FormLabel> Junior </FormLabel>
                </FormItem>

                <FormItem class="flex items-center">
                  <FormControl>
                    <RadioGroupItem value="MID" />
                  </FormControl>

                  <FormLabel>Middle</FormLabel>
                </FormItem>

                <FormItem class="flex items-center">
                  <FormControl>
                    <RadioGroupItem value="SENIOR" />
                  </FormControl>

                  <FormLabel>Senior</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="salary">
          <FormItem class="mb-2">
            <FormLabel> {{ $t("salary") }} ($) </FormLabel>

            <FormControl>
              <Input type="number" v-bind="componentField" />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="unit" type="radio">
          <FormItem class="mb-2 flex gap-4">
            <FormLabel>Unit</FormLabel>

            <FormControl>
              <RadioGroup v-bind="componentField" class="flex">
                <FormItem class="flex items-center">
                  <FormControl>
                    <RadioGroupItem value="HOUR" />
                  </FormControl>

                  <FormLabel> Hour </FormLabel>
                </FormItem>

                <FormItem class="flex items-center">
                  <FormControl>
                    <RadioGroupItem value="DAY" />
                  </FormControl>

                  <FormLabel>Day</FormLabel>
                </FormItem>

                <FormItem class="flex items-center">
                  <FormControl>
                    <RadioGroupItem value="PROJECT" />
                  </FormControl>

                  <FormLabel>Project</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="jobType" type="radio">
          <FormItem class="mb-2 flex gap-4">
            <FormLabel>Job type</FormLabel>

            <FormControl>
              <RadioGroup v-bind="componentField" class="flex">
                <FormItem class="flex items-center">
                  <FormControl>
                    <RadioGroupItem value="FULL_TIME" />
                  </FormControl>

                  <FormLabel>Full time</FormLabel>
                </FormItem>

                <FormItem class="flex items-center">
                  <FormControl>
                    <RadioGroupItem value="PART_TIME" />
                  </FormControl>

                  <FormLabel>Part time</FormLabel>
                </FormItem>

                <FormItem class="flex items-center">
                  <FormControl>
                    <RadioGroupItem value="CONTRACT" />
                  </FormControl>

                  <FormLabel>Contract</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
          </FormItem>
        </FormField>

        <FormField name="locationId">
          <FormItem>
            <FormLabel>Location</FormLabel>

            <Combobox by="label">
              <FormControl>
                <ComboboxAnchor>
                  <div class="relative items-center">
                    <ComboboxInput
                      :display-value="(val) => val ?? ''"
                      placeholder="Select region..."
                    />

                    <ComboboxTrigger
                      class="absolute end-0 inset-y-0 flex items-center justify-center px-3"
                    >
                      <ChevronsUpDown class="size-4 text-muted-foreground" />
                    </ComboboxTrigger>
                  </div>
                </ComboboxAnchor>
              </FormControl>

              <ComboboxList>
                <ComboboxEmpty>Nothing found.</ComboboxEmpty>

                <ComboboxGroup>
                  <ComboboxItem
                    v-for="location in locations"
                    :key="location.id"
                    :value="location.name"
                    @select="
                      () => form.setFieldValue('locationId', location.id)
                    "
                  >
                    {{ location.name }}

                    <ComboboxItemIndicator>
                      <Check :class="cn('ml-auto h-4 w-4')" />
                    </ComboboxItemIndicator>
                  </ComboboxItem>
                </ComboboxGroup>
              </ComboboxList>
            </Combobox>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="tags">
          <FormItem>
            <FormLabel>Tags</FormLabel>

            <FormControl>
              <TagsInput
                :model-value="componentField.modelValue"
                @update:model-value="componentField['onUpdate:modelValue']"
              >
                <TagsInputItem
                  v-for="item in componentField.modelValue"
                  :key="item"
                  :value="item"
                >
                  <TagsInputItemText />

                  <TagsInputItemDelete />
                </TagsInputItem>

                <TagsInputInput />
              </TagsInput>
            </FormControl>
          </FormItem>
        </FormField>

        <DialogFooter>
          <Button type="submit" form="newJob"> Add job </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </form>
</template>
