<template>
  <nav class="top-nav is-fixed-top">
    <div class="top-nav__brand">
      <a href="https://compromis.net">
        <img src="https://compromis.net/wp-content/themes/Compromis/images/logo-compromis-retina.png" alt="Compromís" />
      </a>
    </div>

    <div class="top-nav__title">
      Castor
    </div>

    <SocialButtons />
  </nav>
</template>

<script>
import SocialButtons from './SocialButtons.vue'

export default {
  name: 'top-nav',

  components: {
    SocialButtons
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.top-nav {
  display: flex;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: linear-gradient(270deg, $orange-start, $orange-end);
  background-size: 200% 100%;
  animation: HeaderOrange 15s ease infinite;
  box-shadow: 0 1px 100px -10px rgba(0, 0, 0, 0.6);

  &__brand {
    background: #fff;
    padding: 0.5rem 1.5rem;
    flex-shrink: 0;

    img {
      width: 160px;
      margin-bottom: -0.5rem;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    margin-right: auto;
    color: #fff;
    font-size: 1.25rem;
    margin: 0 auto 0 20px;
  }
}
</style>
