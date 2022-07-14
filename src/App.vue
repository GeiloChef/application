<template>
  <v-app :class="displayBreakpointName">
    <v-main>
      <v-scroll-x-transition>
        <router-view @setUserbasedContent="setUserbasedContent" @showDownloadButton="showDownloadButton"
          @setAlert="setAlert" v-bind:userBasedContent="userBasedContent">
        </router-view>
      </v-scroll-x-transition>
      <DownloadDialog v-if="downloadButtonStatus" />
      <div class="alert" v-if="showAlert">
        <AlertComponent v-bind:alertInfo="alertInfo" />
      </div>

    </v-main>
    <FooterComponent />
  </v-app>

</template>

<script>
import DownloadDialog from './components/DownloadDialog.vue';
import FooterComponent from './components/FooterComponent.vue';
import AlertComponent from './components/AlertComponent.vue';

export default {
  name: "AppView",
  components: { FooterComponent, DownloadDialog, AlertComponent },
  data: () => {
    return {
      userBasedContent: new Object,
      downloadButtonStatus: false,
      showAlert: false,
      alertInfo: "",
    }
  },
  methods: {
    setUserbasedContent(content) {
      console.log(content);
      this.$cookies.set("jwt", content.jwt);
      this.$cookies.set("logged-in", "true");
      this.userBasedContent = content.user
    },
    showDownloadButton() {
      this.downloadButtonStatus = true;
    },
    setAlert(alertInfo) {
      this.alertInfo = alertInfo;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
        console.log(this.alertInfo)
      }, 5000);
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

.alert {
  position: fixed;
  bottom: 2vh;
  z-index: 9999;
  width: 50vw;
  margin-left: 25vw;
}
</style>
