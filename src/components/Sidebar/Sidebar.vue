<template>
  <div class="Sidebar">
            <v-navigation-drawer
            v-model="drawer"
            app
            >
            <v-sheet
                color="grey lighten-4"
                class="pa-4"
            >
                <v-avatar
                class="mb-4"
                color="grey darken-1"
                size="64"
                ></v-avatar>

                <div>Review App</div>
            </v-sheet>

            <v-divider></v-divider>

           
            </v-navigation-drawer>
  </div>
</template>

<style lang="scss" scoped>
  @import "sidebar";
</style>

<script src="./sidebar.js"></script>
