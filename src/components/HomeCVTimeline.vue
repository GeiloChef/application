<template>
    <div class="display" :class="displayBreakpointName">
        <v-timeline direction="horizontal" v-if="displayBreakpointName !== 'xs'">
            <v-timeline-item v-for="item in timeline" v-bind:key="item.id">
                <template v-slot:opposite>
                    <div class="flex">
                        <div class="date">{{ item.date_from }}</div>
                        <div v-if="item.date_to">
                            <div class="date"> &nbsp;&ndash;&nbsp;{{ item.date_to }}</div>
                        </div>
                    </div>
                </template>
                <div>
                    <div class="text-h6 headline">{{ item.title }}</div>
                    <p class="summary">
                        {{ item.summary }}
                    </p>
                </div>
            </v-timeline-item>
        </v-timeline>

        <v-timeline direction="vertical" side="end" v-else>
            <v-timeline-item v-for="item in timeline" v-bind:key="item.id">
                <template v-slot:opposite>
                    <div class="flex">
                        <div class="date">{{ item.date_from }}</div>
                        <div v-if="item.date_to">
                            <div class="date"> &nbsp;&ndash;&nbsp;<br />{{ item.date_to }}</div>
                        </div>
                    </div>
                </template>
                <div>
                    <div class="text-h6 headline">{{ item.title }}</div>
                    <p class="summary">
                        {{ item.shortSummary }}
                    </p>
                </div>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
export default {
    name: "HomeCVTimeline",
    data: function () {
        const timeline = [
            {
                id: 1,
                date_from: "2020",
                date_to: "2021",
                title: "PHP-Entwickler (SGD)",
                summary: "Weiterbildung zum PHP-Entwickler mit erfolgreichem Abschluss (Note 1.0)",
                shortSummary: "Abschluss mit 1.0"

            },
            {
                id: 2,
                date_from: "2021",
                date_to: "2022",
                title: "Wallable.de",
                summary: "Erstellung und Optimierung des Webshops über Prestashop für meine selbstständige Tätigkeit.",
                shortSummary: "Erstellung Webshop"
            },
            {
                id: 1,
                date_from: "2022",
                date_to: false,
                title: "Gepr. Web Application Developer",
                summary: "Weiterbilderung zum geprüften Web Application Developer. Abschluss mit 1.0.",
                shortSummary: "Abschluss mit 1.0"
            },
        ]
        return {
            timeline,
        }
    },
    computed: {
        // used to get vuetify breakpoints for responsive design
        displayBreakpointName() { return (this.$vuetify.display.name) }
    }
}
</script>

<style lang="scss" scoped>
.date {
    font-size: 120%;
    font-weight: bolder;
}

.headline {
    font-size: 150%;
}

.summary {
    font-size: 125%;
}

.display.xs{
   .headline {
    font-size: 150%!important;
} 
}
</style>