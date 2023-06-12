<template>
    <v-container>
        <v-row>
            <v-col
                xs="12"
                sm="12"
                md="6"
                lg="4"
                xl="3"
            >
                <v-sheet
                    class="pa-10 text-grey-lighten-5"
                >
                    <div class="text-h5">
                        mBlog i strona domowa
                    </div>
                    Pierwsza wersja produkcyjnej wersji mikrobloga właśnie zawitała na Raspberrypi, który służy już nie tylko do testowania. Obecnie 
                    pogłębiam wiedzę z zakresu Vuetify, czego efektem jest ta strona. Źródła na Githubie pojawią się wkrótce.
                </v-sheet>
            </v-col>

            <v-col
                xs="12"
                sm="12"
                md="6"
                lg="4"
                xl="3"
            >
                <v-sheet
                    class="pa-10 text-grey-lighten-5"
                >
                    <div class="text-h5">
                        mBlog i strona domowa - beta
                    </div>
                    Strona domowa wraz z mikroblogiem, którą zacząłem pisać kilka miesięcy temu i przenoszę dodając kolejne technologie ekosystemu VUE.
                    Tym razem używałem już composition API. Dodałem Router i skorzystałem z dobrodziejstw oferowanych przez Pinia do zarządzania
                    wpisami i komentarzami. 
                    Backend zapewnia Node.js w połączeniu z bazą MariaDB.
                    <br>
                    Źródła frontendu są pod adresem: 
                    <a href="https://github.com/lnkoc/4th_day_after-homepage">4th_day_after</a>
                    <br>
                    Backend jest tutaj: <a href="http://github.com/lnkoc/uBlogApi">uBlogApi</a>
                </v-sheet>
            </v-col>

            <v-col
                xs="12"
                sm="12"
                md="6"
                lg="4"
                xl="3"
            >
                <v-sheet
                    class="pa-10 text-grey-lighten-5"
                >
                    <div class="text-h5">
                        local
                    </div>
                    Pierwszym projektem przy którym zapoznawałem się z VUE jest 'local' - prosty system rejestracji wydarzeń i uczestników na 
                    zarejestrowane wydarzenia. Projekt ten na chwilę pisania tego tekstu jest w wersji 0.0.9. Działa tylko w przeglądarce Chrome, nie jest 
                    jeszcze dopasowany do innych przeglądarek oraz nie jest ukończone jego zarządanie od strony bazy danych. Służył głownie do
                    zapoznania się z językiem PHP i komunikacją z bazą danych MariaDB. A od frontendu z możliwościami VUE przy pierwszym podejściu,
                    gdzie korzystałem z Options API.
                    <br>
                    Źródła projektu znajdują się na githubie pod adresem: <a href="http://github.com/lnkoc/local">github.com/lnkoc/local</a>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>

a, a:visited {
    color: #eeeeee;
    text-decoration: none;

}
</style>