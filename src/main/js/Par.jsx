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
    const [displayAlert, setDisplayAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState("no message to report");

    const onErrorFixed = () =>{
        setDisplayAlert(false);
    };

    const logInStudent = (newUserId) => {
        if(newUserId!==''){
            setState({
                mode: ParModes.STUDENT,
                userId: newUserId
            });
            console.log(newUserId);
        } else{
            setDisplayAlert(true);
            setErrorMessage("error: no userId entered.");
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
        return (
        <LoginArea 
            loginAction={logInStudent} changeToCreateUser={changeToCreateUser} apiUrl={props.apiUrl} containerStyle={containerStyle} 
            displayAlert={displayAlert} onErrorFixed={onErrorFixed} errorMessage={errorMessage} 
            setErrorMessage={(message)=>{setErrorMessage(message)}} setDisplayAlert={(show)=>{setDisplayAlert(show)}}
        />);
    }
    else if (state.mode === ParModes.STUDENT){
        return <StudentView userId={state.userId} apiUrl={props.apiUrl} logout={logout} containerStyle={containerStyle} />
    }
    else if(state.mode === ParModes.CREATE_USER){
        return(
        <UserCreation 
            apiUrl={props.apiUrl} cohortIds={state.cohortIds} containerStyle={containerStyle} 
            logInStudent={logInStudent} displayAlert={displayAlert} onErrorFixed={onErrorFixed} 
            errorMessage={errorMessage} setErrorMessage={(message)=>{setErrorMessage(message)}} setDisplayAlert={(show)=>{setDisplayAlert(show)}}
        />);
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