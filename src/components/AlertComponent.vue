<template>
    <div class="alertParent">
        <v-alert prominent :type="alertInfo.type" variant="outlined">
            {{ alertInfo.text }}
        </v-alert>
    </div>
</template>

<script>
export default {
    name: "AlertComponent",
    data: ()=>{
        return{
        
        }
    },
    props: {
        alertInfo: Object,
    },
    created() {
    }
}
</script>
