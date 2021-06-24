import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getFromServer  } from "./Comm";

/**
 * 
 * @prop {function} loginAction
 * @prop {string} apiUrl
 * @prop {boolean} displayAlert
 * @prop {string} errorMessage
 * @prop {function} setErrorMessage
 * @prop {function} setDisplayAlert
 */

export const UsernameForm = (props) => {

    const [userNameText, setUsernameText] = useState("");

    const onUsernameChange = (e) => {
        setUsernameText(e.target.value);
    }
    
    const onSubmit = (e) => {
        if(userNameText!==""){
            getFromServer(props.apiUrl, "/isUserIdAvailable?idToCheck="+userNameText).then((response) =>{
                if(response===false){
                    props.loginAction(userNameText);
                }
                else{
                    props.setDisplayAlert(true);
                    props.setErrorMessage("error: user id does not exist.");
                }
            });
        } else{
            props.setDisplayAlert(true);
            props.setErrorMessage("error: no user id entered.");
        }
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>{props.textboxLabel}</Form.Label>
                <Form.Control onChange={onUsernameChange} type="text" placeholder="Enter username" />
            </Form.Group>
            <Button onClick={onSubmit} variant="outline-dark" >
                Log In
            </Button>
        </Form>
    );
};

export default UsernameForm;