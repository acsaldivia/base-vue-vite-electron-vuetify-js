<!-- src/App.vue -->
<template>
    <v-app>
        <TitleBar />
        <v-main>
            <v-container>
                <h1>Hola con Vuetify</h1>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import TitleBar from './components/TitleBar.vue'
</script>
