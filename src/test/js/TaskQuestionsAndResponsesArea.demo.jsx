import { ResponseState } from "../../main/js/DropdownResponseArea";
import TaskQuestionsAndResponsesArea from "../../main/js/TaskQuestionsAndResponsesArea";
import SampleImageTaskList from "../resources/SampleImageTasks";

export const TaskQuestionsAndResponsesAreaDemo = () =>{

    const sampleQuestionList = SampleImageTaskList.imageTasks[0].taskQuestions;
    const sampleAnswersList = sampleQuestionList.map(()=>ResponseState.NOTHING_SELECTED.text);
    return (
        <TaskQuestionsAndResponsesArea 
            questionModels={sampleQuestionList} 
            currentAnswers={sampleAnswersList} 
            currentQuestionIndex={0} 
        />
    );

};