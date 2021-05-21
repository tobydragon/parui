import { useEffect, useState } from "react";
import {getFromServer, postToServer} from "./Comm"
import SampleImageTaskList from "../../test/resources/SampleImageTasks";
import { ResponseState } from "./DropdownResponseArea";
import QuestionWithImage from "./QuestionWithImage";

/**
 * @prop {string} userId 
 * @prop {string} apiUrl 
 */
export const StudentViewSingleQuestion = (props) => {
    //TODO: need to decide how to handle the situation before server is contacted
    const [questionModel, setQuestionModel] = useState( SampleImageTaskList.imageTasks[0].taskQuestions[0]);
    const [currentAnswer, setCurrentAnswer] = useState(ResponseState.NOTHING_SELECTED.text);

    const getCurrentQuestion = () => {
        getFromServer(props.apiUrl, "/getCurrentQuestion?userId="+props.userId)
        .then((newModelFromServer)=> {
            setCurrentAnswer(ResponseState.NOTHING_SELECTED.text);
            setQuestionModel(newModelFromServer);
            const questionSeenJson = {studentId: props.userId, questionId: newModelFromServer.id};
            postToServer(props.apiUrl, "/addTimeSeen", questionSeenJson);
        });
    };

    useEffect(getCurrentQuestion, [props.apiUrl, props.userId]);

    const handleAnswerSelected = (newAnswer) => {
        setCurrentAnswer(newAnswer);
        const responseJson = {studentId: props.userId, questionId: questionModel.id, responseText: newAnswer};
        postToServer(props.apiUrl, "/addResponse", responseJson);
    };

    return(
        <div>
            <p>username: {props.userId} </p>
            <QuestionWithImage
                questionModel={questionModel}
                currentAnswer={currentAnswer}
                handleAnswerSelected={handleAnswerSelected}
            />
            <button onClick={getCurrentQuestion}> Next Question </button>
        </div>
    );
};

export default StudentViewSingleQuestion;