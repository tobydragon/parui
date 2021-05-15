import { render, screen } from "@testing-library/react";
import { ResponseState } from "../../main/js/DropdownResponseArea";
import TaskQuestionsAndResponsesArea from "../../main/js/TaskQuestionsAndResponsesArea";
import SampleImageTaskList from "../resources/sampleImageTasks";

//TODO: decide about how it should handle bad indices, empty lists, or different size lists
describe("TaskQuestionsAndResponsesArea", ()=> {
    const sampleQuestionList = SampleImageTaskList.imageTasks[0].taskQuestions;
    const sampleAnswersList = sampleQuestionList.map(()=>ResponseState.NOTHING_SELECTED.text);
    
    test("checkQuestionSwitch0", ()=>{
        render(<TaskQuestionsAndResponsesArea questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={0} />);
        expect(screen.queryByText(/plane/)).not.toEqual(null);
        expect(screen.queryByText(/structure/)).toEqual(null);
        expect(screen.queryByText(/zone/)).toEqual(null);
    });

    test("checkQuestionSwitch1", ()=>{
        render(<TaskQuestionsAndResponsesArea questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={1} />);
        expect(screen.queryByText(/plane/)).toEqual(null);
        expect(screen.queryByText(/structure/)).not.toEqual(null);
        expect(screen.queryByText(/zone/)).toEqual(null);
    });

    test("checkQuestionSwitch2", ()=>{
        render(<TaskQuestionsAndResponsesArea questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={2} />);
        expect(screen.queryByText(/plane/)).toEqual(null);
        expect(screen.queryByText(/structure/)).toEqual(null);
        expect(screen.queryByText(/zone/)).not.toEqual(null);
    });

    test("questionCountTest0", ()=>{
        render(<TaskQuestionsAndResponsesArea questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={0} />);
        expect(screen.getByTestId("questionCount").textContent).toEqual("1/3");
    });

    test("questionCountTest1", ()=>{
        render(<TaskQuestionsAndResponsesArea questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={1} />);
        expect(screen.getByTestId("questionCount").textContent).toEqual("2/3");
    });

    test("questionCountTest2", ()=>{
        render(<TaskQuestionsAndResponsesArea questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={2} />);
        expect(screen.getByTestId("questionCount").textContent).toEqual("3/3");
    });
});
