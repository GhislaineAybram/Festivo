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
  text-transform: uppercase;
}
h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500 !important; /* Medium */
  // text-transform: uppercase;
}
h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300 !important; /* Light */
  text-transform: uppercase;
}
a {
  color: $indigo;
  text-decoration: underline;
  text-decoration-color: $indigo;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 0.3s ease, text-decoration-color 0.3s ease;
}
a:hover {
  color: $grey;
  text-decoration-color: $grey;
}

.main {
  margin-top: 59px;
  min-height: calc(100vh - 59px);
}
.footer {
  margin-top: auto;
}
</style>
