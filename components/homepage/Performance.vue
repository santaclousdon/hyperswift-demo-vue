<template>
    <div class="performanceContainer" v-on:mouseenter="addAnimationOnHover" v-on:touchstart="addAnimationOnHover">
        <section class="performanceContent">
            <div class="textsContainer" >
                <p class="title has-text-white">
                    Performance Granted.
                </p>
                <p class="subtitle has-text-white">
                    We offer a result driven oriented approach led by experienced developers who have been working with Apple technologies<br> for years.
                </p>
            </div>
            <div class="no-image" id="image">
                <img src="/iphone.png" height="300" width="600" id="iphone"/>
            </div>
            <div class="button-container">
                <NuxtLink to="/about"><h2>Learn More About Us</h2></NuxtLink>
            </div>
        </section>
    </div>
</template>

<script>
    export default{
        methods:{
            addAnimationOnHover:()=>{
                const iphone = document.getElementById('iphone')
                const image = document.getElementById('image')
                console.log(iphone.classList)
                image.classList.add('image-container')
                iphone.classList.add('animate__animated','animate__fadeInUp')
            }
        }
    }
</script>

<style>
    .performanceContainer{
        height: auto;
        padding: 8rem 3rem 3rem;
        width: 100svw;
        margin: 0 auto;

        >.performanceContent{

            display: flex;
            flex-direction: column;
            width: 60vw;
            height: 100%;
            margin: 0 auto;
            justify-content: center;
            gap: 5rem;

            > .textsContainer{

                > .title{
                    text-align: center;
                    font-size: clamp(2.5rem, 2.5vw, 4em);
                    color: white;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                }

                > .subtitle{
                    text-align: center;
                    font-size: clamp(1.3rem, 1.5vw, 2.8rem);
                    color: white;
                    width: 80%;
                    font-family: 'Poppins', sans-serif;

                    margin: 0 auto;
                }
            }

            > .no-image{
                opacity: 0;
            }

            > .image-container{
                opacity: 1;
                display: block;
                width: auto;
                margin: 0 auto;
            }

            > .button-container{

                border-radius: 15px;
                border: 1px solid #878484;
                background-color: #d9d9d927;
                width: auto;
                align-self: center;

                > a h2 {
                    padding: 2rem;
                    font-size: clamp(1.2rem, 1.4vw, 3em);
                    color: white;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                }
            }
        }
    }

    @media all and (max-width:800px) {
        
        .performanceContainer{
            padding: 1rem;

            >.performanceContent{
                width: 100%;
                gap: 3rem;

                > .textsContainer{

                    >.title{
                        text-align: left;
                    }

                    >.subtitle{
                        text-align: left;
                        width: 100%;
                    }
                }

                >.button-container{
                    width: 100%;

                    > a{
                        text-align: center;
                    }
                }
            }
        }
    }
</style>