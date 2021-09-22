import React from 'react';

export default function ListCustomers (props) {

    // This component receives the customers in "sections" and displays them

    if (props.customer.length === 0) {
        return(
            <p>Nothing to display as of now! :(</p>
        )
    }

    return(
        <div>
            <h2>My customers</h2>
            { props.customer.map( customer => {
                return(
                    <div key={ customer.name }>
                        <p> { customer.name } </p>
                        <p> { customer.description } </p>
                        <br /> 
                    </div>
                )
            })
        }
        </div>
    )
}