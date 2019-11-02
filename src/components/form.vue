<template>
<div>
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
  <!--
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>
  -->
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
  
      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>

      <v-btn color="pink" @click="fetchData">Get My Submitted Data</v-btn>
      <ul class="list-group">
        <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
      </ul>

    </v-form>
</div>
</template>

<script>
import axios from 'axios';

export default {
/* default form data from Vuetify, restructured to object for VueResource post call
data: () => ({
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
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }), */
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
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    fetchData () {

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