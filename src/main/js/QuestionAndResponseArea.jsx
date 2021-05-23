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

    const hasFollowupQuestions = (questionModel) => {
        if (questionModel.hasOwnProperty("followupQuestions")){
            return questionModel.followupQuestions.length > 0;
        }
        else {
            return false;
        }
    }

    return (
        <div style={questionStyle}>
            <p>{props.questionModel.questionText}</p>
            <ResponseAreaDropdown handleAnswerChange={props.handleAnswerChange} currentAnswer={props.currentAnswer} questionModel={props.questionModel} />
            {hasFollowupQuestions(props.questionModel) && props.questionModel.followupQuestions.map((followupModel)=> <QuestionAndResponseArea handleAnswerChange={props.handleAnswerChange} questionModel= {followupModel} />)}
        </div>
    );
}

export default QuestionAndResponseArea;