<template>
    <div class="homeAboutMe secondary_color">
        <div class="content flex" :class="displayBreakpointName">
            <div class="col flex image" :class="displayBreakpointName">
                <img src="https://image.brigitte.de/11674438/t/-B/v3/w1440/r1.5/-/bewerbung-foto-bild.jpg" />
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
        displayBreakpointName() { return (this.$vuetify.display.name) },
    },
    methods: {
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
                string =  string.replace(content.name, content.value);
            }
            return string;
        },
        calculateAge(birthday) { // birthday is a date
            let ageDifMs = Date.now() - birthday;
            let ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    },
    created() {
        strapiService.getData('aboutmeshort').then(response => {
            console.log(response.data.attributes.aboutme);
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

        .text-headline{
            margin-bottom: 0!important;
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
}
</style>