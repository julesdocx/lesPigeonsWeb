<template>
  <div class="container">
    <form class="form" @submit.prevent="submit">
      <h1>Contacteer ons</h1>
      <div class="form-content">
        <div class="form-content-name">
          <label class="label" for="name">Naam</label>
          <input type="text" name="name" id="name" required="" v-model="name" />
        </div>
        <div class="form-content-surname">
          <label class="label" for="surname">Voornaam</label>
          <input
            type="text"
            name="name"
            id="surname"
            required=""
            v-model="surname"
          />
        </div>
      </div>
      <div class="form-email">
        <label class="label" for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required=""
          v-model="email.value"
        />
      </div>
      <div class="form-text">
        <label class="label" for="textarea">Bericht</label>
        <textarea
          class="message"
          name="textarea"
          id="textarea"
          required=""
          v-model="message.text"
          :maxlength="message.maxlength"
        ></textarea>
        <span class="counter"></span>
      </div>
    </form>
    <!-- <div class="right-content">
      <div class="button">
        <input type="submit" value="Submit" />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: function() {
    return {
      name: '',
      surname: '',

      email: {
        value: '',
        valid: true,
      },

      message: {
        text: ``,
        maxlength: 255,
      },
      submitted: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');

@mixin flexCenter() {
  display: flex;
  justify-content: center;
}
.container {
  background-color: white;
  // border: solid 0.2rem #264653;
  border-left: none;
  height: 60vh;
  @include flexCenter();
  h1 {
    width: 70%;
    color: black;
    text-align: center;
    margin: auto;
  }
  .form {
    @include flexCenter();
    padding: 1rem;
    flex-direction: column;
    width: 60%;
    &-content {
      @include flexCenter();
      justify-content: space-between;
      color: black;
      width: 70%;
      margin: 1rem auto;
      &-name,
      &-surname {
        @include flexCenter();
        flex-direction: column;
        text-align: left;
        width: 40%;
        color: black;
      }
    }
    &-email {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      color: black;
      width: 70%;
      margin: 1rem auto;
    }
    &-text {
      @include flexCenter();
      flex-direction: column;
      text-align: left;
      color: black;
      width: 70%;
      margin: 2rem auto;
    }
    .message {
      height: 100px;
      outline: none;
      border: none;
      border-bottom: 1px solid black;
    }
  }
  input {
    height: 30px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }
  // .right-content {
  //   @include flexCenter();

  //   width: 40%;
  //   background-repeat: no-repeat;
  //   background-position: bottom;
  //   background-size: cover;

    // .button {
    //   margin: auto;
    //   input {
    //     padding: 0.4rem 6rem 3rem 6rem;
    //     margin: 0 0.1rem 0.1rem 0;

    //     border-radius: 2rem;
    //     box-sizing: border-box;
    //     text-decoration: none;
    //     font-family: 'Nanum Gothic', sans-serif;
    //     font-weight: 600;
    //     font-size: 2rem;
    //     color: white;

    //     text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    //     text-align: center;
    //     transition: all 0.2s;
    //     background-color: #264653;
    //   }
    // }
  // }
}
</style>
