<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter();
const list = ref([]);

// załadowanie listy wpisów

onMounted(() => {

    axios.get('/getBlogList')
        .then((res) => {

            for (let item in res.data) {

                let date = res.data[item].CREATED.slice(0,10).split("-").reverse().join("/");
                res.data[item].CREATED = date;
                list.value.push(res.data[item]);
            }
        })
})


// załadowanie wybranego artykułu

function loadArticle(id, created, title) {

    let dateCreated = created.split("/").join("-")
    let titlePath = title.split(" ").join("_") 

    router.push({   name: 'ShowArticle', 
                    params: { 
                                articleId: id, 
                                date: dateCreated, 
                                path: titlePath
                            } 
                })
}

</script>

<template>

    <v-container>

        <v-row>

            <v-col
                cols="12"
                xl="6"

                v-for="item in list"
                    :key="item.ID"
            >
                <v-card 
                    class="pa-5 text-grey-lighten-5" 
                    :title="item.TITLE"
                    :subtitle="item.CREATED"
                    :text="item.INTRO"
                >
                    <v-btn @click.stop="loadArticle(item.ID, item.CREATED, item.TITLE)">Czytaj całość</v-btn>
                
                </v-card>

            </v-col>

        </v-row>

    </v-container>

</template>
