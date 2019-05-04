<template>
    <div id='slideshow'>
        <div id='flex-container' v-hammer:tap='onTap'>
            <div class='child child1'></div> 
            <div class='child child2'></div> 
            <div class='child child3'></div> 
            <div class='child child4'></div> 
            <div class='child child5'></div> 
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
      tapped: false,
  }},
  methods:{
      onTap(){
          this.tapped = true;
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

.child{
    flex:1;
    transition:flex 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    background-size: cover;
    background-position: center;

}
.child:hover{
    flex:9;
}
.child1{
    opacity: 1;
    background-image: url('../assets/images/fs-plasticveg-q5s30.jpg');
}
.child2{
    background-image: url('../assets/images/fs-plasticbottles-q10s30.jpg');
}
.child3{
    background-image:url('../assets/images/fs-beach-cup-q3s20.jpg');
}
.child4{
    background-image:url('../assets/images/fs-beach-bottles-q10s30.jpg');
}
.child5{
    background-image:url('../assets/images/plastic-whale-q5s50.jpg');
}

@media only screen and(min-width:768px){
    #flex-container{
        width: 30vw;
        height: 30vh;
    }
}
</style>
