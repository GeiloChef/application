<template>
    <div class="referenzWindowItem flex" :class="displayBreakpointName">
        <v-card class="d-flex justify-center align-center referenzWindowItemCard" :class="displayBreakpointName">
            <div class="referenz-display">
                <v-card-title>
                    <span class="headline">{{ reference.title }}</span>
                </v-card-title>
                <v-card-subtitle>
                    <span class="subtitle">
                        {{ reference.subtitle }}
                    </span>
                </v-card-subtitle>
                <v-card-text>
                    <span class="text" v-html="reference.summary"></span>
                </v-card-text>
                <v-card-actions>
                    <v-btn v-for="link in reference.links.data" v-bind:key="link.attributes.name"
                        :href="link.attributes.href || linkToImages + link.attributes.files.data[0].attributes.url" target="_blank" class="primary_color action_btn" size="small"
                        rounded>
                        {{ link.attributes.displayedName }}

                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "HomeReferenzWindowItem",
    data: function () {
        return {
            linkToImages: process.env.VUE_APP_STRAPI_IMAGE_URL || "https://strapi.bewerbung-von-felix.de",
        };
    },
    props: {
        reference: Object,
    },
    computed: {
        // used to get vuetify breakpoints for responsive design
        displayBreakpointName() { return (this.$vuetify.display.name) }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.referenzWindowItem.xl,
.referenzWindowItem.xs {
    height: 450px;
    max-height: 450px;
    min-height: 450px;
}


.referenzWindowItem.md,
.referenzWindowItem.lg {
    height: 400px;
    max-height: 400px;
    min-height: 400px;
}

.referenzWindowItemCard {
    position: relative;
    padding: 5%;
    width: 100%;
}


.headline {
    color: $primary_color;
    font-size: 250%;
    line-height: 150%;
}

.subtitle {
    font-size: 150%;
}
</style>