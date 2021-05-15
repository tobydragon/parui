import DropdownResponseArea, { ResponseState } from "../../main/js/DropdownResponseArea";

export const DropdownResponseAreaDemo = (props) => {
    const logAction = (newResponseText) => {console.log("New Response entered:"+newResponseText)};
    return (
        <div>
            <DropdownResponseArea handleAnswerChange={logAction} questionModel={{
                currentAnswer: ResponseState.NOTHING_SELECTED.text,
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
            <DropdownResponseArea handleAnswerChange={logAction} questionModel={{
                currentAnswer: "b",
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
            <DropdownResponseArea handleAnswerChange={logAction} questionModel={{
                currentAnswer: "a",
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
            <DropdownResponseArea handleAnswerChange={logAction} questionModel={{
                currentAnswer: ResponseState.DONT_KNOW.text,
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
        </div>
        
    );
}