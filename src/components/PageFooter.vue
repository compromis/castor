<template>
  <footer class="footer">
    <div class="container">
      <strong>Castor</strong> és una campanya de <strong>Compromís</strong>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'page-footer'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.footer {
  position: relative;
  z-index: 10;
  background: $background-color;

  .container {
    max-width: $block-width;
    padding: 1rem;
  }

  strong {
    color: $campaign-color;
  }
}
</style>
