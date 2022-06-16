<template>
    <div class="homeHeader primary_color">
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
    background: $primary_color;
    height: 45vh;
}
</style>