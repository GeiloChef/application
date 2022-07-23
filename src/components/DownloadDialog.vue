<template>
    <div class="downloadDialog">
        <v-fade-transition>
            <v-dialog>
                <template v-slot:activator="{ props }">
                    <div class="button moveDownloadButton" :class="displayBreakpointName" ref="downloadButton">
                        <v-btn v-bind="props" :class="displayBreakpointName" color="success" icon="mdi-download" size="x-large"
                            :elevation="isHovering ? 12 : 2"></v-btn>
                    </div>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card class="w90">
                        <v-toolbar class="primary_color title">Downloads</v-toolbar>
                        <v-card-text class="secondary_color">
                            <div class="text-h6 subtitle" :class="displayBreakpointName">Hier finden Sie die wichtigsten Dateien zu meiner Bewerbung</div>
                            <DownloadDialogExpensionPanel />
                        </v-card-text>
                        <v-card-actions class="secondary_color justify-end">
                            <v-btn text @click="isActive.value = false">Schließen</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-fade-transition>
    </div>
</template>

<script>
import DownloadDialogExpensionPanel from './DownloadDialogExpensionPanel.vue'
export default {
    name: "DownloadDialog",
    data: () => {
        return {};
    },
    components: { DownloadDialogExpensionPanel },
    computed: {
        // used to get vuetify breakpoints for responsive design
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
}
</script>

<style lang="scss" scoped>
@keyframes moveDownloadButton {
    0% {
        bottom: -15vh;
        visibility: hidden;
    }

    100% {
        bottom: 5vh;
        visibility: visible;
    }
}

.moveDownloadButton {
    bottom: -15vh;
    animation-name: moveDownloadButton;
    animation-duration: 2.4s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
}

.w90 {
    width: 90vw;
}

.subtitle.xs,
.subtitle.sm{
    font-size: 100%;
    padding: 12px 0;
}
.downloadDialog {
    .button {
        position: fixed;
        right: 5vh;
        z-index: 2399;

        .v-btn.md,
        .v-btn.lg {
            width: 12vh;
            height: 12vh;
        }

        .v-btn.xl{
             width: 7vh;
            height: 7vh;
        }
    }
}
</style>