<template>
    <div class="cvSlider">
        <div class="flex container" :class="displayBreakpointName">
            <div class="flex selector">
                <div class="selectorHeadline">Wähle aus, was dich interessiert:</div>
                <v-chip-group v-model="amenities" column multiple color-active="primary_color">
                    <v-chip filter outlined class="chip">
                        Projekte
                    </v-chip>
                    <v-chip filter outlined class="chip">
                        Zertifikate
                    </v-chip>
                    <v-chip filter outlined class="chip">
                        Arbeitszeugnisse
                    </v-chip>
                </v-chip-group>
            </div>
            <div class="information">
                <v-card theme="dark">
                    <v-window v-model="onboarding">
                        <v-window-item v-for="item in cv" v-bind:key="item.id" v-bind:item="item">
                            <CVSliderWindowItem v-bind:key="item.id" v-bind:item="item" />
                        </v-window-item>
                    </v-window>

                    <v-card-actions class="justify-space-between">
                        <v-btn variant="plain" icon="mdi-chevron-left" @click="prev"></v-btn>
                        <v-item-group v-model="onboarding" class="text-center pagination_parent" mandatory
                            ref="paginationParent">
                            <div class="flex" id="timeline_bottom" ref="timelineBottom" :style="timelineMargin">
                                <v-item v-for="item in cv" v-bind:key="item.id" v-slot="{ isSelected, toggle }"
                                    :value="n">
                                    <div class="flex pagination_child" ref="paginationChild">
                                        <div class="flex point-parent">
                                            <div class="point" @click="toggle" :class="isSelected ? 'isSelected' : ''">
                                            </div>
                                            <div class="stroke" :class="item.id === 1 ? 'first' : ''"></div>
                                        </div>
                                        <div class="selection_year" :class="isSelected ? 'isSelected' : ''">2019</div>
                                    </div>
                                </v-item>
                            </div>
                        </v-item-group>
                        <v-btn variant="plain" icon="mdi-chevron-right" @click="next"></v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import CVSliderWindowItem from './CVSliderWindowItem.vue'
