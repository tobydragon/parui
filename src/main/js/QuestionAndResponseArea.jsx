import "./QuestionAndResponseArea.css"
import ResponseAreaDropdown from "./ResponseAreaDropdown"


/**
 * @prop {function} handleAnswerChange: function called when a response is selected, takes new string response as a param 
 * @prop {string} questionModel.questionText
 * @prop {string} questionModel.currentAnswer
 * @prop {string} questionModel.correctAnswer
 * @prop {list of strings} questionModel.possibleAnswers  
 */
export const QuestionAndResponseArea = (props) => {
    return (
        <div className="questionArea">
            <p>{props.questionModel.questionText}</p>
            <ResponseAreaDropdown handleAnswerChange={props.handleAnswerChange} currentAnswer={props.currentAnswer} questionModel={props.questionModel} />
        </div>
    );
}

export default QuestionAndResponseArea;