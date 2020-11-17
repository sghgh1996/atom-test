<template>
  <div class="main-app">
    <app-header />
    <app-hero />
    <intro-text />
    <information-section />
  </div>
</template>

<script>
import AppHeader from './components/header/app-header.vue'
import AppHero from './components/hero/app-hero.vue'
import InformationSection from './components/information/information-section.vue'
import IntroText from './components/intro-text.vue'

export default {
  components: {
    AppHeader,
    AppHero,
    IntroText,
    InformationSection,
  },
}
</script>

<style lang="scss" scoped>
  .main-app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
