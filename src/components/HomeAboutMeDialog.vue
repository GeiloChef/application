<template>
    <v-dialog transition="dialog-bottom-transition">
        <template v-slot:activator="{ props }">
            <ButtonComponent v-bind="props" v-bind:buttonInfo="buttonInfo" />
        </template>
        <template v-slot:default="{ isActive }">
            <v-card>
                <v-toolbar class="primary_color">Etwas mehr Informationen über mich.</v-toolbar>
                <v-card-text class="secondary_color">
                </v-card-text>
                <v-card-actions class="secondary_color justify-end">
                    <v-btn text @click="isActive.value = false">Schließen</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
    name: "HomeAboutMeDialog",
    data: () => {
        const buttonInfo = {
            class: "primary_color",
            text: "Mehr über mich...",
            block: true,
        }
        return {
            buttonInfo
        }
    },
    components: {
    ButtonComponent,
}
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
</style>