<template>
  <section class="content-block">
    <div class="content-block__overlay"></div>
    <slot name="custom-background"></slot>
    <div class="container">
      <div class="content-block__container">
        <h2 class="content-block__title" v-animate="'slide-up'"><slot name="header"></slot></h2>

        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'content-block'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.content-block {
  position: relative;
  z-index: 1;
  background-color: $overlay;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: $overlay;
  }

  &__container {
    position: relative;
    z-index: 10;
    line-height: 1.75;
    max-width: $block-width;
    padding: 8rem 1rem;
    margin: 0 auto;
    text-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  }

  &__title {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  p {
    font-size: 1.45rem;
    margin-bottom: 2rem;
  }

  a {
    color: $campaign-color;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: $mobile-breakpoint) {
  .content-block {
    padding: 0 5rem 0 1rem;

    &__container {
      padding: 5rem 1rem;
    }

    &__title {
      line-height: 1.25;
    }

    p {
      font-size: 1.25rem;
    }
  }
}
</style>
