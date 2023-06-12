<script setup>

import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios";
import ShowComments from './ShowComments.vue'
import AddComment from './AddCommment.vue'

const prop = defineProps(["articleId", "date", "path"]);

const article = reactive({
    title: "",
    createdDate: "",
    intro: "",
    content: ""
});

const router = useRouter()

// załadowanie artukułu

onMounted(() => {

    axios.get('/getBlogArticle', {params: { ID: prop.articleId}})
        .then((res) => {

            let date = res.data[0].CREATED.slice(0,10).split("-").reverse().join("/");
            article.title = res.data[0].TITLE;
            article.createdDate = date;
            article.intro = res.data[0].INTRO;
            article.content = res.data[0].CONTENT;
        })
})

// przekierowanie na stronę główną

function close() {

  router.push("/mblog")
}

</script>

<template>

  <v-container>
    
    <v-row>

      <v-col
        xs="12"
        xm="12"
        md="12"
        lg="12"
        xl="12"
        xxl="12"
      >
        <v-sheet class="pa-10 text-grey-lighten-5" >

          <div class="text-h5">
            {{ article.title }}
          </div>
          
          <br>
            {{ article.createdDate }}
          <br><br>

          <p>
            {{ article.intro }}
          </p>
          <br>

          <p>
            <span v-html="article.content" />
          </p>
          <br>
          
          <ShowComments :articleId="prop.articleId" /><br><br>
          <AddComment :articleId="prop.articleId" /><br><br>
        
          <v-btn @click="close()" >Powrót do listy artykułów</v-btn>

        </v-sheet>

      </v-col>

    </v-row>

  </v-container>

</template>
