<template>
    <v-container>
         <h1>Favorite People:</h1> 
        <v-row>
            <v-col cols="3" v-for="favperson in person" :key="person.name">
                <Favorites :person="person"></Favorites>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
//import AppFooter from './components/footer';
import Favorites from '../components/favorites';

export default {
    props: ["favPerson"],
    components: {
        Favorites
    },
}
</script>

<style scoped>

</style>