<script>

import QuizFetch from "./components/QuizFetch.vue";
import CategoryFetch from "./components/CategoryFetch.vue";
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";





  export default {
    components: {
    Home,
    QuizFetch,
    CategoryFetch,
    NavBar
},
}

</script>
<template>
  <div id="app">
    <NavBar />
  </div>
  <CategoryFetch-/>
</template>


<!-- // den är som html format, script och template. i script finns js koden och i template finns html koden. Finns själva elementen ex  p, div osv. 
  
  Varje vue fil är en component istället för anroppa app.component så skapar man vue fil och imprterar och regestreringen som står component. -->