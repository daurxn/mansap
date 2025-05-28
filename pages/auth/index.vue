<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignupForm from "~/components/auth/SignupForm.vue";
import LoginForm from "~/components/auth/LoginForm.vue";
</script>

<template>
  <app-container
    class="grid lg:grid-cols-2 min-h-[90vh] p-4 md:p-8 items-center"
  >
    <div>
      <h1 class="font-semibold leading-11 text-4xl mb-10">
        Нажмите на<br />глобальная сеть талантов
      </h1>

      <div class="flex justify-between gap-10">
        <div>
          <h5 class="text-2xl font-semibold mb-2">Расместите свою работу</h5>
          <p>
            Это бесплатно и просто! Получите множество конкурентоспособных
            предложений, которые соответствуют вашему бюджету, за считанные
            минуты. Начните воплощать свои мечты в реальность.
          </p>
        </div>

        <div>
          <h5 class="text-2xl font-semibold mb-2">Выбрать фрилансеров</h5>
          <p>
            Нет слишком больших или сложных задач. У нас есть фрилансеры для
            задач любого размера и бюджета, более 2700 навыков. Позвольте нашему
            таланту воплотить ваши идеи в жизнь.
          </p>
        </div>
      </div>
    </div>
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
          <SignupForm />
        </TabsContent>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
      </Tabs>
    </div>
  </app-container>
</template>
