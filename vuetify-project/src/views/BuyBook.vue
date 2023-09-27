<template>
    <div>
      <v-row class="black-bg">
        <!-- Product Cards -->
        <v-col cols="4" sm="4" md="4" v-for="(product, index) in products" :key="index">
          <v-card class="product-card" elevation="2">
            <v-img
              :src="product.imageSrc"
              alt="Product Image"
              height="200"
            ></v-img>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-text>{{ product.description }}</v-card-text>
            <v-card-subtitle class="mb-2">{{ '$' + product.price.toFixed(2) }}</v-card-subtitle>
            <v-rating v-model="product.rating" background-color="transparent" dense></v-rating>
            <v-card-actions>
              <v-btn color="primary" @click="buy(product)">Buy</v-btn>
              <v-btn color="secondary" @click="addToCart(product)">Add to Cart</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Contact Us Section -->
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Contact Us</v-card-title>
            <v-card-text>
              For any inquiries or assistance, please feel free to contact us at:
              <br>
              Email: contact@example.com
              <br>
              Phone: +1 (123) 456-7890
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Comments Section -->
          <!-- Comments Section -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Comments</v-card-title>
          <!-- Add your comments section here -->
          <v-text-field
            v-model="newComment"
            label="Add a Comment"
            outlined
            @keyup.enter="addComment"
          ></v-text-field>
          <v-list>
            <v-list-item v-for="(comment, index) in comments" :key="index">
              <v-list-item-title>{{ comment }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  
      <!-- Reviews Section -->
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Reviews</v-card-title>
            <!-- Add your reviews section here -->
            <!-- You can use a v-for loop to display reviews -->
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            title: 'Sample Product 1',
            description: 'Product 1 Description',
            price: 19.99,
            imageSrc: 'assets/img1.jpg',
            rating: 4,
          },
          {
            title: 'Sample Product 2',
            description: 'Product 2 Description',
            price: 29.99,
            imageSrc: 'assets/img2.jpg',
            rating: 3.5,
          },
          // Add more products as needed
        ],
        newComment: '', // Stores the new comment input
      comments: [], // Stores the list of comments
      };
    },
    methods: {
      buy(product) {
        // Implement your logic for buying the product
        console.log('Bought:', product.title);
      },
      addToCart(product) {
        // Implement your logic for adding the product to the cart
        console.log('Added to cart:', product.title);
      },
      addComment() {
      if (this.newComment.trim() !== '') {
        this.comments.push(this.newComment); // Add the new comment to the list
        this.newComment = ''; // Clear the input field
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .black-bg {
    background-color: gray;
    padding: 20px;
  }
  .product-card {
    max-width: 300px;
    margin: 1rem;
  }
  </style>
  