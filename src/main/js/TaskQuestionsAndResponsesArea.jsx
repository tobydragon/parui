import QuestionAndResponseArea from "./QuestionAndResponseArea"

/**
 * @prop {function} prevQuestion: 
 * @prop {function} nextQuestion: 
 * @prop {function} handleAnswerChange: function called when a response is selected, takes new string response as a param 
 * @prop {list of QuestionModel objects} questionModels
 * @prop {list of strings} currentAnswers
 * @prop {int} currentQuestionIndex: the index of the question model to display   
 */
export const TaskQuestionsAndResponsesArea = (props) => {
    return (
        <div>
            <QuestionAndResponseArea currentAnswer={props.currentAnswers[props.currentQuestionIndex]} questionModel={props.questionModels[props.currentQuestionIndex]} />
        </div>
    );
}

export default TaskQuestionsAndResponsesArea;