<script setup>

import { reactive, ref } from 'vue'
import axios from 'axios'

const prop = defineProps(["articleId"])
const comment = reactive(
                        {
                            articleId: prop.articleId, 
                            nickname:"", 
                            content: ""
                        })

const nickRules = ref(
        [
            value => {
                if (value) {
                    
                    return true
                }
                return "Podaj Nickname"
            },
            value => {
                if (value?.length <= 25 ) {

                    return true
                }
                return "Nickname powinien mieć mniej niż 25 znaków"
            }
        ])
const commentRules = ref(
        [
            value => {
                if (value?.length <= 500) {

                    return true
                }
                return "Komentarz może zawierać maksymalnie 500 znaków"
            }
        ])

function sendComment() {

    axios.post('/saveComment', { params: comment })
        .then((res) => {

            console.log("wysłano komentarz " + res.status + " " + res.data);
            comment.nickname = ""
            comment.content = ""
        })
        .catch((err) => {
            
            console.log("błąd wysyłania komentarza: " + err);
        })


}
</script>

<template>

    <v-card class="pa-5" title="Napisz coś od siebie ;)">
        <v-form @submit.prevent>
            <v-text-field
                v-model="comment.nickname"
                :rules="nickRules"
                :counter="25"
                label="Nickname"
            >
            </v-text-field>
            <v-textarea
                v-model="comment.content"
                :rules="commentRules"
                :counter="500"
                label="Komentarz"
            >

            </v-textarea>
            <v-btn @click.prevent="sendComment">Prześlij</v-btn>
        </v-form>

    </v-card>
    <br><br>

</template>
