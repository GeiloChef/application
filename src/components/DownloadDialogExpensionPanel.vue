<template>
    <div class="downloadDialogExpensionPanel" :class="displayBreakpointName">
        <!-- <div class="text-subtitle-2 mb-2">With markup</div> -->

        <v-expansion-panels>
            <v-expansion-panel v-for="category in downloadCategories" :key="category.id">
                <v-expansion-panel-title class="primary_color">
                    {{ category.attributes.displayedName }}
                </v-expansion-panel-title>
                <v-expansion-panel-text class="primary_color">
                    <!-- {{ category.attributes.shortDescription }} -->
                    <v-expansion-panels>
                        <v-expansion-panel v-for="download in category.attributes.downloads.data" :key="download.id">
                            <v-expansion-panel-title class="secondary_color">
                                {{ download.attributes.displayedName }}
                            </v-expansion-panel-title>
                            <v-expansion-panel-text class="secondary_color">
                                {{ download.attributes.shortDescription }}
                                <div class="actionButtons">
                                    <v-btn v-for="link in download.attributes.links.data"
                                        v-bind:key="link.attributes.name" class="primary_color action_btn" size="small"
                                        rounded
                                        :href="link.attributes.href || linkToImages + link.attributes.files.data[0].attributes.url"
                                        target="_blank">
                                        {{ link.attributes.displayedName }}
                                    </v-btn>
                                </div>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

    </div>
</template>

<script>
import strapiService from '@/services/strapi.service'
export default {
    name: "DownloadDialogExpensionPanel",
    data: () => {
        return {
            downloadCategories: "",
            linkToImages: process.env.VUE_APP_STRAPI_IMAGE_URL || "https://strapi.bewerbung-von-felix.de",
        }
    },
    created() {
        // Set needed data relations and retrieve download categories
        let relations = "[downloads][populate][links][populate][files][populate]"
        strapiService.getData('download-categories', relations).then(response => {
            this.downloadCategories = response.data;
        })
    },
    computed: {
        // used to get vuetify breakpoints for responsive design
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";


.v-expansion-panel-title{
    text-align: left;
}
.downloadDialogExpensionPanel.xl,
.downloadDialogExpensionPanel.lg,
.downloadDialogExpensionPanel.md{

    .actionButtons {
        .v-btn {
            margin: .2rem
        }
    }
}

.downloadDialogExpensionPanel.xs,
.downloadDialogExpensionPanel.sm{
    .actionButtons {
        .v-btn {
            margin: .2rem
        }
    }
}
</style>