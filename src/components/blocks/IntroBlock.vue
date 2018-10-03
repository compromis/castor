<template>
  <div>
    <div class="intro-block__background" :style="{ filter: 'blur(' + imageBlurred + 'px)', transform: 'scale(' + imageScaled + ')' }"></div>
    <section class="intro-block">
      <div class="container">
        <div class="intro-block__container">
          <h1 class="intro-block__header">Castor</h1>
          
          <p class="intro-block__text-highlight" v-animate="'slide-up'">
            <span>
              Aquesta és una història d'<strong>un dipòsit de gas</strong> en les costes del Maestrat, uns
              terratrèmols i una <strong>indemnització</strong> que hem de pagar-li tots... <strong>a qui els va
              provocar</strong>.
            </span>
          </p>

          <p class="intro-block__text-highlight" v-animate="'slide-up'">
            <span>
              Aquesta és la història del <strong>projecte Castor</strong>. Una història d'una estafa feta a mida
              entre el poder polític del bipartidisme de PP i PSOE i els intocables del gran
              capital.
            </span>
          </p>

          <p class="intro-block__text-highlight" v-animate="'slide-up'">
            <span>
              Aquesta és la història de <strong>Florentino Pérez</strong>, amo de l'empresa majoritària de la
              concessió (ACS, amb el 66,67% d'Escal UGS), a qui haurem de pagar quasi
              <strong>cinc mil milions d'euros</strong> per fer-nos tremolar la terra.
            </span>
          </p>

          <p class="intro-block__text-highlight" v-animate="'slide-up'">
            <span>
              Aquesta és la història d'una estafa. Sabem què hi guanyava Florentino Pérez,
              ara volem saber <strong>què hi guanyaven PP i PSOE per permetre-ho</strong>.
            </span>
          </p>

          <div class="intro-block__read-more" v-animate="'slide-up'">
            <a href="" class="button is-large">Continua llegint...</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'intro-block',

  data () {
    return {
      imageBlurred: 0,
      imageScaled: 1
    }
  },

  methods: {
    handleScroll () {
      this.imageBlurred = (window.scrollY < 1000) ? window.scrollY / 100 : 10
      const percentage = (window.scrollY > 400) ? 400 : window.scrollY;
      this.imageScaled = ((percentage * (1.1 - 1) / 400) + 1)
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.intro-block {
  position: relative;
  z-index: 100;
  background: $overlay;
  background: linear-gradient($overlay-start 0%, $overlay 50%);
  display: flex;
  align-items: center;
  padding-bottom: 10rem;

  &__background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-image: url(../../assets/background.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &__container {
    font-size: 2rem;
    line-height: 1.75;
    max-width: 700px;
    padding: 1rem;
    margin: 0 auto;
    text-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  }

  &__header {
    font-family: $font-headers;
    font-weight: bold;
    font-size: 9rem;
    color: $campaign-color;
    text-transform: uppercase;
    text-shadow: 5px 5px 0 $overlay;
    margin-top: 30vh;
  }

  &__text-highlight {
    margin-bottom: 2.5rem;

    span {
      background: $overlay;
      padding: 0.5rem 1rem;
      box-decoration-break: clone;
    }

    strong {
      color: $campaign-color;
    }
  }
}
</style>
