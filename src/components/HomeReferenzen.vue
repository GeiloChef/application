<template>
    <div class="homeReferenzen primary_color">
        <div class="content">
            <div class="content flex">
                <h3 class="headline">Meine Referenzen</h3>
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
    components: { HomeReferenzenSlider }
}
</script>

<style lang="scss" scoped>

.content{
    .text{
        text-align: center;
        margin-bottom: 2rem;
    }
}
</style>