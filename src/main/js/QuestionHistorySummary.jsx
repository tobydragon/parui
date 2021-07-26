import React from "react"
import { useState } from "react"

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
    let percent = 100 * Math.abs(props.length / questionsHist.questionIdsSeen.length).toFixed(2)
    return percent
  }

  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [showCorrectAfterIncorrect, setShowCorrectAfterIncorrect] = useState(false);

  const handleClick = () => setShowCorrect(!showCorrect)
  const handleClick1 = () => setShowIncorrect(!showIncorrect)
  const handleClick2 = () => setShowCorrectAfterIncorrect(!showCorrectAfterIncorrect)

  const CorrectFirstTime = () => {
    return(
      <div>
         <p>
        You answered {questionsHist.questionIdsCorrectFirstTime.length} questions correct
        first time ({calculatePercent(questionsHist.questionIdsCorrectFirstTime)} %)
      </p>
      <ul>
          {questionsHist.questionIdsCorrectFirstTime.map((correct) => (
            <li key={correct}>{correct}</li>
          ))}
        </ul>
      </div>
    )
  }

  const Incorrect = () => {
    return(
      <div>
        <p>
        You answered {questionsHist.questionIdsIncorrect.length} questions incorrect (
          {calculatePercent(questionsHist.questionIdsIncorrect)} %)
      </p>
      <ul>
          {questionsHist.questionIdsIncorrect.map((incorrect) => (
            <li key={incorrect}>{incorrect}</li>
          ))}
        </ul>
      </div>
    )
  }

  const CorrectAfterIncorrect = () => {
    return(
      <div>
        <p>
        You answered {questionsHist.questionIdsCorrectAfterIncorrect.length} questions
        correct after incorrect ({calculatePercent(questionsHist.questionIdsCorrectAfterIncorrect)} %)
      </p>
      <ul>
          {questionsHist.questionIdsCorrectAfterIncorrect.map((correctAfterIncorrect) => (
            <li key={correctAfterIncorrect}>{correctAfterIncorrect}</li>
          ))}
        </ul>

      </div>
    )
  }

  if (questionsHist.questionIdsRespondedTo.length === 0){
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
        {questionsHist.questionIdsSeen.length} questions total
      </p>
      <button onClick={handleClick}>View Correct First Time</button>
      {showCorrect ? <CorrectFirstTime /> : null}

      <button onClick={handleClick1}>View Incorrect</button>
      {showIncorrect ? <Incorrect /> : null}

      <button onClick={handleClick2}>View Correct After Incorrect</button>
      {showCorrectAfterIncorrect ? <CorrectAfterIncorrect /> : null}
    </div>
  )


}

export default QuestionHistorySummary