
<template>
    <v-card height="100">
        <v-footer
        absolute
        class="font-weight-medium"
        >

        <h1>Your Favorite People:</h1>
        <button type="button" @click="test">Run Test</button>


        <v-card>
        <v-card-title>
            <div>
                <h3> {{ this.$store.state.favorites[0].personName }} </h3> 
            </div>
        </v-card-title>

        <v-card-text>
                <v-list-item>
                    <v-list-item-content> <!-- add vfor loop here -->
                        <v-list-item-title>Born: {{ this.$store.state.favorites[0].personBirthYear }}</v-list-item-title>
                        <v-list-item-title>Gender: {{ this.$store.state.favorites[0].personGender }}</v-list-item-title>
                        <v-list-item-title>Eye Color: {{ this.$store.state.favorites[0].personEyeColor }}</v-list-item-title>
                        <v-list-item-title>Height: {{ this.$store.state.favorites[0].personHeight }}cm</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
        </v-card-text>
    </v-card>
        <!--<h3>{{ this.$store.state.favorites.toString().replace(/,/g, ", ") }} </h3> -->
      <!--  
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
-->


        </v-footer>
    </v-card>
</template>

<script>
export default {
    data: function() {
        return {
            favorites: [],
        };
    },
     methods: {
        test() {
            //console.log(favorites);
            //console.log(this.$store.state.favorites[1].personBirthYear );
            
            for ( let i = 0; i < this.$store.state.favorites.length; i++) {
                let personName = this.$store.state.favorites[i].personName;
                console.log(personName);  
            }
            
           
        }
    },
    
}
</script>

<style scoped>

</style>

