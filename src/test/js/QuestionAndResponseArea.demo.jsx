import { ResponseState } from "../../main/js/ResponseAreaDropdown";
import { QuestionAndResponseArea } from "../../main/js/QuestionAndResponseArea";

export const QuestionAndResponseAreaDemo = () =>{
    const logAction = (newResponseText) => {console.log("New Response entered:"+newResponseText)};

    return (
        <QuestionAndResponseArea 
            handleAnswerChange={logAction} 
            questionModel={{
                questionText: "What is the best letter?", 
                currentAnswer: ResponseState.NOTHING_SELECTED.text,
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} 
        />
    );
}