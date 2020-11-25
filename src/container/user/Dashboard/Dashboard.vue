<template>
  <div style="text-align: center">
    <div class="center_card">
      <!-- {{ organisation }} -->
      <h3>Write your review</h3>
      <v-select
        v-model="organisation"
        :items="organisations"
        item-text="name"
        item-value="name"
        label="Select Organisation"
        persistent-hint
        return-object
        single-line
      ></v-select>

      <!-- <v-text-field
        label="Write Review"
        :rules="rules"
        hide-details="auto"
        v-model="review"
      ></v-text-field> -->
      <v-textarea
      name="input-7-1"
      filled
      label="Write Review"
       v-model="review"
      auto-grow
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>

      <v-btn
        class="v-btn mb-5"
        @click.prevent="createReview"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
    <v-simple-table>

    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Reviews
          </th>
          <th class="text-center">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        
        <tr
          v-for="item in reviews"
          :key="item._id"
        >
          <td class="text-left">{{ item.review }}</td>
          <td>{{ item.status === true ? 'Verified':'Unverified' }}</td>
         
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>
    <notification :status="show" :noty_color="color">{{message}}</notification>
  </div>
</template>


<style lang="scss">
@import "./dashboard.scss";
</style>

<script src="./dashboard.js"></script>