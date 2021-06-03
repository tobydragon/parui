import { Form, Button } from "react-bootstrap";

export const UsernameForm = (props) => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>{props.texboxLabel}</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Button variant="outline-dark" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default UsernameForm;