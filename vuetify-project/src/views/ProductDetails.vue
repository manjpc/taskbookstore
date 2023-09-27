<template>
  <v-row>
    <!-- Use a v-for loop to create multiple product cards -->
    <v-col v-for="(product, index) in products" :key="index" cols="4">
      <v-card>
        <v-img
          :src="product.imageSrc"
          alt="Product Image"
          aspect-ratio="2.5"
          contain
        ></v-img>
        <v-card-title>{{ product.title }}</v-card-title>
        <v-card-subtitle>{{ product.price }}</v-card-subtitle>
        <v-card-text>{{ product.description }}</v-card-text>
        <v-card-actions>
          <v-btn color="primary" to="AddCard" @click="addToCart(product)">Add to Cart</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>


<script>

import AddCard from './AddCard.vue'
export default{
    name: "ProductDetails",
    components:{
      AddCard
    },
    data() {
    return {
      products: [
        {
          title: 'Computer',
          price: '$100',
          description: 'Most powerful',
          imageSrc: 'assets/img1.jpg',
        },
        {
          title: 'ENGLISH',
          price: '$800',
          description: 'Portable and lightweight',
          imageSrc: 'assets/img2.jpg',
        },
        // Add more products as needed
      ],
    };
  },
  methods: {
    addToCart(product) {
      // Implement your logic to add the product to the cart
      console.log('Added to cart:', product.title);
    },
  },
}
</script>

<style scoped>
v-card{
    width: 50%;
}

</style>