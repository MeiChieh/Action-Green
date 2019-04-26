<template>
    <nav id='navLink'>
        <a href="#home" class='router home'>Home</a>
        <a href="#about" class='router about'>About</a>
        <a href="#donate" class='router donate'>Donate</a>
        <a href="https://www.linkedin.com/in/mei-chieh-chien-68304798/" target='_blank' class='router contact'>Contact</a>

    </nav>
</template>

<script>
export default {
    name:'navbar',
}
</script>

<style scoped>
nav{
  position:fixed;
  top:0px;
  width: 100vw;
  text-decoration: none;
  font-size: 13px;
  display:flex;
  justify-content: flex-end;
  /* background-color:rgba(103, 207, 42, 0.3); */
    background-color:rgba(50, 50, 50);
  z-index: 2;  
}

.router {
  font-family: Helvetica;
  text-decoration: none;
  font-size: 1em;
  /* color: rgba(1,1,1,0.7); */
    color: white;
  margin: 0.8em 0.5em;
  padding: 0.6em 0.5em;
  /* border: solid 2px rgba(1,1,1,0.7); */
    border: solid 2px white;

  border-radius: 0.25em;
  transition: transform 0.2s;
  font-weight:600;
}

.contact{
    background-color: #ffce00;

  color:rgba(50, 50, 50);

}

.router:hover{
  transform:scale(1.1);
}



@media only screen and (min-width: 420px){
  nav{
    font-size: 17px;
  }
  .router{
    /* border: solid 3px rgba(1,1,1,0.7); */
    border: solid 3px white;
    margin: 0.6em 0.3em;
    padding: 0.3em 0.3em;

  }
}

@media only screen and (min-width: 768px){
  nav{
    font-size: 20px;
  }
}

</style>
