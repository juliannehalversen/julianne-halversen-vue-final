
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
         <v-btn @click="showFavorite">See Favorites</v-btn>
        <!--<p>{{ favorite }}</p>-->
        </v-col>
        </v-footer>
    </v-card>
    </template>

<script>
export default {
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
        },
    },
}
</script>

<style scoped>

</style>

