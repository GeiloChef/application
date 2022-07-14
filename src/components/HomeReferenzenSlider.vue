<template>
    <div class="homeReferenzenSlider">
        <v-card theme="dark">
            <v-card theme="dark">
                <v-window v-model="onboarding" class="referenceWindowParent" :class="displayBreakpointName">
                    <v-window-item v-for="reference in references" v-bind:key="reference.id"
                        v-bind:reference="reference">
                        <HomeReferenzWindowItem v-bind:key="reference.id" v-bind:reference="reference.attributes" />
                    </v-window-item>
                </v-window>

                <v-card-actions class="justify-space-between">
                    <v-btn variant="plain" icon="mdi-chevron-left" @click="prev"></v-btn>
                    <v-item-group v-model="onboarding" class="text-center" mandatory>
                        <v-item v-for="reference in references" v-bind:key="reference.id"
                            v-slot="{ isSelected, toggle }" :value="n">
                            <v-btn :variant="isSelected ? 'outlined' : 'text'" icon="mdi-record" @click="toggle">
                            </v-btn>
                        </v-item>
                    </v-item-group>
                    <v-btn variant="plain" icon="mdi-chevron-right" @click="next"></v-btn>
                </v-card-actions>

            </v-card>
            <div class="flex selector">
                <v-chip-group v-model="selected" column mandatory multiple color-active="primary_color">
                    <v-chip v-for="reference_type in selection" :key="reference_type.value"
                        :value="reference_type.value" filter outlined @click="showType()">
                        {{ reference_type.displayedName }}
                    </v-chip>
                    <!-- <v-chip filter outlined @click="showType('school')">
                        Zertifikate
                    </v-chip>
                    <v-chip filter outlined @click="showType('work')">
                        Arbeitszeugnisse
                    </v-chip> -->
                </v-chip-group>
            </div>
        </v-card>
    </div>
</template>

<script>
import strapiService from '@/services/strapi.service';
import HomeReferenzWindowItem from './HomeReferenzWindowItem.vue'
export default {
    name: "HomeReferenzenSlider",
    components: { HomeReferenzWindowItem },
    data: function () {
        let selection = [
            { displayedName: "Projekte", value: "code" },
            { displayedName: "Arbeitszeugnisse", value: "work" },
            { displayedName: "Zertifikate", value: "school" },
        ]
        return {
            selection,
            selected: ["code", "work", "school"],
            references: [],
            referencesData: [],
            onboarding: 0,
        };
    },
    methods: {
        next() {
            this.onboarding = this.onboarding + 1 > this.references.length - 1 ? 0 : this.onboarding + 1;
        },
        prev() {
            this.onboarding = this.onboarding - 1 < 0 ? this.references.length - 1 : this.onboarding - 1;
        },
        showType() {
            this.references = this.referencesData.filter(item => {
                for (let type of this.selected) {
                    if (item.attributes.type === type) {
                        return item;
                    }
                }
            })

        }
    },
    computed: {
        displayBreakpointName() { return (this.$vuetify.display.name) }
    },
    created() {
        strapiService.getData('references').then(response => {
            this.references = response.data;
            this.referencesData = response.data;
        })
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.homeReferenzenSlider {
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
}

.referenceWindowParent.xl,
.referenceWindowParent.xs {
    height: 450px;
    max-height: 450px;
}

.referenceWindowParent.md,
.referenceWindowParent.lg{
     height: 400px;
    max-height: 400px;
}

.selector {
    background-color: #000000;
}
</style>