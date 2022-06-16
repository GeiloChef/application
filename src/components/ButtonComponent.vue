<template>
    <div class="button">
        <v-btn block :class="buttonInfo.class" :size="buttonInfo.size" rounded>
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
    mounted(){
        console.log(this.buttonInfo);
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

</style>