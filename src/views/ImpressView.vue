<template>
    <div class="impress">

        <div class="content">
            <div class="title">
                <h1>Impressum</h1>
            </div>
            <div class="impresstext" v-html="impress.personalInformation"></div>
        </div>
    </div>
</template>

<script>
import strapiService from '@/services/strapi.service'
export default {
    name: "ImpressView",
    data: () => {
        return {
            impress: "",
        }
    },
    created() {
        // get impress date from API
        strapiService.getData('impress').then(response => {
            this.impress = response.data.attributes
        })
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.title {
    font-size: 125%;
    text-align: center;
}

.impress {
    height: 100%;
    background: $secondary_color;
    color: $primary_color;
    text-align: center;
}
</style>