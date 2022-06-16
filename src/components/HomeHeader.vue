<template>
    <div class="homeHeader orange_main">
        <div class="content">

        </div>
        <SectionEndTriangle />
    </div>
</template>

<script>
import SectionEndTriangle from './SectionEndTriangle.vue'
export default {
    name: "HomeHeader",
    data: function () {
        return {
        };
    },
    components: { SectionEndTriangle }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.content{
    background: $orange_main;
    height: 45vh;
}
</style>