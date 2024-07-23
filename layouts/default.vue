
<template>
    <div class="layout">
        <Header />
        
        <slot></slot>
        
        <Footer />
    </div>
</template>

<style>

    *{
        box-sizing: border-box;
    }

    .layout{
        height: auto;
        width: 100svw;
        background-color: #000000;
    }
</style>

