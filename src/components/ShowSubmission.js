import React from 'react';

export default function ShowSubmission (props) {

    // This component is for demonstration purposes at the moment
        // it cannot send anyuthing to a backend, so it just shows them below the form

    if (!props.contact.title || !props.contact.description || !props.contact.email) {
        return(
            <p>
                You have not entered a submission yet.
            </p>
        )
    }

    return(
        <div>
            <p> { props.contact.title } </p>
            <p> { props.contact.description } </p>
            <p> { props.contact.email } </p>
        </div>
    )
}