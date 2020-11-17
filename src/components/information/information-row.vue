<template>
  <div class="c-information-row">
    <b-row align-v="center">
      <b-col :cols="12" :lg="3">
        <h3 class="text-lg-right">{{ title }}</h3>
      </b-col>
      <b-col :cols="12" :lg="3">
        <div v-if="number === 1" class="connect-line">
          <div class="line" />
          <div class="connect-line-circle" />
          <div class="d-flex justify-content-between">
            <div 
              v-for="n in 2" 
              :key="n"
              class="step-number"
            />
          </div>
        </div>
      </b-col>
      <b-col :cols="12" :lg="6">
        <p>{{ text }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "../../assets/_vars.scss";

  .c-information-row {
    margin-bottom: 40px;

    &:first-child {
      margin-top: 64px;
    }

    h3 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }

    @media (min-width: 991px) {
      margin-bottom: 55px;
      padding: 0 40px;

      &:first-child {
        margin-top: 340px;
      }

      h3 {
        font-size: 24px;
      }

      .connect-line {
        width: 195px;
        position: relative;

        .line {
          position: absolute;
          top: 3px;
          left: 0;
          right: 0;
          height: 1px;
          background-color: $curious-blue;
        }

        .step-number {
          background-color: $curious-blue;
          height: 7px;
          width: 7px;
          border-radius: 50%;
        }

        &-circle {
          position: absolute;
          right: -12px;
          top: -13px;
          height: 32px;
          width: 32px;
          border: 3px solid $curious-blue;
          border-radius: 50px;
          background-color: transparent;
        }
      }
    }
  }
</style>
