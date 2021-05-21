import "./ImageArea.css"

export const ImageArea = (props) => {
    return (
        <div className="imageArea">
            <img src={props.imageUrl} alt={props.altText} />
            <p>{props.questionId}</p>
        </div>
        
    );
};

export default ImageArea;