<template>
    <div class="techStackCard fadeIn" ref="techstackCard" :class="displayBreakpointName">
        <v-card class="mx-auto" max-width="200" rounded>
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
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
    created(){
        const API_URL = process.env.VUE_APP_STRAPI_IMAGE_URL || "https://strapi.bewerbung-von-felix.de/";
        this.image = API_URL + this.item.displayedImage.data.attributes.url;
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.techStackCard {
    flex: 0 0 200px;
    margin: 2% 1%;
    .v-card-title{
        background-color: $primary_color;
        color: $secondary_color
    }

    .title {
        font-size: 100%;
        white-space: nowrap;
    }
}

.techStackCard.xs {
    flex: 0 0 46%;
    margin: 2% 2%;
}
</style>