<template>
<div class='firstpage'>
    <Navbar></Navbar>
    <img src="../media/fs-plasticgrey-q5s80.jpg" alt="" :style="{zIndex: zIndex}"> 
    <!-- <img src="../media/whitegreen-q5s70.jpg" alt="" :style="{zIndex: zIndex}" :class='{imgStyle:showBgImg}' v-show='showBgImg'> -->
    <!-- <img src="../media/whitegreen-q5s70.jpg" alt="" :class='{imgStyle:showBgImg}' v-show='showBgImg'> -->
    
    <div id='titlebox'>
      <div class='maintitle'>Action <span id='green'>Green</span></div>
      <div class='mainsubtitle'><span id='green'>Let's </span> Solve The Plastic Problem</div>   
    </div>
    <div id='slideshow'><Slideshow></Slideshow></div>
</div>
    
</template>

<script>
import Slideshow from './Slideshow.vue';
import Navbar from './Navbar.vue';

export default {
    name:'firstpage',
    components:{Slideshow, Navbar},
    props:{
      zIndex: {
        type: Number,
        required: true,
      },
      showBgImg: {
        type: Boolean,
        required: false, 
      }
    }  
}
</script>

<style scoped>
.firstpage{
  height: 110vh;  
  width: 100vw; 
  font-size:15px;
  margin:0;
}

/* #link{
  height: 110vh;  
  width: 100vw; 
  font-size:15px;
  margin:0;
} */

img{
  object-fit: cover;
  position: fixed;
  top: 0vh;
  width: 100%;
  height: 100%;
}

/* .imgStyle{
  object-fit: cover;
  position: fixed;
  top: 0vh;
  width: 100%;
  height: 100%;
  z-index: -1;

} */

body{
  margin:0;  
}
#slideshow{
  width: 80vw;
  margin: auto;
}
#titlebox{
  margin-bottom: 2em;
  margin-top: 5em;
}
.maintitle{
  font-size: 2em;
  font-family: Impact, sans-serif;
  text-align: center;
  text-decoration: underline; 
  position: relative;
  /* color:white; */
  color:rgba(1,1,1,0.8);
  font-weight: bold;

}
.mainsubtitle{
  font-size: 0.83em;
  font-family: Impact, sans-serif;
  text-align: center;
  padding-bottom: 0.5em;
  font-weight: bold;
  /* color:white;  */
    color:rgba(1,1,1,0.8);
}
#green{
  /* color:#3ECF2A; */
  color: #009900;
  
}

@media only screen and (min-width:420px){
  .firstpage{
    font-size: 16px;
  }


}

@media only screen and (min-width:768px){
  .firstpage{
    font-size: 25px;
    height: 90vh;
    background-attachment: fixed;
  }
  #titlebox{
    margin-top: 15vh;
  }
  #slideshow{
    margin-top: 5vh;
    width: 70vw;
  }

}

@media only screen and (min-width: 1200px){
  .firstpage{
    font-size: 25px;
    height: 120vh;
  }
  #titlebox{
    margin-top: 3.5em;
  }
  #slideshow{
    width: 65vw;
  }
}

</style>
