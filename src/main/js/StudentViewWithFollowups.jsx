import { useEffect, useState } from "react";
import {getFromServer, postToServer} from "./Comm"
import SampleImageTaskList from "../../test/resources/SampleImageTasks";
import { ResponseState } from "./ResponseAreaDropdown";
import { Button, Col, Container, Row } from "react-bootstrap";
import StudentHeader from "./StudentHeader";
import { buildAnswerModel, QuestionAndResponseAreaTree } from "./QuestionAndResponseAreaTree";
import ImageArea from "./ImageArea";

/**
 * @prop {string} userId 
 * @prop {string} apiUrl 
 */
export const StudentViewWithFollowups = (props) => {
    //TODO: need to decide how to handle the situation before server is contacted
    const [model, setModel] = useState({
        questionModel: SampleImageTaskList.imageTasks[0].taskQuestions[0],
        currentAnswerModel: buildAnswerModel(SampleImageTaskList.imageTasks[0].taskQuestions[0])
    });

    const getCurrentQuestion = () => {
        getFromServer(props.apiUrl, "/getCurrentQuestion?userId="+props.userId)
        .then((newModelFromServer)=> {
            setModel({
                questionModel: newModelFromServer,
                currentAnswerModel: buildAnswerModel(newModelFromServer)
            });
            const questionSeenJson = {studentId: props.userId, questionId: newModelFromServer.id};
            postToServer(props.apiUrl, "/addTimeSeen", questionSeenJson);
        });
    };

    useEffect(getCurrentQuestion, [props.apiUrl, props.userId]);

    const handleAnswerSelected = (questionId, newAnswer) => {
        //todo: make a new answerModel object that is an updated version of the previous one, with new answer updated
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
            <Container>
                <Row>
                    <Col sm={7}>
                        <ImageArea questionId={model.questionModel.id} imageUrl={model.questionModel.imageUrl} alt="Ultrasound Image" />
                    </Col>
                    <Col sm >
                        <QuestionAndResponseAreaTree
                            answerModel={model.currentAnswerModel} 
                            questionModel={model.questionModel}
                            handleAnswerChange={handleAnswerSelected} 
                        />
                    </Col>
                </Row>
            </Container>
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

export default StudentViewWithFollowups;