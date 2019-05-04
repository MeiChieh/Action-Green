<template>
<div class='firstpage'>
    <Navbar></Navbar>
    <!-- <Scrollindicator></Scrollindicator> -->
    <img src="../assets/images/fs-plasticgrey-q5s80.jpg" 
         alt="" 
         :style="{zIndex: zIndex}">     
    <div id='titlebox'>
      <div class='maintitle'>Action <span id='green'>Green</span></div>
      <div class='subtitle'><span id='green'>Let's </span> Solve The Plastic Problem</div>   
    </div>
    <div class='slideshow'>
      <Slideshow></Slideshow>
    </div>
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

img{
  object-fit: cover;
  position: fixed;
  top: 0vh;
  width: 100%;
  height: 100%;
}

body{
  margin:0;  
}
.slideshow{
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
  color:rgba(1,1,1,0.8);
  font-weight: bold;

}
.subtitle{
  font-size: 0.83em;
  font-family: Impact, sans-serif;
  text-align: center;
  padding-bottom: 0.5em;
  font-weight: bold;
    color:rgba(1,1,1,0.8);
}
#green{
  color: #009900;
  
}

@media only screen and (min-width:420px){
  .firstpage{
    font-size: 16px;
  }
  #titlebox{
    margin-top: 17vh;
    padding-top: 1em;
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
  .slideshow{
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

@media only screen 
and (min-device-width : 375px) 
and (max-device-height : 812px)
and (orientation: portrait)
{
  .firstpage{
    height: 80vh;
  }
  #titlebox{
    margin-top: 5em;
  }
  .slideshow{
    bottom: 30vh;
  }

}

@media only screen 
and (min-device-width : 375px) 
and (max-device-height : 812px)
and (orientation: landscape)
{
  .firstpage{
    height: 120vh;
  }
  #titlebox{
    margin-top: 3em;
  }
  .slideshow{
    bottom: 30vh;
  }

}

</style>
