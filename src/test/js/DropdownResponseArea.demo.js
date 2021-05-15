import DropdownResponseArea, { ResponseState } from "../../main/js/DropdownResponseArea";

export const DropdownResponseAreaDemo = (props) => {
    const logAction = (newResponseText) => {console.log("New Response entered:"+newResponseText)};
    return (
        <div>
            <DropdownResponseArea handleAnswerChange={logAction} currentAnswer={ResponseState.NOTHING_SELECTED.text} questionModel={{
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
            <DropdownResponseArea handleAnswerChange={logAction} currentAnswer="b" questionModel={{
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
            <DropdownResponseArea handleAnswerChange={logAction} currentAnswer="a" questionModel={{
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
            <DropdownResponseArea handleAnswerChange={logAction} currentAnswer={ResponseState.DONT_KNOW.text} questionModel={{
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
        </div>
        
    );
}