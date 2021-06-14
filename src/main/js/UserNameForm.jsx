import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const UsernameForm = (props) => {

    const [userNameText, setUsernameText] = useState("");

    const onUsernameChange = (e) => {
        setUsernameText(e.target.value);
    }
    
    const onSubmit = () => {
        props.loginAction(userNameText);
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