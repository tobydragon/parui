import { useEffect, useState } from "react";
import ImageTask from "./ImageTask"
import {getFromServer, postToServer} from "../Comm"
import SampleImageTaskList from "../../../test/resources/SampleImageTasks";
import { ResponseState } from "../ResponseAreaDropdown";
import { diffNewArray } from "../Util";

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

    const getNewImageTask = () => {
        getFromServer(props.apiUrl, "/getImageTask?userId="+props.userId)
        .then((newModelFromServer)=> {
            setCurrentQuestionIndex(0);
            const newAnswerList = newModelFromServer.taskQuestions.map(()=>ResponseState.NOTHING_SELECTED.text);
            setCurrentAnswers(newAnswerList);
            setTaskModel(newModelFromServer);
            const questionSeenJson = {userId: props.userId, questionId: newModelFromServer.taskQuestions[0].id};
            postToServer(props.apiUrl, "/updateTimesAttempted", questionSeenJson);
        });
    };

    useEffect(getNewImageTask, [props.apiUrl, props.userId]);


    const handleAnswerSelected = (curQuestionIndex, selectedAnswer) => {
        console.log("StudentView old answers");
        console.log(currentAnswers);
        console.log("StudentView index and selected answer");
        console.log("" + curQuestionIndex + selectedAnswer);
        const newAnswers = diffNewArray(currentAnswers, curQuestionIndex, selectedAnswer);
        console.log("StudentView");
        console.log(newAnswers);
        setCurrentAnswers(newAnswers);
    };

    const prevQuestion = () => {
        if (currentQuestionIndex > 0){
            const newQuestionIndex = currentQuestionIndex-1;
            setCurrentQuestionIndex(newQuestionIndex);
            const questionSeenJson = {userId: props.userId, questionId: taskModel.taskQuestions[newQuestionIndex].id};
            postToServer(props.apiUrl, "/updateTimesAttempted", questionSeenJson);
        }
        else {
            throw new Error("can't go to previous when at 0");
        }
    };
    const nextQuestion = () => {
        if (currentQuestionIndex < taskModel.taskQuestions.length-1){
            const newQuestionIndex = currentQuestionIndex+1;
            setCurrentQuestionIndex(newQuestionIndex);
            const questionSeenJson = {userId: props.userId, questionId: taskModel.taskQuestions[newQuestionIndex].id};
            postToServer(props.apiUrl, "/updateTimesAttempted", questionSeenJson);
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
            <p>username: {props.userId} </p>
            <ImageTask 
                controlFunctions={controlFunctions}
                model={taskModel}
                currentAnswers={currentAnswers}
                currentQuestionIndex={currentQuestionIndex}
            />
            <button onClick={getNewImageTask}> Next Image Task </button>
        </div>
    );
};

export default StudentView;