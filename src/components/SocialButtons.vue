<template>
  <div class="top-header-band-social">
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <iframe
            :src="'https://www.facebook.com/plugins/like.php?href=' + encodeURIComponent(shareUrl) + '&width=198&layout=button_count&action=like&size=large&show_faces=false&share=true&height=37&appId=' + fbApp + '&locale=' + $t('global.fbLocale')"
            width="233"
            allowtransparency="true"
            scrolling="no"
            class="header__social-plugins__facebook"
            frameborder="0"
            height="30">
          </iframe>
        </p>
        <p class="control">
          <iframe
            :src="'https://platform.twitter.com/widgets/tweet_button.html?size=l&url=' + encodeURIComponent(shareUrl) + '&via=' + twitterAccount + '&related=' + twitterAccount + '&text=' + encodeURIComponent(tweet) + '&lang=' + $t('global.twLocale')"
            class="header__social-plugins__twitter"
            width="140"
            height="30"
            allowtransparency="true"
            scrolling="no"
            frameborder="0">
          </iframe>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'social-buttons',

  data () {
    return {
      shareUrl: 'https://compromis.net/castor',
      fbApp: '252515324782640',
      tweet: 'Castor',
      twitterAccount: 'compromis'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.top-header-band-social {
  display: none;
}

.header__social-plugins {
  &__facebook,
  &__twitter {
    margin-top: 4px;
    margin-bottom: -5px;
  }
}

@media (min-width: $mobile-breakpoint) {
  .top-header-band-social {
    display: flex;
  }
}
</style>
