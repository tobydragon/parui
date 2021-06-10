import UserCohortDropdown from "./UserCohortDropdown";
import {getFromServer, postToServer} from "./Comm";
import {useState} from "react";




/**
 * @prop {string} apiUrl
 * @prop {list of strings} cohortIds
 * @prop {string} currentCohortId
 * @prop {string} userId
 * @prop {boolean} userIdIsTaken
 */

export const UserCreation = (props) => {
    const [cohortIdSelected,setCohortIdSelected] = useState("---Select Cohort---");

    const handleCohortChange = (currentCohortId,newCohortId) => {
        currentCohortId = props.cohortIds.filter(cohortId => cohortId===newCohortId);
        setCohortIdSelected(currentCohortId);
    };

    const createUser = () =>{
        //TODO: Error handling for if userId is taken or cohort doesn't exist
        if(props.userIdIsTaken){
            throw new Error("User ID is taken. Choose a new one.");
        }
        const studentModelJson = {studentId: props.userId, questionHistories:{}};
        postToServer(props.apiUrl,"/createNewUser",studentModelJson);
        postToServer(props.apiUrl,"/addNewUserToCohort",props.userId,)
    }

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
        </div>
    );

}

export default UserCreation;