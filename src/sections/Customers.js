import React from 'react';

export default function Whatido () {

    // These could be inserted from a separate array and rendered in this component?
    // Would be more future proof as one could add and remove entries through backend api and not have to update the frontend

    return(
        <div>
            <h4>
                What i focus on
            </h4>

            <h5>Don Joewon Song</h5>
            <p>
                Logos, brand identity, liveries, templates...
            </p>

            <h5>Wreckfest</h5>
            <p>
                Liveries
            </p>

            <h5>FaDa Racing</h5>
            <p>
                Logos, brand identity, Cayman GT4 livery
            </p>

            <h5>RWB Nordics</h5>
            <p>
                Web design
            </p>
        </div>
    )
}