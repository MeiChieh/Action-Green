<template>
<footer>   
        <p class='txt'>Follow us on social media or visit our office</p>  
      <div id='icons'>
        <div id='fb' class='icon'>
            <a href="https://icons8.com/icon/13912/facebook">
              <img src="../media/fb.svg">
            </a>
        </div>
        <div id='ig' class='icon'>
            <a href="https://icons8.com/icon/32323/instagram">
              <img src="../media/ig.svg">
            </a>
        </div>
        <div id='yt' class='icon'>
            <a href="https://icons8.com/icon/13983/youtube">
              <img src="../media/yt.svg">
            </a>
        </div>
        <div id='gm' class='icon'>
            <a href="https://icons8.com/icon/32215/google-maps">
              <img src="../media/gm.svg">

            </a>
        </div>
      </div>        
    
    <div id='banner'>Action Green & Mei-Chieh Chien 2019 &copy;</div>
</footer>    
</template>

<script>
export default {
    name:'bottom',
}
</script>

<style scoped>
footer{
    box-sizing: border-box;
    width: 100vw;
    background-color: rgb(187, 187, 187, 0.5);
    font-family: sans-serif;  
    font-size: 10px;  
    background-color: white;
    padding-top: 1em;
    overflow: hidden;

}
.txt{
    font-size: 1.5em;
    line-height: 1.7em;
    text-align: center;
    padding-inline-start: 1.5em;
    padding-inline-end: 1.5em;
    color: rgba(1,1,1,0.6);
    font-weight: 700;
}
#icons{
    display: flex;
    justify-content: center;
    height:5.5em;
}
.icon{
  transition: all 0.2s;
}
.icon:hover{
  transform: scale(1.2);

}
#address{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightpink;
    height:23vh;
}
#banner{
    width: 100vw;
    height: 3.5vh;
    background-color: #009900;
    text-align: center;
    color:white;
    padding: 1em 0em;
    font-size: 1.4em;
}

</style>
