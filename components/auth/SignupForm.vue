<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRegister } from '~/composables/auth/useRegister'

const { onSubmit } = useRegister()
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>{{ $t('auth.signup_title') }}</CardTitle>
            <CardDescription>{{ $t('auth.signup_description') }}</CardDescription>
        </CardHeader>
        <form @submit="onSubmit">
            <CardContent class="mb-6">
                <FormField v-slot="{ componentField }" name="name">
                    <FormItem class="mb-4">
                        <FormLabel>{{ $t('auth.name') }}</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="componentField" />
                        </FormControl>
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="email">
                    <FormItem class="mb-4">
                        <FormLabel>{{ $t('auth.email') }}</FormLabel>
                        <FormControl>
                            <Input type="text" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ componentField }" name="password">
                    <FormItem class="mb-4">
                        <FormLabel>{{ $t('auth.password') }}</FormLabel>
                        <FormControl>
                            <Input type="password" autocomplete="on" v-bind="componentField" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </CardContent>
            <CardFooter>
                <Button type="submit">{{ $t('auth.register') }}</Button>
            </CardFooter>
        </form>
    </Card>
</template>