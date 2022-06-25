<template>
  <v-app :class="displayBreakpointName">
    <v-main>
      <router-view></router-view>
      <DownloadDialog />
    </v-main>
    <FooterComponent />
  </v-app>

</template>

<script>
import DownloadDialog from './components/DownloadDialog.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: "AppView",
  components: { FooterComponent, DownloadDialog },
  data: () => {
    return{
      defaultInformation: "",
    }
  },
  computed: {
    displayBreakpointName() { return (this.$vuetify.display.name) }
  },
  created(){
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
