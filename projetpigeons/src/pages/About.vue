<template>
  <div>
    <div class="banner">
      <div class="navigation_layout">
        <div class="logo">
          <g-image class="logo_img" alt="logo" src="~/LOgoBLACK.png" />
          <!-- <g-image class="logo_title" alt="logo" src="~/title.png" /> -->
        </div>
        <nav class="navigation_layout_header_nav">
          <g-link class="navigation_layout_header_nav--nav__link" to="/about"
            >Over ons</g-link
          >
          <g-link class="navigation_layout_header_nav--nav__link" to="/manifest"
            >Manifest</g-link
          >
          <g-link class="navigation_layout_header_nav--nav__link" to="/contact"
            >Contact</g-link
          >
        </nav>

        <!-- <nav class="navigation_layout_header_nav"> -->
        <!-- <g-link class="navigation_layout_header_nav--nav__link" to="/nieuws"
          >Nieuws</g-link
        > -->
        <!-- </nav> -->
      </div>
    </div>
    <div class="main">
      <div class="logo">
        <g-image class="logo_title" alt="logo" src="~/title.png" />
      </div>
      <div class="about_container">
        <h1>Lorem, ipsum dolor.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro repellat aut nemo earum? Nihil debitis eveniet minus architecto sunt inventore dolorem. Eos omnis fugiat officia nihil, tenetur ea sapiente repudiandae aut dolor ad ratione rerum! Expedita quam veniam sint? Qui!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Over ons",
  },
};
</script>

<style lang="scss">
@import "assets/sass/imports.scss";
.banner {
  @include center;
  padding: 2rem;
  .navigation_layout {
    @include center;
    width: 90%;
    margin-right: auto;
    height: 150px;
    // flex-direction: column;
    &_header_nav {
      //  max-width: 1400px;

      @include center;
      width: 80%;
      // margin-top: auto;
      // margin-right: auto;
      justify-content: space-evenly;
      &--nav__link {
        text-decoration: none;
        color: black;
        font-family: futura-pt, sans-serif;

        font-size: 2rem;
      }
    }
  }

  .logo {
    width: 10%;
    @include center;
    margin-left: auto;
    &_img {
      width: 100%;
    }
    // &_title {
    //   width: 50%;
    // }
  }
}

.main {
  @include center;
  .about_container {
    position: relative;
    min-width: none;
    width: 100%;
    height: 100vh;
  }
  .logo {
    width: 60%;
    transform: rotate(-90deg);
    img {
      width: 100%;
    }
  }
}
</style>
