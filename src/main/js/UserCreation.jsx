import UserCohortDropdown from "./UserCohortDropdown";
import {getFromServer, postToServer} from "./Comm";
import {useState} from "react";
import { Button } from "react-bootstrap";

/**
 * @prop {string} apiUrl
 * @prop {list of strings} cohortIds
 */
export const UserCreation = (props) => {
    //TODO: should be updated when typing into a text box, need to start idToTry out as blank or something, and not allow it to be sent as blank
    const [idToTry, setIdToTry] = useState("bob");
    const [cohortIdSelected,setCohortIdSelected] = useState("---Select Cohort---");

    const handleCohortChange = (newCohortValue) => {
        setCohortIdSelected(newCohortValue);
    };

    const createUser = () =>{
        getFromServer(props.apiUrl, "/isUserIdAvailable?idToCheck="+idToTry).then((response)=> {
            console.log(response);
            if (response === true){
                const userCreationJson = {userId:idToTry, cohortId: cohortIdSelected};
                //TODO: once the API is there, call to create a new user
                console.log(userCreationJson);
                //postToServer(props.apiUrl,"/createNewUser", );
            }
            else {
                console.log("Bad user Id attempted");
            }
        });
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
            <UserCohortDropdown handleChange = {handleCohortChange} currentCohortId={cohortIdSelected} cohortIdOptions = {props.cohortIds}/>
            <Button onClick={createUser} > Create User </Button>
        </div>
    );

}

export default UserCreation;