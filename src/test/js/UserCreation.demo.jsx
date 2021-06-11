import UserCreation from "../../main/js/UserCreation";

export const UserCreationDemo = (props) => {
    return(
        <UserCreation cohortIds={["random", "inOrder"]} apiUrl="/api2" />
    );
};


export default UserCreationDemo;