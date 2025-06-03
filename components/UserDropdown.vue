<script setup lang="ts">
import { Button } from "@/components/ui/button";

import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuGroup,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuSeparator,
DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
LogOut,
User
} from "lucide-vue-next";
import { useAuthStore } from "~/store/auth.store";
import { useI18n } from "vue-i18n";

const { logUserOut } = useAuthStore();
const router = useRouter();
const { t } = useI18n();

function navigateToProfile() {
  router.push("/profile");
}

const { main = false } = defineProps<{
  main?: boolean;
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="link" :class="{ 'text-white': main }">
        <slot />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>{{ t("common.my_account", "My Account") }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem @click="navigateToProfile">
          <User class="mr-2 h-4 w-4" />
          <span>{{ t("common.profile", "Profile") }}</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="logUserOut">
        <LogOut class="mr-2 h-4 w-4" />
        <span>{{ t("common.logout") }}</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
