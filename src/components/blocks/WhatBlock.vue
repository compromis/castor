<template>
  <content-block class="what-block">
    <template slot="header">Què és el Projecte Castor?</template>

    <p v-animate="'slide-up'">
      En 2008, el Govern de Zapatero aprovava la posada en marxa del Projecte
      Castor, un <a href="https://www.boe.es/boe/dias/2008/06/05/pdfs/A26051-26052.pdf">dipòsit submarí d'emmagatzemament de gas</a>. 
      Des del primer moment, col·lectius ecologistes i de defensa del territori varen alertar
      dels <a href="https://www.elperiodicomediterraneo.com/noticias/comarcas/alertan-castor-
      danara-ultima-zona-virgen-litoral_492680.html">riscos que suposava</a>.
      També des de Compromís vàrem <a href="https://compromis.net/16897/panella-acs-sabia-des-del-primer-moment-el-risc-
      al-que-ens-exposaven-i-per-tant-no-sha-de-pagar-cap-indemnitzacio/">denunciar aquest projecte</a> i ens hi vàrem oposar.
    </p>
    <p v-animate="'slide-up'">
      El Projecte Castor es va acabar de construir en
      2012 i es va haver de situar en la costa valenciana perquè la Generalitat de
      Catalunya no va donar-ne permís, a causa del perill que suposava.
    </p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'what-block',

  components: {
    ContentBlock
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.what-block {
  background-image: url(http://sabemos.es/wp-content/uploads/2016/07/castor-efe-2-1-e1483549147240.jpg);
}
</style>
