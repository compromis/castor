<template>
  <content-block class="florentino-block" id="florentino">
    <template slot="header">Que pague Florentino</template>

    <p v-animate="'slide-up'">
      Des de Compromís hem treballat dur des del primer moment per denunciar
      aquesta estafa i per evitar que la factura haguera d'eixir de les butxaques de la
      ciutadania.
    </p>
    <p v-animate="'slide-up'">
      Vàrem demanar en 2013 que es creara una comissió especial d'estudi sobre
      les <a href="https://compromis.net/11726/compromis-demana-crear-una-comissio-especial-
      destudi-sobre-les-consequencies-del-castor/">conseqüències</a> de la fallida de Castor
    </p>
    <p v-animate="'slide-up'">
      Vàrem aconseguir en 2013 que les Corts i la Diputació de Castelló <a href="https://compromis.net/12047/compromis-aconsegueix-que-les-corts-demanen-
      el-desmantellament-definitiu-del-castor-per-unanimitat/">demanaren
      el tancament</a> del Castor després d'haver-ne estat impulsores.
    </p>
    <p v-animate="'slide-up'">
      Vàrem personar-nos en 2014 en la <a href="https://compromis.net/18866/compromis-es-personara-en-la-
      causa-contra-el-castor/">causa judicial</a> oberta contra l'estafa del
      Castor.
    </p>
    <p v-animate="'slide-up'">
      Vàrem demanar en 2014 en el Congrés que es <a href="https://compromis.net/16949/compromis-demana-en-el-congres-la-declaracio-dinteres-general-per-a-desmantellar-castor-i-evitar-el-
      pagament-dindemnitzacions/">desmantellara definitivament</a>
      Castor i que la indemnització econòmica milionària no eixira de les butxaques
      de la ciutadania.
    </p>
    <p v-animate="'slide-up'">
      I vàrem <a href="https://compromis.net/18604/compromis-primavera-europea-porta-el-fracas-de-
      castor-a-europa-i-denuncia-lopacitat-i-la-inoperancia-dels-proyect-bonds/">portar el cas a Europa</a> en 2014, tan prompte vàrem aconseguir
      representació en el Parlament Europeu.
    </p>
    <p v-animate="'slide-up'">
      Ara hem aconseguit que s'òbriga una Comissió d'Investigació al Congrés per
      investigar l'estafa del Castor i posar llum sobre aquest afer tan fosc. La primera
      <a href="https://compromis.net/30613/sorli-la-primera-compareixenca-que-demanarem-
      en-la-investigacio-del-castor-sera-la-de-florentino-perez/">compareixença</a> que demanarem serà la de Florentino Pérez.
    </p>
    <p v-animate="'slide-up'">
      Perquè sabem què guanyava Florentino Pérez d'aquest xanxullo d'amiguetes
      com tants d'altres n'hi ha amb el gran poder econòmic que hi està implicat i se'n
      beneficia. El que falta saber és què guanyaven PP i PSOE per permetre-ho.
      Perquè la història del Castor l'exemple més clar dels xanxullos entre amiguetes
      del PP i del PSOE. D'un poder polític subordinat als interessos del poder
      econòmic a costa del benestar i dels interessos del poble.
    </p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'
import NextArrow from '../buttons/NextArrow.vue'

export default {
  name: 'florentino-block',

  components: {
    ContentBlock,
    NextArrow
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.florentino-block {
  background-image: url(https://estaticos.elperiodico.com/resources/jpg/5/5/1537697845355.jpg);
}
</style>
