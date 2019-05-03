<template>
    <div id='plainwordcard' :style="{ backgroundColor: bgColor}" >
            <div id='txtbox'>
                <div id='title'>
                {{title}}   
                </div>
                <div id='paragraph'>
                {{paragraph}}
                </div>
            </div>
            <div id='container'>
              <div class='flex-col'>
                  <div class='flex-col-up' :style="{width: flexWidth}">
                    <Readmoreimg v-for="(value, key) in flexFirst" 
                                 :key='key' 
                                 :readmoreImg='value' 
                                 :readmoreImgTxt='flexFirstTxt[key]' 
                                 :noImgShadow="noImgShadow">
                    </Readmoreimg>
                  </div>
                  <div class='flex-col-down' :style="{width: flexWidth0}">
                    <Readmoreimg v-for="(value, key) in flexSecond" 
                                 :key='key' :readmoreImg='value' 
                                 :readmoreImgTxt='flexSecondTxt[key]' 
                                 :noImgShadow="noImgShadow">
                    </Readmoreimg>
                  </div>
              </div>           
           </div>

    </div>
</template>

<script scoped>
import Readmoreimg from './Readmoreimg.vue';
export default {
    name:'plainwordcard',
    props:{
        bgColor:{
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
        flexWidth:{
            type: String,
            required: false,
        },
        flexWidth0:{
            type: String,
            required: false,
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
    },
    components:{Readmoreimg},
}
</script>

<style scoped>
#plainwordcard{
    font-family: Arial, Helvetica, sans-serif;
    font-size:20px;
    width: 100vw;
    box-sizing: border-box;
    padding-top: 2em;
    padding-bottom: 2em;
}

#container{
    width: 80vw;
    height: auto;
    margin-left: 10vw;
    margin-top: 5vh;
    padding-bottom: 5vh;
}


#txtbox{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5em;
    margin-inline-start: 10vw;
    margin-inline-end: 10vw;
}

#title{
    text-align: justify;
    color:white;
    text-shadow: 1px 2px rgba(1,1,1,1); 
    font-size: 2em;
    font-weight: bold;
}

#paragraph{
    text-align: justify;
    padding-top: 0.5em;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1em;
}

.flex-col{
    display: flex;
    width: 80vw;
    height: auto;
    flex-direction: column;
}

.flex-col-up{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    height: auto;  
}

.flex-col-down{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    height: auto;  
}

@media only screen and (min-width: 420px){
    #plainwordcard{
        font-size:20px;
    }

    .flex-col-up{
        flex-direction: row; 
        justify-content: space-around;
    }
    .flex-col-down{
        flex-direction: row; 
        justify-content: space-around;
    }

}

@media only screen and (min-width: 768px){
    #plainwordcard{
        font-size:25px;
        padding-top: 4em;
        padding-bottom: 4em;
    }
}

@media only screen and (min-width: 1000px){
    #plainwordcard{
        font-size:25px;
    }
    .flex-col{
    display: flex;
    flex-direction: row;
    justify-content: center;

    }
    .flex-col-up{
        flex-direction: row; 
        width: 50%;
        justify-content: space-around;
    }
    .flex-col-down{
        flex-direction: row; 
        width: 50%;
        justify-content: space-around;
    }
}

</style>
