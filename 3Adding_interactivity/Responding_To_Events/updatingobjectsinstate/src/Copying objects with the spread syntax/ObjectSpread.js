import { useState } from "react";

export default function ObjectSpread(){
    const [person,setPerson] = useState({
        firstName:'Paras',
        lastName:'Jaitly',
        email:'paras@gmail.com'
    });

    function handleFirstNameChange(e){
        setPerson({
            firstName:e.target.value,
            lastName:person.lastName,
            email:person.email
        });
    }

    function handleLastNameChange(e){
        setPerson({
            ...person,
            lastName:e.target.value
        });
    }

    function handleEmailChange(e){
        setPerson({
            ...person,
            email:e.target.value
        });
    }

    return(
        <>
            <h1>Copying objects with the spread syntax with Object Spread syntax</h1>
            <label>
                First Name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last Name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    )
}