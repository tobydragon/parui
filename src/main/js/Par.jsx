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
 * @prop {style Obj} containerStyle
 */

export const Par = (props) => {
    const [state, setState] = useState(defaultState);

    const logInStudent = (newUserId) => {
        if(newUserId!==""){
            getFromServer(props.apiUrl, "/isUserIdAvailable?idToCheck="+newUserId).then((isUserIdAvailable) =>{
                if(isUserIdAvailable===false){
                    setState({
                        mode: ParModes.STUDENT,
                        userId: newUserId
                    });
                }
                else{
                    console.log("User does not exist. Must create new user.");
                }
            });
        } else{
            console.log("invalid user Id submitted");
        }
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
        return <LoginArea loginAction={logInStudent} changeToCreateUser={changeToCreateUser} apiUrl={props.apiUrl} containerStyle={containerStyle} />
    }
    else if (state.mode === ParModes.STUDENT){
        return <StudentView userId={state.userId} apiUrl={props.apiUrl} logout={logout} containerStyle={containerStyle} />
    }
    else if(state.mode === ParModes.CREATE_USER){
        return <UserCreation apiUrl={props.apiUrl} cohortIds={state.cohortIds} containerStyle={containerStyle} />
    }
    else {
        throw new Error("unrecognized ParMode");
    }
};

const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    marginTop: '5px',
    paddingTop: "5px"
}

export default Par;