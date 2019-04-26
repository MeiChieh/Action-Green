<template>
<div class='plainword' :style="{backgroundColor: bgColor}">
    <div id='plainwordtxt'>{{word}}</div>    
</div>
    
</template>

<script>
export default {
    name: 'plainword',
    // props:['word', 'bgColor'],
    props:{
        word:{
            type: String,
            required: true,
        },
        bgColor:{
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
    
.plainword{
    height: 20vh;
    width: 100vw;
    font-size: 25px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family:sans-serif;  
    font-weight:bold;
    /* color:white; */
    color:rgba(50,50,50);
    /* text-shadow: 1px 1px 1px rgba(1,1,1,0.5);  */

}

#plainwordtxt{
    font-size: 1em;
    word-break: break-word;
    hyphens: auto;

}

@media only screen and (min-width: 420px){
    .plainword{
        font-size: 40px;
    }

} 

@media only screen and (min-width: 768px){
    .plainword{
        font-size: 40px;
    }
} 

@media only screen and (min-width: 1023px){
    .plainword{
        font-size: 40px;
        height: 22vh;

    }
} 
</style>
