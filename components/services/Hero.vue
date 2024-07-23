<template>
    <div class="servicesHeroContainer">
        <div class="heroContainer">
            <section class="hero is-fullheight">
                <div class="hero-body">
                    <div class="hero-texts">
                        <p class="title">
                          We turn your vision into reality.
                        </p>
                    </div>
                    <img src="https://i.postimg.cc/3JnzKg9b/apple-vision.png" class="hero-image animate__animated animate__fadeInUp" />
                </div>
            </section>
        </div>
    </div>
</template>

<style>
    .servicesHeroContainer{
        height: auto;
        width: 100svw;
        margin: 0 auto;

        background: rgb(24,23,77);
        background: radial-gradient(circle, rgba(24,23,77,0.927608543417367) 0%, rgba(0,0,0,1) 100%);
        background-size: cover;

        > .heroContainer{
            width: 70svw;
            margin: 0 auto;

            > .hero{

                >.hero-body{

                    flex-direction: column;
                    justify-content: flex-end;

                    >.hero-texts{
                        height: 60%;
                        width: 60%;

                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;

                        > .title{
                            font-size: clamp(2.1rem, 3.5vw, 4em);
                            color: white;
                            font-family: 'Poppins', sans-serif;
                            font-weight: 600;
                            text-align: center;
                        }
                    }

                    >.hero-image{
                        height: 500px;
                    }
                }
            }
        }
    }

    @media all and (min-width:1001px) and (max-width:1500px){
        
        .servicesHeroContainer{

            > .heroContainer{

                width: 85svw;

                > .hero{

                    >.hero-body{

                        >.hero-image{
                            height: 500px;
                        }
                    }
                }
            }
        }
    }

    @media all and (max-width: 1000px) {
        .servicesHeroContainer{

            > .heroContainer{

                width: 100svw;

                > .hero{

                    min-height: 68svh;

                    >.hero-body{

                        justify-content: flex-start;
                        padding: 8rem 3rem 0rem;

                        >.hero-image{
                            height: 395px;
                        }
                    }
                }
            }
        }
    }

    @media all and (max-width: 700px) {
        .servicesHeroContainer{

            > .heroContainer{

                width: 100svw;

                > .hero{

                    min-height: 60svh;

                    >.hero-body{

                        justify-content: center;
                        padding: 6rem 0rem 0rem;

                        >.hero-image{
                            height: 255px;
                        }

                        >.hero-texts{
                            width: 100%;

                            >.title{
                                padding: 0 2rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @media all and (min-width: 1000px) and (max-height:790px){
        .servicesHeroContainer{

            > .heroContainer{

                width: 100svw;

                > .hero{

                    >.hero-body{

                        gap: 2rem;

                        >.hero-texts{
                            width: 100%;
                        }

                        >.hero-image{
                            height: 425px;
                        }
                    }
                }
            }
        }
    }
</style>