<template>
    <div class="homeContainer">
        <div class="heroContainer">
            <section class="hero is-fullheight">
                <div class="hero-body">
                    <div class="hero-texts">
                        <p class="title">
                            We build quality apps for the Apple ecosystem.
                        </p>
                        <p class="subtitle">
                            We are a nearshore software development studio specialized in Mac OSX and iOS development.
                        </p>
                        <div class="buttons">
                            <NuxtLink to="/about"><button class="button is-rounded is-medium">Learn More</button></NuxtLink>
                            <NuxtLink @click="scrollToFooter"><button class="button is-rounded is-medium">Contact Us</button></NuxtLink>
                        </div>
                    </div>
                    <img src="https://i.postimg.cc/63sw-yP75/iphones1.png" class="hero-image animate__animated animate__fadeInUp" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import 'animate.css'

export default{
    methods:{
        scrollToFooter:()=>{
            console.log('hola')
            scrollTo({ behavior:'smooth', top:5000})
        }
    }
}
</script>

<style>
    .homeContainer{
        height: auto;
        width: 100svw;
        margin: 0 auto;

        background:-webkit-linear-gradient(62deg, #000000 34%, #18174d 67%, #000000 92%);
        background:-o-linear-gradient(62deg, #000000 34%, #18174d 67%, #000000 92%);
        background:-moz-linear-gradient(62deg, #000000 34%, #18174d 67%, #000000 92%);
        background:linear-gradient(62deg, #000000 34%, #18174d 67%, #000000 92%);
        background-size: cover;

        > .heroContainer{
            width: 85svw;
            margin: 0 auto;

            > .hero{

                >.hero-body{

                    justify-content: space-between;

                    >.hero-image{
                        height: 520px;
                        width: 420px;
                        position: relative;
                        top: 50px;
                    }

                    >.hero-texts{
                        height: 60%;
                        width: 60%;
                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;
                        position: relative;
                        bottom: 25px;

                        > .title{
                            font-size: clamp(2.5rem, 3vw, 4em);
                            color: white;
                            font-family: 'Poppins', sans-serif;
                            font-weight: 600;
                        }

                        > .subtitle{
                            font-size: clamp(1.3rem, 1.3vw, 2rem);
                            color: white;
                            width: 100%;
                            font-family: 'Poppins', sans-serif;
                        }

                        > .buttons{
                            display: flex;
                            gap: 2rem;

                            > a{
                                width: 14vw;

                                > button{
                                    width: 100%;
                                    color: black;
                                    font-weight: bold;
                                    padding: 2.5rem;
                                    font-family: 'Poppins', sans-serif;
                                    font-size: 1.5rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media all and (max-width: 1000px) {
        
        .homeContainer{

            >.heroContainer{
                width: 100svw;

                >.hero{

                    >.hero-body{
                        justify-content: flex-start;
                        flex-direction: column-reverse;

                        >.hero-texts{
                            width: 100%;
                            position: initial;
                            gap: 1rem;

                            >.title{
                                font-size: clamp(2.3rem, 3vw, 4em);
                            }

                            > .buttons{
                                display: flex;
                                justify-content: center;
                                flex-direction: column;
                                gap: 0;

                                > a{
                                    width: 100%;

                                    > button{
                                        padding: 1rem;
                                        font-size: 1.4rem;
                                    }
                                }
                            }
                        }

                        >.hero-image{
                            position: initial;
                            width: 320px;
                            height: 380px;
                            margin: 5rem;
                        }
                    }
                }
            }
        }
    }

    @media all and (min-width:1001px) and (max-width:1500px){
        .homeContainer{

            >.heroContainer{
                width: 100svw;

                >.hero{

                    >.hero-body{

                        >.hero-image{
                            height: 520px;
                            width: 420px;
                        }
                    }

                }
            }
        }
    }

    @media all and (min-width:1000px) and (min-height:800px){
        .homeContainer{

            >.heroContainer{

                >.hero{

                    >.hero-body{

                        >.hero-image{
                            height: 650px;
                            width: 500px;
                        }
                    }
                }
            }
        }
    }
</style>