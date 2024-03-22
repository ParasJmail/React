import React from 'react'
import ContactList from './ContactList.js'
import Chat from './Chats'
import { useState } from 'react'

const Preserve = () => {
    const [to,setTo] = useState(contacts[0])
  return (
    <>
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
