<template>
  <header class="top-header is-fixed-top">
    <div class="top-header-brand">
      <a href="https://compromis.net">
        <img src="https://compromis.net/wp-content/themes/Compromis/images/logo-compromis-retina.png" alt="Compromís" />
      </a>
    </div>

    <div class="top-header-band-title">
      Castor
    </div>

    <SocialButtons />
    <LanguageSwitcher />
  </header>
</template>

<script>
import SocialButtons from './SocialButtons.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  name: 'top-nav',

  components: {
    SocialButtons,
    LanguageSwitcher
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.top-header {
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
}

.top-header-brand {
  background: #fff;
  padding: 0.5rem 1.5rem;
  flex-shrink: 0;

  img {
    width: 160px;
    margin-bottom: -0.5rem;
  }
}

.top-header-band-title {
  display: flex;
  align-items: center;
  margin-right: auto;
  color: #fff;
  font-size: 1.25rem;
  margin: 0 auto 0 20px;
}
</style>
