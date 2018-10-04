<template>
  <div class="next-arrow">
    <a :href="'#' + to">
      <ArrowIcon class="next-arrow__svg" /> 
      <span class="next-arrow__text">{{ text }}</span>
    </a>
  </div>
</template>

<script>
import ArrowIcon from '../../assets/arrow.svg'

export default {
  name: 'next-arrow',

  components: {
    ArrowIcon
  },

  props: {
    to: String,
    text: String
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.next-arrow {
  a {
    display: flex;
    align-items: center;
    color: $white;
    opacity: 0.4;
    transition: 0.25s ease-in-out;

    &:hover {
      opacity: 1;

      .next-arrow__text {
        opacity: 1;
      }
    }
  }

  &__svg {
    width: 50px;
    height: 50px;
  }

  &__text {
    opacity: 0;
    transition: 0.25s ease-in-out;
    font-size: 1.25rem;
    margin-left: 1rem;
  }
}
</style>
