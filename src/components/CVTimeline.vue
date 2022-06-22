<template>
    <div class="cvtimeline primary_color">
        <div class="content flex">
                <CVSlider />
        </div>
    </div>
</template>

<script>
import CVSlider from "@/components/CVSlider.vue"
export default {
    name: "CVTimeline",
    components: {
        CVSlider
    },
    data: () => {
        return {
        }
    },
    computed: {
        displayBreakpointName() { return (this.$vuetify.display.name) }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
</style>