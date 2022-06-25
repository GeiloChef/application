<template>
    <div class="downloadDialog">
        <div class="button">
            <v-btn color="success" icon="mdi-domain" size="x-large" :elevation="isHovering ? 12 : 2"></v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "DownloadDialog",
    data: () => {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.downloadDialog {
    .button {
        position: fixed;
        bottom: 5vh;
        right: 5vh;

        .v-btn {
            width: 12vh;
            height: 12vh;
        }
    }
}
</style>