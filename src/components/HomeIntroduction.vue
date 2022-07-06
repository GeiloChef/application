<template>
    <div class="homeIntro flex" :class="displayBreakpointName">
        <!-- Skip Intro Button -->
        <div class="skipIntro" @click="skipIntro">
            <span>{{ skipIntroText }}</span>
        </div>
        <!-- Scroll Info -->
        <div class="scrollInfo fadeIn" v-if="currentStage + 1 === stages.length">
            <span>Scrollen um mehr zu erfahren...</span>
        </div>
        <div class="introText flex">
            <!-- Stage 0 - Einleitung -->
            <div v-for="stage in stages" v-bind:key="stage.id" :class="'stage' + (stage.id - 1)">
                <div class="wrapper" v-if="!stage.hidden" :class="[(stage.status ? '' : 'moveToLeft')]">
                    <div class="e0 animate subtitle fadeIn" v-if="stage.attributes.element0"
                        :class="'s' + (stage.id - 1)">
                        <span v-html="stage.attributes.element0"></span>
                    </div>
                    <div class="e1 animate subtitle fadeIn" v-if="stage.attributes.element1"
                        :class="'s' + (stage.id - 1)">
                        <span v-html="stage.attributes.element1"></span>
                    </div>
                    <div class="e2 animate subtitle fadeIn" v-if="stage.attributes.element2"
                        :class="'s' + (stage.id - 1)">
                        <span v-html="stage.attributes.element2"></span>
                    </div>
                    <div class="e2 animate subtitle fadeIn" v-if="stage.attributes.element3"
                        :class="'s' + (stage.id - 1)">
                        <span v-html="stage.attributes.element3"></span>
                    </div>
                    <div class="e4 animate subtitle fadeIn" v-if="stage.attributes.buttoninfo"
                        :class="'s' + (stage.id - 1)">
                        <ButtonComponent @clicked="stageButtonClicked"
                            v-bind:buttonInfo="stage.attributes.buttoninfo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import strapiService from '@/services/strapi.service';
import ButtonComponent from './ButtonComponent.vue'
export default {
    name: "HomeIntroduction",
    components: { ButtonComponent },
    data: () => {
        let stages = [];

        return {
            skipIntroText: "Intro überspringen...",
            salution: "",
            userbasedContent: "",
            currentStage: 0,
            stages,

        };
    },
    methods: {
        stageButtonClicked() {
            let index = this.currentStage;
            this.stages[index].status = false;
            setTimeout(() => {
                this.stages[index].hidden = true;
                this.stages[index + 1].hidden = false;
                this.stages[index + 1].status = true;
            }, 700);

            // make download button visible
            if(this.currentStage === 1){
                this.$parent.$emit('showDownloadButton');
            }

            // enable full website
            if (this.currentStage >= (this.stages.length - 2)) {
                this.enableFullWebsite();
                this.skipIntroText = "Intro nochmals ansehen";
            }
            this.currentStage++;
        },
        enableFullWebsite() {
            this.$parent.$emit('enableFullWebsite');
        },
        skipIntro() {
            if (this.currentStage > (this.stages.length - 2)) {
                // Last stage is shown, restart the intro
                this.stages[this.stages.length - 1].status = false;
                // when this animation is done, make sure every stage is hidden
                setTimeout(() => {
                    for (let stage of this.stages) {
                        stage.status = false;
                        stage.hidden = true;
                    }
                    // now show the first stage again
                    this.stages[0].status = true;
                    this.stages[0].hidden = false;
                    this.skipIntroText = "Intro überspringen...";
                    this.currentStage = 0;
                }, 700);


            } else {
                for (let i = this.currentStage; i <= (this.stages.length - 2); i++) {
                    this.stageButtonClicked();
                    this.skipIntroText = "Intro nochmals ansehen";
                }
            }
        },
        addCompanyName(string) {
            let formattedCompanyName = `<i>${this.userbasedContent.Firma}</i>`
            return string.replace('%FIRMA%', formattedCompanyName);
        }
    },
    computed: {
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
    created() {
        // set userbaded Content
        this.userbasedContent = JSON.parse(window.localStorage.getItem("userbasedContent"));
        console.log(this.userbasedContent);
        if (window.localStorage.getItem("salution")) {
            this.salution = window.localStorage.getItem("salution");
        }
        //TODO: wenn das nicht gesetzt ist, muss nochmal auf Login verwiesen werden
        strapiService.getData('introduction-stages').then(response => {
            this.stages = response.data.map(stage => {
                stage.status = false;
                stage.hidden = true;
                // change displayed text
                switch (this.salution) {
                    case "formal":
                        stage.attributes.element0 = this.addCompanyName(stage.attributes.element0_formal)
                        stage.attributes.element1 = stage.attributes.element1_formal
                        stage.attributes.element2 = stage.attributes.element2_formal
                        stage.attributes.element3 = stage.attributes.element3_formal
                        break;
                    case "personal":
                        stage.attributes.element0 = stage.attributes.element0_personal
                        stage.attributes.element1 = stage.attributes.element1_personal
                        stage.attributes.element2 = stage.attributes.element2_personal
                        stage.attributes.element3 = stage.attributes.element3_personal
                        break;
                    default:
                        break;
                }
                return stage;
            });
            // add the personal Information
            this.stages[this.stages.length - 1].attributes.element1 = this.userbasedContent.reasonForApplication

            // make stage 1 visible
            this.stages[0].status = true;
            this.stages[0].hidden = false;
            console.log(this.stages);
        })
    }
}
</script>

<style lang="scss" scoped>
// for variables and animations
@import "@/assets/variables.scss";

$initialDelay: 1s;
$stage3delay: 0.4s;

.homeIntro {
    height: 100%;
    position: relative;

    .scrollInfo {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: -5rem;
        opacity: 0;
        animation-delay: ($stage3delay * 6) + $initialDelay + 1s;
    }

    .skipIntro {
        cursor: pointer;
        position: absolute;
        font-size: 125%;
        font-weight: bolder;
        opacity: 0.7;
        transition-duration: 0.3s;
    }

    .skipIntro:hover {
        font-size: 145%;
        opacity: 1;
        transition-duration: 0.3s;
    }

    .wrapper {
        width: 100%;
        $initialDelayStages: 0.4s;
        $interval: 0.8s;

        @for $i from 1 to 10 {
            div.animate:nth-child(#{$i}) {
                opacity: 0;
                animation-delay: ($interval * $i) + $initialDelayStages;
            }
        }
    }

    .introText {
        font-weight: bolder;
        width: 100%;

        .headline {
            font-size: 400%;
            text-align: center;
            margin-bottom: 1rem;
        }

        .subtitle {
            font-size: 200%;
            text-align: center;
        }

        .subtitle {
            margin: 1rem 0
        }

        .stage3 {
            margin-top: 2rem;

            .subtitle {
                opacity: 1;

                span {
                    max-width: 100%;
                    font-size: 1.5vw;

                    @for $i from 1 to 7 {
                        p:nth-child(#{$i}) {
                            animation-name: fadeIn;
                            animation-duration: 1s;
                            animation-fill-mode: forwards;
                            opacity: 0;
                            animation-delay: ($stage3delay * $i) + $initialDelay;
                        }
                    }
                }

            }
        }
    }
}

// Mobile Styles
.homeIntro.xs {
    height: 100%;
    position: relative;

    .skipIntro {
        font-size: 100%;
    }

    .introText {
        .headline {
            font-size: 250%; // changed
        }

        .subtitle {
            font-size: 125%; // changed
        }

        .stage3 {
            .headline {
                font-size: 175% !important; // new
            }


        }
    }
}
</style>
