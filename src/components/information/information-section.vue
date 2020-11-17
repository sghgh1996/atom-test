<template>
  <section class="c-information-section">
    <div class="circle circle-big" />
    <div class="circle circle-medium" />
    <b-container fluid>
      <b-row>
        <b-col :cols="12" :lg="4">
          <div class="information-title">
            <h2>How can we help your business?</h2>
            <b-button
              variant="outline-primary"
              class="curve-button curve-button-blue-empty v-mt-3"
            >Discover our services</b-button>
          </div>
        </b-col>
        <b-col :cols="12" :lg="8">
          <template v-for="(information, index) in informations">
            <information-row
              :key="index"
              :title="information.title"
              :text="information.text"
              :number="index + 1"
            />
          </template>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import informationRow from './information-row.vue'

export default {
  components: { informationRow },
  data () {
    return {
      informations: [
        {
          title: 'Merchant of records',
          text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },
        {
          title: 'Operations',
          text: 'Nequempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },
        {
          title: 'Marketing & Sales',
          text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },
        {
          title: 'Store Management',
          text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        }
      ],
    }
  },
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

      h2 {
        max-width: 275px;
      }
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
        padding-left: 50px;

        h2 {
          font-size: 48px;
          max-width: 340px;
        }
      }
    }
  }
</style>
