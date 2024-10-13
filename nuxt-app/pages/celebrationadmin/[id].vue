<script setup lang="ts"></script>

<template>
  <main class="main">
    <div id="celebration-details">
      <h1>Mes 40 ans</h1>
      <h3>Proposé par Babeth</h3>
      <h2>Le 1er Juillet 2024 à 20H00</h2>
      <h2>Au 30 Bd Victor Hugo à Boulogne-Billancourt</h2>
      <h2>30 participants</h2>
      <DateSelection />
      <HourSelection />
      <ShareInvitation />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  #celebration-details {
    margin-top: 59px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    width: 100%;
  }
}
@media (max-width: 600px) {
  #celebration-details {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
