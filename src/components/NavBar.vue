<template>
  <div class="textContainer">
    <h1>Welcome to take a quiz!</h1>
    <div class="meny">
      <p>
        <RouterLink to="/">Home</RouterLink>
      </p>
      <p>
        <RouterLink to="/Category">categories</RouterLink>
      </p>
      <p>
        <RouterLink to="/Quiz">quiz</RouterLink>
      </p>
    </div>
  </div>
  
  
  <main>
    <RouterView />
  </main>
  </template>

<style lang="scss" >

$color: rgb(179, 179, 187); 
$fontstork : 2rem;
$textSize : 30px;



body{
  background-color: $color;
}


.textContainer {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: $textSize;

}


.meny{
  font-size: $fontstork;
  display: flex;
  flex-direction: row;
  text-align:center;
  justify-content:space-between;
  margin: auto;
  text-decoration:none;
}

.meny p{
  margin: 0 1rem;
}



</style>