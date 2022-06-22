<template>
    <div class="homeIntro flex">
        <!-- Skip Intro Button -->
        <div class="skipIntro" @click="skipIntro">
            <span>{{ skipIntroText }}</span>
        </div>
        <div class="introText flex">
            <!-- Stage 0 - Einleitung -->
            <div class="wrapper stage0" v-if="!stages[0].hidden" :class="[(stages[0].status ? '' : 'moveToLeft')]">
                <div class="s0 e0 headline fadeIn">
                    <span>Herzlich Willkommen</span>
                </div>
                <div class="s0 e1 subtitle fadeIn">
                    <span>Vielen Dank, dass Sie sich meine interaktive Bewerbung ansehen.</span>
                </div>
                <div class="s0 e2 subtitle fadeIn">
                    <span>Bevor Sie die Webseite frei durchstöbern können, erst ein kurzer Hinweis.</span>
                </div>
                <div class="s0 e3 subtitle fadeIn">
                    <ButtonComponent @clicked="stageButtonClicked" v-bind:buttonInfo="stages[0].buttonInfo" />
                </div>
            </div>
            <!-- Stage 1 Erklärung -->
            <div class="wrapper stage1" v-if="!stages[1].hidden" :class="[(stages[1].status ? '' : 'moveToLeft')]">
                <div class="s1 e0 subtitle fadeIn">
                    <span>Auf dieser Seite finden Sie alle relevanten Informationen zu meiner Person.</span>
                </div>
                <div class="s1 e1 subtitle fadeIn">
                    <span>Natürlich werde ich auch gleich erläutern, warum ich mich bei ... ... beworben habe.</span>
                </div>
                <div class="s1 e2 subtitle fadeIn">
                    <ButtonComponent @clicked="stageButtonClicked" v-bind:buttonInfo="stages[1].buttonInfo" />
                </div>
            </div>
            <!-- Stage 2 Erklärung 1 -->
            <div class="wrapper stage2" v-if="!stages[2].hidden" :class="[(stages[2].status ? '' : 'moveToLeft')]">
                <div class="s2 e0 subtitle fadeIn">
                    <span>Über den Button in der unteren rechten Ecke können Sie jederzeit alle wichtigen Dateien rund
                        um meine Bewerbung einsehen und herunterladen.</span>
                </div>
                <div class="s2 e2 subtitle fadeIn">
                    <span>Sobald Sie nun auf fortfahren, können Sie alle Informationen über mich durch weiterscrollen
                        erreichen.</span>
                </div>
                <div class="s2 e3 subtitle fadeIn">
                    <ButtonComponent @clicked="stageButtonClicked" v-bind:buttonInfo="stages[2].buttonInfo" />
                </div>
            </div>
            <!-- Stage 3 - finale Ansicht -->
            <div class="wrapper stage3" v-if="!stages[3].hidden" :class="[(stages[3].status ? '' : 'moveToLeft')]">
                <div class="s3 e0 headline fadeIn">
                    <span>Warum ich mich bei ... ... beworben habe</span>
                </div>
                <div class="s3 e1 subtitle">
                    <p class="fadeIn">Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod
                        tempor</p>
                    <p class="fadeIn">invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et</p>
                    <p class="fadeIn">justo duo dolores et ea rebum. clita kasd , no sea takimata
                        sanctus est Lorem</p>
                    <p class="fadeIn">ipsum dolor sit amet. Lorem dolor sit amet, sadipscing elitr,
                        sed diam nonumy</p>
                    <p class="fadeIn">eirmod tempor ut labore et magna aliquyam erat, sed diam
                        voluptua. At vero eos</p>
                    <p class="fadeIn">et accusam et justo duo et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus</p>

                    <div class="scrollInfo moveFromBottom">Scrollen zum fortfahren...</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
    name: "HomeIntroduction",
    components: { ButtonComponent },
    data: () => {
        let stages = [
            //stage 0
            {
                status: true,
                hidden: false,
                buttonInfo: {
                    class: "secondary_color",
                    text: "Jetzt Starten!",
                    size: "x-large",
                }
            },
            //stage 1
            {
                status: false,
                hidden: true,
                buttonInfo: {
                    class: "secondary_color",
                    text: "weiter...",
                    size: "x-large",
                }
            },
            //stage 2
            {
                status: false,
                hidden: true,
                buttonInfo: {
                    class: "secondary_color",
                    text: "Verstanden, Los gehts",
                    size: "x-large",
                }
            },
            //stage 3
            {
                status: false,
                hidden: true,
                buttonInfo: {
                    class: "secondary_color",
                    text: "Verstanden, Los gehts",
                    size: "x-large",
                }
            },
        ]

        return {
            skipIntroText: "Intro überspringen...",
            currentStage: 0,
            stages
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
            console.log(this.currentStage);
            console.log(this.stages.length - 2)
            if (this.currentStage >= (this.stages.length - 2)) {
                this.enableFullWebsite()
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
        }
    },
    mounted() {
        console.log(this.$parent)
    }
}
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
    0% {
        opacity: 0;
        visibility: hidden;
    }

    100% {
        opacity: 1;
        visibility: visible;
    }
}

.fadeIn {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

@keyframes moveToLeft {
    0% {
        transform: translateX(0);
    }

    15% {
        transform: translateX(20%);
    }

    100% {
        transform: translateX(-200%);
        visibility: hidden;
    }

}

.moveToLeft {
    animation-name: moveToLeft;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(.44, .14, .34, 1);
    animation-fill-mode: forwards;
}

@keyframes moveFromBottom {
    0% {
        transform: translateY(50%);
        opacity: 0;
    }

    100% {
        transform: translateY(0%);
        opacity: 1;
    }

}

.moveFromBottom {
    animation-name: moveFromBottom;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(.44, .14, .34, 1);
    animation-fill-mode: forwards;
}


.homeIntro {
    height: 100%;
    position: relative;
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

    .e0 {
        opacity: 0;
        animation-delay: 0.4s
    }

    .e1 {
        opacity: 0;
        animation-delay: 1.7s;
    }

    .e2 {
        opacity: 0;
        margin-bottom: 2rem;
        animation-delay: 3s;
    }

    .e3 {
        opacity: 0;
        animation-delay: 4.3s;
    }

    .stage3 {
        $initialDelay: 1s;
        $stage3delay: 0.4s;



        .subtitle {
            opacity: 1;

            p {
                max-width: 100%;
                font-size: 75%;
            }

            .scrollInfo {
                position: absolute;
                width: 100%;
                text-align: center;
                bottom: 0;
                opacity: 0;
                animation-delay: ($stage3delay * 6) + $initialDelay + 1s;
            }

            @for $i from 1 to 7 {
                p:nth-child(#{$i}) {
                    opacity: 0;
                    animation-delay: ($stage3delay * $i) + $initialDelay;
                }
            }
        }
    }
}
</style>
