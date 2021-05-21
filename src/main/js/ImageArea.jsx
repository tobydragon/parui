export const ImageArea = (props) => {
    return (
        <div>
            <p>{props.questionId}</p>
            <img src={props.imageUrl} alt={props.altText} />
        </div>
        
    );
};

export default ImageArea;