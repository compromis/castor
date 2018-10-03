<template>
  <div>
    <top-nav />
    <intro-block />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import IntroBlock from './components/IntroBlock.vue'

export default {
  name: 'app',

  components: {
    TopNav,
    IntroBlock
  }
}
</script>

<style lang="scss">
@import 'scss/variables';
@import 'scss/fonts';
@import 'scss/global';
</style>
