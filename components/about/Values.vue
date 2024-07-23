<template>
    <div class="valuesContainer"> 
        <section class="valuesContent">
            <div class="textsContainer" >
                <p class="title has-text-white">
                    Our number one priority is our relationship with our customers.
                </p>
                <p class="subtitle has-text-white">
                    We care about building a great product, but we want to make sure we are making you a part of the process.
                </p>
            </div>
            <div class="cards">
                <div class="cards-item">
                    <h2>High Standards</h2>
                    <p>
                        From wireframes to the final product. We make sure to deliver the best outcome possible to surpass your expectations.
                    </p>
                </div>
                <div class="cards-item">
                    <h2>Clear Insights</h2>
                    <p>
                        To be on the same page is crucial for every project’s success. That’s why we make a big effort to provide constant insigths.
                    </p>
                </div>
                <div class="cards-item">
                    <h2>Client Success</h2>
                    <p>
                        We are driven by the desire of achieving the best results to grant our customers market success. We do everything we can to make it happen.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
    .valuesContainer{
        height: auto;
        padding: 8rem 3rem 4rem;
        width: 100svw;
        margin: 0 auto;

        > .valuesContent{
            display: flex;
            flex-direction: column;
            width: 65vw;
            height: auto;
            margin: 0 auto;

            justify-content: center;
            gap: 5rem;

            > .textsContainer{

                > .title{
                    text-align: center;
                    font-size: clamp(2rem, 2vw, 3.1em);
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                }

                > .subtitle{
                    text-align: center;
                    font-size: clamp(1.3rem, 1.5vw, 2.8rem);
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
                gap: 6rem;

                > .cards-item{

                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 2rem;
                    padding: 4rem 0rem;

                    > h2{
                        font-size: clamp(1.5rem, 1.8vw, 4em);
                        color: white;
                        font-family: 'Poppins', sans-serif;
                        font-weight: 600;
                        border-left: 10px solid #308FFF;
                        padding-left: 1vw;
                        line-height: 1.4vw;
                    }

                    > p{
                        text-align: left;
                        font-size: clamp(1rem, 1.1vw, 2.5rem);
                        color: white;
                        font-family: 'Poppins', sans-serif;
                    }
                }
            }
        }
    }

    @media all and (max-width:1400px){

        .valuesContainer{

            > .valuesContent{
                width: 90svw;
                gap: 5rem;

                > .cards{
                    gap: 3rem;
                }
            }
        }
    }

    @media all and (max-width:800px){
        .valuesContainer{
            padding: 3rem 1rem 2rem;

            > .valuesContent{
                width: 100%;
                gap: 2rem;

                > .textsContainer{

                    > .title{
                        text-align: left;
                    }

                    > .subtitle{
                        text-align: left;
                        width: 100%;
                    }
                }

                >.cards{
                    grid-template-columns: repeat(1, 1fr);
                    height: auto;
                    gap: 0rem;

                    >.cards-item{
                        gap: 2rem;
                        padding: 2.5rem 0rem;
                    }
                }
            }
        }
    }
</style>