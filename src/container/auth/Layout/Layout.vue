
<template>
  <div>
    <v-app id="inspire">
      <TheHeader @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
      <!-- <TheSideBar ref="drawer" @sideBarWasToggled ="drawer = $event" /> -->

      <v-content>
        <!-- <TheBreadcrumb  /> -->
        <v-container
        >
          <div class="main_card">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </v-container>
      </v-content>
    </v-app>

  </div>
</template>

<style lang="scss">
  @import "./layout.scss";
</style>

<script src="./layout.js"></script>