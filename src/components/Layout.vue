<template>
<div id='layout'>
    <div id='home' class='link'></div>
    <Firstpage :zIndex='zIndexFirst'></Firstpage>
    <div id='about' class='link'></div>
    <Imgword :imgUrl='data.imgWord1.url' 
             :title='data.imgWord1.title' 
             :paragraph='data.imgWord1.words' 
             :txtBgColor='txtBgColorLight' 
             :txtColor ='deepBlack'> 
             
    </Imgword>   
    <Plainwordcard :bgColor='greyWhite' 
                   :title='empty' 
                   :paragraph='data.plainWordCard1Para' 
                   :flexFirst='data.plainWordCard1First' 
                   :flexSecond='data.plainWordCard1Second' 
                   :flexFirstTxt='data.plainWordCardtxt1First' 
                   :flexSecondTxt='data.plainWordCardtxt1Second'>
    </Plainwordcard>    
    <Imgword :imgUrl='data.imgWord2.url' 
             :title='data.imgWord2.title' 
             :paragraph='data.imgWord2.words' 
             :txtBgColor='txtBgColorDark' 
             :txtColor ='white' 
             :zIndex='zIndexSecond' 
             :fixed='fixed' 
             :top='top'>
             
    </Imgword>    
    <Plainwordcard :bgColor='white' 
                   :title='empty' 
                   :paragraph='data.plainWordCard2Para' 
                   :flexFirst='data.plainWordCard2First' 
                   :flexSecond='data.plainWordCard2Second' 
                   :flexFirstTxt='data.plainWordCardtxt2First' 
                   :flexSecondTxt='data.plainWordCardtxt2Second' 
                   :flexWidth='flex100' 
                   :flexWidth0='flex0'>
    </Plainwordcard>    
    <Plainword :word='data.plainWord1Title' :bgColor='actionGreen'></Plainword>   
    <Imgwordcard :bgImg='data.imgWordCard1BgImg' 
                 :bgTransparent='txtBgColorLight' 
                 :title='data.imgWordCard1Title' 
                 :paragraph='empty' 
                 :flexFirst='data.imgWordCard1First' 
                 :flexSecond='data.imgWordCard1Second' 
                 :flexFirstTxt='data.imgWordCardtxt1First' 
                 :flexSecondTxt='data.imgWordCardtxt1Second' 
                 :noImgShadow='noImgShadow' 
                 :zIndex='zIndexLast' 
                 :fixed='fixed' 
                 :top='top'> 
                 
    </Imgwordcard>
    <Plainword :word='data.plainWord2Title' :bgColor='actionGreen'></Plainword>
    <div id='donate' class='link'></div>
    <Whitepage :learnMore='data.learnMore'></Whitepage>
    <Footer></Footer>
</div>
    
</template>

<script>
// components
import Firstpage from './Firstpage.vue'
import Imgword from './_Imgword.vue';
import Imgwordcard from './_Imgwordcard.vue';
import Plainword from './_Plainword.vue';
import Plainwordcard from './_Plainwordcard.vue';
import Whitepage from './Whitepage.vue';
import Footer from './Footer.vue';
// data
import myData from '../assets/myData.js';




export default {
    name:'layout',
    components:{Firstpage, Imgword, Imgwordcard, Plainword, Plainwordcard, Whitepage, Footer},
    data(){return{
        data: myData,
        //z-index of parallax elements
        zIndexFirst: -1, 
        zIndexSecond: -2,
        zIndexLast: -3, 

        //position
        fixed:'fixed',  
        top:'0vh',    
        flex50: '50%',
        flex100: '100%',
        flex0: '0%',

        // colour
        white: 'white',
        greyWhite:'rgba(249, 249, 249, 255)',        
        deepBlack:'rgba(1,1,1,0.8)',
        actionGreen: '#82b74b',
        white:'white',
        txtBgColorDark:' rgba(1,1,1,0.3)',  
        txtBgColorLight:' rgba(255,255,255,0.3)', 
        
        // others
        noImgShadow:'none',
        empty:'',
    }},
    mounted(){
        window.addEventListener('scroll', this.scrollPros);
    },

    methods:{
        scrollPros(){
            const el = document.documentElement;
            const ratio = window.innerWidth/window.innerHeight;
            const y = window.pageYOffset;
            const height = el.scrollHeight;
            const progress = y/height;

            const zIndexArr = [[-1,-2,-3], [-2,-1,-3], [-2,-3,-1]];
            const ratioScroll = [
                //[ratioStart, ratioEnd, break1, break2]
                [0, 0.6, 0.25, 0.5],           //phone
                [0.6, 1.1, 0.15, 0.51],       //tablet portrait
                [1.1, 1.5, 0.2, 0.52],         //ipad landscape
                [1.5, 3, 0.24, 0.45]   // desktop, tablet landscape  
                // iphone8 landscape : 1.77
                // [1,75, Infinity, ]                            // phone landscape > 1.75
            ];

            ratioScroll.forEach((item)=> {
                if(ratio > item[0] && ratio < item[1] ) {
                    // screenW/screenH ratio in between item[0] & item[1]
                    //y < height*item[2]
                    if(progress < item[2]){
                        this.zIndexFirst = zIndexArr[0][0];
                        this.zIndexSecond = zIndexArr[0][1];
                        this.zIndexLast = zIndexArr[0][2];
                    } //y >= height*item[2] && y <= height*item[3]
                    else if(progress >= item[2] && progress <= item[3]){
                        this.zIndexFirst = zIndexArr[1][0];
                        this.zIndexSecond = zIndexArr[1][1];
                        this.zIndexLast = zIndexArr[1][2];
                    } else {
                        this.zIndexFirst = zIndexArr[2][0];
                        this.zIndexSecond = zIndexArr[2][1];
                        this.zIndexLast = zIndexArr[2][2];

                    }
                }
            })


        },
    }    
}
</script>

<style scoped>
.link{
    background: white;
    width: 100vw;
    height: 0.1vh;
}
</style>
