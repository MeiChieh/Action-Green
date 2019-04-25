<template>
<div class='readmorebtn' :class='{minify: isMinify}' v-hammer:tap="onTap">
    <div id='barbox'>
      <div class='textbar'></div>
      <div class='textbar'></div>
      <div class='textbar'></div>
    </div>
   <div id='readmoretxt'>{{more}}</div>
</div>
   
</template>

<script>
import Vue from "vue";
import { VueHammer } from 'vue2-hammer';
Vue.use(VueHammer);
export default {
    name:'readmorebtn',
    data(){return{
        more: 'Read More',
        isMagnify: false,
        isMinify: false,

    }},
    methods:{
        shiftTxt(){
            this.isShift = !this.isShift;
        },
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

<style scoped>
.readmorebtn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
    transition: transform 0.3s;
    font-size:7px;
    
}
.readmorebtn:hover{
    cursor: pointer;
    transform:scale(1.15);
}

.minify{
    transform:scale(0.9);
}

#barbox{
    width: 3em;
    height: 3em;
    border: solid white;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
}
.textbar{
    width: 2em;
    height: 0.3em;
    background-color:white;
}
#readmoretxt{
    margin-left: 0.5em;
    color: white;
    font-size: 2.5em;
    font-family: sans-serif;
    text-shadow: 3px 3px 5px rgb(81, 85, 81, 1);
}

</style>