export default {
    name: "CVSlider",
    components: { CVSliderWindowItem },
    data: function () {
        let cv = [
            {
                id: 1,
                title: "Chat App",
                subtitle: "Eine Live Chat App",
                text: "Live Chat App mit Node.js (Express & Socket.io) im Backend und Vue im Frontend.",
                info: "Work in Progress",
                type: "project",
                links: [
                    {
                        name: "Github",
                        href: "www.github.de",
                    },
                    {
                        name: "Zur Chat App",
                        href: "chat.0of.de"
                    }
                ]
            },
            {
                id: 2,
                title: "Chat App",
                text: "Live Chat App mit Node.js (Express & Socket.io) im Backend und Vue im Frontend.",
                info: "Work in Progress",
                type: "project",
                links: [
                    {
                        name: "Github",
                        href: "www.github.de",
                    },
                    {
                        name: "Zur Chat App",
                        href: "chat.0of.de"
                    }
                ]
            },
            {
                id: 3,
                title: "Chat App",
                text: "Live Chat App mit Node.js (Express & Socket.io) im Backend und Vue im Frontend.",
                info: "Work in Progress",
                type: "project",
                links: [
                    {
                        name: "Github",
                        href: "www.github.de",
                    },
                    {
                        name: "Zur Chat App",
                        href: "chat.0of.de"
                    }
                ]
            },
            {
                id: 31,
                title: "Chat App",
                text: "Live Chat App mit Node.js (Express & Socket.io) im Backend und Vue im Frontend.",
                info: "Work in Progress",
                type: "project",
                links: [
                    {
                        name: "Github",
                        href: "www.github.de",
                    },
                    {
                        name: "Zur Chat App",
                        href: "chat.0of.de"
                    }
                ]
            },
            {
                id: 32,
                title: "Chat App",
                text: "Live Chat App mit Node.js (Express & Socket.io) im Backend und Vue im Frontend.",
                info: "Work in Progress",
                type: "project",
                links: [
                    {
                        name: "Github",
                        href: "www.github.de",
                    },
                    {
                        name: "Zur Chat App",
                        href: "chat.0of.de"
                    }
                ]
            },
            {
                id: 33,
                title: "Chat App",
                text: "Live Chat App mit Node.js (Express & Socket.io) im Backend und Vue im Frontend.",
                info: "Work in Progress",
                type: "project",
                links: [
                    {
                        name: "Github",
                        href: "www.github.de",
                    },
                    {
                        name: "Zur Chat App",
                        href: "chat.0of.de"
                    }
                ]
            },
        ]; 
        return {
            cv,
            onboarding: 0,
            timelineWidth: 0,
            paginationParentWidth: 0,
            paginationChildWidth: 0,
            timelineMargin: 0,
        };
        
    },
    watch: {
        onboarding: function(){
            this.setTimelineMargin();
        } 
    },
    methods: {
        next() {
            this.onboarding = this.onboarding + 1 > this.cv.length - 1 ? 0 : this.onboarding + 1;
            this.setTimelineMargin(this.onboarding);
        },
        prev() {
            this.onboarding = this.onboarding - 1 < 0 ? this.cv.length - 1 : this.onboarding - 1;
            this.setTimelineMargin(this.onboarding);
        },
        setTimelineMargin() {
            let marginValue = -1 * (this.timelineWidth - ((this.paginationParentWidth % this.paginationChildWidth - 1 * (this.onboarding * 2)) * this.paginationChildWidth))
            if (this.timelineWidth > this.paginationParentWidth) {
                this.timelineMargin = {
                    marginLeft: marginValue + "px"
                }
            }
        }
    },
    computed: {
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },

    mounted() {
        this.timelineWidth = this.$refs.timelineBottom.clientWidth; // actual width of all timeline elements
        this.paginationParentWidth = this.$refs.paginationParent.$el.clientWidth; // the width that is available rn
        this.paginationChildWidth = this.$refs.paginationChild[0].clientWidth; // the width of one of the elements inside the timeline
        if (this.timelineWidth > this.paginationParentWidth) {
            let marginValue = -1 * (this.timelineWidth - ((this.paginationParentWidth % this.paginationChildWidth - 1) * this.paginationChildWidth))
            this.timelineMargin = {
                marginLeft: marginValue + "px"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.cvSlider {
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
}

.container {
    position: relative;
    background-color: $secondary_color;


    .selector {
        background-color: $secondary_color;
        height: 100%;
        width: 20%;
        padding: 0 2%;

        .selectorHeadline {
            color: white;
            text-align: center;
            margin-bottom: 1rem;
            font-weight: bolder;
        }

        .chip {
            flex: 1 1 100%;
            background-color: $primary_color;
            color: $secondary_color
        }
    }

    .information {
        width: 80%;
    }


    #timeline_bottom {
        transition: 0.3s;

        .point-parent {
            position: relative;
            width: 100%;

            .point {
                width: 20px;
                height: 20px;
                border-radius: 100%;
                background-color: white;
                margin-bottom: 0.5rem;
            }

            .point.isSelected {
                border: 4px solid $primary_color;

            }

            .stroke {
                height: 2px;
                width: 100%;
                background-color: white;
                position: absolute;
                margin-top: 16%;
            }

            .stroke.first {
                width: 50%;
                margin-left: 50%
            }
        }

        .selection_year {
            flex: 1 1 100%;
            width: 100%
        }

        .selection_year.isSelected {
            // font-weight: bolder;
            color: $primary_color;
        }
    }
}

.container.xs {
    position: relative;
    background-color: $secondary_color;


    .selector {
        background-color: $secondary_color;
        flex: 1 1 100%;
        width: 100%;
        margin: 2% 0;

        .selectorHeadline {
            color: white;
            text-align: center;
            margin-bottom: 1rem;
            font-weight: bolder;
        }

        .chip {
            flex: 1 1 auto;
            background-color: $primary_color;
            color: $secondary_color
        }
    }

    .information {
        width: 80%;
        padding-bottom: 2rem;

        .v-card {
            padding: 10% 0;
        }
    }


    .pagination_parent {
        flex: 1 1 65%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        .pagination_child {
            width: 60px;
        }
    }

    #timeline_bottom {
        flex-wrap: nowrap;



        .point-parent {
            position: relative;
            width: 100%;

            .point {
                width: 20px;
                height: 20px;
                border-radius: 100%;
                background-color: white;
                margin-bottom: 0.5rem;
            }

            .point.isSelected {
                border: 4px solid $primary_color;

            }

            .stroke {
                height: 2px;
                width: 100%;
                background-color: white;
                position: absolute;
                margin-top: 16%;
            }

            .stroke.first {
                width: 50%;
                margin-left: 50%
            }
        }

        .selection_year {
            flex: 1 1 100%;
            width: 100%
        }

        .selection_year.isSelected {
            // font-weight: bolder;
            color: $primary_color;
        }
    }
}
</style>