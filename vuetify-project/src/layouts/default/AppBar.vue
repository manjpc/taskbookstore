<template>
  <v-app-bar app color="primary">
    <v-container>
      <v-row align="center">
        <v-col>
          <v-toolbar-title class="white--text">
            <router-link to="/">E-Commerce</router-link>
          </v-toolbar-title>
        </v-col>
        <v-col cols="auto">
          <router-link to="/">Home</router-link>
        </v-col>
        <v-col cols="auto">
          <router-link to="/products">Products</router-link>
        </v-col>
        <v-col cols="auto">
          <router-link to="/BuyBook">Shop</router-link>
        </v-col>
        <v-col cols="auto">
          <router-link to="/contact-us">Contact Us</router-link>
        </v-col>
        <v-col cols="auto">
          <router-link to="/cart">Cart</router-link>
        </v-col>
        <!-- Add Login and Signup Buttons -->
        <v-col cols="auto">
          <v-btn to="/login" color="white" @click="login">Login</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn to= "/SignUp" color="white" @click="signup">Signup</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    login() {
      // Implement logic for login
    },
    signup() {
      // Implement logic for signup
    },
  },
};
</script>

<style scoped>
/* Navbar Background */
.v-app-bar {
  background-color: #1976D2; /* Primary color */
}

/* Navbar Title and Links */
.v-toolbar-title a {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
}

/* Navigation Links */
.v-col a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin-right: 20px;
  transition: color 0.3s ease-in-out;
}

/* Change link color on hover */
.v-col a:hover {
  color: #FFC107; /* Change to your desired hover color */
}

/* Login and Signup Buttons */
.v-btn {
  background-color:green; /* Button background color */
  color: #1976D2; /* Button text color */
  font-size: 16px; /* Button text size */
  margin-left: 10px; /* Adjust spacing between buttons */
  border: none; /* Remove button border */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Change cursor to pointer on hover */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition on hover */
}

/* Hover state for buttons */
.v-btn:hover {
  background-color: #1976D2; /* Background color on hover */
  color: white; /* Text color on hover */
}
</style>

