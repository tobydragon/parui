import {buildAnswerModel, QuestionAndResponseAreaTree} from "../../main/js/QuestionAndResponseAreaTree"
import sampleImageTaskList from "../resources/SampleImageTasks";


export const QuestionAndResponseAreaTreeDemo = () => {
    console.log(sampleImageTaskList.imageTasks[2]);
    const questionModel=sampleImageTaskList.imageTasks[2].taskQuestions[0];
    const answerModel = buildAnswerModel(questionModel);
    return (
        <QuestionAndResponseAreaTree questionModel={questionModel} answerModel={answerModel} />
    );
}

export default QuestionAndResponseAreaTreeDemo;