<template>
  <section id="intro">
    <div
      class="intro-block__background"
      :style="{
        filter: 'blur(' + imageBlurred + 'px)',
        transform: 'scale(' + imageScaled + ')'
      }">
    </div>
    <div class="intro-block">
      <div class="container">
        <div class="intro-block__container">
          <h1 class="intro-block__header" v-animate="'slide-up'">Castor</h1>

          <div v-animate="'slide-up'" class="intro-block__language columns">
            <div class="column">
              <language-switcher />
            </div>
            <div class="column has-text-right">
              <a href="#video" class="intro-block__button button is-outlined is-rounded" v-smooth-scroll="{ offset: -100 }">
                <PlayIcon /> Vídeo
              </a>
            </div>
          </div>

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

          <div id="video" class="intro-block__video">
            <iframe
              v-if="shouldPlayVideo"
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoaliciocompromis%2Fvideos%2F1932604230102806%2F&show_text=0&width=476&autoplay=true"
              width="476"
              height="476"
              style="border:none;overflow:hidden"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true">
            </iframe>
          </div>

          <next-arrow to="que-es" v-animate="'slide-up'">
            {{ $t('sections.whatisit') }}
          </next-arrow>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LanguageSwitcher from '../LanguageSwitcher.vue'
import NextArrow from '../buttons/NextArrow.vue'
import PlayIcon from '../../assets/play.svg'

export default {
  name: 'intro-block',

  components: {
    LanguageSwitcher,
    NextArrow,
    PlayIcon
  },

  data () {
    return {
      imageBlurred: 0,
      imageScaled: 1,
      lastScrollY: 0,
      ticking: false,
      shouldPlayVideo: false
    }
  },

  methods: {
    blurHeroImage () {
      if (window.scrollY > 1000) return
      this.imageBlurred = (this.lastScrollY < 1000) ? this.lastScrollY / 100 : 10
      const percentage = (this.lastScrollY > 500) ? 500 : this.lastScrollY
      this.imageScaled = ((percentage * (0.15) / 500) + 1)
      this.ticking = false
    },

    handleVideoAutoplay () {
      const videoPos = document.getElementById('video').offsetTop - (window.innerHeight + 100)
      if (this.lastScrollY > videoPos) this.shouldPlayVideo = true
    },

    requestTick () {
      if (!this.ticking) {
        window.requestAnimationFrame(this.blurHeroImage)
      }

      this.ticking = true
    },

    onScroll () {
      this.lastScrollY = window.scrollY
      this.requestTick()
      this.handleVideoAutoplay()
    }
  },

  created () {
    window.addEventListener('scroll', this.onScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
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
    animation-name: fadeInUp;
    animation-duration: 1.5s;
  }

  &__language {
    animation-name: fadeInUp;
    animation-duration: 2s;
    margin: -1rem 0 2rem 0;
  }

  &__text-highlight {
    margin-bottom: 2.5rem;
    animation-name: fadeInUpDelayed;
    animation-duration: 2.5s;

    span {
      background: $overlay;
      padding: 0.5rem 1rem;
      box-decoration-break: clone;
    }

    strong {
      color: $campaign-color;
    }
  }

  &__video {
    position: relative;
    overflow: hidden;
    margin-bottom: 2rem;

    &::before {
      display: block;
      content: "";
      padding-top: 100%;
    }

    iframe {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }

  &__button {
    background: $button-background;
    color: $white;
    border-color: $white;

    &:hover {
      background: $campaign-color;
      color: $text-color-dark;
      border-color: $campaign-color;

      svg {
        filter: invert(100%);
      }
    }

    svg {
      width: 20px;
      margin-right: 0.75rem;
    }
  }
}

@media (max-width: $mobile-breakpoint) {
  .intro-block {
    padding: 0 1rem 5rem 1rem;
    background: linear-gradient($overlay-start 0%, $overlay 30%);

    &__header {
      font-size: 24vw;
      margin-top: 20vh;
    }

    &__text-highlight {
      font-size: 5vw;
      width: 80%;
    }

    &__read-more a {
      font-size: 1.25rem;
    }
  }
}
</style>
