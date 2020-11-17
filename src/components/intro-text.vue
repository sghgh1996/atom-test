<template>
  <section class="v-flex v-flex-justify-center">
    <p class="intro-text">
      Zerogrey is a et iusto odio dignissimos ducimus qui blanditiis praesentium corrupti et quas  excepturi sint occaecati cupiditate non provident.
    </p>
  </section>
</template>

<style lang="scss" scoped>
  @import '../assets/_vars.scss';

  .intro-text {
    text-align: center;
    color: $abbey;
    width: 327px;
    line-height: 30px;
    font-size: 24px;
    margin-top: 170px;

    @media (min-width: 992px) {
      width: 867px;
      line-height: 40px;
      font-size: 32px;
      margin-top: 330px;
    }
  }
</style>