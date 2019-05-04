<template>
    <div id='slideshow'>
        <div id='flex-container'>
            <div class='child child1'></div> 
            
            <div class='child child2'></div> 
            
            <div class='child child3'> </div> 
           
            <div class='child child4'></div> 
            
            <div class='child child5'></div> 
            
        </div>
    </div>
</template>

<script>
export default {
  name:'slideShow',
}
  
</script>

<style scoped>

#slideshow{
    display:flex;
    justify-content: center;
}

#flex-container{
    display:flex;
    justify-content: center;
    width: 100%;
    height: 55vh;
}

/* .flex9{
    width: 50%;
} */

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
    /* background-size: cover;
    background-position: center; */
}
.child2{
    background-image: url('../assets/images/fs-plasticbottles-q10s30.jpg');
    /* background-size: cover;
    background-position: center; */
}
.child3{
    background-image:url('../assets/images/fs-beach-cup-q3s20.jpg');
    /* background-size:cover;
    background-position: center; */

}
.child4{
    background-image:url('../assets/images/fs-beach-bottles-q10s30.jpg');
    /* background-size:cover;
    background-position: center; */

}
.child5{
    background-image:url('../assets/images/plastic-whale-q5s50.jpg');
    /* background-size:cover;
    background-position: center; */
}

@media only screen and(min-width:768px){
    #flex-container{
        width: 30vw;
        height: 30vh;
    }
}
/* @media only screen 
and (min-device-width : 375px) 
and (max-device-height : 812px)
and (orientation: portrait)
{
#flex-container{
    height: 50vh;
}
} */
</style>
