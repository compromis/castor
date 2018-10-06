<template>
  <div class="language-switcher tabs is-toggle">
    <ul>
      <li :class="{ 'is-active': $i18n.locale == 'va' }">
        <a href="#" @click.prevent="$i18n.locale = 'va'">Valencià</a>
      </li>
      <li :class="{ 'is-active': $i18n.locale == 'es' }">
        <a href="#" @click.prevent="$i18n.locale = 'es'">Castellano</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'language-switcher'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.language-switcher {
  a {
    background: rgba(12, 21, 31, 0.5);
    color: $white;
    padding: 0.25rem 1rem;

    &:hover {
      background: $campaign-color;
      border-color: $campaign-color;
      color: $text-color-dark;
    }
  }

  li.is-active {
    a {
      background: $white;
      border-color: $white;
      color: $text-color-dark;
    }
  }
}
</style>
