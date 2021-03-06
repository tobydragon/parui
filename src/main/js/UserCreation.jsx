import UserCohortDropdown from "./UserCohortDropdown";
import UserNameForm from "./UserNameForm";
import {getFromServer, postToServer} from "./Comm";
import {useState} from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ParLogo from "./ParLogo";

/**
 * @prop {string} apiUrl
 * @prop {list of strings} cohortIds
 */
export const UserCreation = (props) => {
    //TODO: should be updated when typing into a text box, need to start idToTry out as blank or something, and not allow it to be sent as blank
    const [idToTry, setIdToTry] = useState("");
    const [cohortIdSelected,setCohortIdSelected] = useState("---Select Cohort---");

    const handleCohortChange = (newCohortValue) => {
        setCohortIdSelected(newCohortValue);
    };

    const onUserIdChange = (e) =>{
        setIdToTry(e.target.value);
    };

    const createUser = () =>{
        if(idToTry!==""){
            getFromServer(props.apiUrl, "/isUserIdAvailable?idToCheck="+idToTry).then((response)=> {
                console.log(response);
                if (response === true){
                    const userCreationJson = {studentId:idToTry, cohortId: cohortIdSelected};
                    //TODO: once the API is there, call to create a new user
                    console.log(userCreationJson);
                    postToServer(props.apiUrl,"/addNewUser", userCreationJson);
                }
                else {
                    console.log("Bad user Id attempted");
                }
            });
        } else {
            console.log("invalid user Id submitted");
        }
    };

    return(
        <Container style={containerStyle}>
            <Row>
                <Col sm={4} />    
                <Col sm={4}>
                    <ParLogo />
                    <Form>
                        <Form.Label>New User:</Form.Label>
                        <Form.Control onChange={onUserIdChange} type="text" placeholder="Enter new username" />
                        <UserCohortDropdown handleChange = {handleCohortChange} currentCohortId={cohortIdSelected} cohortIds = {props.cohortIds}/>
                    </Form>
                    <Button onClick={createUser} variant="outline-dark" style={{margin: '5px'}} > Create User </Button>
                </Col>
            </Row>
        </Container>
    );

}

const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    marginTop: '5px',
    marginBottom: '5px',
    paddingBottom: "5px",
    paddingTop: "5px",
}


export default UserCreation;