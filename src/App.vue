<template>
  <v-app :class="displayBreakpointName">
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterComponent />
  </v-app>

</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: "AppView",
  components: { FooterComponent },
  computed: {
    displayBreakpointName() { return (this.$vuetify.display.name) }
  }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";

html,
body {
  background-color: $secondary_color;
}

.xs{
  overflow: hidden;
}
</style>
