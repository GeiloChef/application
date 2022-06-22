<template>
    <div>
        <!-- <div class="text flex">        </div> -->
        <div class="triangle" :class="backgroundColor"></div>
    </div>
</template>

<script>

export default {
    name: "SectionEndTriangle",
    props: {
        backgroundColor: String,
    },


}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

$triangle_height: 4rem;

.triangle {
    width: 100%;
    margin-top: -2px;
    height: 0;
    border-style: solid;
    border-width: $triangle_height 35vw 0 35vw;
    border-color: $primary_color transparent transparent transparent;
}

.orange {
    border-color: $primary_color transparent transparent transparent;
    color: $secondary_color;
}

.black {
    border-color: $secondary_color transparent transparent transparent;
    color: $primary_color;
}

.text {
    height: $triangle_height;
    position: absolute;
    width: 100%;
    line-height: $triangle_height;
}
</style>