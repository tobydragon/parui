import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ImageArea from "./ImageArea";
import QuestionAndResponseArea from "./QuestionAndResponseArea";

export const QuestionWithImage = (props) => {
    return (
        <Container>
            <Row>
                <Col sm={7}>
                    <ImageArea questionId={props.questionModel.id} imageUrl={props.questionModel.imageUrl} alt="Ultrasound Image" />
                </Col>
                <Col sm >
                    <QuestionAndResponseArea 
                        currentAnswer={props.currentAnswer} 
                        questionModel={props.questionModel}
                        handleAnswerChange={props.handleAnswerSelected} 
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default QuestionWithImage;