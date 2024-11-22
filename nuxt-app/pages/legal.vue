<script setup lang="ts">
</script>

<template>
  <main class="main">
    <div class="legal">
      <h1 class="text-3xl font-bold mb-12">
        {{ $t("footer.legal") }}
      </h1>
      <p class="mb-4">
        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance en l'économie numérique, il est précisé aux utilisateurs du
        site Festivo l'identité des différents intervenants dans le cadre de sa
        réalisation et de son suivi.
      </p>
      <h2 class="text-2xl font-bold mb-2">Edition du site</h2>
      <p class="mb-4">
        Le présent site, accessible à l’URL https://festivo-tawny.vercel.app (le
        « Site »), est édité par :
      </p>
      <p class="mb-4">
        Ghislaine AYBRAM, résidant 1 avenue Victor Hugo 92190 MEUDON, de
        nationalité Française (France), né(e) le 01/07/1984,
      </p>
      <h2 class="text-2xl font-bold mb-2">Hébergement</h2>
      <p class="mb-4">
        Le Site est hébergé par la société Vercel Inc., situé 440 N Barranca
        Avenue #4133 Covina, CA 91723 United States, (contact téléphonique ou
        email : +15592887060).
      </p>
      <h2 class="text-2xl font-bold mb-2">Directeur de publication</h2>
      <p class="mb-4">
        Le Directeur de la publication du Site est Ghislaine AYBRAM.
      </p>
      <h2 class="text-2xl font-bold mb-2">Nous contacter</h2>
      <p class="mb-4">Par téléphone : +33680785238</p>
      <p class="mb-4">Par email : g.aybram.festivo@gmail.com</p>
      <p class="mb-4">Par courrier : 1 avenue Victor Hugo 92190 MEUDON</p>
      <h2 class="text-2xl font-bold mb-2">Données personnelles</h2>
      <p class="mb-4">
        Le traitement de vos données à caractère personnel est régi par notre
        Charte du respect de la vie privée, disponible depuis la section "Charte
        de Protection des Données Personnelles", conformément au Règlement
        Général sur la Protection des Données 2016/679 du 27 avril 2016
        («RGPD»).
      </p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
h1 {
  color: $indigo;
  align-content: center;
  text-align: center;
}
h2 {
  color: $indigo;
  text-decoration: underline;
  text-decoration-color: $tangerine;
  text-decoration-thickness: 6px;
  text-underline-offset: 8px;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
}
.legal {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}
</style>
