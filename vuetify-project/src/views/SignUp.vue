<template>
    <v-card class="mx-auto" max-width="400">
      <v-card-title class="primary">
        <span class="headline">Sign Up</span>
      </v-card-title>
      <v-card-text>
        <v-form @submit="signup">
          <v-text-field
            v-model="name"
            label="Name"
            required
            outlined
          ></v-text-field>
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
            Sign Up
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
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      signup() {
        // Implement your signup logic here
        // You can access the name, email, and password using this.name, this.email, and this.password
        console.log('Sign Up submitted');
      },
      clearForm() {
        this.name = '';
        this.email = '';
        this.password = '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styling for your signup form here */
  .primary {
    background-color: #1976D2;
    color: white;
    margin-top: 10%;
  }
  </style>
  