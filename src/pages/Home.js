import React from 'react';
import Display from '../sections/Display';
import Jumbotron from '../sections/Jumbotron';
import Socials from '../sections/Socials';
import Whatido from '../sections/Whatido';

export default function Home () {

    return(
        <div>
            <Display />
            <Jumbotron />
            <Whatido />
            <Socials />
        </div>
    )
}