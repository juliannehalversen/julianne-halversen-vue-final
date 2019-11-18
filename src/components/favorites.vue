
    <template>
    <v-card height="100">
        <v-footer
        absolute
        class="font-weight-medium"
        >
        <v-col
            class="text-center"
            cols="12"
        >
        <h1>Favorites section</h1>
         <v-btn @click="showFavorite">Your Favorite People</v-btn>
<!--
        <v-row>
            <v-col cols="3" v-for="favorite in favorites" :key="favorites.name">
                <h1>{{ this.$store.state.favorites.toString() }} </h1>
            </v-col>
        </v-row>
        



         <v-card>
        <v-card-title>
            <div>
                <h3 class="name"> {{ this.$store.state.favorites }} </h3> 
            </div>
        </v-card-title>

        <v-card-text>
            <transition name="fade">
            <div v-if="show" class="extraInfo">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Born: {{ person.birth_year }}</v-list-item-title>
                        <v-list-item-title>Gender: {{ person.gender }}</v-list-item-title>
                        <v-list-item-title>Eye Color: {{ person.eye_color }}</v-list-item-title>
                        <v-list-item-title>Height: {{ person.height }}cm</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </div>
            </transition>
            <v-btn @click="show = !show">More Info</v-btn><br> 
        </v-card-text>
         </v-card>
-->        
        <h3>{{ this.$store.state.favorites.toString() }} </h3>
        </v-col>
        </v-footer>
    </v-card>
    </template>

<script>
export default {
    data() {
        return {
            personName,

        }
    },
   /*
   computed: {
        favorite() {
            return this.$store.getters.favoritePerson;
        }
    },
    */
   
    methods: {
        showFavorite () {
            console.log(this.$store.state.favorites);
            let personName = this.$store.state.favorites.toString();
            console.log(personName);
        },
    },
}
</script>

<style scoped>

</style>

