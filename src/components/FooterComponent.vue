<template>
    <div>
        <v-footer color="black">
            <v-row justify="center" class="footer" no-gutters>
                <v-btn v-for="link in links" :key="link" variant="text" class="mx-2" rounded="xl">
                    {{ link }}
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
                'Impressum',
                'Datenschutz'
            ],
        }
    },

}
</script>

<style lang="scss" scoped>
</style>