<template>
    <div class="homeAboutMe black_main">
        <div class="content flex">
            <div class="col flex image">
                <img src="https://image.brigitte.de/11674438/t/-B/v3/w1440/r1.5/-/bewerbung-foto-bild.jpg" />
            </div>
            <div class="col flex">
                <div class="text-parent">
                    <h3 class="text-headline">Über mich</h3>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores                         labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                    </div>
                    <ButtonComponent v-bind:buttonInfo="buttonInfo" />
                </div>
            </div>
        </div>
        <SectionEndTriangle class="black_main" />
    </div>
</template>

<script>
import SectionEndTriangle from './SectionEndTriangle.vue'
import ButtonComponent from './ButtonComponent.vue';

export default {
    name: "HomeAboutMe",
    components: { SectionEndTriangle, ButtonComponent },

    data: function () {
        const buttonInfo = {
            class: "orange_main",
            text: "Mehr über mich..."
        }
        return {
            buttonInfo
        };
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";


.aboutMeHome {}

.content {}

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
</style>