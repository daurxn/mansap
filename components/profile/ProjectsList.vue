<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-medium">{{ $t("profile.projects") }}</h3>
      <CreateEditProjectDialog
        @created="handleProjectCreated"
        @updated="handleProjectUpdated"
      >
        <Button size="sm">
          <PlusIcon class="h-4 w-4 mr-1" />
          {{ $t("profile.add_project") }}
        </Button>
      </CreateEditProjectDialog>
    </div>

    <div v-if="isLoading" class="flex justify-center py-8">
      <Loader class="h-8 w-8 animate-spin" />
    </div>

    <div v-else-if="!projects.length" class="py-8 text-center">
      <div class="flex flex-col items-center">
        <FolderIcon class="h-12 w-12 text-muted-foreground mb-2" />
        <p class="text-muted-foreground">{{ $t("profile.no_projects") }}</p>
        <CreateEditProjectDialog
          @created="handleProjectCreated"
          @updated="handleProjectUpdated"
        >
          <Button variant="outline" size="sm" class="mt-4">
            {{ $t("profile.add_first_project") }}
          </Button>
        </CreateEditProjectDialog>
      </div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        v-for="project in projects"
        :key="project.id"
        class="overflow-hidden flex flex-col"
      >
        <div class="relative h-40 w-full">
          <img
            v-if="project.imageUrl"
            :src="project.imageUrl"
            :alt="project.title"
            class="h-full w-full object-cover"
          />
          <div
            v-else
            class="h-full w-full bg-muted flex items-center justify-center"
          >
            <FolderIcon class="h-12 w-12 text-muted-foreground" />
          </div>

          <div class="absolute top-2 right-2 flex space-x-1">
            <CreateEditProjectDialog
              :project="project"
              @created="handleProjectCreated"
              @updated="handleProjectUpdated"
            >
              <Button variant="secondary" size="icon" class="h-8 w-8">
                <PencilIcon class="h-4 w-4" />
              </Button>
            </CreateEditProjectDialog>

            <Button
              variant="destructive"
              size="icon"
              class="h-8 w-8"
              @click="confirmDelete(project)"
            >
              <TrashIcon class="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardContent class="p-4 flex-grow">
          <h4 class="font-medium text-base mb-1">{{ project.title }}</h4>
          <p class="text-sm text-muted-foreground line-clamp-3">
            {{ project.description }}
          </p>
        </CardContent>

        <CardFooter class="p-4 pt-0 flex justify-between">
          <span class="text-xs text-muted-foreground">
            {{ formatDate(project.createdAt) }}
          </span>
          <Button
            v-if="project.projectUrl"
            variant="link"
            size="sm"
            class="p-0 h-auto"
            @click="openProjectUrl(project.projectUrl)"
          >
            <ExternalLinkIcon class="h-4 w-4 mr-1" />
            {{ $t("profile.view_project") }}
          </Button>
        </CardFooter>
      </Card>
    </div>

    <!-- Delete Confirmation Dialog -->
    <Dialog :open="!!projectToDelete" @update:open="projectToDelete = null">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{{ $t("profile.confirm_delete") }}</DialogTitle>
          <DialogDescription>
            {{ $t("profile.delete_project_confirmation") }}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" @click="projectToDelete = null">
            {{ $t("common.cancel") }}
          </Button>
          <Button
            variant="destructive"
            :disabled="isDeleting"
            @click="deleteProject"
          >
            <Loader v-if="isDeleting" class="mr-2 h-4 w-4 animate-spin" />
            {{ $t("common.delete") }}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { toast } from "vue-sonner";
import { useToken } from "~/composables/auth/useToken";
import { formatDate } from "~/utils/date";
import type { Project, ProjectsResponse } from "~/types/project";

// UI Components
import Card from "~/components/ui/card/Card.vue";
import CardContent from "~/components/ui/card/CardContent.vue";
import CardFooter from "~/components/ui/card/CardFooter.vue";
import Button from "~/components/ui/button/Button.vue";
import Loader from "~/components/ui/loader/Loader.vue";
import Dialog from "~/components/ui/dialog/Dialog.vue";
import DialogContent from "~/components/ui/dialog/DialogContent.vue";
import DialogDescription from "~/components/ui/dialog/DialogDescription.vue";
import DialogFooter from "~/components/ui/dialog/DialogFooter.vue";
import DialogHeader from "~/components/ui/dialog/DialogHeader.vue";
import DialogTitle from "~/components/ui/dialog/DialogTitle.vue";

// Icons
import {
  PlusIcon,
  FolderIcon,
  PencilIcon,
  TrashIcon,
  ExternalLinkIcon,
} from "lucide-vue-next";

// Components
import CreateEditProjectDialog from "./CreateEditProjectDialog.vue";

const projects = ref<Project[]>([]);
const isLoading = ref(true);
const projectToDelete = ref<Project | null>(null);
const isDeleting = ref(false);

// Fetch projects
const fetchProjects = async () => {
  isLoading.value = true;
  try {
    const response = await $fetch<ProjectsResponse>("/api/profile/projects", {
      headers: {
        Authorization: `Bearer ${useToken().value}`,
      },
    });
    projects.value = response.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    toast.error("Failed to load projects");
  } finally {
    isLoading.value = false;
  }
};

// Open project URL in new tab
const openProjectUrl = (url: string) => {
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }
  window.open(url, "_blank");
};

// Confirm delete
const confirmDelete = (project: Project) => {
  projectToDelete.value = project;
};

// Handle project created event
const handleProjectCreated = (newProject: Project) => {
  // Add the new project to the list
  projects.value = [newProject, ...projects.value];
};

// Handle project updated event
const handleProjectUpdated = (updatedProject: Project) => {
  // Update the project in the list
  const index = projects.value.findIndex((p) => p.id === updatedProject.id);
  if (index !== -1) {
    projects.value[index] = updatedProject;
    // Create a new array to trigger reactivity
    projects.value = [...projects.value];
  }
};

// Delete project
const deleteProject = async () => {
  if (!projectToDelete.value) return;

  isDeleting.value = true;
  try {
    await $fetch(`/api/profile/projects/${projectToDelete.value.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${useToken().value}`,
      },
    });

    toast.success("Project deleted successfully");
    projects.value = projects.value.filter(
      (p) => p.id !== projectToDelete.value?.id
    );
    projectToDelete.value = null;
  } catch (error) {
    console.error("Error deleting project:", error);
    toast.error("Failed to delete project");
  } finally {
    isDeleting.value = false;
  }
};

// Load projects on mount
onMounted(() => {
  fetchProjects();
});

// Provide data for refreshing
defineExpose({
  refresh: fetchProjects,
});

// Make projects data available for parent components
defineModel<Project[]>("projects", {
  default: () => [],
});
</script>
