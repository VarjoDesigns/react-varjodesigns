import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../sections/Contact';
import History from '../sections/History';

export default function Navi () {

    return(
        <div>
            <h2>Varjo Designs</h2>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}