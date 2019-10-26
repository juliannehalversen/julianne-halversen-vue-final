<template>
    <v-card>
        <v-card-title>
            <div>
                <h3> {{ person.name }} </h3>
                <br>
                <div>
                    <span> Born: {{ person.birth_year }} </span> <br>
                    <span> Gender: {{ person.gender }} </span> <br>
                    <!--{{ person.gender | toUppercase }} -->
                    <span> Eye Color: {{ person.eye_color }} </span> <br>
                    <span> Height: {{ person.height }}cm</span>
                    
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
    props: ["person"],
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