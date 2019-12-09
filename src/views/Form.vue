<template>
<div>
  <AppHeader></AppHeader>
  <br>
  <br>
  <br>
    <v-form
      ref="form"
      class="formStyle"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="user.name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="user.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>
  
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
  
      <v-btn color="warning" @click="fetchData">Get My Submitted Data</v-btn>
      <br>
      <br>

    <v-expansion-panels>
      <v-expansion-panel
        v-for="u in users" :key="u">
      <v-expansion-panel-header>{{ u.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ u.email }}
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-expansion-panels>

    </v-form>
    <img src="../assets/stars2.jpg">
</div>
</template>

<script>
import axios from 'axios';
import AppHeader from '../components/header';


export default {
  components: {
    AppHeader,
  },

  data() {
    return {
      user: {
        name: '',
        email: '',
        select: null,
      },
      users: [],
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true

        this.$http.post('https://vuejs-form-validation-5441b.firebaseio.com/data.json', this.user).then
        (response => {
          console.log(response);
        }).catch(error => console.log(error))
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    fetchData () {
      this.$http.get('https://vuejs-form-validation-5441b.firebaseio.com/data.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        }); 
    },
  },
};

</script>

<style scoped>
.formStyle {
    width: 600px;
    margin: 50px auto;

}
</style>