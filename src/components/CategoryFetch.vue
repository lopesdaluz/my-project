<script>
  import QuizFetch from './QuizFetch.vue'

  export default {
    components: {
      QuizFetch
    },

    created() {
      fetch('https://opentdb.com/api_category.php')
        .then((response) => response.json())
        .then((result) => {
          this.categories = result.trivia_categories
          console.log(this.categories)
        })
    },
    data() {
      return {
        categories: null,
        text: '',
        id: null,
        currentQuestionIndex: 0,
        correctAnswerColor: 'green',
        wrongAnswerColor: 'red'
      }
    },

    methods: {
      onClick() {
        this.categories.forEach((element) => {
          if (element.name === this.text) {
            this.id = element.id
          }
        })
      },
      checkAnswer(answer) {
        const currentQuestion = this.questions[this.currentQuestionIndex]
        return answer === currentQuestion.correctAnswer
          ? this.correctAnswerColor
          : this.wrongAnswerColor
      },
      nextQuestion() {
        this.currentQuestionIndex++
      }
    }
  }
</script>

<template>
  <div class="categoryContainer">
    <div class="chooseCategory">
      <span style="display: flex; justify-content: center">
        <h2>Choose a category!</h2>
      </span>
      <div class="categoryBox">
        <select v-model="text" style="font-size: 25px">
          <option :key="question.id" v-for="question in categories">
            {{ question.name }}
          </option>
        </select>
        <input v-model="text" style="font-size: 30px; font-size: 25px" />
        <input @click="onClick" type="button" value="search" />
      </div>
      <QuizFetch :chosen-category="id" />
    </div>
  </div>
</template>

<style>
  .categoryContainer {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .chooseCategory {
    height: 10vh;
    display: flex;
    flex-direction: column;
    height: 500px;
  }

  .categoryBox {
    display: flex;
    justify-content: center;
    background-color: yellow;
  }
</style>

<!-- //componenter skapas  som vue filer. Här  kan man skapa template. Vilket  är html. man behöver inte ha script och style. Men alla componenter behöver ha template. För att  kunna använda komponenten är det 3 grejer man behöver göra. 1. skapa vue filen. 2. importera med import. 3. regisrera med  komponents.

Då importerar vi i app.vue import [komponenten] from './[komponenten]' .= i den här mappen. Registreringen sker under export defaultcomponents. [komponenten]. När nycklarna och värderna heter samma räcker det  att bara skriva nyckeln.

-->

<!-- Frågor:
1. om jag importerar en bild från komponenten Home hur får jag med stylingen så den hamnar och ser ut som den gör i Category.
-->

<!-- //- 1 används för att se över currentQuestions inte är den sista frågan i question listan. Quenstion.length skickar tillbaka antal element i question arrayen. som motsvarar antal frågor i question. Så om questions arrayen har 5 element då är questions.length 5 och question.length -1 blir 4. så om currentQuestionIndex är mindre än 4 då kan next question knappen användas. -->

<!-- //:key är attribut och den ger den en unik identifiering för varje element i  loopen. i koden har varje question ens egna attribut värde med question.id och varje svar egen med answer.id vilket gör det möjligt för vue att hålla koll på varje fråga och svar individuellt. -->

<!-- //"checkAnswer" method: Denna metod tar emot en parameter (answer), Den hämtar den aktuella frågan genom att använda this.questions[this.currentQuestionIndex] och tilldelar den till currentQuestion. "?" är en förkortning till "if". Den kollar om answer gick igenom som parameter som är lika med currentQuestion.correctAnswer. om tillståndet är sant så får man tillbaka this.correctAnswerColor om det är falsk så får man tillbaka this.wrongAnswerColor -->
