import UserCohortDropdown from "./UserCohortDropdown";
import UserNameForm from "./UserNameForm";
import {getFromServer, postToServer} from "./Comm";
import {useState} from "react";
import { Button, Form } from "react-bootstrap";

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

    const containerStyle = {
        border: "transparent",
        borderRadius: "5px",
        padding: '5px',
        height: '100%',
        margin: '5px'
    }


    return(
        <div style = {containerStyle} text = {cohortIdSelected}>
            {/*User Id TextBox */}
            <Form>
                <Form.Group>
                    <Form.Label>New Username</Form.Label>
                    <Form.Control onChange={onUserIdChange} type="text" placeholder="Enter new username" />
                </Form.Group>
            </Form>
            <UserCohortDropdown handleChange = {handleCohortChange} currentCohortId={cohortIdSelected} cohortIdOptions = {props.cohortIds}/>
            <Button onClick={createUser} > Create User </Button>
        </div>
    );

}

export default UserCreation;