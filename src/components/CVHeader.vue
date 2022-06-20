<template>
    <div class="cvHeader secondary_color">
        <div class="text-headline">
            Mein Lebenslauf
        </div>
        <SectionEndTriangle />
    </div>
</template>
<script>
import SectionEndTriangle from './SectionEndTriangle.vue';
export default {
    name: "CVHeader",
    components: { SectionEndTriangle }
}
</script>