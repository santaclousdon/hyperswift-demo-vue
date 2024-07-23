<template>
    <Head>
        <Title>Hyperswift - Services</Title>
    </Head>

    <ServicesHero />

    <ServicesGrid />

    <ServicesCredits />
</template>

<style>
  .servicesContainer{
      height: auto;
      padding: 8rem 3rem;
      width: 100svw;
      margin: 0 auto;

      > .servicesContent{
          display: flex;
          flex-direction: column;
          width: 60vw;
          height: 100%;
          margin: 0 auto;

          justify-content: center;
          gap: 5rem;
        }
  }
</style>