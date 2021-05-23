import { ResponseState } from "./ResponseAreaDropdown";

export const hasFollowupQuestions = (questionModel) => {
    if (questionModel.hasOwnProperty("followupQuestions")){
        return questionModel.followupQuestions.length > 0;
    }
    else {
        return false;
    }
}

export const buildAnswerModel = (questionModel) => {
    return { 
        questionId: questionModel.id,
        currentAnswer: ResponseState.NOTHING_SELECTED.text,
        followupAnswers: hasFollowupQuestions(questionModel) ? questionModel.followupQuestions.map((followupModel)=> buildAnswerModel(followupModel)) : []
    }
}


export const QuestionAndResponseAreaTree = () => {
    return (
        <div>
            <p>todo</p>
            {hasFollowupQuestions(props.questionModel) && props.questionModel.followupQuestions.map((followupModel)=> <QuestionAndResponseArea handleAnswerChange={props.handleAnswerChange} questionModel= {followupModel} />)}

        </div>
        
    );
}