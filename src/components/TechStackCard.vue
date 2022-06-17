<template>
    <div class="techStackCard" :class="displayBreakpointName">
        <div v-if="item.type === 'tech'">
        <v-card class="mx-auto" max-width="200" rounded>
            <v-img :src="item.src" height="100px" cover></v-img>

            <v-card-title>
                <span class="title">
                    {{ item.title }}
                </span>
            </v-card-title>

            <v-card-subtitle>
                {{ item.subtitle }}
            </v-card-subtitle>
        </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "TechStackCard",
    props: {
        item: Object,
    },
    computed: {
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
}
</script>

<style lang="scss" scoped>
.techStackCard {
    flex: 0 0 200px;
    margin: 2% 1%;

    .title {
        font-size: 150%;
    }
}

.techStackCard.xs{
    flex: 0 0 46%;
    margin: 2% 2%;
}
</style>