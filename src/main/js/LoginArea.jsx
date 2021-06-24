import { Col, Container, Row, Button } from "react-bootstrap";
import ParLogo from "./ParLogo";
import UsernameForm from "./UserNameForm";
import {getFromServer} from "./Comm";
import ErrorAlert from "./ErrorAlert";

/**
 * @prop {function} loginAction
 * @prop {string} apiUrl
 * @prop {style Obj} containerStyle
 * @prop {function} onErrorFixed
 * @prop {boolean} displayAlert
 * @prop {string} errorMessage
 * @prop {function} setErrorMessage
 * @prop {function} setDisplayAlert
 */

export const LoginArea = (props) => {
    
    const getCohortList = () => {getFromServer(props.apiUrl,"/getCohortIds")
        .then((cohortListFromServer)=>{
            props.changeToCreateUser(cohortListFromServer);
    })};
    
    if(props.displayAlert===false){
        return (
            <Container style={{...props.containerStyle, marginBottom: '5px',paddingBottom: "5px",textAlign: "center"}}>
                <Row>
                    <Col sm={4} />    
                    <Col sm={4}>
                        <ParLogo />
                        <UsernameForm loginAction={props.loginAction} apiUrl={props.apiUrl} displayAlert={props.displayAlert}
                            errorMessage={props.errorMessage} setErrorMessage={props.setErrorMessage} setDisplayAlert={props.setDisplayAlert}/>
                        <Button onClick={getCohortList} variant="outline-dark" style={{margin: '5px'}}> Create User </Button>
                    </Col>
                </Row>
            </Container>
        );
    }else{
        return(<ErrorAlert message={props.errorMessage} showAlert={props.displayAlert} closeAlert={props.onErrorFixed}/>);
    }
};

export default LoginArea;