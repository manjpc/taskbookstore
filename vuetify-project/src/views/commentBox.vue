<template>
    <v-card>
      <v-card-title>
        Comment Box
      </v-card-title>
      <v-card-text>
        <v-textarea
          v-model="comment"
          label="Your Comment"
          outlined
          rows="3"
          auto-grow
        ></v-textarea>
        <v-btn @click="addComment" color="primary">Add Comment</v-btn>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name:"commentBox",
    data() {
      return {
        comment: '', // Store the user's comment
      };
    },
    methods: {
      addComment() {
        // Implement your logic to add the comment to a list or perform any action here
        console.log('Comment added:', this.comment);
        // You can emit an event to notify a parent component if needed
        this.$emit('comment-added', this.comment);
        // Clear the comment input
        this.comment = '';
      },
    },
  };
  </script>


  <style scoped>

    .v-card{
        margin-top: 10%;
    }
  </style>
  