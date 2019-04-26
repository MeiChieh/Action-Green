<template>
<div class='imgword'>
        <!-- <img :src="`${imgStyle}`" :style="{position: fixed, top: top }" v-show='showBgImg'> -->
        <!-- <img :src="`${imgStyle}`" :class='{imgStyle:showBgImg}' v-show='showBgImg'> -->

        <img :src="`${bgImg}`" :style="{zIndex: zIndex, position: fixed, top: top }">
        <div class='transparent'>
            <div id='textbox' :style='{backgroundColor: txtBgColor, color: txtColor}'>
                <div v-if='title' id='title'>{{title}}</div>
                <div v-else></div>
                <div id='paragraph'> {{paragraph}} </div> 
            </div>                       
        </div>      
</div>
    
</template>

<script>
import Readmorebtn from './Readmorebtn.vue';

export default {
    name: 'imgword',
    components:{Readmorebtn},
    props:{
        imgUrl:{
            type: String ,
            required: true ,
        },
        showBgImg:{
            type: Boolean,
            required: false
        },
        title:{
            type: String ,
            required: false ,
        },
        paragraph:{
            type: String ,
            required: false ,
        },
        txtBgColor:{
            type: String,
            required: false,
        },
        txtColor:{
            type: String ,
            required: true ,
        },
        zIndex:{
            type: Number,
            required: false,
        },
        fixed:{
            type: String,
            required: false,
        },
        top:{
            type: String,
            required: false,
        },        
    },
    computed:{
        bgImg(){
          return require(`../media/${this.imgUrl}`)  
        },        
    },  
}
</script>

<style scoped>
.imgword{
    height: 90vh;
    width: 100vw;
    font-size: 15px;   
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    overflow: hidden;
}

img{
  object-fit: cover;
  position:absolute;
  width: 100%;
  height: 100%;
}

.parallax{
  object-fit: cover;
  position: fixed;
  top: 0vh;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* .imgStyle{
  object-fit: cover;
  position: fixed;
  top: 0vh;
  width: 100%;
  height: 100%;
  z-index: -1;
} */

.transparent{
    position:absolute;
    height: 90vh;
    width: 100vw;
    display:flex;
    justify-content: center;
    align-items:center;
}
#textbox{
    padding: 2em 1em;
    text-align: center;
    
    
}
#title{
    font-size: 2em;
    text-decoration: underline overline;
    text-align: inherit;
    position: relative;
    margin-bottom: 1em;
}
#paragraph{
    font-size: 1.2em;
    margin-inline-start: 1.2em;
    margin-inline-end: 1.2em;
    text-align: justify;
    line-height: 1.5em;
    margin-bottom: 1em;
    font-weight: 500;
    word-break: break-word;
    hyphens: auto;

}

#readmorebtn-pos{
    position:absolute;
    left: 3vw;
    bottom: 5vh;
}

@media only screen and (min-width: 420px){
    .imgword{
        font-size: 16px;
        height: 100vh;
    }
    .img{
        height: 100vh;
    }
    .transparent{
        height: 100vh;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(1,1,1,0.8));

    }
    #textbox{
        padding: 2em 2em;
    
    }

}

@media only screen and (min-width: 768px){
    .imgword{
        font-size: 20px;
    }
    #textbox{
        padding: 3em 3em;    
    }

}

@media only screen and (min-width: 1023px){
    .imgword{
        height: 100vh;
    }
    #textbox{
        padding: 3em 3em;    
    }

}

</style>
