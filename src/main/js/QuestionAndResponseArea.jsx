import DropdownResponseArea from "./DropdownResponseArea"


/**
 * @prop {function} handleAnswerChange: function called when a response is selected, takes new string response as a param 
 * @prop {string} questionModel.questionText
 * @prop {string} questionModel.currentAnswer
 * @prop {string} questionModel.correctAnswer
 * @prop {list of strings} questionModel.possibleAnswers  
 */
export const QuestionAndResponseArea = (props) => {
    return (
        <div>
            <p>{props.questionModel.questionText}</p>
            <DropdownResponseArea handleAnswerChange={props.handleAnswerChange} currentAnswer={props.currentAnswer} questionModel={props.questionModel} />
        </div>
    );
}

export default QuestionAndResponseArea;