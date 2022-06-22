<template>
    <div class="homeHeader primary_color">
        <div class="content">
            <HomeIntroduction />    
        </div>
        <SectionEndTriangle />
    </div>
</template>

<script>
import SectionEndTriangle from './SectionEndTriangle.vue'
import HomeIntroduction from './HomeIntroduction.vue';
export default {
    name: "HomeHeader",
    data: function () {
        return {
        };
    },
    components: {
        SectionEndTriangle,
        HomeIntroduction
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";


.content{
    background: $primary_color;
     height: calc(100vh - 4vw);
}
</style>