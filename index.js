window.onload = function () {
    quiz.init();
}


class Quiz {

    currentQuestionIndex = -1;

    async init() {

        this.progress = document.querySelector("#progress");
        this.countDownInfo = document.querySelector("#count-down");
        this.questionHeading = document.querySelector("#question-heading");

        this.answersList = document.querySelector("#answers-list");
        this.summary = document.querySelector(".summary");

        this.submitButton = document.querySelector("#submit-answer");
        this.submitButton.addEventListener("click", this.submitAnswer);

        this.restartButton = document.querySelector("#restart-quiz");
        this.restartButton.addEventListener("click", this.restartQuiz);


        await this.loadData();
        this.restartQuiz();
    }

    loadData = async () => {
        const serverData = await fetch("questions.json");
        const jsonData = await serverData.json();

        if (!jsonData.questions) {
            console.log("Brak pytań")
            return
        }

        this.quizMaxTime = jsonData.quizMaxTime;
        this.questions = jsonData.questions;
    }

    submitAnswer = () => {

    }

    restartQuiz = () => {
        this.questions.forEach(q => q.userSelectedIndex = -1);

        this.currentQuestionIndex = - 1;
        this.countDown();
        this.setNextQuestionData();
    }

    countDown = () => {

    }

    setNextQuestionData = () => {

    }
}

const quiz = new Quiz();