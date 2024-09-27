<template>
  <NuxtLayout>
    <NuxtPage />
    <MenubarCompo />
    <div class="main">
      <slot />
    </div>
    <!-- <FooterPage /> -->
  </NuxtLayout>
</template>

<style  lang="scss">
.main {
  margin-top: 59px;
  display: flex;
}
</style>
