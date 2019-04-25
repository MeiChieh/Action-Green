<template>
    <div id='imgwordcard'>
        <img :src="`${showImg}`" :style="{zIndex: zIndex, position: fixed, top: top}">

        <!-- <img :src="`${showImg}`" :style="{position: fixed, top: top}" v-show='showBgImg'> -->
        <!-- <img :src="`${showImg}`" :class='{imgStyle : showBgImg}'> -->

        <div id='transparent' :style="{background: bgTransparent} ">
            <div id='txtbox'>
                <div id='title'>
                {{title}}
                </div>
                <div id='paragraph'>
                </div>
            </div>

            <div id='container'>
              <div class='flex-col'>
                  <div class='flex-col-up'>
                    <Readmoreimg v-for="(value, key) in flexFirst" :key='key' :readmoreImg='value' :readmoreImgTxt='flexFirstTxt[key]' :noImgShadow="noImgShadow"></Readmoreimg>
                  </div>
                  <div class='flex-col-down'>
                    <Readmoreimg v-for="(value, key) in flexSecond" :key='key' :readmoreImg='value' :readmoreImgTxt='flexSecondTxt[key]' :noImgShadow="noImgShadow"></Readmoreimg>
                  </div>
              </div>  

           </div>

        </div>

    </div>
</template>

<script scoped>
import Readmoreimg from './Readmoreimg.vue';
export default {
    name:'imgwordcard',   
    props:{            
        bgImg:{
            type: String,
            required: true,
        },
        showBgImg:{
            type: Boolean,
            required: false
        },
        bgTransparent:{
            type: String,
            required: true,
        },        
        title:{
            type: String,
            required: false,
        },
        paragraph:{
            type: String,
            required: false,
        },
        flexFirst:{
            type: Object,
            required: true,
        },
        flexSecond:{
            type: Object,
            required: true,
        },
        flexFirstTxt:{
            type: Object,
            required: true,
        },
        flexSecondTxt:{
            type: Object,
            required: true,
        },
        noImgShadow:{
            type: String,
            required: false,
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
    components:{Readmoreimg},
    computed:{
        showImg(){
            return require(`../media/${this.bgImg}`)
        }
    },
}
</script>

<style scoped>
#imgwordcard{
    font-family: Arial, Helvetica, sans-serif;
    font-size:20px;
    height: auto;
    overflow:hidden;
}

img{
  object-fit: cover;
  position:absolute;
  width: 100%;
  height: 100%;
}


#transparent{
    height: auto;
    
}

#txtbox{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 1em;
    margin-inline-start: 10vw;
    margin-inline-end: 10vw;
}

#title{
    text-align: center;
    color:white;
    text-shadow: 1px 2px 3px rgba(1,1,1,1); 
    font-size: 1.2em;
    font-weight: bold;
}

#paragraph{
    text-align: center;
    padding-top: 0.5em;
    background: rgba(255,255,255,0.3);

}


#container{
    width: 80vw;
    height: auto;
    margin-left: 10vw;
    margin-top: 5vh;
}


.flex-col{
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.flex-col-up{
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 1em;
}


.flex-col-down{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    margin-bottom: 1em;

}

@media only screen and (min-width: 420px){
    #imgwordcard{
        font-size:30px;
    }

    .flex-col-up{
        flex-direction: row; 
        width: 165vw;
        justify-content: space-around;
    }
    .flex-col-down{
        flex-direction: row; 
        justify-content: space-around;
    }

}


@media only screen and (min-width: 1000px){
    #imgwordcard{
        font-size:35px;
    }
} 




</style>
