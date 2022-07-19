<template>
    <div class="alertParent">
        <v-alert prominent color="red lighten-3" :type="alertInfo.type" variant="outlined">
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
    created() {
    }
}
</script>

<style lang="scss" scoped>
.alert {
    color: #FFFFFF
}
</style>
