<template>
  <div>
    <top-nav />
    <intro-block />
    <what-block />
    <earthquake-block />
    <fraud-block />
    <florentino-block />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import IntroBlock from './components/blocks/IntroBlock.vue'
import WhatBlock from './components/blocks/WhatBlock.vue'
import EarthquakeBlock from './components/blocks/EarthquakeBlock.vue'
import FraudBlock from './components/blocks/FraudBlock.vue'
import FlorentinoBlock from './components/blocks/FlorentinoBlock.vue'

export default {
  name: 'app',

  components: {
    TopNav,
    IntroBlock,
    WhatBlock,
    EarthquakeBlock,
    FraudBlock,
    FlorentinoBlock
  }
}
</script>

<style lang="scss">
@import 'scss/variables';
@import 'scss/fonts';
@import 'scss/global';
@import 'scss/animations';
</style>
