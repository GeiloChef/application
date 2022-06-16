<template>
    <div class="homeCV primary_color">
        <div class="content flex">
            <h3>Meine bisherigen Milestones</h3>
            <HomeCVTimeline />
            <div class="buttonParent">
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
            text: "Mein kompletter Lebenslauf",
            size: "x-large"
        }
        return {
            buttonInfo
        };
    },
    components: { HomeCVTimeline, SectionEndTriangle, ButtonComponent }
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

.buttonParent{
    width: 40vw;
    margin-top: 3rem;
}
</style>