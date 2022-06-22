<template>
  <div class="home" :class="viewFixed ? 'fixed' : ''">
    <HomeHeader @enableFullWebsite="enableFullWebsite" />
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
    enableFullWebsite() {
      console.log("enable Full Website");
      this.viewFixed = false;
    }
  },
  computed: {
    displayBreakpointName() { return (this.$vuetify.display.name) }
  },

}
</script>

<style lang="scss" scoped>
.fixed {
  height: 100vh;
  overflow: hidden !important;
  ;
}
</style>