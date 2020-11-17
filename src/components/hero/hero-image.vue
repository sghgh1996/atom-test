<template>
  <div class="c-hero-image">
    <div class="background-circle" />
    <div class="image-content v-flex v-flex-column v-flex-align-center">
      <img src="../../assets/img/hero-image.jpg" />
      <steps-bar />
    </div>
  </div>
</template>

<script>
import StepsBar from './steps-bar.vue'
export default {
  components: { StepsBar },
}
</script>

<style lang="scss" scoped>
  @import '../../assets/_vars';

  .c-hero-image {
    position: relative;
    margin-top: -100px;

    .background-circle {
      position: absolute;
      top: 0;
      right: -208px;
      height: 496px;
      width: 496px;
      border-radius: 50%;
      background-color: rgba($seagull, 0.56);
      z-index: 1;
    }

    .image-content {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        position: relative;
        height: 245px;
        width: 327px;
        margin-top: 125px;
        z-index: 2;
      }
    }

    @media (min-width: 992px) {
      margin-top: 0;

      .background-circle {
        right: -60px;
        height: 880px;
        width: 880px;
      }

      .image-content {
        display: block;

        img {
          height: 566px;
          width: 755px;
          margin-top: 32px;
          margin-left: -176px;
        }
      }
    }
  }
</style>
