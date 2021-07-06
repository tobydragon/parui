import React from "react"

/**
 * 
 * @prop {object} questionsHist
 *  
 */
export const QuestionHistorySummary = ({questionsHist}) => {
  //TODO: Assign unique key prop
  //TODO: Take student id as prop
  //BUTTON to talk with server
  // card - automatic update information

  const historySummaryStyle = {
    border: "thin solid black",
    borderRadius: "5px",
    padding: '5px',
    height: '100%',
    margin: '5px',
    width: 'fit-content'
}

  const calculatePercent = (props) => {
    let percent = 100 * Math.abs(props.length / questionsHist.questionIdsSeen.length)
    return percent
  }

if (questionsHist.questionIdsSeen.length == 0){
    return (
      <div>
        <p>No questions answered yet!</p>
      </div>
    )    
}

  return (
    <div style={historySummaryStyle}>
      <p>
        You answered {questionsHist.questionIdsRespondedTo.length} /{" "}
        {questionsHist.questionIdsSeen.length} questions total ({calculatePercent(questionsHist.questionIdsRespondedTo)} %)
      </p>
      <p>
        You answered {questionsHist.questionIdsCorrectFirstTime.length} questions correct
        first time ({calculatePercent(questionsHist.questionIdsCorrectFirstTime)} %)
        <ul>
          {questionsHist.questionIdsCorrectFirstTime.map((correct) => (
            <li key={correct}>{correct}</li>
          ))}
        </ul>
      </p>

      <p>
        You answered {questionsHist.questionIdsIncorrect.length} questions incorrect (
          {calculatePercent(questionsHist.questionIdsIncorrect)} %)
        <ul>
          {questionsHist.questionIdsIncorrect.map((incorrect) => (
            <li key={incorrect}>{incorrect}</li>
          ))}
        </ul>
      </p>

      <p>
        You answered {questionsHist.questionIdsCorrectAfterIncorrect.length} questions
        correct after incorrect ({calculatePercent(questionsHist.questionIdsCorrectAfterIncorrect)} %)
        <ul>
          {questionsHist.questionIdsCorrectAfterIncorrect.map((correctAfterIncorrect) => (
            <li key={correctAfterIncorrect}>{correctAfterIncorrect}</li>
          ))}
        </ul>
      </p>
    </div>
  )


}

export default QuestionHistorySummary
