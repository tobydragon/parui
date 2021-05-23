import {buildAnswerModel} from "../../main/js/StudentViewSingleQuestion"
import {ResponseState } from '../../main/js/ResponseAreaDropdown'

test('buildAnswerModel', () => {

    const partialQuestionModel = {
        followupQuestions: [
            {followupQuestions:[]},
            {followupQuestions:[
                {followupQuestions: []},
                {followupQuestions: []},
            ]},
            {followupQuestions:[]}
        ]
    }
    const answerModel = buildAnswerModel(partialQuestionModel);
    expect(answerModel.currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);
    expect(answerModel.followupAnswers.length).toEqual(3);
    expect(answerModel.followupAnswers[1].followupAnswers.length).toEqual(2);
    expect(answerModel.followupAnswers[1].followupAnswers.length).toEqual(2);
});