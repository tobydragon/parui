import { ResponseState } from "./ResponseAreaDropdown";
import QuestionAndResponseArea from "./QuestionAndResponseArea"

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

export const findAnswerModel = (answerModel, questionId) => {
    console.log(questionId + answerModel);
    if (answerModel.questionId === questionId){
        return answerModel;
    }
    else {
        if (answerModel.followupAnswers){
            for (const followupModel of answerModel.followupAnswers){
                const answerModelFound = findAnswerModel(followupModel, questionId);
                if (answerModelFound){
                    return answerModelFound;
                }
            }
        }
        console.log("DIDNOTFIND:" +questionId);
        return null;
    }
}

/**
 * 
 * @prop {object} props.questionModel
 * @prop {String} props.answerModel.currentAnswer
 * @prop {boolean} props.showFollowup
 * 
 */
export const QuestionAndResponseAreaTree = (props) => {
    if (props.questionModel.id !== props.answerModel.questionId){
        throw new Error("question and response objects not synced: " + props.questionModel.id + " " + props.answerModel.questionId);
    }
    console.log("--------HERE---------")
    console.log(props.questionModel);
    console.log(props.answerModel);
    return (
        <div>
            <QuestionAndResponseArea questionModel={props.questionModel} currentAnswer={props.answerModel.currentAnswer} handleAnswerChange={props.handleAnswerChange} />
            {hasFollowupQuestions(props.questionModel) && props.questionModel.followupQuestions.map((followupModel)=> 
                    <QuestionAndResponseAreaTree key={followupModel.id} questionModel={followupModel} answerModel={findAnswerModel(props.answerModel, followupModel.id)}
                        handleAnswerChange={props.handleAnswerChange}/>)}
        </div>
        
    );
}