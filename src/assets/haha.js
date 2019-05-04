<template>
    <div id='slideshow'>
        <div id='flex-container'>
            <div class='child child1' 
                 v-hammer:tap='onTap1' 
                 :class='{"flex9": tapped1}'>
            </div>
            <div class='child child2' 
                 v-hammer:tap='onTap2' 
                 >
            </div>
            <div class='child child3' 
                 v-hammer:tap='onTap3' 
                 >
            </div>
            <div class='child child4' 
                 v-hammer:tap='onTap4' 
                 >
            </div>
            <div class='child child5' 
                 v-hammer:tap='onTap5' 
                 >
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { VueHammer } from 'vue2-hammer';
Vue.use(VueHammer);

export default {
  name:'slideShow',
  data(){return{
      tapped1: false,
      tapped2: false,
      tapped3: false,
      tapped4: false,
      tapped5: false,
  }},
  methods:{
      onTap1(){
          this.tapped1 = true;
      },
      onTap2(){
          this.tapped2 = true;
      },
      onTap3(){
          this.tapped3 = true;
      },
      onTap4(){
          this.tapped4 = true;
      },
      onTap5(){
          this.tapped5 = true;
      },

  },
}
  
</script>

<style scoped>

#slideshow{
    display:flex;
    justify-content: center;
}

#flex-container{
    display:flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 55vh;
}

.flex9{
    /* flex:9; */
    width: 50%;
    /* border: solid green; */
}

.child{
    flex:1;
    transition:flex 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.child:hover{
    flex:9;
}

.child1{
    opacity: 1;
    background-image: url('../assets/images/fs-plasticveg-q5s30.jpg');
    background-size: cover;
    background-position: center;
}
.child2{
    background-image: url('../assets/images/fs-plasticbottles-q10s30.jpg');
    background-size: cover;
    background-position: center;
}
.child3{
    background-image:url('../assets/images/fs-beach-cup-q3s20.jpg');
    background-size:cover;
    background-position: center;

}
.child4{
    background-image:url('../assets/images/fs-beach-bottles-q10s30.jpg');
    background-size:cover;
    background-position: center;

}
.child5{
    background-image:url('../assets/images/plastic-whale-q5s50.jpg');
    background-size:cover;
    background-position: center;
}

@media only screen and(min-width:768px){
    #flex-container{
        width: 30vw;
        height: 30vh;
    }
}

/* @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (orientation: landscape){
        
    } */


</style>
