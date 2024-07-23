<template>
    <div class="servicesGridContainer"> 
        <section class="servicesGridContent">
            <div class="textsContainer" >
                <p class="title has-text-white">
                    From nearshore development to staff augmentation
                </p>
                <p class="subtitle has-text-white">
                    We offer a full catalog of top tier services for you to confidently achieve your next milestone.
                </p>
            </div>
            <div class="cards">
                <div class="cards-item">
                    <h2>iOS Development</h2>
                    <p>
                        Our experencied iOS developers rely on Swift, React Native and Flutter to build the perfect app for our customers.
                    </p>
                </div>
                <div class="cards-item">
                    <h2>macOS Apps</h2>
                    <p>
                        We develop & design custom applications for the macOS desktop environment.
                    </p>
                </div>
                <div class="cards-item">
                    <h2>VR / AR Projects</h2>
                    <p>
                        We take care of developing cutting edge projects compatible with the Apple Vision.
                    </p>
                </div>
                <div class="cards-item">
                    <h2>watchOS Apps</h2>
                    <p>
                        Our teams are also experienced in building intuitive portable apps for the watchOS platform.
                    </p>
                </div>
                <div class="cards-item">
                    <h2>Cloud Services</h2>
                    <p>
                        We go beyond app development and build custom cloud based functionality by relying on AWS, GCP and Firebase.
                    </p>
                </div>
                <div class="cards-item">
                    <h2>UI / UX Design</h2>
                    <p>
                        Carefully crafted interfaces to provide the best experience for your end users.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
    .servicesGridContainer{
        height: auto;
        padding: 6rem 3rem 2rem;
        width: 100svw;
        margin: 0 auto;

        > .servicesGridContent{
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
                    font-size: clamp(2.5rem, 2.2vw, 4em);
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
                    padding: 2rem 2rem 5rem 2rem;

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
                        font-size: clamp(1rem, 1.2vw, 2.5rem);
                        color: white;
                        font-family: 'Poppins', sans-serif;
                    }
                }
            }
        }
    }

    @media all and (max-width:900px){
        .servicesGridContainer{
            padding: 1rem;

            > .servicesGridContent{
                gap: 3rem;
                width: 100%;

                > .textsContainer{

                    > .title{
                        text-align: left;
                    }

                    > .subtitle{
                        width: 100%;
                        text-align: left;
                    }
                }

                > .cards{

                    grid-template-columns: repeat(1, 1fr);

                    > .cards-item{

                        padding: 2rem;
                        border-radius: 15px;

                    }
                }
            }
        }
    }

    @media all and (max-width:1400px){

        .servicesGridContainer{
            

            > .servicesGridContent{
                
                width: 90svw;

                > .cards{

                    gap: 2rem;

                    > .cards-item{

                        border-radius: 15px;

                    }
                }
            }
        }
    }
</style>