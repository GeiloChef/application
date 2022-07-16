<template>
  <div class="home" :class="viewFixed ? 'fixed' : ''">
    <HomeHeader @enableFullWebsite="enableFullWebsite" @showDownloadButton="this.$parent.$emit('showDownloadButton')"  />
    <HomeAboutMe />
    <HomeCV />
    <HomeTechStack />
    <HomeReferenzen />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeAboutMe from '@/components/HomeAboutMe.vue';
import HomeCV from '@/components/HomeCV.vue';
import HomeTechStack from '@/components/HomeTechStack.vue';
import HomeReferenzen from '@/components/HomeReferenzen.vue';


export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeAboutMe,
    HomeCV,
    HomeTechStack,
    HomeReferenzen,
  },
  data: () => {
    return {
      viewFixed: true
    }
  },
  methods: {
    /**
     * triggerd from the animated introduction, this enables
     * the scroll on the full website
     */
    enableFullWebsite() {
      this.viewFixed = false;
    }
  },
  computed: {
    // used to get vuetify breakpoints for responsive design
    displayBreakpointName() { return (this.$vuetify.display.name) }
  },

}
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
.fixed {
  height: 100vh;
  overflow: hidden !important;
  ;
}
</style>