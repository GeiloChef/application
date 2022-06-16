<template>
    <div class="homeTechStack secondary_color">
        <div class="content flex">
            <h3>Mein Tech-Stack</h3>
            <div class="techStack flex">
                <TechStackCard v-for="item in techStack" v-bind:item="item" v-bind:key="item.id" />
            </div>
            <div class="buttonParent">
                <ButtonComponent v-bind:buttonInfo="buttonInfo" />
            </div>
        </div>
        <SectionEndTriangle />
    </div>
</template>

<script>
import SectionEndTriangle from './SectionEndTriangle.vue'
import TechStackCard from './TechStackCard.vue';
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: "HomeTechStack",
    data: function () {
        const buttonInfo = {
            class: "primary_color",
            text: "Mein Kompletter Tech-Stack",
            size: "x-large"
        }
        const techStack = [
            {
                id: 1,
                title: "Node.js",
                type: "tech",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
            },
            {
                id: 2,
                title: "Vue.js",
                type: "tech",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            },

            {
                id: 11,
                title: "Node.js",
                type: "tech",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
            },
            {
                id: 22,
                title: "Vue.js",
                type: "tech",
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            },

        ]
        return {
            buttonInfo,
            techStack
        };
    },
    components: { SectionEndTriangle, TechStackCard, ButtonComponent }
}
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.content {
    h3 {
        font-size: 300%;
        text-align: center;
        margin-bottom: 3rem;
    }
}

.techStack {
    width: 100%;
}

.buttonParent{
    width: 40vw;
    margin-top: 3rem;
}
</style>