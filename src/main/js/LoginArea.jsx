import { Col, Container, Row, Button } from "react-bootstrap";
import ParLogo from "./ParLogo";
import UsernameForm from "./UserNameForm";
import {getFromServer} from "./Comm";

/**
 * @prop {function} loginAction
 * @prop {string} apiUrl
 * @prop {style Obj} containerStyle
 */

export const LoginArea = (props) => {
    
    const getCohortList = () => {getFromServer(props.apiUrl,"/getCohortIds")
        .then((cohortListFromServer)=>{
            props.changeToCreateUser(cohortListFromServer);
    })};
    

    return (
        <Container style={{...props.containerStyle, marginBottom: '5px',paddingBottom: "5px",textAlign: "center"}}>
            <Row>
                <Col sm={4} />    
                <Col sm={4}>
                    <ParLogo />
                    <UsernameForm loginAction={props.loginAction} apiUrl={props.apiUrl}/>
                    <Button onClick={getCohortList} variant="outline-dark" style={{margin: '5px'}}> Create User </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginArea;