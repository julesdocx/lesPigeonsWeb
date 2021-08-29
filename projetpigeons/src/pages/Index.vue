<template>
  <div class="homepage">
    <header class="homepage_header">
      <nav class="homepage_header_nav">
        <g-link class="homepage_header_nav--nav__link" to="/about"
          >Over ons</g-link
        >
        <g-link class="homepage_header_nav--nav__link" to="/contact"
          >Contact</g-link
        >
      </nav>
      <div class="img">
        <g-image alt="logo" src="~/LOgoBLACK.png" />
      </div>
      <nav class="homepage_header_nav">
        <g-link class="homepage_header_nav--nav__link" to="/manifest"
          >Manifest</g-link
        >
        <!-- <g-link class="homepage_header_nav--nav__link" to="/nieuws"
          >Nieuws</g-link
        > -->
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "HomePage",
  },
};
</script>

<style lang="scss"></style>
