import { ResponseState } from "../../main/js/DropdownResponseArea";
import sampleImageTaskList from "../resources/SampleImageTasks";
import QuestionWithImage from "../../main/js/QuestionWithImage"

export const QuestionWithImageDemo = () => {
    return (
        <QuestionWithImage 
            questionModel={sampleImageTaskList.imageTasks[1].taskQuestions[0]}
            currentAnswer={ResponseState.NOTHING_SELECTED.text}
        />

    );
} 

export default QuestionWithImageDemo; 