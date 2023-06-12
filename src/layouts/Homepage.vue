<script setup>
    import { RouterView } from 'vue-router'
    import  NavBar from '../components/NavBar.vue'
    import bgimg from '../assets/tlo1920.jpg'
</script>

<template>

    <v-app>

        <NavBar />    

        <v-main>

            <v-parallax :src="bgimg" height="100%">

                <RouterView />

            </v-parallax>
        
        </v-main>

        <v-footer><div class="text-center w-100" >Projekt i wykonanie lnkoc 2022-2023</div></v-footer>

    </v-app>

</template>
