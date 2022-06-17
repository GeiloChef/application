<template>
  <div class="home">
    <HomeHeader />
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
  computed: {
    displayBreakpointName() { return (this.$vuetify.display.name) }
  }
}
</script>
