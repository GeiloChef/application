<template>
    <div class="footer">
        <v-footer color="black">
            <v-row justify="center" class="footer" no-gutters>
                <v-btn v-for="link in links" :key="link" variant="text" class="mx-2" rounded="xl">
                    <router-link :to="link.href" target='_blank'>{{ link.name }}</router-link>
                </v-btn>
                <v-col class="text-center text-white mt-4" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Felix Dziatkowski</strong>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
export default {
    name: "FooterComponent",
    data: function () {
        return {
            links: [
                {
                    name: 'Impressum',
                    href: '/impress'
                },
                {
                    name: 'Datenschutz',
                    href: '/privacy-policy'
                },
            ],
        }
    },

}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: white;
}

.footer{

}
</style>