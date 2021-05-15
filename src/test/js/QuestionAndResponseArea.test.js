import { render, screen } from '@testing-library/react';
import { ResponseState } from '../../main/js/DropdownResponseArea';
import QuestionAndResponseArea from '../../main/js/QuestionAndResponseArea';

const stubFunction = ()=> { };

test('QuestionAndResponseAreaNoResponse', () => {
    render(<QuestionAndResponseArea handleAnswerChange={stubFunction} questionModel={{
        questionText: "What is the best letter?", 
        currentAnswer: ResponseState.NOTHING_SELECTED.text,
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByText(/What/);
    expect(iconElement).toBeInTheDocument();
});