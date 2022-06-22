<template>
  <v-app :class="displayBreakpointName">
    <v-main>
      <router-view v-bind:defaultInformation="defaultInformation"></router-view>
    </v-main>
    <FooterComponent />
  </v-app>

</template>

<script>

import strapiService from './services/strapi.service';
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: "AppView",
  components: { FooterComponent },
  data: () => {
    return{
      defaultInformation: [],
    }
  },
  computed: {
    displayBreakpointName() { return (this.$vuetify.display.name) }
  },
  mounted(){
    strapiService.getDefaultInformation().then(response => {
      this.defaultInformation = response;
      console.log(this.defaultInformation)
    })
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
