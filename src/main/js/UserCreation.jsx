import UserCohortDropdown from "./UserCohortDropdown";
import {getFromServer, postToServer} from "./Comm";
import {useState} from "react";




/**
 * @prop {string} apiUrl
 * @prop {list of strings} cohortIds
 * @prop {string} userId
 * @prop {boolean} userIdIsTaken
 */

export const UserCreation = (props) => {
    const [cohortIdSelected,setCohortIdSelected] = useState("---Select Cohort---");

    const handleCohortChange = (currentCohortId,newCohortId) => {
        currentCohortId = props.cohortIds.filter(cohortId => cohortId===newCohortId);
        setCohortIdSelected(currentCohortId);
    };

    const createUser = (userIdIsTaken) =>{
        //TODO: Error handling for if userId is taken or cohort doesn't exist
        if(userIdIsTaken){
            throw new Error("User ID is taken. Choose a new one.");
        }
        //const studentModelJson = {studentId: props.userId, questionHistories:{}};
        const userJson = {userId: props.userId, cohortId: props.currentCohortId}
        postToServer(props.apiUrl,"/createNewUser",userJson);
        postToServer(props.apiUrl,"/addNewUserToCohort",userJson)
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