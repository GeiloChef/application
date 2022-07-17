<template>
    <div class="techStackCard fadeIn" ref="techstackCard" :class="displayBreakpointName">
        <v-card class="mx-auto" :class="displayBreakpointName" rounded>
            <v-img :src="image" height="100px" contain></v-img>

            <v-card-title>
                <span class="title">
                    {{ item.displayedName }}
                </span>
            </v-card-title>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "TechStackCard",
    props: {
        item: Object,
    },
    data: () => {
        return {
            image: "",
        }
    },
    computed: {
        // used to get vuetify breakpoints for responsive design
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
    created() {
        // set the image URL of the techstack images
        const API_URL = process.env.VUE_APP_STRAPI_IMAGE_URL || "https://strapi.bewerbung-von-felix.de";
        this.image = API_URL + this.item.displayedImage.data.attributes.url;
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.techStackCard {

    .v-card-title {
        background-color: $primary_color;
        color: $secondary_color
    }

    .title {
        font-size: 100%;
        white-space: nowrap;
    }
}

.techStackCard.xl {
    flex: 0 0 200px;
    margin: 2% 1%;

    .v-card.xl {
        max-width: 200px;
    }
}

.techStackCard.xxl {
    flex: 0 0 200px;
    margin: 2% 1%;

    .v-card.xxl {
        max-width: 200px;
    }
}

.techStackCard.lg,
.techStackCard.md {
    flex: 0 0 150px;
    margin: 1% 1%;

    .v-card.md,
    .v-card.lg {
        max-width: 150px;
    }
}

.techStackCard.xs {
    flex: 0 0 46%;
    margin: 2% 2%;
}
</style>