<template>
  <v-app :class="displayBreakpointName">
    <v-main>
      <v-scroll-x-transition>
        <router-view
        @setUserbasedContent="setUserbasedContent"
        @showDownloadButton="showDownloadButton"
        v-bind:userBasedContent="userBasedContent"
        >
        </router-view>
      </v-scroll-x-transition>
      <DownloadDialog v-if="downloadButtonStatus" />
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
    return {
      userBasedContent: new Object,
      downloadButtonStatus: false,
    }
  },
  methods: {
    setUserbasedContent(content) {
      console.log(content);
      this.$cookies.set("jwt", content.jwt);
      this.$cookies.set("logged-in", "true");
      this.userBasedContent = content.user
    },
    showDownloadButton(){
      this.downloadButtonStatus = true;
    }
  },
  computed: {
    displayBreakpointName() { return (this.$vuetify.display.name) }
  },
  created() {
  }
}
</script>


<style lang="scss">
@import "@/assets/variables.scss";

html,
body {
  background-color: $secondary_color;
}

.xs {
  overflow: hidden;
}
</style>
