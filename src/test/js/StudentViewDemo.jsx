import StudentView from "../../main/js/StudentView";

export const StudentViewDemo = () => {
    return (
        <StudentView userId="Ted"  apiUrl="http://localhost:8080/api/" />
    );
};

export default StudentViewDemo;