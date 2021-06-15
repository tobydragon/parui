import { Form } from 'react-bootstrap';


/**
 * @prop {function} handleCohortChange: function called when a cohort is selected, takes new string cohort
 * @prop {string} currentCohortId
 * @prop {list of strings} cohortIds
 */

export const UserCohortDropdown = (props) => {
    if (!props.cohortIds){
        throw new Error("cohorts undefined");
    }

    const onCohortChange = (e) =>{
        props.handleChange(e.target.value);
    }
    const dropdownTitle = "---Select Cohort---";
    const dropdownChoices = props.cohortIds.map(possCohortStr => (<option key={possCohortStr}>{possCohortStr}</option>));

    return(
        <Form.Control as="select" onChange={onCohortChange} value={props.currentCohortId} >
            <option disabled>{dropdownTitle}</option>
            {dropdownChoices}
        </Form.Control>      
    );
}

export default UserCohortDropdown;