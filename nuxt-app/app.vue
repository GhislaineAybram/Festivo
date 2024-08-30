<template>
  <NuxtLayout>
    <NuxtPage/>
        <MenubarCompo />
        <div class="main">
          <slot />
        </div>
        <!-- <FooterPage /> -->
  </NuxtLayout>
</template>

<style>
.main {
  margin-top: 59px;
  display: flex;
}
</style>