import React from 'react'
import ContactList from './ContactList.js'
import Chat from './Chats'

import { useState } from 'react'

const Preserve = () => {
    const [to,setTo] = useState(contacts[0])
  return (
    <>
        <h1>Preserving and resetting state</h1>
        <h2>
        In this chat app, typing a message and then switching the recipient does not reset the input. This can make the user accidentally send a message to the wrong person
        </h2>
        <ContactList
            contacts={contacts}
            selectedContact={to}
            onSelect={contact => setTo(contact)}
        />
        <Chat contact={to} />
    </>
  )
}

const  contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];

export default Preserve
