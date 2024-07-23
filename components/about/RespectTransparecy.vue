<template>
    <div class="respectContainer"> 
        <section class="respectContent animate__animated animate__fadeInLeft">
            <div class="respect-texts">
                <p class="title">
                    Respect & Transparency.
                </p>
                <div>
                    <p class="subtitle">
                    Our purpose is to serve our customers in the best way possible by forging long lasting relationships based on our strong ethic and set of core values.</p>
                    <p class="subtitle">Respect, transparency, communication, proactivity, and a willingness to deliver high quality outcomes helps us mark the difference. </p>
                    <p class="subtitle">We know that trust is earned with results.<br>We want to earn your trust by following our omptimized process. Let’s partner up!</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
    .respectContainer{
        height: auto;
        padding: 0rem 3rem;
        width: 100svw;
        margin: 0 auto;

        > .respectContent{
            display: flex;
            flex-direction: column;
            width: 65vw;
            height: auto;
            margin: 0 auto;
            padding: 6rem 6rem;

            justify-content: center;
            gap: 5rem;

            border-radius: 25px;
            border: 1px solid #878484;
            background-color: #d9d9d927;

            >.respect-texts{

                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                > .title{
                    font-size: clamp(2.5rem, 3vw, 4em);
                    color: white;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                }

                > div {

                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;

                    > .subtitle{
                        font-size: clamp(1.1rem, 2vw, 1.6rem);
                        color: white;
                        width: 100%;
                        font-family: 'Poppins', sans-serif;
                    }
                }
            }
        }
    }

    @media all and (max-width:800px){
        .respectContainer{
            padding: 1rem;

            > .respectContent{
                width: 100%;
                padding: 2rem 2rem;

                border-radius: 15px;

                >.respect-texts{

                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    > div {

                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                }
            }
        }
    }

    @media all and (max-width:1400px){
        .respectContainer{

            > .respectContent{
                width: 85svw;
            }
        }
    }
</style>