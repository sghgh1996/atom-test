<template>
  <section class="c-information-section">
    <div class="circle circle-big" />
    <div class="circle circle-medium" />
    <b-container fluid>
      <b-row>
        <b-col :cols="12" :lg="3" class="information-title">
          <h2>How can we help your business?</h2>
          <b-button
            variant="outline-primary"
            class="curve-button curve-button-blue-empty v-mt-3"
          >Discover our services</b-button>
        </b-col>
        <b-col :cols="12" :lg="9">

        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import '../../assets/_vars';

  .c-information-section {
    position: relative;
    margin-top: 30px;

    .circle {
      position: absolute;
      border-radius: 50%;

      &-big {
        background-color: rgba($seagull, 0.08);
        height: 1200px;
        width: 1200px;
        right: -600px;
      }

      &-medium {
        background-color: rgba($seagull, 0.16);
        height: 825px;
        width: 825px;
        right: -415px;
        top: 190px;
      }
    }

    .information-title {
      margin-top: 65px;
      margin-left: 10px;
      max-width: 275px;
    }

    @media (min-width: 992px) {
      margin-top: -145px;

      .circle {
        position: absolute;
        border-radius: 50%;

        &-big {
          height: 1500px;
          width: 1500px;
          right: -430px;
        }

        &-medium {
          height: 1030px;
          width: 1030px;
          right: -200px;
          top: 235px;
        }
      }

      .information-title {
        margin-top: 470px;
        margin-left: 50px;
        max-width: 340px;

        h2 {
          font-size: 48px;
        }
      }
    }
  }
</style>
