<script setup lang="ts">
</script>

<template>
  <main class="main">
    <div class="legal">
      <h1>This is the legal page</h1>
    </div>
  </main>
</template>

<style lang="scss" scoped>
* {
  background-color: $seashell;
}
@media (min-width: 1024px) {
  .legal {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .main {
    margin-top: 59px;
  }
}
</style>
