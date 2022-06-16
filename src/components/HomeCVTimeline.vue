<template>
    <v-timeline direction="horizontal">
        <v-timeline-item v-for="item in timeline" v-bind:key="item.id">
            <template v-slot:opposite>
                <span class="date">{{ item.time }}</span>
            </template>
            <div>
                <div class="text-h6 headline">{{ item.title }}</div>
                <p class="summary">
                    {{ item.text }}
                </p>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
export default {
    name: "HomeCVTimeline",
    data: function () {
        const timeline = [
            {
                id: 1,
                time: "13.05.1997 \n - \n 31.09.2019",
                title: "Testtitel",
                text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            },
            {
                id: 2,
                time: "13.05.1997 - 31.09.2019",
                title: "Testtitel",
                text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            },
            {
                id: 3,
                time: "13.05.1997 - 31.09.2019",
                title: "Testtitel",
                text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            },
            {
                id: 4,
                time: "13.05.1997 - 31.09.2019",
                title: "Testtitel",
                text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            },
            // {
            //     id: 5,
            //     time: "13.05.1997 - 31.09.2019",
            //     title: "Testtitel",
            //     text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            // },
        ]
        return {
            timeline,
        }
    }
}
</script>

<style lang="scss" scoped>
.date{
    font-size: 120%;
    font-weight: bolder;
}

.headline{
    font-size: 150%;
}

.summary{
    font-size: 125%;
}
</style>