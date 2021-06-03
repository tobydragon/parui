import { Col, Container, Row } from "react-bootstrap";
import ParLogo from "./ParLogo";
import UsernameForm from "./UsernameForm";

const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    marginTop: '5px',
    paddingBottom: "5px",
    paddingTop: "5px",
    textAlign: "center"
}

export const LoginArea = (props) => {
    return (
        <Container style={containerStyle}>
            <Row>
                <Col sm={4} />    
                <Col sm={4}>
                    <ParLogo />
                    <UsernameForm loginAction={props.loginAction}/>
                </Col>
            </Row>
            
            
        </Container>
    );
};

export default LoginArea;