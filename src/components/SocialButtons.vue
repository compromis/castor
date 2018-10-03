<template>
  <div class="top-header-band-social">
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <iframe src="https://www.facebook.com/plugins/like.php?href=https://compromis.net/castor/&width=198&layout=button_count&action=like&size=large&show_faces=false&share=true&height=37&appId=252515324782640&locale=ca_ES" width="233" allowtransparency="true" scrolling="no" class="header-social-plugins-facebook" frameborder="0" height="30"></iframe>
        </p>
        <p class="control">
          <iframe :src="'https://platform.twitter.com/widgets/tweet_button.html?size=l&url=https://compromis.net/castor&via=compromis&related=compromis&text=' + encodeURIComponent(tweet) + '&lang=es'" class="header-social-plugins-twitter" width="140" height="30" allowtransparency="true" scrolling="no" frameborder="0"></iframe>
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
      tweet: 'Castor'
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.top-header-band-social {
  display: none;
}

.header-social-plugins {
  &-facebook,
  &-twitter {
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
