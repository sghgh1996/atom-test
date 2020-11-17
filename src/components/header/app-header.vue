<template>
  <header class="c-app-header v-flex v-flex-justify-space-between">
    <logo-icon />
    <div class="header-nav">
      <a href="#" class="d-none d-lg-inline-block">Works</a>
      <a href="#" class="d-none d-lg-inline-block">Services</a>
      <a href="#" class="d-none d-lg-inline-block">Why us</a>
      <a href="#">
        <b-button
          variant="outline-primary"
          class="curve-button curve-button-blue-filled"
        >Let's talk</b-button>
      </a>
    </div>
  </header>  
</template>


<script>
import LogoIcon from '../icons/logo-icon.vue'

export default {
  components: {
    LogoIcon
  },
}
</script>

<style lang="scss" scoped>
  @import '../../assets/_vars';

  .c-app-header {
    margin: 24px 24px 32px 24px;

    .header-nav {
      a {
        color: $pure-black;
        margin-right: 0;
      }
    }

    @media (min-width: 992px) {
      margin: 36px 58px 17px 68px;

      .header-nav {
        a {
          margin-right: 32px;
        }
      }
    }
  }
</style>
