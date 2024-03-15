Updating Objects in State

    State can hold any kind of JavaScript value, including objects. But you shouldn’t change objects that you hold in the React state directly. Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.

    You will learn

        * How to correctly update an object in React state
        * How to update a nested object without mutating it
        * What immutability is, and how not to break it
        * How to make object copying less repetitive with Immer


    What’s a mutation?

        You can store any kind of JavaScript value in state.

            const [x, setX] = useState(0);

        So far you’ve been working with numbers, strings, and booleans. These kinds of JavaScript values are “immutable”, meaning unchangeable or “read-only”. You can trigger a re-render to replace a value:

            setX(5);

        The x state changed from 0 to 5, but the number 0 itself did not change. It’s not possible to make any changes to the built-in primitive values like numbers, strings, and booleans in JavaScript.

        Now consider an object in state:

            const [position, setPosition] = useState({ x: 0, y: 0 });

        Technically, it is possible to change the contents of the object itself. This is called a mutation:

            position.x = 5;

        However, although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.

    Treat state as read-only

        In other words, you should treat any JavaScript object that you put into state as read-only.

        This example holds an object in state to represent the current pointer position. The red dot is supposed to move when you touch or move the cursor over the preview area. But the dot stays in the initial position: TreatState.js

        The problem is with this bit of code.

            onPointerMove={e => {
                position.x = e.clientX;
                position.y = e.clientY;
            }}

        This code modifies the object assigned to position from the previous render. But without using the state setting function, React has no idea that object has changed. So React does not do anything in response. It’s like trying to change the order after you’ve already eaten the meal. While mutating state can work in some cases, we don’t recommend it. You should treat the state value you have access to in a render as read-only.

        To actually trigger a re-render in this case, create a new object and pass it to the state setting function:

            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}

        With setPosition, you’re telling React:

            * Replace position with this new object
            * And render this component again

        Notice how the red dot now follows your pointer when you touch or hover over the preview area: TreatStateCorrect.js

    Copying objects with the spread syntax

        In the previous example, the position object is always created fresh from the current cursor position. But often, you will want to include existing data as a part of the new object you’re creating. For example, you may want to update only one field in a form, but keep the previous values for all other fields.

        These input fields don’t work because the onChange handlers mutate the state: CopyObjects.js

        For example, this line mutates the state from a past render:

            person.firstName = e.target.value;

        The reliable way to get the behavior you’re looking for is to create a new object and pass it to setPerson. But here, you want to also copy the existing data into it because only one of the fields has changed:

            setPerson({
                firstName: e.target.value, // New first name from the input
                lastName: person.lastName,
                email: person.email
            });

        You can use the ... object spread syntax so that you don’t need to copy every property separately.

            setPerson({
                ...person, // Copy the old fields
                firstName: e.target.value // But override this one
            });

        Now the form works!

        Notice how you didn’t declare a separate state variable for each input field. For large forms, keeping all data grouped in an object is very convenient—as long as you update it correctly!

        ObjectSpread.js

        Note that the ... spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.

    Updating a nested object

        Consider a nested object structure like this:

            const [person, setPerson] = useState({
                name: 'Niki de Saint Phalle',
                artwork: {
                    title: 'Blue Nana',
                    city: 'Hamburg',
                    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
                }
            });

        If you wanted to update person.artwork.city, it’s clear how to do it with mutation:

            person.artwork.city = 'New Delhi';

        But in React, you treat state as immutable! In order to change city, you would first need to produce the new artwork object (pre-populated with data from the previous one), and then produce the new person object which points at the new artwork:

            const nextArtwork = { ...person.artwork, city: 'New Delhi' };
            const nextPerson = { ...person, artwork: nextArtwork };
            setPerson(nextPerson);

        Or, written as a single function call:

            setPerson({
                ...person, // Copy other fields
                artwork: { // but replace the artwork
                    ...person.artwork, // with the same one
                    city: 'New Delhi' // but in New Delhi!
                }
            });

        This gets a bit wordy, but it works fine for many cases: nested.js

    Write concise update logic with Immer

        If your state is deeply nested, you might want to consider flattening it. But, if you don’t want to change your state structure, you might prefer a shortcut to nested spreads. Immer is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you. With Immer, the code you write looks like you are “breaking the rules” and mutating an object:

            updatePerson(draft => {
                draft.artwork.city = 'Lagos';
            });

        But unlike a regular mutation, it doesn’t overwrite the past state!

        To try Immer:

            1. Run npm install use-immer to add Immer as a dependency
            2. Then replace import { useState } from 'react' with import { useImmer } from 'use-immer'

        Here is the above example converted to Immer: UseImmer.js

        Notice how much more concise the event handlers have become. You can mix and match useState and useImmer in a single component as much as you like. Immer is a great way to keep the update handlers concise, especially if there’s nesting in your state, and copying objects leads to repetitive code.

        Recap

            * Treat all state in React as immutable.
            * When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
            * Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
            * You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.
            * Spread syntax is shallow: it only copies one level deep.
            * To update a nested object, you need to create copies all the way up from the place you’re updating.
            * To reduce repetitive copying code, use Immer.
