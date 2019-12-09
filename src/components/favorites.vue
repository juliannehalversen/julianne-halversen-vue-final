<template>
    <v-container class="testContainer">
         
        <v-row class="testContainer"> 
            <h1>Your Favorite People:</h1> 
        </v-row>
        <v-row>
            <v-col cols="3"  v-for="(favorite, index) in favoritePerson" v-bind:key="index">
                <v-card>
                <v-card-text>
                        <v-list-item>
                            <v-list-item-content> 
                                <h1> {{ favorite.personName }} </h1> 
                                <v-list-item-title>Born: {{ favorite.personBirthYear }}</v-list-item-title>
                                <v-list-item-title>Gender: {{ favorite.personGender }}</v-list-item-title>
                                <v-list-item-title>Eye Color: {{ favorite.personEyeColor }}</v-list-item-title>
                                <v-list-item-title>Height: {{ favorite.personHeight }}cm</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    computed: {
        favoritePerson () {
            return this.$store.state.favorites;
        } 
    }
}
</script>

<style scoped>

</style>

