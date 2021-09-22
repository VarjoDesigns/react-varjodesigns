import React, { useState } from 'react';
import ListCustomers from '../components/ListCustomers';

export default function Whatido () {

    // These could be inserted as an array and rendered in another component?
    // Would be more future proof as one could add and remove entries through backend api and not have to update the frontend

    const [customer, setCustomer] = useState([
        {
            name: 'Don Joewon Song',
            description: 'Logos, brand identity, liveries, animations...',
            image: '',
            testimonial: '',
        },
        {
            name: 'Wreckfest',
            description: 'liveries',
            image: '',
            testimonial: '',
        },
        {
            name: 'FaDa Racing',
            description: 'Logos, brand identity, Cayman GT4 livery',
            image: '',
            testimonial: '',
        },
        {
            name: 'RWB Nordics',
            description: 'Web design',
            image: '',
            testimonial: '',
        },
    ]
    )

    return(
        <div>
            <ListCustomers customer = { customer } />
        </div>
    )
}