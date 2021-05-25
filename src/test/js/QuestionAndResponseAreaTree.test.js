import {buildAnswerModel, findAnswerModel, makeNewUpdatedAnswerModel} from "../../main/js/QuestionAndResponseAreaTree"
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
        expect(findAnswerModel(answerModel, "PlaneQ1").questionId).toEqual( "PlaneQ1");
    });

    test('findAnswerModel', () => {
        const answerModel = buildAnswerModel(partialQuestionModel);
        expect(findAnswerModel(answerModel, "1").questionId).toEqual("1");
        expect(findAnswerModel(answerModel, "1-2-1").questionId).toEqual("1-2-1");

    });

    test('makeNewUpdatedAnswerModel1', () => {
        const answerModel = buildAnswerModel(SampleImageTaskList.imageTasks[0].taskQuestions[0]);
        const newAnswerModel = makeNewUpdatedAnswerModel(answerModel, "PlaneQ1", "tumor");
        expect(answerModel.currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);
        expect(newAnswerModel.currentAnswer).toEqual("tumor");

    });

    test('makeNewUpdatedAnswerModel2', () => {
        const answerModel = buildAnswerModel(partialQuestionModel);
        const newAnswerModel1 = makeNewUpdatedAnswerModel(answerModel, "1", "tumor");
        expect(answerModel.currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);
        expect(newAnswerModel1.currentAnswer).toEqual("tumor");
        
        const newAnswerModel2 = makeNewUpdatedAnswerModel(answerModel, "1-2", "cyst");
        expect(answerModel.followupAnswers[1].currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);
        expect(newAnswerModel2.followupAnswers[1].currentAnswer).toEqual("cyst");
        
        const newAnswerModel3 = makeNewUpdatedAnswerModel(answerModel, "1-2-1", "blood");
        expect(answerModel.followupAnswers[1].followupAnswers[0].currentAnswer).toEqual(ResponseState.NOTHING_SELECTED.text);
        expect(newAnswerModel3.followupAnswers[1].followupAnswers[0].currentAnswer).toEqual("blood");

    });

});