<template>
    <div class="referenzWindowItem flex">
        <v-card height="300" class="d-flex justify-center align-center referenzWindowItemCard">
            <div class="referenz-display">
                <v-card-title>
                    <span class="headline">{{ referenz.title }}</span>
                </v-card-title>
                <v-card-subtitle>
                    <span class="subtitle">
                        {{ referenz.subtitle }}
                    </span>
                </v-card-subtitle>
                <v-card-text>
                    <span class="text">
                        {{ referenz.text }}
                    </span>
                </v-card-text>
                <v-card-actions>
                    <v-btn v-for="link in referenz.links" v-bind:key="link.href" class="primary_color action_btn" size="small" rounded>
                        {{ link.name }}
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
            
        };
    },
    props: {
        referenz: Object,
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.referenzWindowItemCard {
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