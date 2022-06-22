<template>
    <div class="homeTechStack secondary_color">
        <div class="content flex">
            <h3>Mein Tech-Stack</h3>
            <div class="techStack flex" :class="displayBreakpointName" v-if="techstackShownNumber !== 0">
                <TechStackCard v-for="item in techstackItemsShown" v-bind:item="item.attributes" v-bind:key="item.id" />
            </div>
            <div class="buttonParent" :class="displayBreakpointName">
                <ButtonComponent @clicked="showFullStack" v-bind:buttonInfo="buttonInfo" />
            </div>
        </div>
        <SectionEndTriangle />
    </div>
</template>

<script>
import SectionEndTriangle from './SectionEndTriangle.vue'
import TechStackCard from './TechStackCard.vue';
import ButtonComponent from './ButtonComponent.vue';
import strapiService from '@/services/strapi.service';
export default {
    name: "HomeTechStack",
    components: { SectionEndTriangle, TechStackCard, ButtonComponent },
    data: function () {
        const buttonInfo = {
            class: "primary_color",
            text: "Mein Kompletter Tech-Stack",
            size: "x-large",
            block: true,
        }
        return {
            buttonInfo,
            techstackDefaultShownNumber: 5,
            techstackShownNumber: 0,
            techstackItems: new Array(),
            techstackItemsShown: new Array(),
        };
    },
    computed: {
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
    methods: {
        showFullStack() {
            this.techstackShownNumber = (this.techstackShownNumber === this.techstackDefaultShownNumber)
                ? this.techstackItems.length
                : this.techstackDefaultShownNumber
            this.techstackItemsShown = [];
            for (let i = 0; i < this.techstackShownNumber; i++) {
                this.techstackItemsShown.push(this.techstackItems[i]);
            }
            console.log(this.techstackItemsShown.length);
        }
    },
    created() {
        strapiService.getData('techstacks').then(response => {
            console.log(response);
            this.techstackItems = response.data;
            this.techstackShownNumber = this.techstackDefaultShownNumber;
            for (let i = 0; i < this.techstackShownNumber; i++) {
                this.techstackItemsShown.push(this.techstackItems[i]);
            }
        });
    },
    mounted() {
        switch (this.$vuetify.display.name) {
            case "xs":
                this.buttonInfo.size = "large"
                break;

            default:
                break;
        }
    }
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
    height: 100%;

    @for $i from 1 to 6 {
        div:nth-child(#{$i}) {
            animation-delay: (0.1 * $i) + 0.3s;
        }
    }

    @for $i from 1 to 15 {
        div:nth-child(#{$i + 5}) {
            animation-delay: (0.1s * $i);
        }
    }
}


.buttonParent {
    width: 40vw;
    margin-top: 3rem;
}

.buttonParent.xs {
    width: auto;
}
</style>