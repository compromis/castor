<template>
  <section class="intro-block">
    <div class="container">
      <div class="intro-block__text">
        <h1 class="intro-block__header">Castor</h1>
        <span class="intro-block__text-highlight">
          Aquesta és una història d'un dipòsit de gas en les costes del Maestrat, uns
          terratrèmols i una indemnització que hem de pagar-li tots... a qui els va
          provocar.
        </span>
        <div class="">
          <a href="">Continua llegint...</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'intro-block'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.intro-block {
  height: 100vh;
  background: $overlay;
  background: linear-gradient($overlay-start, $overlay);
  display: flex;
  align-items: center;

  &__text {
    font-size: 2rem;
    line-height: 1.75;
    max-width: 600px;
    padding: 1rem;
    margin: 0 auto;
    text-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  }

  &__header {
    font-family: $font-headers;
    font-weight: bold;
    font-size: 7rem;
    color: $campaign-color;
    text-transform: uppercase;
    text-shadow: 5px 5px 0 $overlay;
  }

  &__text-highlight {
    background: $overlay;
    padding: 0.5rem 1rem;
    box-decoration-break: clone;
  }
}
</style>
