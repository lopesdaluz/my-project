<script>
export default {
components: {

},

created() {
this.fetchQuiz()
}, 

data() {
return { quizFetch: null, quiz: null, index: 0, correctAnswerColor: "", wrongAnswerColor: "" }
},
watch: {
  chosenCategory(newId, oldId) {
    console.log("test" + newId)
this.fetchQuiz()
  }
},
methods: {
  fetchQuiz() {
    if(this.chosenCategory === undefined){
      // console.log("hfhfi")
      // this.chosenCategory= "Art"
      //om global variabel (i store.state) är tom: Slumpa fram id och använd ist för 25 nedan    

      fetch('https://opentdb.com/api.php?amount=5&category=25')
      .then((response) => response.json())
      .then((result) => {
        this.quizFetch = result.results
        console.log(this.quizFetch)
      })
    }
    else{
      //om global variabel (i store.state) är inte tom: använd den variabeln som id nedan 
      fetch('https://opentdb.com/api.php?amount=5&category=' + this.chosenCategory)
      .then((response) => response.json())
      .then((result) => {
        this.quizFetch = result.results
        console.log(this.quizFetch)
        console.log(this.quizFetch.length)
        
      })
    }
  },
  nextQuestion() {
    this.index++
    this.correctAnswerColor = ""
    this.wrongAnswerColor = ""
    
  },
  rightAnswer(){
    this.correctAnswerColor = "green"
  },
  wrongAnswer(){
    this.wrongAnswerColor ="red"
  }
 
},
props:['chosenCategory'] // props: { ... }
}

</script>



<template>
  {{ chosenCategory }}
  <div v-if="quizFetch !== null && quizFetch.length> 0">
    <div class="categoryContainer">
      <div class="theQuestion">
        <h4>Question: {{ quizFetch[index].question }}</h4>
      </div>
      <div class="theAnswers">
        <div v-for="answer in quizFetch[index].incorrect_answers" :key="answer">
          <button @click="wrongAnswer" :style="{width: '300px', height: '150px', backgroundColor: wrongAnswerColor}">{{ answer }}</button>
        </div>
        <div>
          <button @click="rightAnswer" :style="{width:'300px', height:'150px', backgroundColor: correctAnswerColor}"> { {quizFetch[index].correct_answer} }</button>
        </div>
      </div>
    </div>
    <div class="nextQuestionButton">
      <input @click="nextQuestion" type="button" value="Next Question" style="width: 200px; height: 50px" />
    </div>
  </div>
</template>



<style>
.categoryContainer{
display: flex;
flex-direction:column;
align-items:center;
gap: 20px
}

.theQuestion{
display: flex; 
justify-content: center; 
}

.theAnswers{
display: grid; 
grid-template-columns: 1fr 1fr; gap:20px; 
}

.nextQuestionButton{
display: flex; 
justify-content: center
}

</style>
