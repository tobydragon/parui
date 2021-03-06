import { render, screen } from "@testing-library/react";
import { ResponseState } from "../../../main/js/ResponseAreaDropdown";
import TaskQuestionsAndResponsesArea from "../../../main/js/ice/TaskQuestionsAndResponsesArea";
import SampleImageTaskList from "../../resources/sampleImageTasks";

//TODO: remove buttons when there is only 1 question
//TODO: decide about how it should handle bad indices, empty lists, or different size lists
describe("TaskQuestionsAndResponsesArea", ()=> {
    const sampleQuestionList = SampleImageTaskList.imageTasks[0].taskQuestions;
    const sampleAnswersList = sampleQuestionList.map(()=>ResponseState.NOTHING_SELECTED.text);

    const logAction = () => {console.log("Something happened, make test more specific for details")};
    const controlFunctions = {prevQuestion: logAction, nextQuestion: logAction, handleAnswerChange: logAction};
    
    test("checkQuestionSwitch0", ()=>{
        render(<TaskQuestionsAndResponsesArea controlFunctions={controlFunctions} questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={0} />);
        expect(screen.queryByText(/plane/)).not.toEqual(null);
        expect(screen.queryByText(/structure/)).toEqual(null);
        expect(screen.queryByText(/zone/)).toEqual(null);
    });
    test("checkQuestionSwitch1", ()=>{
        render(<TaskQuestionsAndResponsesArea controlFunctions={controlFunctions} questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={1} />);
        expect(screen.queryByText(/plane/)).toEqual(null);
        expect(screen.queryByText(/structure/)).not.toEqual(null);
        expect(screen.queryByText(/zone/)).toEqual(null);
    });
    test("checkQuestionSwitch2", ()=>{
        render(<TaskQuestionsAndResponsesArea controlFunctions={controlFunctions} questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={2} />);
        expect(screen.queryByText(/plane/)).toEqual(null);
        expect(screen.queryByText(/structure/)).toEqual(null);
        expect(screen.queryByText(/zone/)).not.toEqual(null);
    });

    test("questionCountTest0", ()=>{
        render(<TaskQuestionsAndResponsesArea controlFunctions={controlFunctions} questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={0} />);
        expect(screen.getByTestId("questionCount").textContent).toEqual("1/3");
    });
    test("questionCountTest1", ()=>{
        render(<TaskQuestionsAndResponsesArea controlFunctions={controlFunctions} questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={1} />);
        expect(screen.getByTestId("questionCount").textContent).toEqual("2/3");
    });
    test("questionCountTest2", ()=>{
        render(<TaskQuestionsAndResponsesArea controlFunctions={controlFunctions} questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={2} />);
        expect(screen.getByTestId("questionCount").textContent).toEqual("3/3");
    });

    test("prevAndNextButtons0", ()=>{
        render(<TaskQuestionsAndResponsesArea controlFunctions={controlFunctions} questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={0} />);
        expect(screen.getByText(/Next/)).not.toHaveAttribute("disabled");
        expect(screen.getByText(/Previous/)).toHaveAttribute("disabled");
    });
    test("prevAndNextButtons1", ()=>{
        render(<TaskQuestionsAndResponsesArea controlFunctions={controlFunctions} questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={1} />);
        expect(screen.getByText(/Next/)).not.toHaveAttribute("disabled");
        expect(screen.getByText(/Previous/)).not.toHaveAttribute("disabled");
    });
    test("prevAndNextButtons2", ()=>{
        render(<TaskQuestionsAndResponsesArea controlFunctions={controlFunctions} questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={2} />);
        expect(screen.getByText(/Next/)).toHaveAttribute("disabled");
        expect(screen.getByText(/Previous/)).not.toHaveAttribute("disabled");
    });
});
