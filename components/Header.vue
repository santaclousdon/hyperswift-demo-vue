
<template>
    <header class="header">
        <div class="navbar">
            <NuxtLink to="/" class="title is-1 has-text-white">
                <img src="/logo.png" height="100" width="150">
            </NuxtLink>

            <div>
                <img src="/menu.png" @click="openMenu" height="150" width="150"/>

                <nav id="menu" role="navigation" aria-label="main-navigation" class="animate__animated animete__fadeIn">   
                    <NuxtLink @click="linkTouched" to="/about" class="item">
                        About us
                    </NuxtLink>
                    <NuxtLink @click="linkTouched" to="/services" class="item">
                        Our Services
                    </NuxtLink>
                    <NuxtLink class="item" @click="scrollToFooter">
                        Contact Us
                    </NuxtLink>
                </nav>
            </div>
            
        </div>
        
    </header>
</template>

<script>
export default{
    data(){
        return {
            isOpen:false
        }
    },
    methods:{
        scrollToFooter:()=>{
            scrollTo({ behavior:'smooth', top:5000})
        },
        openMenu(){
            const menu = document.getElementById('menu')

            if(!this.isOpen){
                menu.classList.add('responsiveMenu')
                this.isOpen = true
            } else {
                menu.classList.remove('responsiveMenu')
                this.isOpen = false
            }
        },
        linkTouched(){
            this.openMenu()
        }
    }
}
</script>

<style>
    .header{
        width: 100%;
        height: 10svh;
        margin: 0 auto;
        padding: 1rem 3rem;
        position: absolute;
        background-color: transparent;

        > .navbar{

            margin-top: 1rem;
            color: white;
            display:flex;
            justify-content:space-between;
            background-color:transparent;

            > .title{
                width: auto;
                height: 6vh;
                margin: 0;
            }

            > div {

                > img{
                    display: none;
                }

                > nav{
                    width:auto;
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap:2rem;

                    > .item{
                        color:rgba(255, 255, 255, 0.644);
                        text-align: center;
                        line-height: 6.5vh;
                        padding: 0 1rem;

                        font-size: 1.3rem;
                        font-weight: 600;

                        font-family: 'Poppins', sans-serif;

                        transition: all 0.4s ease-in;
                    }

                    > .item:hover{
                        color:white;
                        transform: scale(1.1);
                    }
                }
            }           
        }
    }

    @media all and (max-width:1000px) {
        
        .header{        

            padding: 1rem 2rem;

            .navbar{

                > div {
                    > img{
                        display: initial;
                        height: 5vh;
                        width: 5vh;
                    } 

                    > nav{
                        display: none;
                    }

                    > .responsiveMenu{
                        z-index: 3;
                        background-color: black;
                        position: absolute;
                        left: -2rem;
                        height: 40vh;
                        width: 100vw;
                        display: flex;
                        flex-direction: column;
                        padding: 5vh 5vw;

                        > .item{
                            text-align: left;
                        }
                    }
                }
            }
        }
    }

    
</style>

