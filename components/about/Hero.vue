<template>
    <div class="aboutUsContainer">
        <div class="heroContainer">
            <section class="hero is-fullheight">
                <div class="hero-body">
                    <div class="hero-texts">
                        <p class="title">
                            Passion, Ethics and Technical skill.
                        </p>
                    </div>
                    <img class="hero-image animate__animated animate__fadeIn" src="https://i.postimg.cc/VN1KM635/person.png"  />
                </div>
            </section>
        </div>
    </div>
</template>

<style>
    .aboutUsContainer{
        height: auto;
        width: 100svw;
        margin: 0 auto;

        background: rgb(24,23,77);
        background: radial-gradient(circle, rgba(24,23,77,0.927608543417367) 0%, rgba(0,0,0,1) 78%);
        background-size: cover;

        > .heroContainer{
            width: 70svw;
            margin: 0 auto;

            > .hero{

                >.hero-body{

                    flex-direction: column;
                    justify-content: flex-end;
                    gap: 2rem;
                    padding-bottom: 0;

                    >.hero-texts{
                        height: 60%;
                        width: 60%;

                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;

                        > .title{
                            font-size: clamp(1.9rem, 3vw, 4em);
                            color: white;
                            font-family: 'Poppins', sans-serif;
                            font-weight: 600;
                            text-align: center;
                        }
                    }

                    >.hero-image{
                        height: 490px;
                        width: 380px;
                    }
                }
            }
        }
    }

    @media all and (min-width:1001px) and (max-width:1500px){
        .aboutUsContainer{

            >.heroContainer{
                width: 100svw;

                >.hero{

                    >.hero-body{

                        >.hero-image{
                            height: 510px;
                            width: 380px;
                        }
                    }

                }
            }
        }
    }

    @media all and (max-width: 1000px) {
        
        .aboutUsContainer{

            >.heroContainer{
                width: 100svw;

                >.hero{

                    >.hero-body{
                        
                        gap: 1.5rem;

                        >.hero-texts{
                            width: 100%;
                            position: initial;

                        }

                        >.hero-image{
                            height: 510px;
                            width: 360px;
                        }
                    }
                }
            }
        }
    }

    @media all and (max-width: 800px) {
        
        .aboutUsContainer{

            >.heroContainer{
                width: 100svw;

                >.hero{

                    min-height: 70vh;

                    >.hero-body{
                        
                        gap: 2rem;
                        padding: 8rem 2rem 0rem;

                        >.hero-image{
                            height: 360px;
                            width: 280px;
                        }
                    }
                }
            }
        }
    }

    @media all and (min-width: 800px) and (max-height:790px){
        .aboutUsContainer{

            >.heroContainer{
                width: 100svw;

                >.hero{

                    >.hero-body{
                        
                        gap: 2rem;

                        >.hero-texts{
                            width: 100%;
                            position: initial;

                            > .title{
                                font-size: clamp(1.9rem, 2vw, 4em);
                            }
                        }

                        >.hero-image{
                            height: 420px;
                            width: 360px;
                        }
                    }
                }
            }
        }
    }
</style>