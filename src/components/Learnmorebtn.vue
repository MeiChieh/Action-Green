<template>
<div class='learnmorebtn' :class='{minify: isMinify}' v-hammer:tap='onTap'>
    <div id='txt'>Learn More</div>
</div>
    
</template>

<script scoped>
import { setTimeout } from 'timers';
export default {
    name:'learnmorebtn',
    data(){return{
        isMagnify: false,
        isMinify: false,
    }},
    methods:{
        onTap(){
            this.isMinify = !this.isMinify;
            this.shiftBack();
        },
        shiftBack(){
            setTimeout( ()=>{
                this.isMinify = !this.isMinify;
            }, 200)
        }
    },
}
</script>

<style>
.learnmorebtn{
    color:  #434242;
    font-size: 17px;
    font-weight: 900;
    background-color: salmon;
    border-radius: 6px;
    text-align: center;
    width: 6em;
    padding: 0.4em;
    box-shadow: 1px 1px 2px rgba(1,1,1,0.4);
    transition: transform 0.2s;
    margin: auto;
}

.learnmorebtn:hover{
    cursor: pointer;
    transform:scale(1.2);
}

.minify{
    transform:scale(0.9);
}



@media only screen and (min-width: 420px){
    .learnmorebtn{
        font-size: 20px;
    }
}

@media only screen and (min-width: 768px){
    .learnmorebtn{
        font-size: 25px;
    }
}





</style>
