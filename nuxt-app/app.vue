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
// ne fonctionne pas
:global(.button-validation-form) {
  background-color: $tangerine !important;
  color: $indigo !important;
  border-color: $indigo !important;
}
:global(.button-validation-form:hover) {
  background-color: $seashell !important;
  color: $indigo !important;
  border-color: $indigo !important;
}
:global(.button-info) {
  background-color: $indigo;
  color: $haze;
  border-color: $haze;
}
:global(.button-info:hover) {
  background-color: $haze;
  color: $indigo;
  border-color: $indigo;
}
:global(.button-cancel) {
  background-color: $haze;
  color: $indigo;
  border-color: $indigo;
}
:global(.button-cancel:hover) {
  background-color: $indigo;
  color: $haze;
  border-color: $haze;
}
</style>
