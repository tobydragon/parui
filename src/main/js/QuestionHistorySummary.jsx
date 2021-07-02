import React from "react"

export const QuestionHistorySummary = ({ questionsHist }) => {
  //TODO: Assign unique key prop

  //TODO: Take student id as prop
  //BUTTON to talk with server
  // card - automatic update information
  
  let totalPercent =
    100 *
    Math.abs(questionsHist.questionIdsRespondedTo.length / questionsHist.questionIdsSeen.length)
  let correctPercent =
    100 *
    Math.abs(
      questionsHist.questionIdsCorrectFirstTime.length / questionsHist.questionIdsSeen.length
    )
  let incorrectPercent =
    100 *
    Math.abs(questionsHist.questionIdsIncorrect.length / questionsHist.questionIdsSeen.length)
  let correctAfterIncorrectPercent =
    100 *
    Math.abs(
      questionsHist.questionIdsCorrectAfterIncorrect.length / questionsHist.questionIdsSeen.length
    )

  return (
    <div>
      <h1>
        You answered {questionsHist.questionIdsRespondedTo.length} /{" "}
        {questionsHist.questionIdsSeen.length} questions total ({totalPercent} %)
      </h1>
      <h1>
        You answered {questionsHist.questionIdsCorrectFirstTime.length} questions correct
        first time ({correctPercent} %)
        <ul>
          {questionsHist.questionIdsCorrectFirstTime.map((correct) => (
            <li key={correct}>{correct}</li>
          ))}
        </ul>
      </h1>

      <h1>
        You answered {questionsHist.questionIdsIncorrect.length} questions incorrect (
        {incorrectPercent} %)
        <ul>
          {questionsHist.questionIdsIncorrect.map((incorrect) => (
            <li key={incorrect}>{incorrect}</li>
          ))}
        </ul>
      </h1>

      <h1>
        You answered {questionsHist.questionIdsCorrectAfterIncorrect.length} questions
        correct after incorrect ({correctAfterIncorrectPercent} %)
        <ul>
          {questionsHist.questionIdsCorrectAfterIncorrect.map((correctAfterIncorrect) => (
            <li key={correctAfterIncorrect}>{correctAfterIncorrect}</li>
          ))}
        </ul>
      </h1>
    </div>
  )
}

export default QuestionHistorySummary
