import {buildAnswerModel, findAnswerModel} from "../../main/js/QuestionAndResponseAreaTree"
import {ResponseState } from '../../main/js/ResponseAreaDropdown'
import {SampleImageTaskList} from "../resources/SampleImageTasks"

describe('QuestionAndResponseAreaTree', () => {

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

    test('buildAnswerModel', () => {
        const answerModel = buildAnswerModel(partialQuestionModel);

        expect(answerModel.questionId).toEqual("1");
        expect(answerModel.currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);
        expect(answerModel.followupAnswers.length).toEqual(3);
        expect(answerModel.followupAnswers[0].questionId).toEqual("1-1");
        expect(answerModel.followupAnswers[1].followupAnswers.length).toEqual(2);
        expect(answerModel.followupAnswers[1].followupAnswers[0].questionId).toEqual("1-2-1");
        expect(answerModel.followupAnswers[1].followupAnswers[0].currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);

        expect(answerModel.followupAnswers[1].followupAnswers[1].questionId).toEqual("1-2-2");
        expect(answerModel.followupAnswers[1].followupAnswers[1].currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);

        expect(answerModel.currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);
    });

    test('buildFromRealisticQusetion', ()=> {
        const answerModel = buildAnswerModel(SampleImageTaskList.imageTasks[0].taskQuestions[0]);
        console.log(answerModel);
        expect(findAnswerModel(answerModel, "PlaneQ1").questionId).toEqual( "PlaneQ1");
    });

    test('findAnswerModel', () => {
        const answerModel = buildAnswerModel(partialQuestionModel);
        expect(findAnswerModel(answerModel, "1").questionId).toEqual("1");
        expect(findAnswerModel(answerModel, "1-2-1").questionId).toEqual("1-2-1");

    });

});