<template>
    <div class="cv">
        <CVHeader />
        <CVTimeline />   
    </div>
</template>

<script>
import CVTimeline from "@/components/CVTimeline.vue";
import CVHeader from "@/components/CVHeader.vue";
export default {
    name: "CVView",
    components: {
    CVTimeline,
    CVHeader
},
    data: function(){
        return{

        }
    }
}
</script>