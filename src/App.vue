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

/* width */
::-webkit-scrollbar {
  width: 5px;
  background-color: black;
  opacity: 0.4;
}

/* Track */
::-webkit-scrollbar-track {
  // box-shadow: inset 0 0 5px lightgray;
  // border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  // background: $primary_color;
  // box-shadow: inset 0 0 1px black;
  background-color: white;
  opacity: 0.4;
  border-radius: 10px;
}
</style>
