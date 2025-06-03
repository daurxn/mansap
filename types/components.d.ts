declare module '~/components/ui/loader/Loader.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{
    size?: string;
    color?: string;
  }, Record<string, unknown>, unknown>;
  export default component;
}

declare module '~/utils/date' {
  export function formatDate(date: string): string;
}
