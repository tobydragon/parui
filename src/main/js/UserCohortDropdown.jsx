import { Col, Container, Form, Row } from 'react-bootstrap';


/**
 * @prop {function} handleCohortChange: function called when a cohort is selected, takes new string cohort
 * @prop {string} currentCohortId
 * @prop {list of strings} cohortIdOptions
 */

export const UserCohortDropdown = (props) => {
    if (!props.cohortIdOptions){
        throw new Error("cohorts undefined");
    }

    const onCohortChange = (e) =>{
        props.handleChange(props.currentCohortId,e.target.value);
    }
    const dropdownTitle = "---Select Cohort---";
    const dropdownChoices = props.cohortIdOptions.map(possCohortStr => (<option key={possCohortStr}>{possCohortStr}</option>));

    return(
        <Container>
            <Row>
                <Col>
                <Form.Control as="select" onChange={onCohortChange} value={props.currentCohortId} >
                <option disabled>{dropdownTitle}</option>
                    {dropdownChoices}
                </Form.Control>
                </Col>

            </Row>
        </Container>
    );
}

export default UserCohortDropdown;