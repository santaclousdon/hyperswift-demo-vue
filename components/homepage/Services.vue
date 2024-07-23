<template>
    <div class="servicesHomeContainer"> 
        <section class="servicesHomeContent">
            <div class="textsContainer" >
                <p class="title has-text-white">
                    Top nearshore software development.
                </p>
                <p class="subtitle has-text-white">
                    We delight our customers with high quality technical solutions, clean UI / UX design and endless attention to detail.
                </p>
            </div>
            <div class="cards">
                <div class="cards-item">
                    <h2>UI/UX Design</h2>
                    <p>
                        Since the first impression matters the most, we make sure to create pleasent end-user experiences and eye-catching interfaces.
                    </p>
                </div>
                <div class="cards-item">
                    <h2>Software Development</h2>
                    <p>
                        Our talented devs write clean and maintanable code. It is written and tested to achieve the highest grade of quality.
                    </p>
                </div>
                <div class="cards-item">
                    <h2>Cloud Integration</h2>
                    <p>
                        Everything we do is cloud oriented. Custom APIs, BaaS, PaaS, relational and non-relational databases on top of AWS and GCP.
                    </p>
                </div>
            </div>
            <div class="button-container">
                <NuxtLink to="/services"><h2>Explore Our Services</h2></NuxtLink>
            </div>
        </section>
    </div>
</template>

<style>
    .servicesHomeContainer{
        height: auto;
        padding: 8rem 3rem 2rem;
        width: 100svw;
        margin: 0 auto;

        > .servicesHomeContent{

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

            > .cards{

                width: 100%;
                height: auto;
                display: grid;
                justify-content: space-between;
                grid-template-columns: repeat(3, 1fr);
                gap: 3rem;

                > .cards-item{

                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 1rem;
                    padding: 2rem;

                    border-radius: 25px;
                    border: 1px solid #878484;
                    background-color: #d9d9d927;

                    > h2{
                        font-size: clamp(1.5rem, 1.5vw, 3em);
                        color: white;
                        font-family: 'Poppins', sans-serif;
                        font-weight: 600;
                    }

                    > p{
                        text-align: left;
                        font-size: clamp(1rem, 1.1vw, 2.5rem);
                        color: white;
                        font-family: 'Poppins', sans-serif;
                    }
                }
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

    @media all and (max-width:1000px){

        .servicesHomeContainer{

            padding: 6rem 1rem;

            >.servicesHomeContent{
                width: 100%;

                >.textsContainer{

                    .title{
                        text-align: left;
                    }

                    .subtitle{
                        width: 100%;
                        text-align: left;
                    }
                }

                >.cards{
                    grid-template-columns: repeat(1, 1fr);
                    height: auto;

                    >.cards-item{
                        border-radius: 14px;
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

    @media all and (max-width:1400px){

        .servicesHomeContainer{

            >.servicesHomeContent{
                width: 80svw;    
            }   
        }
    }
</style>