<template>
    <v-card>
        <v-card-title>
            <div>
                <h3 class="name"> {{ person.name }} </h3> 
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
                        <!--{{ person.gender | toUppercase }} -->
                    </v-list-item-content>
                </v-list-item>
                <v-btn @click="addFavorite">Add to Favorites</v-btn><br><br>
            </div>
            </transition>
            <v-btn @click="show = !show">More Info</v-btn><br>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            show: false,

        }
    },

    props: ["person"],
    methods: {
        addFavorite () {
            let favoritePersonInfo = {
                personName: this.person.name,
                /*
                personGender: this.person.gender,
                personBirthYear: this.person.birth_year,
                */
            };
            //let favorites = [];
            //favorites.push(favoritePersonInfo);
            console.log(favoritePersonInfo);
            this.$store.state.favorites.push(this.person.name);
        },
    },
}
</script>

<style scoped>
h3.name {
    color: #55C7FB;
}
.extraInfo h2 {
    color: #feda4a;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s;
}
.fade-leave {
  /*opacity: 1; */
}
.fade-leave-active {
   transition: opacity .75s;
   opacity: 0;
}
</style>