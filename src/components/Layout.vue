<template>
<div id='layout'>
    <div id='home'></div>
    <Firstpage :zIndex='zIndexFirst' :showBgImg='showFirst'></Firstpage>
    <Imgword :link='about' :imgUrl='imgWord1.url' :title='imgWord1.title' :paragraph='imgWord1.words' :txtBgColor='txtBgColorLight' :txtColor ='deepBlack' :showBgImg='showAlways'></Imgword>    
    <Plainwordcard :bgColor='greyWhite' :title='empty' :paragraph='plainWordCard1Para' :flexFirst='plainWordCard1First' :flexSecond='plainWordCard1Second' :flexFirstTxt='plainWordCardtxt1First' :flexSecondTxt='plainWordCardtxt1Second'></Plainwordcard>    
    <Imgword :imgUrl='imgWord2.url' :title='imgWord2.title' :paragraph='imgWord2.words' :txtBgColor='txtBgColorDark' :txtColor ='white' :zIndex='zIndexSecond' :fixed='fixed' :top='top' :showBgImg='showSecond'></Imgword>    
    <Plainwordcard :bgColor='white' :title='empty' :paragraph='plainWordCard2Para' :flexFirst='plainWordCard2First' :flexSecond='plainWordCard2Second' :flexFirstTxt='plainWordCardtxt2First' :flexSecondTxt='plainWordCardtxt2Second' :flexWidth='flex100' :flexWidth0='flex0'></Plainwordcard>    
    <Plainword :word='plainWord1Title' :bgColor='actionGreen'></Plainword>   
    <Imgwordcard :bgImg='imgWordCard1BgImg' :bgTransparent='txtBgColorLight' :title='imgWordCard1Title' :paragraph='empty' :flexFirst='imgWordCard1First' :flexSecond='imgWordCard1Second' :flexFirstTxt='imgWordCardtxt1First' :flexSecondTxt='imgWordCardtxt1Second' :noImgShadow='noImgShadow' :zIndex='zIndexLast' :fixed='fixed' :top='top' :showBgImg='showThird'></Imgwordcard>
    <Plainword :word='plainWord2Title' :bgColor='actionGreen'></Plainword>
    <div id='donate'></div>
    <Whitepage :learnMore='learnMore'></Whitepage>
    <Footer></Footer>
</div>
    
</template>

<script>
import Firstpage from './Firstpage.vue'
import Imgword from './_Imgword.vue';
import Imgwordcard from './_Imgwordcard.vue';
import Plainword from './_Plainword.vue';
import Plainwordcard from './_Plainwordcard.vue';
import Whitepage from './Whitepage.vue';
import Footer from './Footer.vue';



