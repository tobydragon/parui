import { ResponseState } from "../../main/js/DropdownResponseArea";
import ImageTask from "../../main/js/ImageTask";
import sampleImageTaskList from "../resources/SampleImageTasks";


export const ImageTaskDemo = () => {
    const sampleAnswersList = sampleImageTaskList.imageTasks[0].taskQuestions.map(()=>ResponseState.NOTHING_SELECTED.text);
    const logAction = () => {console.log("Something happened, make test more specific for details")};
    const controlFunctions = {prevQuestion: logAction, nextQuestion: logAction, handleAnswerChange: logAction};
    return (
        <ImageTask 
            controlFunctions={controlFunctions}
            model={sampleImageTaskList.imageTasks[0]}
            currentAnswers={sampleAnswersList}
            currentQuestionIndex={0}
        />
    );
};

export default ImageTaskDemo;