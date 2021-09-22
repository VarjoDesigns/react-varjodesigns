import React, { useState } from 'react';

export default function Socials () {

    // These could be inserted as an array
    // That way switching a link / name or other propery would update to all link sections throughout the site

    // in future these should be accessed via backend api

    const [social, setSocial] = useState([
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/VarjoDesigns',
            icon: '',
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/varjodesigns',
            icon: '',
        },
        {
            name: 'Behance',
            link: 'https://www.behance.net/VarjoDesigns',
            icon: '',
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/varjodesigns/',
            icon: '',
        },
        {
            name: 'YouTube',
            link: 'https://www.youtube.com/user/SideWinderRacing',
            icon: '',
        },
    ])

    return(
        <div>
            { social.map( social => {
                return(
                    <div key={ social.name }>
                        <a href={social.link}> { social.name } </a>
                    </div>
                )
            })
        }
        </div>
    )
}