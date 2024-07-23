<template>
    <div class="processContainer"> 
        <section class="processContent">
            <div class="textsContainer" >
                <p class="title has-text-white">
                    Our Process
                </p>
                <p class="subtitle has-text-white">
                    Structure, order and crystal clear communication.<br> Here’s what we usually do when working on a project.
                </p>
            </div>
            <div class="process-cards">
                <div class="process-item">
                    <div class="process-head">
                        <h2>Inception</h2>
                        <p>
                            Project Kick-off
                        </p>
                    </div>
                    <div class="process-body">
                        <p>Requirement Gathering.</p>
                        <p>Customer Success Manager gets introduced.</p>
                        <p>Technical team gets assigned.</p>
                        <p>Kick-Off Call.</p>
                    </div>
                </div>
                <div class="process-item">
                    <div class="process-head">
                        <h2>Construction</h2>
                        <p>
                            Design, Build and Test
                        </p>
                    </div>
                    <div class="process-body">
                        <p>Development gets started.</p>
                        <p>We build software in 2-week sprints. </p>
                        <p>There’s touchpoint call every 2-3 days to show progress.</p>
                        <p>Access to project metrics and daily comms.</p>
                    </div>
                </div>
                <div class="process-item">
                    <div class="process-head">
                        <h2>Delivery</h2>
                        <p>
                            Ship Your App
                        </p>
                    </div>
                    <div class="process-body">
                        <p>We make sure you are satisfied with the end result.</p>
                        <p>Project gets shipped to the App store.</p>
                        <p>Support is provided as needed.</p>
                        <p>CSM keeps engaged.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
    .processContainer{
        height: auto;
        padding: 8rem 3rem;
        width: 100svw;
        margin: 0 auto;

        > .processContent{

            display: flex;
            flex-direction: column;
            width: 60svw;
            height: auto;
            margin: 0 auto;
            justify-content: center;
            gap: 5rem;

            > .textsContainer{
                
                >.title{
                    text-align: left;
                    font-size: clamp(2.5rem, 2.5vw, 4em);
                    color: white;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                }

                >.subtitle{
                    text-align: left;
                    font-size: clamp(1.3rem, 1.5vw, 2.8rem);
                    color: white;
                    width: 80%;
                    font-family: 'Poppins', sans-serif;
                    margin: 0 0;
                }
            }

            > .process-cards{
                width: 100%;
                height: auto;
                display: grid;
                justify-content: space-between;
                grid-template-columns: repeat(3, 1fr);
                gap: 3rem;

                > .process-item{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    gap: 2rem;
                    padding: 2rem;

                    border-radius: 25px;
                    border: 1px solid #878484;
                    background-color: #d9d9d927;

                    > .process-head{

                        border-bottom: 1px solid grey;
                        padding: 2rem 0;

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

                    > .process-body{

                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        gap: 1.5rem;

                        > p{
                            text-align: left;
                            font-size: clamp(1rem, 1vw, 2.5rem);
                            color: white;
                            font-family: 'Poppins', sans-serif;
                        }
                    }                    
                }
            }
        }
    }

    @media all and (max-width:1000px) {
        
        .processContainer{
            padding: 6rem 1rem;

            >.processContent{
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

                >.process-cards{
                    grid-template-columns: repeat(1, 1fr);
                    height: auto;
                    gap: 2rem;

                    >.process-item{

                        gap: 1rem;
                        border-radius: 15px;
                        
                        >.process-head{
                            padding: 0 0 1rem 0;
                        }

                        >.process-body{
                            gap: 1rem;
                        }
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

        .processContainer{

            >.processContent{
                width: 90svw;
            }
        }
    }
</style>