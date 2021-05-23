import ResponseAreaDropdown from "./ResponseAreaDropdown"


/**
 * @prop {function} handleAnswerChange: function called when a response is selected, takes new string response as a param 
 * @prop {string} questionModel.questionText
 * @prop {string} questionModel.currentAnswer
 * @prop {string} questionModel.correctAnswer
 * @prop {list of strings} questionModel.possibleAnswers  
 */
export const QuestionAndResponseArea = (props) => {

    const questionStyle = {
        border: "thin solid black",
        borderRadius: "5px",
        padding: '5px',
        height: '100%',
        margin: '5px'
    }

    return (
        <div style={questionStyle}>
            <p>{props.questionModel.questionText}</p>
            <ResponseAreaDropdown handleAnswerChange={props.handleAnswerChange} currentAnswer={props.currentAnswer} questionModel={props.questionModel} />
        </div>
    );
}

export default QuestionAndResponseArea;