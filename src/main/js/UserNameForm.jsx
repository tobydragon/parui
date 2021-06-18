import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getFromServer  } from "./Comm";

export const UsernameForm = (props) => {

    const [userNameText, setUsernameText] = useState("");

    const onUsernameChange = (e) => {
        setUsernameText(e.target.value);
    }
    
    const onSubmit = (e) => {
        if(userNameText!==""){
            e.preventDefault();
            getFromServer(props.apiUrl, "/isUserIdAvailable?idToCheck="+userNameText).then((response) =>{
                if(response===false){
                    props.loginAction(userNameText);
                }
                else{
                    console.log("User does not exist. Must create new user.");
                }
            });
        } else{
            e.preventDefault();
            console.log("invalid user Id submitted");
        }
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>{props.textboxLabel}</Form.Label>
                <Form.Control onChange={onUsernameChange} type="text" placeholder="Enter username" />
            </Form.Group>
            <Button onClick={onSubmit} variant="outline-dark" type="submit">
                Log In
            </Button>
        </Form>
    );
};

export default UsernameForm;