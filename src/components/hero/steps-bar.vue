<template>
  <div class="c-steps-bar">
    <div class="steps-line" />
    <div class="first-step-circle" />
    <div class="d-flex justify-content-between">
      <div 
        v-for="n in 5" 
        :key="n"
        class="step-number"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @import "../../assets/_vars.scss";

  .c-steps-bar {
    position: relative;
    margin-top: 20px;
    width: 315px;
    z-index: 2;

    .steps-line {
      position: absolute;
      top: 2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: $curious-blue;
    }

    .first-step-circle {
      position: absolute;
      left: -13px;
      top: -13px;
      height: 32px;
      width: 32px;
      border: 3px solid $curious-blue;
      border-radius: 50px;
      background-color: transparent;
    }

    .step-number {
      background-color: $curious-blue;
      height: 7px;
      width: 7px;
      border-radius: 50%;
    }

    @media (min-width: 992px) {
      margin-top: 45px;
      width: 656px;
      margin-left: -300px;
    }
  }
</style>