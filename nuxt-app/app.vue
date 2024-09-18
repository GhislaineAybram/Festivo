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

<style  lang="scss">
.main {
  margin-top: 59px;
  display: flex;
}
// .button-validation {
//     background-color: $tangerine;
//     color: $indigo;
//     border-color: $indigo;
// }
// .button-validation:hover {
//     background-color: $indigo;
//     color: $seashell;
//     border-color: $indigo;
// }
</style>