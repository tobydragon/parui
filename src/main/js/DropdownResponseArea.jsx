import './DropdownResponseArea.css'
import {BiCheckCircle, BiXCircle, BiQuestionMark} from "react-icons/bi"

export const ResponseState = {
    CORRECT: {
        id: "CORRECT",
        cssClass: "correctFeedback",
        iconComponent: BiCheckCircle
    },
    INCORRECT: {
        id:"INCORRECT",
        cssClass: "incorrectFeedback",
        iconComponent: BiXCircle
    },
    NOTHING_SELECTED: {
        id: "NOTHING_SELECTED",
        cssClass: "noFeedback",
        iconComponent: BiQuestionMark,
        text: "---Select Answer---"
    },
    DONT_KNOW: {
        id: "DONT_KNOW",
        cssClass: "noFeedback",
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
 * @prop {string} questionModel.currentAnswer
 * @prop {string} questionModel.correctAnswer
 * @prop {list of strings} questionModel.possibleAnswers  
 */
export const DropdownResponseArea = (props) => {

    const onResponseChange = (e) =>{
        props.handleAnswerChange(e.target.value);
    }

    const optionComponents = props.questionModel.possibleAnswers.map(possAnswerStr => (<option key={possAnswerStr}>{possAnswerStr}</option>));
    const responseState = calcResponseState(props.questionModel.currentAnswer, props.questionModel.correctAnswer);

    return (
        <div>
            {/* Problem: these icons come as svg, which doesn't have alt text, and so wouldn't be readable by a screen reader */}
            <responseState.iconComponent className={responseState.cssClass} data-testid="feedbackIcon"/>
            <select className="dropdown" onChange={onResponseChange} disabled={responseState.id === ResponseState.CORRECT.id} value={props.questionModel.currentAnswer}>
                <option disabled>{ResponseState.NOTHING_SELECTED.text}</option>
                {optionComponents}
                <option>{ResponseState.DONT_KNOW.text}</option>
            </select>
        </div>
    );
};

export default DropdownResponseArea;