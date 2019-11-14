
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
            <v-btn @click="showFavorite">See Favorites</v-btn>
            <strong>Favorites section</strong>
        </v-col>
        </v-footer>
    </v-card>
    </template>

<script>
export default {
    methods: {
        showFavorite () {
            console.log(this.$store.state.favorites);
        },
    }
}
</script>

<style scoped>

</style>

