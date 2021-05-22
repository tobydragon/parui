import ResponseAreaDropdown, { calcResponseState, ResponseState } from "../../main/js/ResponseAreaDropdown";
import { render, screen } from '@testing-library/react';


test('calcResponseState', () => {
    expect(calcResponseState("x y z ", "x y z ")).toBe(ResponseState.CORRECT);
    //white space is trimmed from both current and correct
    expect(calcResponseState("x y", "x y z \t")).toBe(ResponseState.INCORRECT);

    expect(calcResponseState("x y ", "x y z ")).toBe(ResponseState.INCORRECT);
    expect(calcResponseState(ResponseState.NOTHING_SELECTED.text, "x y z ")).toBe(ResponseState.NOTHING_SELECTED); 
    expect(calcResponseState(ResponseState.DONT_KNOW.text, "x y z ")).toBe(ResponseState.DONT_KNOW);
});

const stubFunction = ()=> { };

test('DropdownResponseAreaNoResponse', () => {
    render(<ResponseAreaDropdown handleAnswerChange={stubFunction} currentAnswer={ResponseState.NOTHING_SELECTED.text} questionModel={{
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseState.NOTHING_SELECTED.cssClass);
});

test('DropdownResponseAreaCorrecctResponse', () => {
    render(<ResponseAreaDropdown handleAnswerChange={stubFunction} currentAnswer="b" questionModel={{
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseState.CORRECT.cssClass);
});

test('DropdownResponseAreaIncorrectResponse', () => {
    render(<ResponseAreaDropdown handleAnswerChange={stubFunction} currentAnswer="d" questionModel={{
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseState.INCORRECT.cssClass);
});

test('DropdownResponseAreaDontKnowResponse', () => {
    render(<ResponseAreaDropdown handleAnswerChange={stubFunction} currentAnswer={ResponseState.DONT_KNOW.text} questionModel={{
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseState.DONT_KNOW.cssClass);
}); 