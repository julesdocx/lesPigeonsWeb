<template>
  <div class="about">
    <div class="banner">
      <div class="navigation_layout">
        <nav class="navigation_layout_header_nav">
          <g-link class="navigation_layout_header_nav--nav__link" to="/about"
            >Over ons</g-link
          >
          <g-link class="navigation_layout_header_nav--nav__link" to="/manifest"
            >Manifest</g-link
          >
        </nav>
        <div class="logo">
          <g-image class="logo_img" alt="logo" src="~/LOgoBLACK.png" />
          <!--<g-image class="logo_title" alt="logo" src="~/title.png" /> -->
        </div>
        <nav class="navigation_layout_header_nav">
          <g-link class="navigation_layout_header_nav--nav__link" to="/contact"
            >Contact</g-link
          >
          <g-link class="navigation_layout_header_nav--nav__link" to="/contact"
            >Werken</g-link
          >
        </nav>

        <!-- <nav class="navigation_layout_header_nav"> -->
        <!-- <g-link class="navigation_layout_header_nav--nav__link" to="/nieuws"
          >Nieuws</g-link
        > -->
        <!-- </nav> -->
      </div>
    </div>
    <div class="logo">
      <div class="logo_container">
        <g-image class="logo_title" alt="logo" src="~/title.png" />
      </div>
    </div>
    <div class="main">
      <div class="about_container first">
        <div class="about_container_first_text">
          <h1>Wie zijn we?</h1>
          <!-- <h1>waar we voor staan?</h1> -->
          <p>
            Project Pigeons is een open collectief met een duidelijke filosofie:
            het samenbrengen van verschillende meningen, visies en mensen die
            meer kunnen dan klagen en actie willen ondernemen. Een productief
            dialoog dragen we hoog in het vaandel en we willen iedereen de kans
            geven een project te initiëren. We willen jonge kunstenaars de kans
            geven om ervaring op te doen en hen helpen om hun netwerk uit te
            breiden. Binnen ons collectief geloven we erin dat iedereen de
            leiding kan nemen en iedereen ook op elk moment kan besluiten om
            deel te nemen. Het is belangrijk om elkaar te helpen in je
            ontwikkeling en het realiseren van je dromen.
          </p>
        </div>
        <div class="about_container_first_text_image">
          <g-image src="~/pigeonsletters.png" alt="" />
        </div>
      </div>
      <div class="about_container second">
        <div class="about_container_second_text">
          <h1>Wat doen we?</h1>
          <!-- <h1>waar we voor gaan?</h1> -->
          <p>
            Ons doel is onze verschillende meningen en visies samen te voegen en
            om te zetten in activistische kunst en performances. Deze brengen we
            naar de buitenwereld via expo’s en het gebruik van sociale media.
            Die media-aandacht willen we gebruiken om het netwerk van
            kunstenaars te verbreden. (We zetten onze sociale media in functie
            van een activistisch dialoog en kunst.) We helpen niet enkel op vlak
            van netwerk, maar ook op financieel vlak. Zo willen we mensen met
            gelimiteerde financiële mogelijkheden de kans geven om met onze hulp
            toch hun projecten te realiseren. Het is belangrijk voor ons dat het
            collectief een tool is voor kunstenaars, maar appreciëren en
            verwachten je hulp waar het kan.
          </p>
        </div>
      </div>
    </div>
   

    <GridWork />
    <Contact />
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";
import GridWork from "@/components/gridWork.vue";

export default {
  name: "Home",
  components: {
    Contact,GridWork
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
    margin: auto;
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
  .about {
    @include center;
    max-width: 1400px;
    width: 100%;
    margin: auto;
  }
  // @include center;
  width: 100%;
  padding: 2rem 0;
  .about_container {
    @include center;
    justify-content: space-evenly;
    // width: 100%;

    &_first_text {
      // width: 100%;
      margin-bottom: auto;
      p {
        max-width: 50ch;
        font-size: 1.5rem;
      }
    }
    &_first_text_image {
      width: 30%;
      img {
        width: 90%;
      }
    }
    &_second_text {
      // width: 100%;
      margin-bottom: auto;
      p {
        max-width: 100ch;
        font-size: 1.5rem;
      }
    }
    &_second_text_image {
      width: 100%;
      height: 300px;
      //  background-image: url('../pigeonsGreen.jpg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      background-clip: content-box;
    }
  }
  .about_container.second {
    flex-direction: column;
  }
}
.logo {
  width: 70%;
  margin: auto;

  &_container {
    width: 100%;
    @include center;

    height: 80vh;
    // transform: rotate(-90deg);
    // height: 100%;
  }
  img {
    width: 100%;
  }
}
</style>
