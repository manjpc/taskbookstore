<template>
    <v-card class="mx-auto" max-width="300">
      <v-card-title class="primary">
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-form @submit="login">
          <v-text-field
            v-model="email"
            label="Email"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            outlined
          ></v-text-field>
          <v-btn
            color="primary"
            class="mr-4"
            type="submit"
          >
            Login
          </v-btn>
          <v-btn
            @click="clearForm"
          >
            Clear
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Implement your login logic here
        // You can access the email and password using this.email and this.password
        console.log('Login submitted');
      },
      clearForm() {
        this.email = '';
        this.password = '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styling for your login form here */
  .primary {
    background-color: #1976D2;
    color: white;
    margin-top: 10%;
  }
  </style>
  