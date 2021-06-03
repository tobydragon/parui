import { Form, Navbar, Button } from "react-bootstrap";
import { ParLogo } from "./ParLogo";

export const StudentHeader = (props) => {
    return (
        <Navbar  style={{border: "solid", borderRadius: "5px", marginBottom: "10px", marginTop: "10px", borderWidth: "thin"}}>
            <Navbar.Brand>
                <ParLogo />
            </Navbar.Brand> 
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                 <p style={{fontSize: "15px", color: "black", margin: 0, marginRight: '5px'}} > Signed in as: <b>{props.userId}</b></p>
                </Navbar.Text>
                <Form inline>
                    <Button onClick={props.logout} variant="outline-dark" size="lg">
                        Sign Out
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default StudentHeader;