<template>
  <footer class="footer">
    <div class="container">
      <h4>
        {{ $t('footer.follow')}}
        <a href="https://compromis.net" target="_blank">
          <img src="https://compromis.net/wp-content/themes/Compromis/images/logo-compromis-retina-bw.png" alt="Compromís" class="footer__logo">
        </a>
      </h4>

      <div class="footer__social-plugins">
        <div class="footer__social-plugins__wrapper">
          <iframe
            src="https://platform.twitter.com/widgets/follow_button.html?screen_name=compromis&show_screen_name=true&show_count=true&size=l&lang=es"
            class="footer__social-plugins__twitter"
            width="200"
            height="37">
          </iframe>
        </div>
        <div class="footer__social-plugins__wrapper">
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fcoaliciocompromis&width=450&layout=standard&action=like&size=large&show_faces=true&colorscheme=dark&share=true&height=80&appId=252515324782640&locale=ca_ES"
            class="footer__social-plugins__facebook"
            width="450"
            height="65"
            scrolling="no"
            frameborder="0"
            allowtransparency="true">
          </iframe>
        </div>
      </div>

      <hr />

      <i18n path="footer.ownership" tag="p">
        <strong>{{ $t('footer.campaign_name') }}</strong>
        <a href="https://compromis.net" target="_blank">Compromís</a>
      </i18n>

      <p>
        <a href="mailto:info@compromis.net">info@compromis.net</a> 
        | 96 382 66 06 | Plaça del Pilar, 1 - 46001 València
      </p>

      <hr />
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
  color: $white;
  padding: 3rem 1.5rem;

  .container {
    max-width: $block-width;
    padding: 1rem;
  }

  p {
    font-size: 1rem;
  }

  a {
    color: $campaign-color;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    color: $white;
  }

  hr {
    opacity: 0.2;
  }

  &__logo {
    filter: brightness(350%) contrast(350%);
    height: 30px;
    margin-left: 5px;
    vertical-align: middle;
  }

  &__social-plugins {
    &__wrapper {
      max-width: 100%;
      overflow: hidden;
    }

    &__twitter {
      filter: grayscale(30%);
      border: none;
      overflow: hidden;
      width: 300px;
      height: 37px;
      margin-top: 1rem;
    }

    &__facebook {
      filter: grayscale(30%);
      border: none;
      overflow: hidden;
      height: 65px;
    }
  }
}
</style>
