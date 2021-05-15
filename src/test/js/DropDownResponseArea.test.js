import DropdownResponseArea, { calcResponseState, ResponseStateAndIcon } from "../../main/js/DropdownResponseArea";
import { render, screen } from '@testing-library/react'


test('calcResponseState', () => {
    expect(calcResponseState("x y z ", "x y z ")).toBe(ResponseStateAndIcon.CORRECT);
    //white space is trimmed from both current and correct
    expect(calcResponseState("x y", "x y z \t")).toBe(ResponseStateAndIcon.INCORRECT);

    expect(calcResponseState("x y ", "x y z ")).toBe(ResponseStateAndIcon.INCORRECT);
    expect(calcResponseState(ResponseStateAndIcon.NOTHING_SELECTED.text, "x y z ")).toBe(ResponseStateAndIcon.NOTHING_SELECTED); 
    expect(calcResponseState(ResponseStateAndIcon.DONT_KNOW.text, "x y z ")).toBe(ResponseStateAndIcon.DONT_KNOW);
});

const stubFunction = ()=> { };

test('DropdownResponseAreaNoResponse', () => {
    render(<DropdownResponseArea handleAnswerChange={stubFunction} questionModel={{
        currentAnswer: ResponseStateAndIcon.NOTHING_SELECTED.text,
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    screen.debug();
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseStateAndIcon.NOTHING_SELECTED.cssClass);
});

test('DropdownResponseAreaCorrecctResponse', () => {
    render(<DropdownResponseArea handleAnswerChange={stubFunction} questionModel={{
        currentAnswer: "b",
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    screen.debug();
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseStateAndIcon.CORRECT.cssClass);
});

test('DropdownResponseAreaIncorrectResponse', () => {
    render(<DropdownResponseArea handleAnswerChange={stubFunction} questionModel={{
        currentAnswer: "d",
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    screen.debug();
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseStateAndIcon.INCORRECT.cssClass);
});

test('DropdownResponseAreaDontKnowResponse', () => {
    render(<DropdownResponseArea handleAnswerChange={stubFunction} questionModel={{
        currentAnswer: ResponseStateAndIcon.DONT_KNOW.text,
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    screen.debug();
    const iconElement = screen.getByTestId("feedbackIcon");
    expect(iconElement).toHaveAttribute("class", ResponseStateAndIcon.DONT_KNOW.cssClass);
}); 