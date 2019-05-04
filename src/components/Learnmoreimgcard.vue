<template>
       <div id='learnmoreimgcard'>
        <div id='cardimg' 
             v-if='learnMore.img != false' 
             :style="{backgroundImage:`url(${showImg})`}" >
        </div>
        <div id='cardimg' 
             v-else 
             v-show='false'>
        </div>
        <div id='textbox'>
            <div id='title'>{{learnMore.title}}</div>
            <div id='paragraph'>{{learnMore.paragraph}}</div>
        </div>
        <div id='learnmorebtn-pos'><Learnmorebtn></Learnmorebtn></div>  

    </div>
    
</template>

<script>
import Learnmorebtn from './Learnmorebtn.vue';
export default {
    name:'learnmoreimgcard',
    components:{Learnmorebtn},
    props:['learnMore', 'obj'],
    computed:{
        showImg(){
            return require(`../assets/images/${this.learnMore.img}`)
        },
    },

}
</script>

<style scoped>
#learnmoreimgcard{
    box-sizing: border-box;
    width: 100%;
    height: auto;
    /* max-height: 550px; */
    background-color: lightblue;
    padding-bottom: 5em;
    margin-bottom: 2em;
    box-shadow: 5px 5px 18px #888888;
    font-size: 17px;
    font-family:Arial, Helvetica, sans-serif;
    color: white;
    position: relative;
    background-color: #0375B4;
    /* background-color: #405d27; */
}


#cardimg{
    width: 100%;
    height: 40vh;
    font-size: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


#textbox{
    text-align: center;
    position: relative;
    padding-top: 1em;
    padding-bottom: 0.4em;
    height: 18vh;
    margin-bottom: 0.5em;
}

#title{
    font-weight: bold;
}

#paragraph{
    margin-inline-start: 1.2em;
    margin-inline-end: 1.2em;
    margin-block-start: 1em;
    text-align:justify;
    font-size: 0.9em;
    text-align: center;
    word-break: break-word;
    hyphens: auto;

} 

#learnmorebtn-pos{
    width: 100%;
    height: 10vh;
    position: absolute;
    margin-top: 2.2em;
}

@media only screen and (min-width: 420px){
    #learnmoreimgcard{
        font-size: 17px;
    }
    #textbox{
        height: 13vh;
    }
    #learnmorebtn-pos{
        margin-top: 1.5em;
}
}

@media only screen and (min-width: 768px){
    #paragraph{
    margin-inline-start: 2em;
    margin-inline-end: 2em;
    } 
    #learnmorebtn-pos{
    margin-top: 1.2em;
    }
}

@media only screen and (min-width: 1024px){
    #learnmoreimgcard{
        font-size: 18px;
    }
    #paragraph{
    margin-inline-start: 3em;
    margin-inline-end: 3em;
    }     
}
/* @media only screen 
and (min-device-width : 375px) 
and (max-device-height : 812px)
and (orientation: landscape)
{
  .firstpage{
    height: 120vh;
  }
  #titlebox{
    margin-top: 3em;
  }
  .slideshow{
    bottom: 30vh;
  }

} */
</style>
