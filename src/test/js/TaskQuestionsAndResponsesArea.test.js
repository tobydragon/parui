import { render } from "@testing-library/react";
import { ResponseState } from "../../main/js/DropdownResponseArea";
import SampleImageTaskList from "../resources/sampleImageTasks";
describe(TaskQuestionsAndResponsesArea, ()=> {
    test(checkQuestionSwitch, ()=>{
        const sampleQuestionList = SampleImageTaskList.imageTasks[0].taskQuestions;
        const sampleAnswersList = sampleQuestionList.map(()=>ResponseState.NOTHING_SELECTED);
    
        render(<TaskQuestionsAndResponsesArea questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={0} />);
        expect(screen.findByText(/plane/)).not.toEqual(null);
        expect(screen.findByText(/structure/)).toEqual(null);
        expect(screen.findByText(/plane/)).toEqual(null);

        render(<TaskQuestionsAndResponsesArea questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={1} />);
        expect(screen.findByText(/plane/)).toEqual(null);
        expect(screen.findByText(/structure/)).not.toEqual(null);
        expect(screen.findByText(/plane/)).toEqual(null);

        render(<TaskQuestionsAndResponsesArea questionModels={sampleQuestionList} currentAnswers={sampleAnswersList} currentQuestionIndex={2} />);
        expect(screen.findByText(/plane/)).toEqual(null);
        expect(screen.findByText(/structure/)).toEqual(null);
        expect(screen.findByText(/plane/)).not.toEqual(null);
    });
});
