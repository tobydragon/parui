import UserCohortDropdown from "./UserCohortDropdown";
//import UserNameForm from "./UserNameForm";
import {getFromServer, postToServer} from "./Comm";
import {useState, useRef} from "react";
import { Container, Row, Col, Button, Form, Overlay } from "react-bootstrap";
import ParLogo from "./ParLogo";
import ErrorAlert from "./ErrorAlert";

/**
 * @prop {string} apiUrl
 * @prop {list of strings} cohortIds
 * @prop {style Obj} containerStyle
 * @prop {function} logInStudent 
 * @prop {function} onErrorFixed
 * @prop {boolean} displayAlert
 * @prop {string} errorMessage
 * @prop {function} setErrorMessage
 * @prop {function} setDisplayAlert
 */
export const UserCreation = (props) => {
    //TODO: should be updated when typing into a text box, need to start idToTry out as blank or something, and not allow it to be sent as blank
    const [idToTry, setIdToTry] = useState("");
    const [cohortIdSelected,setCohortIdSelected] = useState("---Select Cohort---");
    const [userCreated, setUserCreated] = useState(false);
    const buttonRef = useRef(null);

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
                    if(cohortIdSelected!=="---Select Cohort---"){
                        const userCreationJson = {studentId:idToTry, cohortId: cohortIdSelected};
                        //TODO: once the API is there, call to create a new user
                        console.log(userCreationJson);
                        postToServer(props.apiUrl,"/addNewUser", userCreationJson);
                        setUserCreated(true);
                    }else{
                        props.setErrorMessage("error: must select a cohort. try again");
                        props.setDisplayAlert(true);
                    }
                }
                else {
                    props.setErrorMessage("user id already taken. try again");
                    props.setDisplayAlert(true);
                }
            });
        } else {
            props.setErrorMessage("invalid user id entered: \"\". try again");
            props.setDisplayAlert(true);
        }
    };

    const logInWithCreatedUser = () => {
        if(userCreated){
            props.logInStudent(idToTry);
        }else{
            props.setErrorMessage("error: user never created. try again once a user has been made.");
            props.setDisplayAlert(true);
        }
    }

    if(props.displayAlert===false){
        return(
            <Container style={{...props.containerStyle, marginBottom:'5px', paddingBottom: "5px"}}>
                <Row>
                    <Col sm={4} />    
                    <Col sm={4}>
                        <ParLogo />
                        <Form>
                            <Form.Label>New User:</Form.Label>
                            <Form.Control onChange={onUserIdChange} type="text" placeholder="Enter new username" />
                            <UserCohortDropdown handleChange = {handleCohortChange} currentCohortId={cohortIdSelected} cohortIds = {props.cohortIds}/>
                        </Form>
                        <Button ref={buttonRef} onClick={createUser} variant="outline-dark" style={{margin: '10px'}} > Create User</Button>
                        <Overlay target={buttonRef.current} show={userCreated} placement="right" transition={false}>
                            {({placement, arrowProps, show: userCreated, popper,...props}) => (
                                <div {...props} style={{...props.style,paddingLeft:'7px'}}>
                                    User Created!
                                </div>
                            )}
                        </Overlay>
                        <Form>
                        </Form>
                        <Button onClick={logInWithCreatedUser} variant="outline-dark" style={{margin: '5px'}} > Log In to Student View</Button>
                    </Col>
                </Row>
            </Container>
        );
    } else{
        return(
        <ErrorAlert message={props.errorMessage} showAlert={props.displayAlert} closeAlert={props.onErrorFixed}/>
        );
    }

}


export default UserCreation;