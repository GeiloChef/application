<template>
    <div class="downloadDialog">
        <v-fade-transition>
            <v-dialog>
                <template v-slot:activator="{ props }">
                    <div class="button">
                        <v-btn v-bind="props" color="success" icon="mdi-domain" size="x-large"
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
    components: { DownloadDialogExpensionPanel }
}
</script>

<style lang="scss" scoped>
.downloadDialog {
    .button {
        position: fixed;
        bottom: 5vh;
        right: 5vh;

        .v-btn {
            width: 12vh;
            height: 12vh;
        }
    }
}
</style>