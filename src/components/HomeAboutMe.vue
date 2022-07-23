<template>
    <div class="homeAboutMe secondary_color">
        <div class="content flex" :class="displayBreakpointName">
            <div class="col flex image" :class="displayBreakpointName">
                <img src="/profilbild.png" />
            </div>
            <div class="col flex" :class="displayBreakpointName">
                <div class="text-parent">
                    <h3 class="text-headline">Über mich</h3>
                    <div class="text" v-html="aboutMeShort">
                    </div>
                    <HomeAboutMeDialog />
                </div>
            </div>
        </div>
        <SectionEndTriangle class="secondary_color" />
    </div>
</template>

<script>
import SectionEndTriangle from './SectionEndTriangle.vue'
import HomeAboutMeDialog from './HomeAboutMeDialog.vue';
import strapiService from '@/services/strapi.service';



export default {
    name: "HomeAboutMe",
    components: { SectionEndTriangle, HomeAboutMeDialog },
    data: function () {
        return {
            aboutMeShort: "",
        };
    },
    computed: {
        // used to get vuetify breakpoints for responsive design
        displayBreakpointName() { return (this.$vuetify.display.name) },
    },
    methods: {
        /**
         * edits a given String by replacing placeholders by actual values
         * @param {String} string 
         */
        editContent(string) {
            let contentToEdit = [
                {
                    name: "%ALTER%",
                    value: this.calculateAge(new Date("1997-05-13"))
                },
                {
                    name: "%ERFAHRUNG%",
                    value: this.calculateAge(new Date("2020-01-01"))
                },
            ]
            for (let content of contentToEdit) {
                string = string.replace(content.name, content.value);
            }
            return string;
        },
        /**
         * Calculates the age between the given date and now
         * @param {Date} birthday 
         */
        calculateAge(birthday) { // birthday is a date
            let ageDifMs = Date.now() - birthday;
            let ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    },
    created() {
        strapiService.getData('aboutmeshort').then(response => {
            this.aboutMeShort = this.editContent(response.data.attributes.aboutme);
        });
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.col {
    width: 50%;
    flex: auto;

    img {
        max-width: 80%;
        border-radius: 20%;
    }

    .text-parent {
        max-width: 80%;

        .text-headline {
            margin-bottom: 0 !important;
        }

        .text {
            font-size: 150%;
            padding-bottom: 2rem
        }
    }
}

.col.xs {
    width: 100% !important;

    img {
        max-width: 90%;
        border-radius: 5%;
    }

    .text-headline {
        margin-top: 1rem;
        margin-bottom: 1rem!important;
    }
}
</style>