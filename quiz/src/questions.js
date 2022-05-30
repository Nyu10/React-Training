import React from "react";
import QuestionsContent from "./questionsContent";

export default function Questions() {
  const [questions, setQuestions] = React.useState([]);
  const [submitted, setSubmitted] = React.useState({
    numberofCorrectAnswers: 0,
    bool: false,
  });
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        let results = data.results;
        setQuestions(
          results.map((result) => {
            let questionInfo = [];
            for (let i = 0; i < 3; i++) {
              questionInfo.push({
                question: result.question,
                choice: result.incorrect_answers[i],
                correct: false,
                isSelected: false,
              });
            }
            questionInfo.push({
              question: result.question,
              choice: result.correct_answer,
              correct: true,
              isSelected: false,
            });
            questionInfo = shuffle(questionInfo);
            return questionInfo;
          })
        );
      });
  }, []);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  function handleClick(answerId, questionId) {
      if (submitted.bool) return;
    setQuestions((prevQuestions) => {
      let newQuestions = [...prevQuestions];
      newQuestions[questionId].map(choice => {
          choice.isSelected=false;
    })
      newQuestions[questionId][answerId].isSelected =
        !newQuestions[questionId][answerId].isSelected;
      return newQuestions;
    });
  }
  function handleSubmit() {
    let numberOfCorrectAnswers = 0;
    questions.forEach((question) => {
      question.forEach((answer) => {
        if (answer.correct && answer.isSelected) {
          numberOfCorrectAnswers++;
        }
      });
    });
    setSubmitted({
      numberofCorrectAnswers: numberOfCorrectAnswers,
      bool: true,
    });
  }
  const styles = {
    alignSelf: "center"
}
  return (
    <div className="questions">
      {questions.length ? (
        <QuestionsContent
          questions={questions}
          handleClick={handleClick}
          submitted={submitted}
        />
      ) : (
        <h1>Loading...</h1>
      )}

      {submitted.bool ? (
        <div className = "final-stage">
          <h1>You got {submitted.numberofCorrectAnswers}/5 correct</h1>
          <button onClick={handleSubmit}>Check Answers</button>
        </div>
      ) : (
        <button style={styles}onClick={handleSubmit}>Check Answers</button>
      )}
    </div>
  );
}
