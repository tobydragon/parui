import {BiCheckCircle, BiXCircle, BiQuestionMark} from "react-icons/bi"

export const ResponseStateAndIcon = {
    CORRECT: {
        id: "CORRECT",
        iconComponent: BiCheckCircle
    },
    INCORRECT: {
        id:"INCORRECT",
        iconComponent: BiXCircle
    },
    NOTHING_SELECTED: {
        id: "NOTHING_SELECTED",
        iconComponent: BiQuestionMark,
        text: "---Select Answer---"
    },
    DONT_KNOW: {
        id: "DONT_KNOW",
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
    const responseState = calcResponseState(props.questionModel.currentAnswer, props.questionModel.correctAnswer)
    console.log(responseState);
    return (
        <div>
            {responseState.iconComponent()}
            <select className="dropdown" onChange={onResponseChange} disabled={responseState.id === ResponseStateAndIcon.CORRECT.id} value={props.questionModel.currentAnswer}>
                <option>{ResponseStateAndIcon.NOTHING_SELECTED.text}</option>
                {optionComponents}
                <option>{ResponseStateAndIcon.DONT_KNOW.text}</option>
            </select>
        </div>
    );
};

export default DropdownResponseArea;