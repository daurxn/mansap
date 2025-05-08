<script setup lang="ts">
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { useI18n } from 'vue-i18n'

const { locales, setLocale, locale } = useI18n()

const selectedLocale = useState('locale', () => locale.value)

watch(selectedLocale, (newLocale) => setLocale(newLocale))
</script>

<template>
    <Select v-model="selectedLocale">
        <SelectTrigger class="w-28">
            <SelectValue :placeholder="selectedLocale || 'Select locale'" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectItem v-for="(loc, idx) in locales" :key="idx" :value="loc.code">
                    {{ loc.name }}
                </SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
</template>
