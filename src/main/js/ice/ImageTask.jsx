import ImageArea from "../ImageArea"
import TaskQuestionsAndResponsesArea from "./TaskQuestionsAndResponsesArea"

/**
 * 
 * @prop {string} model.imageUrl
 * @prop {list} model.taskQuestions 
 * @prop {object with 3 functions} controlFunctions: see TaskQuestionsAndResponsesArea 
 * @prop {list of strings} currentAnswers
 * @prop {int} currentQuestionIndex: the index of the question model to display   
 */  
export const ImageTask = (props) => {
    return (
        <div>
            <ImageArea imageUrl={props.model.imageUrl} alt="Ultrasound Image" />
            <TaskQuestionsAndResponsesArea 
                controlFunctions={props.controlFunctions}
                questionModels={props.model.taskQuestions}
                currentAnswers={props.currentAnswers}
                currentQuestionIndex={props.currentQuestionIndex}
            />
        </div>
    );
};

export default ImageTask;