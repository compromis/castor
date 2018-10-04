<template>
  <content-block class="fraud-block">
    <template slot="header">La estafa</template>

    <p v-animate="'slide-up'">
      El Projecte Castor és una concessió pública a Escal UGS, de la qual ACS
      controla un 66,67%. ACS és un dels grups més importants del sector de la
      construcció a l'Estat espanyol, el propietari del qual és el conegut empresari
      Florentino Pérez. ACS va aparéixer en els <a href="https://www.eldiario.es/politica/Barcenas-confesion-Correa-constructoras-
      PP_0_569393966.html">papers de Bárcenas</a> com a donant
      del PP, partit al qual va finançar il·legalment.
    </p>
    <p v-animate="'slide-up'">
      La concessió del Projecte Castor blindava el benefici econòmic per a les
      empreses que se'l varen adjudicar, tot establint unes honeroses clàusules
      d'indemnització en cas que fera fallida, independentment de les raons per les
      quals es provocara.
    </p>
    <p v-animate="'slide-up'">
      Així, a pesar que el Castor es va haver de tancar perquè provocava tremolors
      de terra que posaven en perill les vides dels habitants del Maestrat i a pesar
      que el perill sísmic que tenia aquest projecte ja es coneixia de bestreta, la
      concessionària del Castor s'emportarà 1.350 milions d'euros com a
      compensació que haurem de pagar tots nosaltres de les nostres butxaques
      més els interessos a pagar en 30 anys. És a dir, uns 4.700 milions d'euros.
    </p>
    <p v-animate="'slide-up'">
      El Govern de Rajoy va executar el pagament d'aquesta indemnització
      milionària per la via d'urgència, procediment que la Justícia va declarar
      <a href="https://www.lavanguardia.com/economia/20171222/433817722849/castor-
      indemnizacion-constitucional.html">inconstitucional</a>.
    </p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'fraud-block',

  components: {
    ContentBlock
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.fraud-block {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/a/a2/Sede-acs-2-040213.jpg);
}
</style>
