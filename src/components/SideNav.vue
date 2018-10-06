<template>
  <scrollactive class="side-nav" :offset="50">
    <ul>
      <li>
          <a href="#intro" class="scrollactive-item" @click="focusTarget">
            <span>{{ $t('sections.introduction') }}</span>
          </a>
      </li>
      <li>
          <a href="#que-es" class="scrollactive-item" @click="focusTarget">
            <span>{{ $t('sections.whatisit') }}</span>
          </a>
      </li>
      <li>
          <a href="#terra-tremola" class="scrollactive-item" @click="focusTarget">
            <span>{{ $t('sections.earthquake') }}</span>
          </a>
      </li>
      <li>
          <a href="#estafa" class="scrollactive-item" @click="focusTarget">
            <span>{{ $t('sections.fraud') }}</span>
          </a>
      </li>
      <li>
          <a href="#florentino" class="scrollactive-item" @click="focusTarget">
            <span>{{ $t('sections.florentino') }}</span>
          </a>
      </li>
    </ul>
  </scrollactive>
</template>

<script>
export default {
  name: 'side-nav',

  methods: {
    focusTarget (event) {
      setTimeout(() => { window.location.hash = event.target.hash }, 500)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.side-nav {
  position: fixed;
  top: 50%;
  right: 0.5rem;
  z-index: 1000;
  margin-top: -60px;

  a {
    display: block;
    position: relative;
    color: $white;
    opacity: 0.5;
    transition: 0.25s ease-in-out;
    padding: 1rem;

    &:hover,
    &:focus {
      opacity: 1;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 0.75rem;
      height: 0.75rem;
      right: 1rem;
      top: 0.7rem;
      border: 1px $white solid;
      border-radius: 5rem;
    }

    span {
      visibility: hidden;
      position: absolute;
      right: 2.5rem;
      top: 0;
      opacity: 1;
      background: $overlay;
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
      white-space: nowrap;
    }

    &:hover,
    &:focus {
      &:after {
        background: $white;
      }

      span {
        visibility: visible;
        opacity: 1;
      }
    }

    &.is-active:after {
      background: $white;
    }
  }
}
</style>
