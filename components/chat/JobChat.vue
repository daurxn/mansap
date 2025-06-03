<script setup lang="ts">
import { toast } from "vue-sonner";
import { useToken } from "~/composables/auth/useToken";
import { useAuthStore } from "~/store/auth.store";
import type { Chat } from "~/types/chat";

const props = defineProps<{
  chat: Chat;
  jobId: string | number;
}>();

const emit = defineEmits<{
  (e: "refresh"): void;
}>();

const { userId } = storeToRefs(useAuthStore());
const token = useToken();
const message = ref("");
const isSending = ref(false);

const headers = computed(() => ({
  Authorization: `Bearer ${token.value}`,
}));

async function handleSendMessage() {
  if (!message.value || !props.chat) return;

  isSending.value = true;
  try {
    await $fetch("/api/chat/message", {
      method: "POST",
      headers: headers.value,
      body: {
        chatId: props.chat.id,
        content: message.value,
      },
    });

    message.value = "";
    emit("refresh");
  } catch (error) {
    console.error("Failed to send message:", error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    isSending.value = false;
  }
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(dateString));
}
</script>

<template>
  <Card class="w-full max-w-[28rem]">
    <CardHeader>
      <CardTitle>Чат</CardTitle>
      <CardDescription>Между заказчиком и фрилансером</CardDescription>
    </CardHeader>

    <CardContent class="space-y-4 max-h-[400px] overflow-y-auto">
      <Card
        v-for="msg in chat.messages"
        :key="msg.id"
        class="gap-0 py-4 text-xs max-w-[75%]"
        :class="{ 'ml-auto': msg.senderId === userId }"
      >
        <CardHeader class="px-4">
          <CardTitle>
            {{ msg.sender.name }}
          </CardTitle>
        </CardHeader>

        <CardContent class="px-4 text-gray-500">
          <div>{{ msg.content }}</div>
        </CardContent>

        <CardFooter>
          <div class="text-end w-full text-xs text-gray-600">
            {{ formatDate(msg.createdAt) }}
          </div>
        </CardFooter>
      </Card>
    </CardContent>

    <CardFooter>
      <form
        class="flex items-center gap-1.5 w-full"
        @submit.prevent="handleSendMessage"
      >
        <Input
          v-model="message"
          type="text"
          :placeholder="$t('jobs.message')"
          :disabled="isSending"
        />

        <Button
          type="submit"
          :disabled="isSending || !message"
        >
          {{ $t('jobs.send') }}
        </Button>
      </form>
    </CardFooter>
  </Card>
</template>
