<template>
    <div class="homeReferenzenSlider">
        <v-card theme="dark">
            <v-card theme="dark">
                <v-window v-model="onboarding">
                    <v-window-item v-for="referenz in referenzen" v-bind:key="referenz.id" v-bind:referenz="referenz">
                        <HomeReferenzWindowItem v-bind:key="referenz.id" v-bind:referenz="referenz" />
                    </v-window-item>
                </v-window>

                <v-card-actions class="justify-space-between">
                    <v-btn variant="plain" icon="mdi-chevron-left" @click="prev"></v-btn>
                    <v-item-group v-model="onboarding" class="text-center" mandatory>
                        <v-item v-for="referenz in referenzen" v-bind:key="referenz.id" v-slot="{ isSelected, toggle }"
                            :value="n">
                            <v-btn :variant="isSelected ? 'outlined' : 'text'" icon="mdi-record" @click="toggle">
                            </v-btn>
                        </v-item>
                    </v-item-group>
                    <v-btn variant="plain" icon="mdi-chevron-right" @click="next"></v-btn>
                </v-card-actions>

            </v-card>
            <div class="flex selector">
                <v-chip-group v-model="amenities" column multiple color-active="primary_color">
                    <v-chip filter outlined>
                        Projekte
                    </v-chip>
                    <v-chip filter outlined>
                        Zertifikate
                    </v-chip>
                    <v-chip filter outlined>
                        Arbeitszeugnisse
                    </v-chip>
                </v-chip-group>
            </div>
        </v-card>
    </div>
</template>

<script>
import HomeReferenzWindowItem from './HomeReferenzWindowItem.vue'
export default {
    name: "HomeReferenzenSlider",
    data: function () {
        let referenzen = [
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
        ];
        return {
            referenzen,
            onboarding: 0,
        };
    },
    methods: {
        next() {
            this.onboarding = this.onboarding + 1 > this.referenzen.length - 1 ? 0 : this.onboarding + 1;
        },
        prev() {
            this.onboarding = this.onboarding - 1 < 0 ? this.referenzen.length - 1 : this.onboarding - 1;
        },
    },
    components: { HomeReferenzWindowItem }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.homeReferenzenSlider {
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
}

.selector {
    background-color: #000000;
}
</style>