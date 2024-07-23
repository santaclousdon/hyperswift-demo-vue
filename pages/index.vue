<template>
  <Head>
    <Title>Hyperswift</Title>
  </Head>
  <HomepageHero />

  <HomepageServices />

  <HomepagePerformance />

  <HomepageProcess />
  <DialogContactUs />
</template>

<script setup>
import "../assets/fonts/fonts.css";
</script>

<style>
.sectionsContainer {
  height: auto;
  padding: 8rem 3rem;
  width: 100svw;
  margin: 0 auto;

  > .sectionContent {
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 100%;
    margin: 0 auto;

    justify-content: center;
    gap: 5rem;

    /* reusued style */
    > .button-container {
      border-radius: 15px;
      border: 1px solid #878484;
      background-color: #d9d9d927;
      width: auto;
      align-self: center;

      > a h2 {
        padding: 2rem;
        font-size: clamp(1.2rem, 1.4vw, 3em);
        color: white;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
      }
    }
  }
}
</style>
