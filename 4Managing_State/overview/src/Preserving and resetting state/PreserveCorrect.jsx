import React from 'react';
import ContactList from './ContactList.js';
import Chat from './Chats.js';
import { useState } from 'react';

const PreserveCorrect = () => {
    const [to,setTo] = useState(contacts[0]);

  return (
    <>
        <h1>Preserving and resetting state</h1>
        <h2>
            This change the correct user
        </h2>

        <ContactList
            contacts={contacts}
            selectedContact={to}
            onSelect={contact => setTo(contact)}
        />

        <Chat key={to.email} contact={to} />
    </>
  )
}

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
  ];

export default PreserveCorrect
