<template>
<div id='layout'>
    <div id='home' class='link'></div>
    <Firstpage :zIndex='zIndexFirst' :showBgImg='showFirst'></Firstpage>
    <div id='about' class='link'></div>
    <Imgword :imgUrl='data.imgWord1.url' :title='data.imgWord1.title' :paragraph='data.imgWord1.words' :txtBgColor='txtBgColorLight' :txtColor ='deepBlack' :showBgImg='showAlways'></Imgword>    
    <Plainwordcard :bgColor='greyWhite' :title='empty' :paragraph='data.plainWordCard1Para' :flexFirst='data.plainWordCard1First' :flexSecond='data.plainWordCard1Second' :flexFirstTxt='data.plainWordCardtxt1First' :flexSecondTxt='data.plainWordCardtxt1Second'></Plainwordcard>    
    <Imgword :imgUrl='data.imgWord2.url' :title='data.imgWord2.title' :paragraph='data.imgWord2.words' :txtBgColor='txtBgColorDark' :txtColor ='white' :zIndex='zIndexSecond' :fixed='fixed' :top='top' :showBgImg='showSecond'></Imgword>    
    <Plainwordcard :bgColor='white' :title='empty' :paragraph='data.plainWordCard2Para' :flexFirst='data.plainWordCard2First' :flexSecond='data.plainWordCard2Second' :flexFirstTxt='data.plainWordCardtxt2First' :flexSecondTxt='data.plainWordCardtxt2Second' :flexWidth='flex100' :flexWidth0='flex0'></Plainwordcard>    
    <Plainword :word='data.plainWord1Title' :bgColor='actionGreen'></Plainword>   
    <Imgwordcard :bgImg='data.imgWordCard1BgImg' :bgTransparent='txtBgColorLight' :title='data.imgWordCard1Title' :paragraph='empty' :flexFirst='data.imgWordCard1First' :flexSecond='data.imgWordCard1Second' :flexFirstTxt='data.imgWordCardtxt1First' :flexSecondTxt='data.imgWordCardtxt1Second' :noImgShadow='noImgShadow' :zIndex='zIndexLast' :fixed='fixed' :top='top' :showBgImg='showThird'></Imgwordcard>
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
import myData from '../assets/myData.js'




export default {
    name:'layout',
    components:{Firstpage, Imgword, Imgwordcard, Plainword, Plainwordcard, Whitepage, Footer},
    data(){return{
        data: myData,
        showFirst: true,
        showAlways: true,
        showSecond: false,
        showThird: false,
        zIndexFirst: -1, 
        zIndexSecond: -2,
        zIndexLast: -3, 

        fixed:'fixed',  
        top:'0vh',    
        flex50: '50%',
        flex100: '100%',
        flex0: '0%',
        imgTitlePadding:'',
        wallWhite: 'rgb(248, 248, 255)',
        algaeWhite: '#E6EBEE',
        white: 'white',
        greyWhite:'rgba(249, 249, 249, 255)',
        
        paraColorBlack:'black',  
        linearWhite:'#fff',
        linearGreen:'linear-gradient(to bottom, rgba(0,0,0,0), rgba(1,1,1,0.8))',
        linearDark:'linear-gradient(to bottom, rgba(0,0,0,0), rgba(1,1,1,0.8))',
        softBlack:'#595959',
        deepBlack:'rgba(1,1,1,0.8)',
        lightBeige:'#86af49',
        actionGreen: '#82b74b',
        white:'white',
        txtBgColorDark:' rgba(1,1,1,0.3)',  
        txtBgColorLight:' rgba(255,255,255,0.3)', 
        BgColorLight:' rgba(255,255,255,0.1)', 
        noImgShadow:'none',
        lightBlue:'#d5e1df',        
        lightYellow:'#e3eaa7',
        lightGreen:'#b5e7a0',
        noBg:'rgba(0,0,0,0)',
        textBoxShow: false,  
        bigTxt: '25px',
        empty:'',
    }},
    mounted(){
        window.addEventListener('scroll', this.scrollPros);
    },

    methods:{
        scrollPros(){
            const el = document.documentElement;
            const ratio = window.innerWidth/window.innerWidth;
            const y = window.pageYOffset;
            const height = el.scrollHeight;

            const zIndexArr = [[-1,-2,-3], [-2,-1,-3], [-2,-3,-1]];
            const ratioScroll = [
                [0, 0.6, 0.25, 0.5],
                [0.6, 1.1, 0.15, 0.517],
                [1.1, 1.5, 0.2, 0.54],
                [1.5, Infinity, 0.24, 0.495]     
            ];

            ratioScroll.forEach((item)=> {
                if(ratio > item[0] && ratio < item[1] ) {
                    if(y < height*item[2]){
                        this.zIndexFirst = zIndexArr[0][0];
                        this.zIndexSecond = zIndexArr[0][1];
                        this.zIndexLast = zIndexArr[0][2];
                    } 
                    else if(y >= height*item[2] && y <= height*item[3]){
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
