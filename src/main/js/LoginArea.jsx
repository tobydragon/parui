import { Col, Container, Row, Button } from "react-bootstrap";
import ParLogo from "./ParLogo";
import UsernameForm from "./UserNameForm";
import {getFromServer} from "./Comm";
const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    marginTop: '5px',
    paddingBottom: "5px",
    paddingTop: "5px",
    textAlign: "center"
}



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
                    <UsernameForm loginAction={props.loginAction}/>
                    <Button onClick={getCohortList}>Create User </Button>
                </Col>
            </Row>
            
            
        </Container>
    );
};

export default LoginArea;