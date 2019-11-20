
<template>
    <v-card height="100">
        <v-footer
        absolute
        class="font-weight-medium"
        >

        <h1>Your Favorite People:</h1>

        <v-card>
        <v-card-title>
            <div>
                <h3> {{ this.$store.state.favorites[0].personName }} </h3> 
            </div>
        </v-card-title>

        <v-card-text>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Born: {{ this.$store.state.favorites[0].personBirthYear }}</v-list-item-title>
                        <v-list-item-title>Gender: {{ this.$store.state.favorites[0].personGender }}</v-list-item-title>
                        <v-list-item-title>Eye Color: {{ this.$store.state.favorites[0].personEyeColor }}</v-list-item-title>
                        <v-list-item-title>Height: {{ this.$store.state.favorites[0].personHeight }}cm</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
        </v-card-text>
    </v-card>
        <!--<h3>{{ this.$store.state.favorites.toString().replace(/,/g, ", ") }} </h3> -->
        
    <v-card>
        <v-card-title>
            <div>
                <h3> {{ this.$store.state.favorites[1].personName }} </h3> 
            </div>
        </v-card-title>

        <v-card-text>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Born: {{ this.$store.state.favorites[1].personBirthYear }}</v-list-item-title>
                        <v-list-item-title>Gender: {{ this.$store.state.favorites[1].personGender }}</v-list-item-title>
                        <v-list-item-title>Eye Color: {{ this.$store.state.favorites[1].personEyeColor }}</v-list-item-title>
                        <v-list-item-title>Height: {{ this.$store.state.favorites[1].personHeight }}cm</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
        </v-card-text>
    </v-card>
   <h1>test git</h1>
        </v-footer>
    </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>

