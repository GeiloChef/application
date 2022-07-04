<template>
    <div class="referenzWindowItem flex">
        <v-card height="450" class="d-flex justify-center align-center referenzWindowItemCard">
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
                    <v-btn v-for="link in reference.links.data" v-bind:key="link.attributes.href" class="primary_color action_btn" size="small" rounded>
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
            
        };
    },
    props: {
        reference: Object,
    },
    mounted(){
        console.log(this.reference);
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.referenzWindowItem{
    height: 450px;
    max-height: 450px;
    min-height: 450px;
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