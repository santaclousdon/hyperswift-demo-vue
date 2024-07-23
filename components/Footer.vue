<template>
  <div class="footerContainer" id="footer">
    <div class="footerContent">
      <h2 class="title is-1 has-text-white">Ready to engage?</h2>
      <p class="subtitle has-text-white">
        35+ Projects Delievered | 20+ Happy Customers
      </p>
      <div class="button-container" @click="showModal = true">
        <NuxtLink><h2>Be The Next One</h2></NuxtLink>
      </div>
      <ContactUsModal :showModal="showModal" @close="showModal = false" />
      <div class="socials">
        <NuxtLink @click="mailTo"
          ><img src="/email.png" height="60" width="60"
        /></NuxtLink>
        <NuxtLink to="https://www.instagram.com/hyperswift.software/"
          ><img src="/instagram.png" height="60" width="60"
        /></NuxtLink>
      </div>

      <div class="copyright">
        © {{ currentYear }} Hyperswift. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import ContactUsModal from "./dialog/ContactUs.vue";
export default {
  components: {
    ContactUsModal,
  },
  data() {
    return {
      showModal: false,
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    mailTo: () => {
      window.location.href = "mailto:hello@hyperswift.net";
    },
  },
};
</script>

<style>
.footerContainer {
  width: 100svw;
  height: 100svh;

  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(18, 7, 53, 1) 100%
  );

  > .footerContent {
    width: 70svw;
    height: 80svh;
    margin: 0 auto;
    padding: 5rem 3rem 10rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    > .title {
      text-align: center;
      font-size: clamp(2.5rem, 3vw, 4em);

      font-family: "Poppins", sans-serif;
      font-weight: 600;
      background: -webkit-linear-gradient(#30e6ff, #524ff0);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      height: auto;
      padding: 0.5vw;
    }

    > .subtitle {
      font-size: clamp(1.3rem, 1.7vw, 2.5rem);
      font-weight: bold;
      width: auto;
      text-align: center;
      font-family: "Poppins", sans-serif;
    }

    > .button-container {
      border-radius: 15px;
      border: 1px solid #878484;
      background-color: #d9d9d927;
      width: auto;
      align-self: center;

      > a h2 {
        padding: 2rem 5rem;
        font-size: clamp(1.2rem, 1.4vw, 3em);
        color: white;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
      }
    }

    > .socials {
      width: 35svw;
      display: flex;
      gap: 3rem;
      justify-content: center;
      margin: 0 auto;
      border-bottom: 5px solid #cdc6c61a;
      padding-bottom: 2vw;
    }

    > .copyright {
      width: 30vw;
      text-align: center;
      color: white;
      margin: 0 auto;
    }
  }
}

@media all and (max-width: 800px) {
  .footerContainer {
    height: 81svh;

    > .footerContent {
      width: 100svw;
      padding: 5rem 1rem;
      gap: 2rem;
    }
  }
}
</style>
