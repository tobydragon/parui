import ResponseAreaDropdown, { ResponseState } from "../../main/js/ResponseAreaDropdown";

export const DropdownResponseAreaDemo = (props) => {
    const logAction = (newResponseText) => {console.log("New Response entered:"+newResponseText)};
    return (
        <div>
            <ResponseAreaDropdown handleAnswerChange={logAction} currentAnswer={ResponseState.NOTHING_SELECTED.text} questionModel={{
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
            <ResponseAreaDropdown handleAnswerChange={logAction} currentAnswer="b" questionModel={{
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
            <ResponseAreaDropdown handleAnswerChange={logAction} currentAnswer="a" questionModel={{
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
            <ResponseAreaDropdown handleAnswerChange={logAction} currentAnswer={ResponseState.DONT_KNOW.text} questionModel={{
                correctAnswer: "b",
                possibleAnswers: ["a", "b", "c", "d"]
            }} />
        </div>
        
    );
}