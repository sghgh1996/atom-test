<template>
  <section class="c-app-hero">
    <b-container fluid>
      <b-row>
        <b-col :cols="12" :lg="6">
          <hero-text />
        </b-col>
        <b-col :cols="12" :lg="6">
          <hero-image />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import HeroImage from './hero-image.vue'
import HeroText from './hero-text.vue'

export default {
  components: {
    HeroText,
    HeroImage,
  },
}
</script>

<style lang="scss" scoped>
  .c-app-hero {
    margin-left: 0px;

    @media (min-width: 992px) {
      margin-left: 64px;
    }
  }
</style>
