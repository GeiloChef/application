<template>
    <div class="alertParent" :class="displayBreakpointName">
        <v-alert prominent color="red lighten-3" :type="alertInfo.type" elevated>
                {{ alertInfo.text }}            
        </v-alert>
    </div>
</template>

<script>
export default {
    name: "AlertComponent",
    data: () => {
        return {

        }
    },
    props: {
        alertInfo: Object,
    },
    computed: {
        // used to get vuetify breakpoints for responsive design
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
}
</script>

<style lang="scss" scoped>
.alert {
    color: #FFFFFF
}
</style>
