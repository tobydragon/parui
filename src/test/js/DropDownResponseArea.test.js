import DropdownResponseArea, { calcResponseState, ResponseState } from "../../main/js/DropdownResponseArea";
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
    render(<DropdownResponseArea handleAnswerChange={stubFunction} questionModel={{
        currentAnswer: ResponseState.NOTHING_SELECTED.text,
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseState.NOTHING_SELECTED.cssClass);
});

test('DropdownResponseAreaCorrecctResponse', () => {
    render(<DropdownResponseArea handleAnswerChange={stubFunction} questionModel={{
        currentAnswer: "b",
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseState.CORRECT.cssClass);
});

test('DropdownResponseAreaIncorrectResponse', () => {
    render(<DropdownResponseArea handleAnswerChange={stubFunction} questionModel={{
        currentAnswer: "d",
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseState.INCORRECT.cssClass);
});

test('DropdownResponseAreaDontKnowResponse', () => {
    render(<DropdownResponseArea handleAnswerChange={stubFunction} questionModel={{
        currentAnswer: ResponseState.DONT_KNOW.text,
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseState.DONT_KNOW.cssClass);
}); 