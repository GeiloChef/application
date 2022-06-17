<template>
    <div class="homeReferenzen primary_color">
        <div class="content" :class="displayBreakpointName">
            <div class="content flex" :class="displayBreakpointName">
                <h3 class="text-headline">Meine Referenzen</h3>
                <span class="text">Außer dieser Webapp kann ich natürlich noch weitere umgesetzte Projekte sowie
                    Arbeitszeugnisse und Zertifikate nachweisen.</span>
                <HomeReferenzenSlider />
            </div>
            <SectionEndTriangle class="primary_color" />
        </div>
    </div>
</template>

<script>
import HomeReferenzenSlider from './HomeReferenzenSlider.vue'
export default {
    name: "HomeReferenzen",
    data: function () {
        return {};
    },
    components: { HomeReferenzenSlider },
    computed: {
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.content {
    .text {
        text-align: center;
        margin-bottom: 2rem;
    }
}

.content.xs{
    .text{
        font-size: 150%
    }
}
</style>