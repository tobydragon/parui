import {Alert} from 'react-bootstrap';
import { useState } from 'react';

/**
 * @prop {string} message
 * @prop {boolean} showAlert
 * @prop {function} closeAlert
 */

export const ErrorAlert = (props) => {
    
    return(
        <Alert transition={false} show ={props.showAlert} variant ='light' onClose={props.closeAlert} dismissible>
            {props.message}
        </Alert>
    );
    
};

export default ErrorAlert;