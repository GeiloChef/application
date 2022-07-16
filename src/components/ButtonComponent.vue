<template>
    <div class="button">
        <v-btn :block="buttonInfo.block ? true : false" :class="buttonInfo.class" :size="buttonInfo.size" rounded @click="this.$emit('clicked')">
            {{ buttonInfo.text }}
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        buttonInfo: Object,
    },
    data: function() {
        return{

        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

</style>