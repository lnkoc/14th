<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';

const prop = defineProps(["articleId"]);
const display = ref(false);
const comments = ref([]);

onMounted(() => {

    axios.post('/getComments', {params: {articleId: prop.articleId}})
        .then((res) => {

            comments.value = res.data;
            
            if (comments.value.length > 0) {
                
                display.value = true;
                
                for (const item of comments.value) {
                
                    let date = item.CREATED.slice(0,10).split("-").reverse().join("/");
                    item.CREATED = date; 
                }
            }
        })
        .catch((err) => {

            console.log("Błąd pobierania komentarzy: " + err);
        });
})

</script>

<template>

    <v-card v-if="display" title="Komentarze" class="pa-5">

        <template v-for="item in comments">
            
                <span class="name">{{ item.NICKNAME }}</span>
                <span class="date">{{ item.CREATED }} </span><br>
                {{ item.CONTENT }}
            
            <br><br>
        </template>

    </v-card>
    
    <v-card v-else title="Nie ma jeszcze komentarzy">
    </v-card>

</template>

<style scoped>
.name {
    font-weight: bold;
    float: left;
}
.date {
    float: right;
}

</style>