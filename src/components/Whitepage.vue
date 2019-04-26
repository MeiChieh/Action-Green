<template>
    <div class='thirdpage'>
        <div class="flex1">
            <div id='first'> <Learnmoreimgcard :learnMore='learnMore.learnMore1'></Learnmoreimgcard> </div>               
            <div class=' flex2 pad'>
                <div id='second' class='flex50'> <Learnmoreimgcard :learnMore='learnMore.learnMore2'></Learnmoreimgcard> </div>
                <div id='third' class='flex50'> <Learnmoreimgcard :learnMore='learnMore.learnMore3'></Learnmoreimgcard> </div>
            </div>
        </div>                
    </div>
</template>

<script>
import Learnmoreimgcard from './Learnmoreimgcard';
export default {
    name:'whitepage',
    props:{
        learnMore:{
            type: Object,
            required: true,
        },
        
    },

    components:{Learnmoreimgcard},

}
</script>

<style scoped>
.thirdpage{  
    margin: 0;
    box-sizing: border-box;
    font-size: 20px;
    background-color: rgba(249, 249, 249, 255);
    padding: 0.5em 0em;
}
.flex1{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80vw;
    margin: 3em 10vw;
    /* border: solid blue; */
}

.flex2{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}



@media only screen and (min-width: 768px){
    .flex2{
        flex-direction: row;
    }
    .flex50{
        width: 37.5vw;
    }
} 

@media only screen and (min-width: 1200px){
    .flex1{
        width: 75vw;
        margin: 3em 12.5vw;
    }
    .flex50{
        width: 35vw;
    }
} 






</style>
