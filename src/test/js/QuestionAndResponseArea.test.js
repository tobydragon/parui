import { render, screen } from '@testing-library/react';
import { ResponseState } from '../../main/js/ResponseAreaDropdown';
import QuestionAndResponseArea from '../../main/js/QuestionAndResponseArea';

const stubFunction = ()=> { };

test('QuestionAndResponseAreaNoResponse', () => {
    render(<QuestionAndResponseArea handleAnswerChange={stubFunction} currentAnswer={ResponseState.NOTHING_SELECTED.text} questionModel={{
        questionText: "What is the best letter?", 
        correctAnswer: "b",
        possibleAnswers: ["a", "b", "c", "d"]
    }} />);
    const iconElement = screen.getByText(/What/);
    expect(iconElement).toBeInTheDocument();
});