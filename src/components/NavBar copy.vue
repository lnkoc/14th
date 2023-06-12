<script>
    import logo from '../assets/ln.png'

    export default {
        
        setup() {

            return { logo }
        },
        data: () => ({
            list: [
                {   
                    title: "mBlog",
                    value: "ublog",
                    to: "/ublog",
                    icon: "mdi-message-text",
                },
                {
                    title: "O mnie",
                    value: "about",
                    to: "/about",
                    icon: "mdi-information",
                },
                {
                    title: "Hobby",
                    value: "hobby",
                    to: "/hobby",
                    icon: "mdi-wrench"
                },
                {
                    title: "Projekty",
                    value: "projects",
                    to: "/projects",
                    icon: "mdi-cloud"
                },
                {
                    title:"Kontakt",
                    value: "contact",
                    to: "/contact",
                    icon: "mdi-email"
                }
            ],
            drawer: false,
            group: null,
        }),

        watch: {
            group() {
                this.drawer = false
            },
        }
    }

</script>

<template>

    <v-app-bar 
            density="comfortable"
        >
            <v-img :src=logo :max-width="52" cover />
            <v-spacer />
            <v-app-bar-nav-icon 
                variant="text" 
                @click.stop="drawer = !drawer" 
                class="d-md-none"
            />
            <v-tabs
                model="tab"
                class="d-none d-md-flex"
            >
                <v-tab
                    v-for="item in list"
                        :key="item.value"
                        :value="item.value"
                        :to="item.to"
                >
                {{ item.title }}
                </v-tab>
        
            </v-tabs>
        
    </v-app-bar>

        <v-navigation-drawer
            v-model="drawer" 
            location="top"
            temporary
            class="d-md-none"
        >

            <v-list density="comfortable">
                <v-list-item
                    v-for="item in list"
                    :key="item.value"
                    :title="item.title"
                    :prepend-icon="item.icon"
                    :to="item.to"
                    :value="item.value"
                />
            </v-list>

        </v-navigation-drawer>
        
</template>