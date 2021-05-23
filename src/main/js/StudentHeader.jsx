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
        <Navbar  style={{border: "solid", borderRadius: "5px", marginBottom: "10px", marginTop: "10px", borderWidth: "thin"}}>
            <Navbar.Brand style={{border: "solid", borderRadius: "5px", borderWidth: "thin"}}>
                <p style={{fontSize: "25px", margin: "0", textAlign:"center"}}> PAR </p>
                <p style={{fontSize: "15px", margin: "0", paddingLeft: "5px", paddingRight: "5px", }}>Practice, Assessment, Review</p>
                {/* <img style={brandStyle} src={ParLogo} alt="PAR logo"></img>*/}
            </Navbar.Brand> 
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                 <p style={{fontSize: "15px", color: "black", margin: 0, marginRight: '5px'}} > Signed in as: <b>{props.userId}</b></p>
                </Navbar.Text>
                <Form inline>
                    <Button variant="outline-dark" size="lg">
                        Sign Out
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default StudentHeader;