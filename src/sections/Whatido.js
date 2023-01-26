import React, { useState } from 'react';

export default function Whatido () {

    const [whatido, setWhatido] = useState([
        {
            title: "Livery design",
            desc: "I design all kinds of racing liveries!",
            img: "http://www.varjodesigns.com/img/skillset/livery.png",
        },
        {
            title: "Illustration",
            desc: "High quality vector illustrations",
            img: "http://www.varjodesigns.com/img/skillset/illustration.png",
        },
        {
            title: "Web design",
            desc: "I'm a programming student",
            img: "http://www.varjodesigns.com/img/skillset/code.png",
        },
    ]);

    return(
        <div>
            { whatido.map( whatido => {
                return(
                    <div key={ whatido.title }>
                        <h4> {whatido.title} </h4>
                        <p> {whatido.desc} </p>
                        <small> {whatido.img} </small>
                    </div>
                )
            })}
        </div>
    )
}