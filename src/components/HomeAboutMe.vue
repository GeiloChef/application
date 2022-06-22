<template>
    <div class="homeAboutMe secondary_color">
        <div class="content flex" :class="displayBreakpointName">
            <div class="col flex image" :class="displayBreakpointName">
                <img src="https://image.brigitte.de/11674438/t/-B/v3/w1440/r1.5/-/bewerbung-foto-bild.jpg" />
            </div>
            <div class="col flex" :class="displayBreakpointName">
                <div class="text-parent">
                    <h3 class="text-headline">Über mich</h3>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                        duo
                        dolores
                    </div>
                    <HomeAboutMeDialog />
                </div>
            </div>
        </div>
        <SectionEndTriangle class="secondary_color" />
    </div>
</template>

<script>
import SectionEndTriangle from './SectionEndTriangle.vue'
import HomeAboutMeDialog from './HomeAboutMeDialog.vue';



export default {
    name: "HomeAboutMe",
    components: { SectionEndTriangle, HomeAboutMeDialog },
    data: function () {
        return {
        };
    },
    computed: {
        displayBreakpointName() { return (this.$vuetify.display.name) }
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.col {
    width: 50%;
    flex: auto;

    img {
        max-width: 80%;
        border-radius: 20%;
    }

    .text-parent {
        max-width: 80%;

        .text {
            font-size: 150%;
            padding-bottom: 2rem
        }
    }
}

.col.xs {
    width: 100% !important;

    img {
        max-width: 90%;
        border-radius: 5%;
    }
}
</style>