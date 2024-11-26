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
* {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400 !important; /* Regular */
}
h1 {
  font-family: 'Cinzel', sans-serif;
  font-weight: 600 !important; /* SemiBold */
}
h2 {
  font-family: 'Quattrocento', sans-serif;
  font-weight: 400 !important; /* Regular */
  font-size: xx-large !important;
}
h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300 !important; /* Light */
  text-transform: uppercase;
}
h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600 !important; /* SemiBold */
  font-size: larger !important;
}

.main {
  margin-top: 59px;
  min-height: calc(100vh - 59px);
}
.footer {
  margin-top: auto;
}
:global(.alert) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
