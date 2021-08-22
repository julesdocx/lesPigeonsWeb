<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Over ons</g-link>
        <g-link class="nav__link" to="/about/">Contact</g-link>
        <g-link class="nav__link" to="/">Manifest</g-link>
        <g-link class="nav__link" to="/about/">Nieuws</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
