<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child @click="isOpen = true">
      <slot />
    </DialogTrigger>
    <DialogContent class="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle>{{ isEditing ? $t("profile.edit_project") : $t("profile.add_project") }}</DialogTitle>
        <DialogDescription>
          {{ $t("profile.project_description") }}
        </DialogDescription>
      </DialogHeader>
      <form class="space-y-4" @submit="onSubmit">
        <div class="space-y-4">
          <div class="space-y-2">
            <Label for="title">{{ $t("profile.project_title") }}</Label>
            <Input 
              id="title" 
              v-model="form.title" 
              :placeholder="$t('profile.project_title_placeholder')" 
              :class="{ 'border-destructive': errors.title }"
            />
            <p v-if="errors.title" class="text-destructive text-sm">{{ errors.title }}</p>
          </div>
          
          <div class="space-y-2">
            <Label for="description">{{ $t("profile.project_description_label") }}</Label>
            <Textarea 
              id="description" 
              v-model="form.description" 
              :placeholder="$t('profile.project_description_placeholder')" 
              :class="{ 'border-destructive': errors.description }"
              rows="4"
            />
            <p v-if="errors.description" class="text-destructive text-sm">{{ errors.description }}</p>
          </div>
          
          <div class="space-y-2">
            <Label for="projectUrl">{{ $t("profile.project_url") }}</Label>
            <Input 
              id="projectUrl" 
              v-model="form.projectUrl" 
              :placeholder="$t('profile.project_url_placeholder')" 
            />
          </div>
          
          <div class="space-y-2">
            <Label for="imageUrl">{{ $t("profile.project_image") }}</Label>
            <div class="flex items-center gap-2">
              <Input 
                id="imageUrl" 
                v-model="form.imageUrl" 
                :placeholder="$t('profile.project_image_placeholder')" 
                class="flex-1"
              />
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                @click="openFileUpload"
              >
                {{ $t("profile.upload") }}
              </Button>
              <input 
                ref="fileInput"
                type="file" 
                accept="image/*" 
                class="hidden" 
                @change="handleFileUpload"
              >
            </div>
            <div v-if="form.imageUrl" class="mt-2">
              <img :src="form.imageUrl" alt="Project preview" class="h-24 w-auto rounded-md object-cover">
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button type="submit" :disabled="isSubmitting">
            <Loader v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin" />
            {{ isSubmitting ? $t("common.saving") : (isEditing ? $t("common.update") : $t("common.create")) }}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { toast } from 'vue-sonner';
import { useToken } from '~/composables/auth/useToken';
import type { Project } from '~/types/project';

// UI Components
import Dialog from '~/components/ui/dialog/Dialog.vue';
import DialogContent from '~/components/ui/dialog/DialogContent.vue';
import DialogDescription from '~/components/ui/dialog/DialogDescription.vue';
import DialogFooter from '~/components/ui/dialog/DialogFooter.vue';
import DialogHeader from '~/components/ui/dialog/DialogHeader.vue';
import DialogTitle from '~/components/ui/dialog/DialogTitle.vue';
import DialogTrigger from '~/components/ui/dialog/DialogTrigger.vue';
import Button from '~/components/ui/button/Button.vue';
import Input from '~/components/ui/input/Input.vue';
import Label from '~/components/ui/label/Label.vue';
import Textarea from '~/components/ui/textarea/Textarea.vue';
import Loader from '~/components/ui/loader/Loader.vue';

const props = defineProps<{
  project?: Project;
}>();

const emit = defineEmits(['created', 'updated']);
const isOpen = ref(false);

const isEditing = computed(() => !!props.project);
const fileInput = ref<HTMLInputElement | null>(null);
const isSubmitting = ref(false);

// Form state
const form = reactive({
  title: props.project?.title || '',
  description: props.project?.description || '',
  projectUrl: props.project?.projectUrl || '',
  imageUrl: props.project?.imageUrl || '',
});

// Form errors
const errors = reactive({
  title: '',
  description: '',
});

// Validate form
const validateForm = () => {
  let isValid = true;
  errors.title = '';
  errors.description = '';

  if (!form.title.trim()) {
    errors.title = 'Title is required';
    isValid = false;
  }

  if (!form.description.trim()) {
    errors.description = 'Description is required';
    isValid = false;
  }

  return isValid;
};

// Open file upload dialog
const openFileUpload = () => {
  fileInput.value?.click();
};

// Handle file upload
const handleFileUpload = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (!target.files || target.files.length === 0) return;

  const file = target.files[0];
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await $fetch<{ imageUrl: string }>('/api/upload/chat-image', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${useToken().value}`,
      },
    });

    if (response && response.imageUrl) {
      form.imageUrl = response.imageUrl;
    }
  } catch (error) {
    toast.error('Failed to upload image');
    console.error('Upload error:', error);
  }
};

// Form submission
const onSubmit = async (event: Event) => {
  event.preventDefault();
  
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  try {
    if (isEditing.value && props.project) {
      // Update existing project
      await $fetch(`/api/profile/projects/${props.project.id}`, {
        method: 'PATCH',
        body: form,
        headers: {
          Authorization: `Bearer ${useToken().value}`,
        },
      });
      toast.success("Project updated successfully");
    } else {
      // Create new project
      await $fetch('/api/profile/projects', {
        method: 'POST',
        body: form,
        headers: {
          Authorization: `Bearer ${useToken().value}`,
        },
      });
      toast.success("Project created successfully");
    }
    
    // Refresh projects data
    await refreshNuxtData('projects');
    
    // Emit event to parent component
    if (isEditing.value && props.project) {
      emit('updated', { ...props.project, ...form });
    } else {
      emit('created', form);
    }
    
    // Close dialog
    isOpen.value = false;
  } catch (error) {
    toast.error(isEditing.value ? "Failed to update project" : "Failed to create project");
    console.error("Submission error:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
