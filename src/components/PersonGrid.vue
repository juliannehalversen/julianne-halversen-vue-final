<template>
    <v-container>
        <v-row>
            <v-col cols="3" v-for="person in people" :key="person.name">
                <StarWarsPerson :person="person"></StarWarsPerson>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
//import AppFooter from './components/footer';
import StarWarsPerson from '../components/StarWarsPerson';

export default {
    props: ["people"],
    components: {
        StarWarsPerson
    }
}
</script>

<style scoped>

</style>