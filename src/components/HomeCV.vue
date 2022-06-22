<template>
    <div class="homeCV primary_color">
        <div class="content flex">
            <h3>Meine bisherigen Milestones</h3>
            <HomeCVTimeline />
            <div class="buttonParent" :class="displayBreakpointName">
                <ButtonComponent v-bind:buttonInfo="buttonInfo" />
            </div>
        </div>
        <SectionEndTriangle />
    </div>
</template>

<script>
import HomeCVTimeline from './HomeCVTimeline.vue'
import SectionEndTriangle from './SectionEndTriangle.vue';
import ButtonComponent from './ButtonComponent.vue';
export default {
    name: "HomeCV",
    data: function () {
        const buttonInfo = {
            class: "secondary_color",
            text: "Alles aus meinem Leben",
            size: "x-large",
            block: true,
        }
        return {
            buttonInfo
        };
    },
    components: { HomeCVTimeline, SectionEndTriangle, ButtonComponent },
    computed: {
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
    mounted(){
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

<style lang="scss" scoped>
.content {
    h3 {
        font-size: 300%;
        text-align: center;
        margin-bottom: 3rem;
    }
}

.buttonParent {
    width: 40vw;
    margin-top: 3rem;
}

.buttonParent.xs{
    width: auto;
}
</style>