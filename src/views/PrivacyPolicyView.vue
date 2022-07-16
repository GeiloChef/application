<template>
    <div class="privacyPolicy">

        <div class="content">
            <div class="title">
                <h1>Datenschutzbestimmungen</h1>
            </div>
            <div class="privacyPolicytext" v-html="privacyPolicy.textContent"></div>
        </div>
    </div>
</template>

<script>
import strapiService from '@/services/strapi.service'
export default {
    name: "PrivacyPolicyView",
    data: () => {
        return {
            privacyPolicy: "",
        }
    },
    created() {
        // get privacy-policy from API
        strapiService.getData('privacy-policy').then(response => {
            this.privacyPolicy = response.data.attributes
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

.privacyPolicy {
    height: 100%;
    background: $secondary_color;
    color: $primary_color;
}

a{
    text-decoration: none;
    color: $primary_color;
}
</style>