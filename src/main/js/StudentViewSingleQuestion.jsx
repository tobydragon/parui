import { useEffect, useState } from "react";
import {getFromServer, postToServer} from "./Comm"
import SampleImageTaskList from "../../test/resources/SampleImageTasks";
import { ResponseState } from "./ResponseAreaDropdown";
import QuestionWithImage from "./QuestionWithImage";
import { Button, Col, Container, Row } from "react-bootstrap";
import StudentHeader from "./StudentHeader";

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

    const handleAnswerSelected = (questionId, newAnswer) => {
        setCurrentAnswer(newAnswer);
        const responseJson = {studentId: props.userId, questionId: questionId, responseText: newAnswer};
        postToServer(props.apiUrl, "/addResponse", responseJson);
    };

    const containerStyle = {
        backgroundColor: 'white',
        borderRadius: '5px',
        marginTop: '5px',
        paddingTop: "5px"
    
    }

    return(
        <Container style={containerStyle}>
            <StudentHeader userId={props.userId} />
            <QuestionWithImage
                questionModel={questionModel}
                currentAnswer={currentAnswer}
                handleAnswerSelected={handleAnswerSelected}
            />
            <Container>
                <Row>
                    <Col sm={7}>
                    </Col>
                    <Col  style={{textAlign: 'center'}}>
                        <Button style={{margin: '15px'}} variant="outline-dark" size="lg" onClick={getCurrentQuestion}> Next Question </Button>
                    </Col>
                </Row>
            </Container>
            
        </Container>
    );
};

export default StudentViewSingleQuestion;