<template>
    <div id='slideshow'>
        <div id='flex-container'>
            <div class='child' id='child1'></div>
            <div class='child' id='child2' ></div>
            <div class='child' id='child3' ></div>
            <div class='child' id='child4' ></div>
            <div class='child' id='child5' ></div>
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
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 55vh;
}
.display{
    flex:9;
}

@media only screen and(min-width:768px){
    #flex-container{
        width: 30vw;
        height: 30vh;
    }
}

.child{
    flex:1;
    transition:flex 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.child:hover{
    flex:9;
}
#child1{
    opacity: 1;
    background-image:url('../media/fs-plasticveg-q5s30.jpg');
    background-size:cover;
    background-position: center;
}
#child2{
    background-image:url('../media/fs-plasticbottles-q10s30.jpg');
    background-size:cover;
    background-position: center;
}
#child3{
    background-image:url('../media/fs-beach-cup-q3s20.jpg');
    background-size:cover;
    background-position: center;

}
#child4{
    background-image:url('../media/fs-beach-bottles-q10s30.jpg');
    background-size:cover;
    background-position: center;

}
#child5{
    background-image:url('../media/plastic-whale-q5s50.jpg');
    background-size:cover;
    background-position: center;
}

</style>
