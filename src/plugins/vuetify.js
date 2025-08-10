/* src/plugins/vuetify.js */
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import '../assets/titlebar.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    components,
    directives,
    blueprint: md3,
    theme: {
        defaultTheme: 'dark', // Establecer dark por defecto
        themes: {
            dark: {
                dark: true,
                colors: {
                    //background: '#121212',
                    //surface: '#1e1e1e',
                    primary: '#000000ff',
                },
            },
            light: {
                dark: false,
                colors: {
                    //background: '#ffffff',
                    //surface: '#f5f5f5',
                    primary: '#000000ff',
                },
            },
        },
    },
})
