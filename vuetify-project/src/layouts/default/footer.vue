<template>
    <v-footer  color="primary">
      <v-row justify="center" align="center">
        <v-col>
          <v-row justify="center" align="center">
            <v-col md="6" xs="12">
              <div class="text-center">
                <h3 class="white--text">Contact Us</h3>
                <p class="caption">123 Main Street, City, Country</p>
                <p class="caption">Email: info@example.com</p>
                <p class="caption">Phone: +1 (123) 456-7890</p>
              </div>
            </v-col>
            <v-col md="6" xs="12">
              <div class="text-center">
                <h3 class="white--text">Follow Us</h3>
                <v-btn icon class="mx-2">
                  <v-icon size="24">mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon class="mx-2">
                  <v-icon size="24">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon class="mx-2">
                  <v-icon size="24">mdi-instagram</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  /* Add any custom styling for your footer here */
  .footer-caption {
    font-size: 14px;
  }
  
  .footer-icon {
    color: white;
  }
  </style>
  