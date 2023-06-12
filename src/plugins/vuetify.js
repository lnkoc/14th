import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomBlueTheme = {
    dark: false,
    colors: {

        background: '#E9F3FC',
        surface: '#6495ed',     // kolor v-app-bar
        primary: '#ffffff',
        'primary-darken-1': '#aaaaaa',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}



export default createVuetify({
    components,
    directives,

    theme: {
        defaultTheme: 'myCustomBlueTheme',
        themes: { myCustomBlueTheme
        }
    },

    defaults: {

        global: {


        },
        VSheet: {
            color: 'rgba(100, 149, 237, 0.6)',
            elevation: 8,

            VBtn: {
                color: 'primary',
                variant: 'outlined'

            }
        },
        VCard: {
            color: 'rgba(100, 149, 237, 0.6)',
        }

    }
})
