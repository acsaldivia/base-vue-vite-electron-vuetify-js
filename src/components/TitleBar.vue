<!-- scr/components/TitleBar.vue -->
<template>
    <div class="titlebar">
        <v-btn icon @click="toggleTheme" class="window-btn">
            <v-icon class="window-icon" size="18">{{ themeIcon }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="minimize" class="window-btn">
            <v-icon class="window-icon" size="18">mdi-window-minimize</v-icon>
        </v-btn>
        <v-btn icon @click="maximize" class="window-btn">
            <v-icon class="window-icon" size="18">{{
                isMaximized ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'
            }}</v-icon>
        </v-btn>
        <v-btn icon @click="close" class="window-btn close">
            <v-icon class="window-icon" size="18">mdi-close</v-icon>
        </v-btn>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useTheme } from 'vuetify'
const isMaximized = ref(false)
const theme = useTheme()
const minimize = () => window.electronAPI.minimize()
const maximize = async () => {
    await window.electronAPI.maximize()
    isMaximized.value = await window.electronAPI.isMaximized()
}
const close = () => window.electronAPI.close()

const toggleTheme = () => {
    theme.global.name.value =
        theme.global.name.value === 'dark' ? 'light' : 'dark'
}

watchEffect(() => {
    document.body.setAttribute('data-theme', theme.global.name.value)
})

const themeIcon = computed(() =>
    theme.global.name.value === 'dark'
        ? 'mdi-weather-sunny'
        : 'mdi-weather-night'
)
</script>
