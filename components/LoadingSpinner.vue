<template>
  <div
    class="loading-indicator"
    role="status"
    aria-live="polite"
  >
    <div class="loading-content">
      <img
        src="@/public/img/boule-disco-indigo.png"
        class="static-logo"
        alt=""
        aria-hidden="true"
      >
      <p class="loading-text">
        {{ $t("welcome.loading") }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $seashell;
    z-index: 9999;
}

.loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.static-logo {
    width: 120px;
    height: 120px;
    object-fit: contain;
}

.loading-text {
    font-size: 1.2rem;
    font-weight: 500;
    color: $indigo;
}
</style>
