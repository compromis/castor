<template>
  <content-block class="earthquake-block">
    <template slot="header">La terra tremola</template>

    <p>
      En setembre de 2013 es varen produir una seguida de <a href="https://ca.wikipedia.org/wiki/Terratr%C3%A8mols_de_l%27Ebre_de_2013">tremolors de terra</a>
      que varen tindre el seu màxim en el terratrèmol de l'1 d'octubre de 2013, que es va
      sentir en tot el Maestrat i que va arribar a una intensitat de 4,3 en l'escala de
      Richter.
    </p>
    <p>
      El Castor va haver de ser paralitzat pel risc que suposava per a la població. Un
      informe de l'Institut Geològic i Miner d'Espanya va determinar que l'activitat del
      Castor era la <a href="http://www.ara.cat/societat/Castor-
      informe-terratremols-Ebre_0_1146485569.html">causa</a> dels terratrèmols.
    </p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'earthquake-block',

  components: {
    ContentBlock
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.earthquake-block {
  background-image: url(https://images.unsplash.com/photo-1514747975201-4715db583da9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68a7acc60c0f1408fd0fab08d2ca5071&auto=format&fit=crop&w=2850&q=80);
}
</style>
