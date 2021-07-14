import { useEffect, useState } from "react";
import {getFromServer, postToServer} from "./Comm"
import SampleImageTaskList from "../../test/resources/SampleImageTasks";
import { Button, Col, Container, Row } from "react-bootstrap";
import StudentHeader from "./StudentHeader";
import { buildAnswerModel, makeNewUpdatedAnswerModel, QuestionAndResponseAreaTree } from "./QuestionAndResponseAreaTree";
import ImageArea from "./ImageArea";
import QuestionHistorySummary from "./QuestionHistorySummary";

/**
 * @prop {string} userId 
 * @prop {string} apiUrl 
 * @prop {style Obj} containerStyle
 */
export const StudentView = (props) => {
    //TODO: need to decide how to handle the situation before server is contacted
    const [model, setModel] = useState({
        questionModel: SampleImageTaskList.imageTasks[0].taskQuestions[0],
        currentAnswerModel: buildAnswerModel(SampleImageTaskList.imageTasks[0].taskQuestions[0])
    });

    const [historySummary, setHistorySummary] = useState({
        questionIdsSeen: [], 
        questionIdsRespondedTo: [], 
        questionsIdsCorrectFirstTime:[], 
        questionIdsIncorrect: [],
        questionIdsCorrectAfterIncorrect: []
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
            getQuestionHistorySummary();
        });
    };

    //TODO: Update QHS once answer has been selected
    //TODO: check for client true/false
    const getQuestionHistorySummary = () => {
        getFromServer(props.apiUrl, "/getQuestionHistorySummary?userId="+props.userId)
        .then((newQuestionHistory) => {
            console.log(newQuestionHistory)
            setHistorySummary(newQuestionHistory)
        });
    }

    useEffect(getCurrentQuestion, [props.apiUrl, props.userId]);
    
    const handleAnswerSelected = (questionId, newAnswer) => {
        const updatedAnswers = makeNewUpdatedAnswerModel(model.currentAnswerModel, questionId, newAnswer);
        setModel({
            questionModel: model.questionModel,
            currentAnswerModel: updatedAnswers 
        });
        const responseJson = {studentId: props.userId, questionId: questionId, responseText: newAnswer};
        postToServer(props.apiUrl, "/addResponse", responseJson).then(getQuestionHistorySummary);

    };

    

    return(
        <Container style={props.containerStyle}>
            <StudentHeader userId={props.userId} logout={props.logout}/>
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
                <Col sm>
                    <QuestionHistorySummary 
                        questionsHist = {historySummary}
                    />
                </Col>
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

export default StudentView;