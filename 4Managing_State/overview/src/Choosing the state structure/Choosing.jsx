import React from 'react';
import { useState } from 'react';


const Choosing = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [fullName,setFullName] = useState('');

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }
    function handleLastNameChange(e){
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }
  return (
    <>
      <h1>Choosing the state structure</h1>

      <h2>Let's check you in</h2>

      <label>
        First Name : {''}
        <input
            value={firstName}
            onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name : {''}
        <input
            value={lastName}
            onChange={handleLastNameChange}
        />
      </label>

      <p>Your Ticket will be issued to: <b>{fullName}</b></p>
    </>
  )
}

export default Choosing
