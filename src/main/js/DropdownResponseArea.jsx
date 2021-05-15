import './DropdownResponseArea.css'
import {BiCheckCircle, BiXCircle, BiQuestionMark} from "react-icons/bi"

export const ResponseStateAndIcon = {
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
    if (currentAnswer === ResponseStateAndIcon.NOTHING_SELECTED.text){
        return ResponseStateAndIcon.NOTHING_SELECTED;
    }
    else if (currentAnswer === ResponseStateAndIcon.DONT_KNOW.text){
        return ResponseStateAndIcon.DONT_KNOW;
    }
    else if (currentAnswer === correctAnswer){
        return ResponseStateAndIcon.CORRECT;
    }
    else {
        return ResponseStateAndIcon.INCORRECT;
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
            <select className="dropdown" onChange={onResponseChange} disabled={responseState.id === ResponseStateAndIcon.CORRECT.id} value={props.questionModel.currentAnswer}>
                <option disabled>{ResponseStateAndIcon.NOTHING_SELECTED.text}</option>
                {optionComponents}
                <option>{ResponseStateAndIcon.DONT_KNOW.text}</option>
            </select>
        </div>
    );
};

export default DropdownResponseArea;