<template>
  <div style="text-align: center">
    <div class="center_card">
      <h3>Write your review</h3>
      <v-text-field
        label="Review"
        :rules="rules"
        hide-details="auto"
        v-model="review"
      ></v-text-field>

      <v-btn
        class="v-btn"
        @click.prevent="createReview"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
    </div>
  </div>
</template>


<style lang="scss">
@import "./dashboard.scss";
</style>

<script src="./dashboard.js"></script>