export default {
    name:'layout',
    components:{Firstpage, Imgword, Imgwordcard, Plainword, Plainwordcard, Whitepage, Footer},
    data(){return{
// FirstPage and other parallax elements      
        showFirst: true,
        showAlways: true,
        showSecond: false,
        showThird: false,
        zIndexFirst: -1, 
        zIndexSecond: -2,
        zIndexLast: -3, 
  
// Imgword: imgWordObj(url, title, words)        
        imgWord1:{
            url: 'fs-beachclean-q5s40.jpg',
            title:"Welcome to Action Green",
            words:"We are a nonprofit organization focusing on ocean plastic problem. We dedicate ourselves in propagation of plastic recycling, one time plastic use reduction, and ocean preservation. We organize beach cleanup events monthly and support large scale ocean cleanup projects.  We appreciate your concern and support and sincerely invite you to act green to protect our ocean.",
        },
        imgWord2:{
            url: 'fs-dairy-q1s22.jpg',
            title:"",
            words:'Since the emergence of the first man-made plastic material in 1856, plastic has played an indispensable role in human history. This super material manufactured from petrolem is light, flexible, and cheap to produce, thus it is vastly used in all aspect of our lives, from food containers to construction materials. However, despite the numerous advantages of plastic, it has a fatal trait, it is very hard for plastic to biodegrade. While we human enjoying the convenience plastic brings to our life, we seemed to ignore how to deal with plastic waste. Most plastic end up in the ocean, the final dumpster of our plastic wastes...',
        },

// PlainWordCards: paragraph, imgurlObj, imgtxtObj        
        plainWordCard1Para: 'Have you ever noticed how much single use plastic we are consuming everyday? Do you know where these plastic wastes end up?',
        plainWordCard1First:{
            img1:'bag-q3s20.jpg',
            img2:'fs-littlerecycle-q20s20.jpg',            
        },
        plainWordCard1Second:{
            img3:'fs-trashmt-q3s60.jpg', 
            img4:'fs-seatrash-q3s50.jpg'
        },
        plainWordCardtxt1First:{
            img1: 'How much plastic trash do an European create each week on average?',
            img2: 'Only 10% of plastic waste in the world is recycled',
                        
        },
        plainWordCardtxt1Second:{
            img3: 'Unresolved trash problem is as bad as global warming',
            img4: 'More than 6 billion kilograms of trash is dumped in to the ocean each year',
        },
//-------
        plainWordCard2Para: 'Marine creatures and sea birds are great victims to plastic wastes, suffering from the loss of habitat and danger of ingesting plastic waste.',        
        plainWordCard2First:{
            img1:'fs-birdnet-q3s90.jpg',
            img2:'seaturtle-trash-q5s80.jpg',
        },
        plainWordCard2Second:{},
        plainWordCardtxt2First:{
            img1:'Plastic is found in 90% of sea birds on Earth, and the percentage is still growing',
            img2:'Deadly diet: Sea turtles see plastic bags as jelly fish, and plastic nets as sea weed',
        },
        plainWordCardtxt2Second:{},
//Imgwordcards: flexFirst, flexSecond 
        imgWordCard1First:{            
            img1:'fs-recycle-q3s100.jpg'},

        imgWordCard1Second:{
            img1:'fs-vegstand-q5s20.jpg',
            img2:'fs-reusablebottle-q5s20.jpg',},

        imgWordCardtxt1First:{            
            img1:"How to make recycling our daily habit, the dos and don'ts"},

        imgWordCardtxt1Second:{
            img1:'Shop smart: minimize plastic consumption starting from grocery shopping',
            img2:'Great alternative ideas for single-use plastic products',},

        imgWordCard1BgImg:'fs-cart-q3s35.jpg',
        imgWordCard1Title:'Everyday Life',


//Plainword: title, paragraph 
        plainWord1Title:"Let's Take Action",
        plainWord2Title:"Join Us !",

//Learnmoreimgcard : learnMoreImg, learnMoreHeight, learnMoreWidth
        learnMore:{
            learnMore1:{
                img:'fs-beachrecycle.jpg',
                height:'500px',
                width: '500',
                title: 'Join Action Green Beach Cleanup',
                paragraph: 'We organize beach cleanup event every month, join us and  have fun cleaning up the beach together!',
                // color:'#d5e1df',
            },
            learnMore2:{
                img:false,
                height: '300px',
                width: '325',
                title:'One Off Donation',
                paragraph:'Make one off donation to Action Green. We would send you Action Green stickers and one poster of your choice. ',
                // color:'#e3eaa7',
            },
            learnMore3:{
                img:false,
                height: '300px',
                width: '325',
                title:'Monthly Donation',
                paragraph:'Make monthly donation to Action Green. We would send you Action Green stickers, two posters of your choice and a Action Green t-shirt.',
                // // color:'#b5e7a0',
                // color: '#0375B4',
            },
        },
        about:'about',
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
        actionGreen: '#009900',
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
            const screenW = window.innerWidth;
            const screenH = window.innerHeight;

            const ratio = screenW/screenH;
            const y = window.pageYOffset;
            const height = el.scrollHeight;


            

            // if device == phone
            if(ratio < 0.6){
                if(y <= height*0.25){
                this.zIndexFirst = -1;
                this.zIndexSecond = -2;
                this.zIndexLast = -3
                // this.showFirst = true;

                }
                else if(y >= height*0.2 && y <= height*0.5 ){
                    this.zIndexSecond = -1;
                    this.zIndexFirst = -2; 
                    this.zIndexLast = -3;
                    // this.showFirst = false;
                    // this.showSecond = true;
                } 
                else {
                    this.zIndexLast = -1;
                    this.zIndexFirst = -2; 
                    this.zIndexSecond = -3;
                    // this.showSecond = false;
                    // this.showThird = true;
                    
                }  
            }
            // if device == tablet
            else if(ratio < 1.1) {
                if(y <= height*0.15){
                this.zIndexFirst = -1;
                this.zIndexSecond = -2;
                this.zIndexLast = -3
                // this.showFirst = true;
                }
                else if(y >= height*0.15 && y <= height*0.51 ){
                    this.zIndexSecond = -1;
                    this.zIndexFirst = -2; 
                    this.zIndexLast = -3;
                    // this.showFirst = false;
                    // this.showSecond = true;

                } 
                else {
                    this.zIndexLast = -1;
                    this.zIndexFirst = -2; 
                    this.zIndexSecond = -3;  
                    // this.showSecond = false;
                    // this.showThird = true;                 
                }

            }
            // if 1.1 < device < 1.5
            else if(ratio < 1.5) {
                if(y <= height*0.2){
                this.zIndexFirst = -1;
                this.zIndexSecond = -2;
                this.zIndexLast = -3
                // this.showFirst = true;
                }
                else if(y >= height*0.2 && y <= height*0.54 ){
                    this.zIndexSecond = -1;
                    this.zIndexFirst = -2; 
                    this.zIndexLast = -3;
                    // this.showFirst = false;
                    // this.showSecond = true;
                } 
                else {
                    this.zIndexLast = -1;
                    this.zIndexFirst = -2; 
                    this.zIndexSecond = -3;  
                    // this.showSecond = false;
                    // this.showThird = true;                 
                }

            } 
            else {
                // if device == desktop
                if(y <= height*0.24){
                this.zIndexFirst = -1;
                this.zIndexSecond = -2;
                this.zIndexLast = -3
                // this.showFirst = true;
                }
                else if(y >= height*0.24 && y <= height*0.495 ){
                    this.zIndexSecond = -1;
                    this.zIndexFirst = -2; 
                    this.zIndexLast = -3;
                    // this.showFirst = false;
                    // this.showSecond = true;
                } 
                else {
                    this.zIndexLast = -1;
                    this.zIndexFirst = -2; 
                    this.zIndexSecond = -3;
                    // this.showSecond = false;
                    // this.showThird = true;
                    
                }
            }           
        },
    }
    
}
</script>

<style scoped>
#loader{
    width: 100vw;
    height: 100vh;
    background-color: white;
}

#home{
    background: white;
    width: 100vw;
    height: 1vh;
}

#donate{
    background: rgba(249,249,249,255);
    width: 100vw;
    height: 1vh;
}

</style>
