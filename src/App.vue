<template>
  <nav>
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

html,
body{
  background-color: $black_main;
}
</style>
