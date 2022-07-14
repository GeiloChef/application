<template>
    <div>
        <!-- <div class="text-subtitle-2 mb-2">With markup</div> -->

        <v-expansion-panels>
            <v-expansion-panel v-for="category in aboutMeCategories" :key="category.id">
                <v-expansion-panel-title class="primary_color" v-html="category.attributes.title">
                </v-expansion-panel-title>
                <v-expansion-panel-text class="primary_color" v-html="category.attributes.summary_displayed">
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

    </div>
</template>

<script>
import strapiService from '@/services/strapi.service'
export default {
    name: "DownloadDialogExpensionPanel",
    data: () => {
        return {
            userbasedContent: "",
            aboutMeCategories: "",
            salution: "formal",
        }
    },
    methods: {
        editContent(string) {
            let contentToEdit = [
                {
                    name: "%ALTER%",
                    value: this.calculateAge(new Date("1997-05-13"))
                },
                {
                    name: "%FIRMA%",
                    value: this.userbasedContent.Firma
                },
                {
                    name: "%GEHALSTVORSTELLUNG%",
                    value: this.userbasedContent.salary
                },
            ]
            for (let content of contentToEdit) {
                return string.replace(content.name, content.value);
            }
        },
        calculateAge(birthday) { // birthday is a date
            let ageDifMs = Date.now() - birthday;
            let ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    },
    created() {
        this.userbasedContent = JSON.parse(window.localStorage.getItem("userbasedContent"));
        if (window.localStorage.getItem("salution")) {
            this.salution = window.localStorage.getItem("salution");
        }
        let categories = new Array();
        strapiService.getData('aboutmelongs').then(response => {
            categories = response.data.map(category => {
                if (category.attributes.text_id === "salary" && this.userbasedContent.salary && this.userbasedContent.salary) {
                    category.attributes.show = false
                } else {
                    category.attributes.show = true
                }
                switch (this.salution) {
                    case "formal":
                        category.attributes.summary_displayed = this.editContent(category.attributes.summary_formal)
                        break;
                    case "personal":
                        category.attributes.summary_displayed = this.editContent(category.attributes.summary_personal)
                        break;
                }
                return category
            });
            this.aboutMeCategories = categories.filter(category => category.attributes.show === true);
        });
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.v-expansion-panel-title{
    font-weight: bolder;
    font-size: 110%;
}
.v-expansion-panel-text {
    padding: 1% 3%;
    flex-wrap: wrap;
    p{
        width: 100%;
    }
}

.actionButtons {
    .v-btn {
        margin: .2rem
    }

}
</style>