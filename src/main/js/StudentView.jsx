import { useEffect, useState } from "react";
import ImageTask from "./ImageTask"
import {getFromServer} from "./Comm"
import SampleImageTaskList from "../../test/resources/SampleImageTasks";
import { ResponseState } from "./DropdownResponseArea";

/**
 * @prop {string} userId 
 * @prop {string} apiUrl 
 */
export const StudentView = (props) => {

    //TODO: need to decide how to handle the situation before server is contacted
    const sampleAnswersList = SampleImageTaskList.imageTasks[0].taskQuestions.map(()=>ResponseState.NOTHING_SELECTED.text);
    const [taskModel, setTaskModel] = useState(SampleImageTaskList.imageTasks[0]);
    const [currentAnswers, setCurrentAnswers] = useState(sampleAnswersList);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    console.log(taskModel);

    useEffect(() => {
        getFromServer(props.apiUrl, "nextImageTask?userId="+props.userId)
            .then((newModelFromServer)=> setTaskModel(newModelFromServer));
    });

    const handleAnswerSelected = (curQuestionIndex, selectedAnswer) => {
        //set answer list
        //report to server
    };
    const prevQuestion = () => {
        if (currentQuestionIndex > 0){
            setCurrentQuestionIndex((currentQuestionIndex)=>currentQuestionIndex-1);
        }
        else {
            throw new Error("can't go to previous when at 0");
        }
    };
    const nextQuestion = () => {
        if (currentQuestionIndex < taskModel.taskQuestions.length-1){
            setCurrentQuestionIndex((currentQuestionIndex)=>currentQuestionIndex+1);
        }
        else {
            throw new Error("can't go to next when at end: " + currentQuestionIndex);
        }
    };
    const controlFunctions = {
        handleAnswerSelected: handleAnswerSelected,
        prevQuestion: prevQuestion,
        nextQuestion: nextQuestion
    };

    return(
        <div>
            <ImageTask 
                controlFunctions={controlFunctions}
                model={taskModel}
                currentAnswers={currentAnswers}
                currentQuestionIndex={currentQuestionIndex}
            />
        </div>
    );
};

export default StudentView;