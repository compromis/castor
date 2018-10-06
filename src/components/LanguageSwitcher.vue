<template>
  <select v-model="$i18n.locale">
    <option value="va">Valencià</option>
    <option value="es">Castellano</option>
  </select>
</template>

<script>
export default {
  name: 'language-switcher'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

</style>
