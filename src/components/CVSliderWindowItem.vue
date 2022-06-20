<template>
    <div class="cvWindowItem flex">
        <v-card height="300" class="d-flex justify-center align-center cvWindowItemCard">
            <div class="cv-display">
                <v-card-title>
                    <span class="headline">{{ item.title }}</span>
                </v-card-title>
                <v-card-subtitle>
                    <span class="subtitle">
                        {{ item.subtitle }}
                    </span>
                </v-card-subtitle>
                <v-card-text>
                    <span class="text">
                        {{ item.text }}
                    </span>
                </v-card-text>
                <v-card-actions>
                    <!-- <v-btn v-for="link in CV.links" v-bind:key="link.href" class="primary_color action_btn" size="small" rounded>
                        {{ link.name }}
                    </v-btn> -->
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "CVWindowItem",
    data: function () {
        return {

        };
    },
    props: {
        item: Object,
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.cvWindowItemCard {
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