import { useState } from "react";
import LoginArea from "./LoginArea";
import StudentView from "./StudentView";

const ParModes = {
    LOGIN: 1,
    STUDENT: 2
}

const defaultState = {
    mode: ParModes.LOGIN,
    userId: null
}

export const Par = (props) => {
    const [state, setState] = useState(defaultState);

    const logInStudent = (newUserId) => {
        setState({
            mode: ParModes.STUDENT,
            userId: newUserId
        });
    }

    const logout = () => {
        console.log("logout chosen");
        setState(defaultState);
    }

    if (state.mode === ParModes.LOGIN){
        return <LoginArea loginAction={logInStudent} />
    }
    else if (state.mode === ParModes.STUDENT){
        return <StudentView userId={state.userId} apiUrl="/api2" logout={logout}/>
    }
    else {
        throw new Error("unrecognized ParMode");
    }
};

export default Par;