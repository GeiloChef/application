<template>
    <v-fade-transition>
        <v-dialog>
            <template v-slot:activator="{ props }">
                <ButtonComponent v-bind="props" v-bind:buttonInfo="buttonInfo" />
            </template>
            <template v-slot:default="{ isActive }">
                <v-card class="w100">
                    <v-toolbar class="primary_color title">Mehr Details über mich und mein Leben</v-toolbar>
                    <v-card-text class="secondary_color">
                        <HomeAboutMeDialogExpensionPanel />
                    </v-card-text>
                    <v-card-actions class="secondary_color justify-end">
                        <v-btn text @click="isActive.value = false">Schließen</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-fade-transition>
</template>
<script>
import ButtonComponent from './ButtonComponent.vue'
import HomeAboutMeDialogExpensionPanel from './HomeAboutMeDialogExpensionPanel.vue'
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
        HomeAboutMeDialogExpensionPanel
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.w100 {
    width: 90vw;
}

.title {
    font-size: 150%;
}
</style>