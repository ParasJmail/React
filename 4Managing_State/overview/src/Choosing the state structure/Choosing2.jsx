import React from 'react'
import { useState } from 'react'

const Choosing2 = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('')

    const fullName = firstName + ' ' + lastName;
    
    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }
    
    function handleLastNameChange(e){
        setLastName(e.target.value);
    }
    
  return (
    <>
      <h1>Choosing the state structure Removing Extra States for better structure</h1>

      <h2>Lets Check You in</h2>
      <label>
        First Name: {' '}
        <input
            value={firstName}
            onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name: {' '}
        <input
            value={lastName}
            onChange={handleLastNameChange}
        />
      </label>
      <p>Your ticket will be issued to: {fullName}</p>
    </>
  )
}

export default Choosing2
