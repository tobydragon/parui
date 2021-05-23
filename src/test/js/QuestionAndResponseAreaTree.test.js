import {buildAnswerModel} from "../../main/js/QuestionAndResponseAreaTree"
import {ResponseState } from '../../main/js/ResponseAreaDropdown'

test('buildAnswerModel', () => {

    const partialQuestionModel = {
        id: "1",
        followupQuestions: [
            {id: "1-1", followupQuestions:[]},
            {
                id: "1-2",
                followupQuestions:[
                    {id: "1-2-1", followupQuestions: []},
                    {id: "1-2-2", followupQuestions: []},
            ]},
            {id: "1-3", followupQuestions:[]}
        ]
    }
    const answerModel = buildAnswerModel(partialQuestionModel);

    expect(answerModel.questionId).toEqual("1");
    expect(answerModel.currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);
    expect(answerModel.followupAnswers.length).toEqual(3);
    expect(answerModel.followupAnswers[0].questionId).toEqual("1-1");
    expect(answerModel.followupAnswers[1].followupAnswers.length).toEqual(2);
    expect(answerModel.followupAnswers[1].followupAnswers[0].questionId).toEqual("1-2-1");
    expect(answerModel.followupAnswers[1].followupAnswers[1].questionId).toEqual("1-2-2");
    expect(answerModel.followupAnswers[2].followupAnswers.length).toEqual(0);
});