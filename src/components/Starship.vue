<template>
    <v-card>
        <v-card-title>
            <div>
                <h3> {{ starship.name }} </h3>
                <br>
                <div>
                    
                </div>
            </div>
        </v-card-title>

        <v-card-actions>
            <v-btn>Choose something</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        
    },
    props: ["starships"],
    /* getting error that it is not a function
    filters: {
        toUppercase(value) {
            return value.toUppercase();
        }
    }
    */
}
</script>

<style scoped>

</style>