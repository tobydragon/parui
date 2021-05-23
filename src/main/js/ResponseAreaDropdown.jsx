import {BiCheckCircle, BiXCircle, BiQuestionMark} from "react-icons/bi"
import { Col, Container, Form, Row } from 'react-bootstrap';

export const ResponseState = {
    CORRECT: {
        id: "CORRECT",
        hasIcon: true,
        iconComponent: BiCheckCircle
    },
    INCORRECT: {
        id:"INCORRECT",
        hasIcon: true,
        iconComponent: BiXCircle
    },
    NOTHING_SELECTED: {
        id: "NOTHING_SELECTED",
        hasIcon: false,
        text: "---Select Answer---"
    },
    DONT_KNOW: {
        id: "DONT_KNOW",
        hasIcon: true,
        iconComponent: BiQuestionMark,
        text: "... I don't know"
    }
}

export const calcResponseState = (currentAnswer, correctAnswer) => {
    currentAnswer = currentAnswer.trim();
    correctAnswer = correctAnswer.trim();
    if (currentAnswer === ResponseState.NOTHING_SELECTED.text){
        return ResponseState.NOTHING_SELECTED;
    }
    else if (currentAnswer === ResponseState.DONT_KNOW.text){
        return ResponseState.DONT_KNOW;
    }
    else if (currentAnswer === correctAnswer){
        return ResponseState.CORRECT;
    }
    else {
        return ResponseState.INCORRECT;
    }
}

/**
 * @prop {function} handleAnswerChange: function called when a response is selected, takes new string response as a param 
 * @prop {string} currentAnswer
 * @prop {string} questionModel.correctAnswer
 * @prop {list of strings} questionModel.possibleAnswers  
 */
export const ResponseAreaDropdown = (props) => {

    const onResponseChange = (e) =>{
        props.handleAnswerChange(e.target.value);
    }

    const dropdownChoices = props.questionModel.possibleAnswers.map(possAnswerStr => (<option key={possAnswerStr}>{possAnswerStr}</option>));
    const responseState = calcResponseState(props.currentAnswer, props.questionModel.correctAnswer);

    return (
        <Container>
            <Row>
                <Col xs={2}>
                    {/* Problem: these icons come as svg, which doesn't have alt text, and so wouldn't be readable by a screen reader */}
                    {responseState.hasIcon && <responseState.iconComponent size={42} data-testid="feedbackIcon"/>}
                </Col>
                <Col>
                    <Form.Control as="select" onChange={onResponseChange} disabled={responseState.id === ResponseState.CORRECT.id} value={props.currentAnswer}>
                        <option disabled>{ResponseState.NOTHING_SELECTED.text}</option>
                        {dropdownChoices}
                        <option>{ResponseState.DONT_KNOW.text}</option>
                    </Form.Control>
                </Col>
            </Row>
        </Container>
    );
};

export default ResponseAreaDropdown;