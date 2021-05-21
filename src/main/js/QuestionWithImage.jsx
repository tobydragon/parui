import ImageArea from "./ImageArea";
import QuestionAndResponseArea from "./QuestionAndResponseArea";

export const QuestionWithImage = (props) => {
    return (
        <div>
            <ImageArea questionId={props.questionModel.id} imageUrl={props.questionModel.imageUrl} alt="Ultrasound Image" />
            <QuestionAndResponseArea 
                currentAnswer={props.currentAnswer} 
                questionModel={props.questionModel}
                handleAnswerChange={props.handleAnswerSelected} 
            />
        </div>
    );
};

export default QuestionWithImage;