<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref()
const content = ref()
const status = ref(null)

const emailRules = ref(
    [
        value => {
            
            if (value) return true

            return "Adres email jest wymagany"
        },
        value => {
            
            let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            
            if (reg.test(value)) return true

            return "Podaj poprawny adres email"
        }
    ])

const contentRules = ref(
    [
        value => {
            if (value?.length <= 3000) return true

            return "Wiadomość może mieć maksymalnie 3000 znaków"
        }
    ])




function submit() {

    const valid = status.value.validate()

    if (valid) {

        axios.post('/sendEmail', {params: {email: email.value, content: content.value}})
            .then((res) => {

                email.value = "";
                content.value = "";
                
                alert("Email wysłany poprawnie " + res.status)
            })
            .catch((err) => {

                console.log(err)
            });
    }
}
</script>

<template>

    <v-container>
        
        <v-row>

            <v-col cols="12" >

                <v-card title="Kontakt">
                    
                    <v-form ref="status" @submit.prevent class="pa-5" >

                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            :counter="255"
                            label="Email"
                            required
                        >
                        </v-text-field>

                        <v-textarea
                            v-model="content"
                            :rules="contentRules"
                            :counter="3000"
                            label="Treść wiadomości"
                            rows="20"
                            auto-grow
                            required
                        >
                        </v-textarea>
                        <v-btn @click.prevent="submit">Wyślij</v-btn>
                    </v-form>

                    <!-- {{ status.validate() }} -->
                </v-card>
            </v-col>

        </v-row>

    </v-container>




    <!-- <div class="container">
        <h2>Kontakt</h2>
            <form>
                <label for="email">Twój adres email:</label><br>
                <input type="email" v-model="message.email" class="generalSet" id="email" /><br>
                <div class="error">{{emailError}}</div><br>
                <label for="text">Treść wiadomości:</label><br>
                <textarea id="text" v-model="message.content" class="generalSet" maxlength="3000" rows="20" /><br>
                <div class="error">{{contentError}}</div><br>
                <button @click.prevent="submit" class="sendButton">Wyślij</button> {{status}}
            </form>
            Ta podstrona jeszcze znajduje się w budowie. Proszę o inną formę kontaktu

    </div> -->
</template>
