<template>
  <div>
      <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height mt-5">
        <!-- <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar> -->

        <v-btn
          text
          @click="goToDashboard()"
          v-if="auth"
        >
         Dashboard
        </v-btn>

        <v-btn
          text
          v-if="!auth"
          :to="{name:'auth-login'}"
        >
         Login
        </v-btn>

        <v-btn
          text
          v-if="!auth"
          :to="{name:'auth-register'}"
        >
         Register
        </v-btn>
        <v-btn
          text
          @click="logout"
          v-if="auth"
        >
         Logout
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
      </v-app>
  </div>
</template>

<style lang="scss" scoped>
  @import "Header.scss";
</style>

<script src="./Header.js"></script>
