<template>
  <NuxtLayout>
    <NuxtPage/>
        <MenubarCompo />
        <div class="main">
          <slot />
        </div>
        <Footer />
  </NuxtLayout>
</template>

<style>
.main {
  margin-top: 59px;
  display: flex;
}
</style>