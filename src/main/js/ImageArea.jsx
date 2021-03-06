
export const ImageArea = (props) => {
    const imageStyle = {
        maxHeight: '100%',
        maxWidth: '100%',
        // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    return (
        < div style={{border: "solid", padding: "5px",  borderRadius: "5px", borderWidth: "thin", margin: '5px'}}>
            <img style={imageStyle} src={props.imageUrl} alt={props.altText} />
            <p>{props.questionId}</p>
        </div>
        
    );
};

export default ImageArea;