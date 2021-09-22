import React, { useState } from 'react';
import ListCustomers from '../components/ListCustomers';
import ShowSubmission from '../components/ShowSubmission';

export default function Contact () {

    // These could be inserted as an array and rendered in another component?
    // Would be more future proof as one could add and remove entries through backend api and not have to update the frontend

    const [contact, setContact] = useState(
        {
            title: '',
            description: '',
            email: '',
        }
    )

    const [message, setMessage] = useState ('')

    const update = (e) => {
        setContact( {   ...contact, [e.target.name]: e.target.value });
        setMessage('');
    }

    const addContact = (e) => {
        e.preventDefault();

        if (!contact.title || !contact.description) {
            setMessage('Kaikissa kentissä tulee olla arvot!')
        }
        
        setContact( { 
            ...contact,
            [e.target.name]: e.target.value
        });

    }

    return(
        <div>
            <form>
                <h2>Contact form</h2>
                <label htmlFor='title' >Title </label>
                <input type='text' name='title' value={ contact.title }onChange={ (e) => update(e) } /><br />

                <label htmlFor='description' >Description </label>
                <input type='text' name='description' value={ contact.description }onChange={ (e) => update(e) } /><br />
                
                <label htmlFor='email' >Email address </label>
                <input type='text' name='email' value={ contact.email }onChange={ (e) => update(e) } /><br />

                <input type='submit' value='Lisää' onClick={ (e) => addContact(e) } />
                <p> { message } </p>
            </form>

            <ShowSubmission contact = { contact }/>
        </div>
    )
}