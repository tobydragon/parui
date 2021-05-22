import ParLogo from "../resources/PARlogo.JPG";
import { Form, Navbar, Button } from "react-bootstrap";
import {GrLogout} from "react-icons/gr"

export const StudentHeader = (props) => {
    const brandStyle={
        width: '150px',
        height: '60px',
        border: '1px solid black',
        borderRadius: '5px'   
    };

    return (
        <Navbar>
            <Navbar.Brand ><img style={brandStyle} src={ParLogo} alt="PAR logo"></img></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Signed in as: {props.userId}
                </Navbar.Text>
                <Form inline>
                    <Button variant="outline-dark" size="lg">
                        Logout
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default StudentHeader;