<template>
    <v-app>
        <v-carousel>
  <v-carousel-item
    src="https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://media.istockphoto.com/id/517570662/photo/woman-reading-a-few-books-on-the-floor.jpg?s=612x612&w=0&k=20&c=AGbNOJA2POW0SdYaxi7x2T6tQlmZi7bXyi2AToymkHM="
    cover
  ></v-carousel-item>
</v-carousel>
  <ProductDetails/>

  <v-container class="ok">
    <v-row>
        <!-- <v-text class="ok1">
            NEWS PAPER
        </v-text> -->
      <!-- <v-col cols="12" sm="6" offset-sm="3">
        <v-form @submit.prevent="submitForm">
          <v-text-field
            v-model="email"
            label="Email"
            required
            :rules="emailRules"
          ></v-text-field>
          <v-btn type="submit" color="primary">Subscribe</v-btn>
        </v-form>
      </v-col> -->
    </v-row>
  <commentBox />

  </v-container>
</v-app>
  
</template>
  
  <script>
import ProductDetails from './ProductDetails.vue';
import commentBox from './commentBox.vue';
  export default {
    name: "Home",
    components: {
        ProductDetails,
        commentBox,
        
    },

    data() {
    return {
      email: '',
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Send the email to your backend for processing (e.g., saving to a database)
        // Reset the form after a successful submission
        this.email = '';
      }
    },
  },


  };
  </script>

  <style scoped>


/* .ok{
    background-color:lightslategray;
    height: 10%;
    padding-bottom: 5%;
} */
.ok1{
  font-size: larger;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

</style>
 
  
  