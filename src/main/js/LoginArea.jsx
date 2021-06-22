import { Col, Container, Row, Button } from "react-bootstrap";
import ParLogo from "./ParLogo";
import UsernameForm from "./UserNameForm";
import {getFromServer} from "./Comm";

/**
 * @prop {function} loginAction
 * @prop {string} apiUrl
 */

export const LoginArea = (props) => {
    
    const getCohortList = () => {getFromServer(props.apiUrl,"/getCohortIds")
        .then((cohortListFromServer)=>{
            props.changeToCreateUser(cohortListFromServer);
    })};
    

    return (
        <Container style={containerStyle}>
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

const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    marginTop: '5px',
    marginBottom: '5px',
    paddingBottom: "5px",
    paddingTop: "5px",
    textAlign: "center"
}


export default LoginArea;