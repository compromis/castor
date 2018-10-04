<template>
  <nav class="side-nav">
    <ul>
      <li>
          <a href="#intro"><span>Introducció</span></a>
      </li>
      <li>
          <a href="#que-es"><span>Què és el Castor?</span></a>
      </li>
      <li>
          <a href="#terra-tremola"><span>La terra tremola</span></a>
      </li>
      <li>
          <a href="#estafa"><span>La estafa</span></a>
      </li>
      <li>
          <a href="#florentino"><span>Que pague Florentino</span></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'side-nav'
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.side-nav {
  position: fixed;
  top: 50%;
  right: 30px;
  z-index: 1000;

  a {
    display: block;
    position: relative;
    color: $white;
    height: 30px;
    opacity: 0.5;
    transition: 0.25s ease-in-out;

    &:hover {
      opacity: 1;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 10px;
      height: 10px;
      right: 0;
      top: 5px;
      border: 1px $white solid;
      border-radius: 5rem;
    }

    span {
      display: none;
      text-align: right;
      margin-right: 20px;
      opacity: 1;
      background: $overlay;
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
    }

    &:hover {
      &:after {
        background: $white;
      }

      span {
        display: inline;
        opacity: 1;
      }
    }
  }
}
</style>
