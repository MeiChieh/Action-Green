<template>
    <div class='readmoreimg' 
         :style="{backgroundImage: `url(${showImg})`, boxShadow: noImgShadow}">
          <div class="txtbox" :class="{shift: isShift}">
              <div id='intro'>{{readmoreImgTxt}}</div>

              <div id='readmorebtn-pos' 
                   @mouseenter="shiftTxt" 
                   @mouseleave="shiftTxt" 
                   v-hammer:tap='shiftTxt'>
                   <Readmorebtn></Readmorebtn>
              </div>
          </div>             
    </div>
</template>

<script>
import Vue from "vue";
import { VueHammer } from 'vue2-hammer';
Vue.use(VueHammer);
import Readmorebtn from './Readmorebtn.vue';
export default {
    name:'readmoreimg',
    components:{Readmorebtn},
    props:{
        readmoreImg:{
            type: String,
            required: true,
        },
        readmoreImgTxt:{
            type: String,
            required: true,
        },
        noImgShadow:{
            type: String,
            required: false,
        }
    },
    data(){return{
        isShift: false,
    }},
    methods:{
        shiftTxt(){
            this.isShift = !this.isShift;
        },
        
    },
    computed:{
        showImg(){
            return require(`../assets/images/${this.readmoreImg}`)
        },
    },
}
</script>

<style scoped>

.readmoreimg{
    width: 100%;
    height: 60vh;
    background: linear-gradient(to bottom rgba(0,0,0,0) rgba(0,0,0,8));
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    font-size: 20px;
    box-shadow: 5px 5px 18px #888888;
    position:relative;
    margin-bottom: 1em;
    transition: all 0.5s;
}



.txtbox{
    position: absolute;
    background-color:rgb(1, 1, 1, 0.4);
    width: 100%;
    padding-bottom: 3em;
    padding-top: 0.5em;
    bottom: 0em;
    transition: all 0.5s;
}

.shift{
    padding-bottom:2.6em;
}

#intro{
    margin-inline-start: 1em;
    margin-inline-end: 1em;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-size: 0.7em;
    text-align: justify;
    word-break: break-word;
    hyphens: auto;
}

#readmorebtn-pos{
    position: absolute;
    align-self: baseline;
    bottom:1em;
    left:0.5em;
}


@media only screen and (min-width: 420px){
    .readmoreimg{
        font-size: 20px; 
        width: 47%;
        height: 40vh;
    }
    #intro{
    margin-inline-start: 2em;
    margin-inline-end: 2em;
    }
}

@media only screen and (min-width: 768px){
    .readmoreimg{
        font-size: 25px; 
        width: 47%;
        height: 40vh;
    }   
}

@media only screen and (min-width: 1023px){
    .readmoreimg{
        font-size: 25px; 
        width: 47%;
        height: 50vh;
    }    
}


</style>
