<template>
  <div class="c-hero-text v-flex v-flex-column v-flex-align-start">
    <h1>
      Performance without compromises
    </h1>
    <h2 class="v-font-16">
      How we helped Blumarine to conquer new businesses
    </h2>
    <b-button
      variant="outline-primary"
      class="curve-button curve-button-blue-empty v-mt-3 v-mb-5-lg"
    >Discover</b-button>
    <div class="v-flex-align-self-end v-font-24 v-mt-2 v-mt-5-lg">Blumarine</div>
    <div class="gray-text v-flex-align-self-end v-font-12">Front end, Design UX/UI</div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/_vars';

  .c-hero-text {
    position: relative;
    margin-left: 10px;
    z-index: 3;

    h1 {
      font-size: 48px;
    }

    h2 {
      color: $dusty-gray;
    }

    .gray-text {
      color: $dusty-gray;
    }

    @media (min-width: 992px) {
      margin-top: 150px;
      padding-right: 165px;
      margin-left: 0;

      h1 {
        font-size: 72px;
        margin-right: -200px;
      }
    }
  }
</style>
