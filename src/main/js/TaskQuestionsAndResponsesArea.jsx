import QuestionAndResponseArea from "./QuestionAndResponseArea"

/**
 * @prop {function} controlFunctions.prevQuestion
 * @prop {function} controlFunctions.nextQuestion
 * @prop {function} controlFunctions.handleAnswerChange: function called when a response is selected, takes new string response as a param 
 * @prop {list of QuestionModel objects} questionModels
 * @prop {list of strings} currentAnswers
 * @prop {int} currentQuestionIndex: the index of the question model to display   
 */
export const TaskQuestionsAndResponsesArea = (props) => {
    const prevDisabled = props.currentQuestionIndex <= 0;
    const nextDisabled = props.currentQuestionIndex >= props.questionModels.length-1;

    return (
        <div>
            <p data-testid="questionCount">{props.currentQuestionIndex+1}/{props.questionModels.length}</p>
            <QuestionAndResponseArea 
                currentAnswer={props.currentAnswers[props.currentQuestionIndex]} 
                questionModel={props.questionModels[props.currentQuestionIndex]}
                handleAnswerChange={props.controlFunctions.handleAnswerChange} 
            />
            <button onClick={props.controlFunctions.prevQuestion} disabled={prevDisabled}>Previous Question</button>
            <button onClick={props.controlFunctions.nextQuestion} disabled={nextDisabled}>Next Question</button>
        </div>
    );
};

export default TaskQuestionsAndResponsesArea;