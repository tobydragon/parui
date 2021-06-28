import React from "react"

export const QuestionHistorySummary = (props) => {
  //TODO: Assign unique key prop
  //TODO: Implement buttons that display information

  const {questionsHist} = props

  let totalPercent =
    100 *
    Math.abs(questionsHist.respondedTo.length / questionsHist.idsSeen.length)
  let correctPercent =
    100 *
    Math.abs(
      questionsHist.correctFirstTime.length / questionsHist.idsSeen.length
    )
  let incorrectPercent =
    100 *
    Math.abs(questionsHist.incorrect.length / questionsHist.idsSeen.length)
  let correctAfterIncorrectPercent =
    100 *
    Math.abs(
      questionsHist.correctAfterIncorrect.length / questionsHist.idsSeen.length
    )

  return (
    <div>
      <h1>
        You answered {questionsHist.respondedTo.length} /{" "}
        {questionsHist.idsSeen.length} questions total ({totalPercent} %)
      </h1>
      <h1>
        You answered {questionsHist.correctFirstTime.length} questions correct
        first time ({correctPercent} %)
        <ul>
          {questionsHist.correctFirstTime.map((correct) => (
            <li>{correct}</li>
          ))}
        </ul>
      </h1>

      <h1>
        You answered {questionsHist.incorrect.length} questions incorrect (
        {incorrectPercent} %)
        <ul>
          {questionsHist.incorrect.map((incorrect) => (
            <li>{incorrect}</li>
          ))}
        </ul>
      </h1>

      <h1>
        You answered {questionsHist.correctAfterIncorrect.length} questions
        correct after incorrect ({correctAfterIncorrectPercent} %)
        <ul>
          {questionsHist.correctAfterIncorrect.map((correctAfterIncorrect) => (
            <li>{correctAfterIncorrect}</li>
          ))}
        </ul>
      </h1>
    </div>
  )
}

export default QuestionHistorySummary
