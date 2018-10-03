<template>
  <div>
    <top-nav />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'

export default {
  name: 'app',

  components: {
    TopNav
  }
}
</script>

<style lang="scss">
@import 'scss/variables';
@import 'scss/fonts';
@import 'scss/global';
</style>
