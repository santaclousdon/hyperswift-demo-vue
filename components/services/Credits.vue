<template>
    <div class="watchContainer" v-on:mouseenter="addAnimationOnHover" v-on:touchstart="addAnimationOnHover">
        <section class="hero">
            <div class="hero-body">
                <div class="hero-texts">
                    <p class="title">
                        We build your project, you get the credits.
                    </p>
                    <p class="subtitle">
                        Our customers earn HyperSwift credits per project developed.<br> Credits can be accumulated and exchanged for discounts for your next project with us.
                    </p>
                </div>
                
                <NuxtImg src="https://i.postimg.cc/W1yKZTBG/watch.png" class="hero-image" sizes="90vw sm:65vw md:50vw lg:30vw xl:30vw xxl:25vw" id="watch">
                </NuxtImg>
                
            </div>
        </section>
    </div>
</template>

<script>
    export default{
        methods:{
            addAnimationOnHover:()=>{
                const watch = document.getElementById('watch')
                watch.style.opacity = 1
                watch.classList.add('animate__animated','animate__fadeInRight')
            }
        }
    }
</script>

<style>
    .watchContainer{
        width: 60vw;
        margin: 0 auto;

        > .hero{

            min-height: 60svh;

            >.hero-body{

                display: flex;
                gap: 4rem;
                flex-direction: row;

                >.hero-texts{

                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    justify-content: center;

                    > .title{
                        font-size: clamp(2.5rem, 3vw, 4em);
                        color: white;
                        font-family: 'Poppins', sans-serif;
                        font-weight: 600;
                    }

                    > .subtitle{
                        font-size: clamp(1.2rem, 1.4vw, 1.4rem);
                        color: white;
                        width: 100%;
                        font-family: 'Poppins', sans-serif;
                    }
                }
  
                >.hero-image{
                    opacity: 0;

                    align-self: center;
                }
            }
        }
    }

    @media all and (max-width:900px){
        .watchContainer{
            width: 100vw;

            > .hero{

                >.hero-body{

                    display: flex;
                    gap: 4rem;
                    flex-direction: column;
                }
            }
        }
    }

    @media all and (max-width:1400px){

        .watchContainer{
            width: 80vw;

            
        }
    }
</style>