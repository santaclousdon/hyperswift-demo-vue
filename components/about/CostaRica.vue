<template>
    <div class="costaRicaContainer">
        <div class="costaRicaContent">
            <div class="costaRica-texts">
                <p class="title">
                    A Software Development Center based in Costa Rica.
                </p>
                <p class="subtitle">
                    By being located in San Jose, we not only offer quality talent but a set of strategic advantaged for nearshore outsourcing.
                </p>
            </div>
            <div class="bullet-points">
                <ul>
                    <li><span></span>Same timezones, better communication.</li>
                    <li><span></span>Fluent English spoken staff.</li>
                    <li><span></span>Very high technical level.</li>
                </ul>
                <div></div>
                <ul>
                    <li><span></span>Cost effective business solutions.</li>
                    <li><span></span>Inmediate resource availability.</li>
                    <li><span></span>LATAM talent reach.</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
    .costaRicaContainer{
        height: auto;
        padding: 8rem 3rem 4rem;
        width: 100svw;
        margin: 0 auto;

        > .costaRicaContent{
            display: flex;
            flex-direction: column;
            width: 65vw;
            height: 100%;
            margin: 0 auto;

            justify-content: center;
            gap: 5rem;

            >.costaRica-texts{

                display: flex;
                flex-direction: column;
                gap: 1.5rem;

                > .title{
                    font-size: clamp(2.5rem, 2.2vw, 4em);
                    color: white;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    text-align: center;
                }

                > .subtitle{
                    font-size: clamp(1.1rem, 1.5vw, 2.6rem);
                    color: white;
                    width: 75%;
                    margin: 0 auto;
                    text-align: center;
                    font-family: 'Poppins', sans-serif;
                }
            }

            >.bullet-points{
                display: flex;
                justify-content: center;
                gap: 5rem;
                width: 80%;
                align-self: center;

                > ul{
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    width: 50vw;
                    gap: 3rem;

                    >li{
                        font-size: clamp(1.1rem, 1.4vw, 2.6rem);
                        color: white;
                        text-align: left;
                        display: flex;
                        font-family: 'Poppins', sans-serif;
                        gap: 1.5rem;

                        > span{
                            background-image: url(https://i.postimg.cc/nhrgMCPV/polygon.png);
                            height: 2.5rem;
                            align-self: center;
                            width: 3rem;
                            display: block;
                            background-repeat: no-repeat;
                        }
                    }
                }

                > div{
                    width: 7px;
                    background-color:#ebebeb42;
                }
            }
        }
    }

    @media all and (max-width:800px){
        .costaRicaContainer{
            padding: 6rem 1rem;

            > .costaRicaContent{
                width: 100%;
                height: auto;

                >.costaRica-texts{

                    > .title{
                        text-align: left;
                    }

                    > .subtitle{
                        width: 100%;
                        text-align: left;
                    }
                }

                >.bullet-points{
                    flex-direction: column;
                    gap: 3rem;
                    width: 100%;

                    > ul{
                        width: 100%;

                        > li{

                            gap: 0rem;

                            > span{
                                height: 1.5rem;
                                width: 2.5rem;
        
                                background-size: contain;
                            }
                        }
                    }

                    > div{
                        display: none;
                        width: 100%;
                        height: 6px;
                        background-color:#ebebeb42;
                    }
                }
            }
        }
    }
</style>