<template>
    <v-container>
        <v-row>
            <v-col cols="3" v-for="ship in people" :key="Starship.name">
                <Starship :ship="starships"></Starship>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
//import StarWarsPerson from '../components/StarWarsPerson';
import Starship from '../components/Starship';

export default {
    props: ["starships"],
    components: {
        Starship
    }
}
</script>

<style scoped>

</style>