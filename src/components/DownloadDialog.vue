<template>
    <div class="downloadDialog">
        <v-fade-transition>
            <v-dialog>
                <template v-slot:activator="{ props }">
                    <div class="button moveDownloadButton" ref="downloadButton">
                        <v-btn  v-bind="props" color="success" icon="mdi-download" size="x-large"
                            :elevation="isHovering ? 12 : 2"></v-btn>
                    </div>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card>
                        <v-toolbar class="primary_color">Downloads</v-toolbar>
                        <v-card-text class="secondary_color">
                            <div class="text-h2 pa-12">Hier finden Sie die wichtigsten Dateien zu meiner Bewerbung</div>
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

.downloadDialog {
    .button {
        position: fixed;
        right: 5vh;
        z-index: 2399;

        .v-btn {
            width: 12vh;
            height: 12vh;
        }
    }
}
</style>