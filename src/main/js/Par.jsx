import { useState } from "react";
import { getFromServer } from "./Comm";
import LoginArea from "./LoginArea";
import StudentView from "./StudentView";
import UserCreation from "./UserCreation";

const ParModes = {
    LOGIN: 1,
    STUDENT: 2,
    CREATE_USER: 3
}

const defaultState = {
    mode: ParModes.LOGIN,
    userId: null
}
/**
 * @prop {string} apiUrl
 */

export const Par = (props) => {
    const [state, setState] = useState(defaultState);

    const logInStudent = (newUserId) => {
        
        // setState({
        //     mode: ParModes.STUDENT,
        //     userId: newUserId
        // });
        console.log(newUserId);
               
    }

    const logout = () => {
        console.log("logout chosen");
        setState(defaultState);
    }

    const changeToCreateUser = (cohortIds) => {
        setState({
            mode:ParModes.CREATE_USER,
            cohortIds: cohortIds,
        });
    }

    if (state.mode === ParModes.LOGIN){
        return <LoginArea loginAction={logInStudent} changeToCreateUser={changeToCreateUser} apiUrl={props.apiUrl} />
    }
    else if (state.mode === ParModes.STUDENT){
        return <StudentView userId={state.userId} apiUrl={props.apiUrl} logout={logout}/>
    }
    else if(state.mode === ParModes.CREATE_USER){
        return <UserCreation apiUrl={props.apiUrl} cohortIds={state.cohortIds}/>
    }
    else {
        throw new Error("unrecognized ParMode");
    }
};

export default Par;