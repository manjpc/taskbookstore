<template>
    <v-card class="product-card" elevation="2">
      <v-img
        src="../assets/img7.jpeg"
        alt="Product Image"
        height="200"
      ></v-img>
      <v-card-title>Sample Product</v-card-title>
      <v-card-text>
        <!-- Add your product description here -->
      </v-card-text>
      <v-card-subtitle class="mb-2">$19.99</v-card-subtitle>
      <v-rating v-model="rating" background-color="transparent" dense></v-rating>
      <v-card-actions>
        <v-btn color="primary" @click="buy">Buy</v-btn>
        <v-btn color="secondary" @click="addToCart">Add to Cart</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name:"AddCard",
    data() {
      return {
        rating: 4, // Initialize with a default rating
      };
    },
    methods: {
      buy() {
        // Implement your logic for buying the product
        console.log('Bought: Sample Product');
      },
      addToCart() {
        // Implement your logic for adding the product to the cart
        console.log('Added to cart: Sample Product');
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    max-width: 300px;
    margin: 1rem;
  }
  </style>
  