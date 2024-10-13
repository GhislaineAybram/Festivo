<template>
  <header>
    <MenubarCompo />
  </header>
  <div class="main">
    <NuxtPage />
    <slot />
  </div>
  <div class="footer">
    <FooterPage />
  </div>
</template>

<style lang="scss">
.main {
  margin-top: 59px;
  min-height: calc(100vh - 59px);
}

.footer {
  margin-top: auto;
}
</style>
