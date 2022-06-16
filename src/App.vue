<template>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
  </nav> -->
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterComponent/>
  </v-app>

</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
export default {
    name: "AppView",
    components: { FooterComponent }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";

html,
body {
  background-color: $secondary_color;
}
</style>
