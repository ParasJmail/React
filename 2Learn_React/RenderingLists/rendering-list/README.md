Rendering Lists
    You will often want to display multiple similar components from a collection of data. You can use the JavaScript array methods to manipulate an array of data. On this page, you’ll use filter() and map() with React to filter and transform your array of data into an array of components.

You will learn
    How to render components from an array using JavaScript’s map()
    How to render only specific components using JavaScript’s filter()
    When and why to use React keys

Rendering data from arrays 
    Say that you have a list of content.

    <ul>
        <li>Creola Katherine Johnson: mathematician</li>
        <li>Mario José Molina-Pasquel Henríquez: chemist</li>
        <li>Mohammad Abdus Salam: physicist</li>
        <li>Percy Lavon Julian: chemist</li>
        <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
    </ul>

    The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: from lists of comments to galleries of profile images. In these situations, you can store that data in JavaScript objects and arrays and use methods like map() and filter() to render lists of components from them.

    Here’s a short example of how to generate a list of items from an array:

        1.Move the data into an array:

            const people = [
                'Creola Katherine Johnson: mathematician',
                'Mario José Molina-Pasquel Henríquez: chemist',
                'Mohammad Abdus Salam: physicist',
                'Percy Lavon Julian: chemist',
                'Subrahmanyan Chandrasekhar: astrophysicist'
            ];

        2.Map the people members into a new array of JSX nodes, listItems:

            const listItems = people.map(person => <li>{person}</li>);

        3.Return listItems from your component wrapped in a <ul>:
            
            return <ul>{listItems}</ul>;

Filtering arrays of items 
    This data can be structured even more.

    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
    }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
    }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
    }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
    }];

    Let’s say you want a way to only show people whose profession is 'chemist'. You can use JavaScript’s filter() method to return just those people. This method takes an array of items, passes them through a “test” (a function that returns true or false), and returns a new array of only those items that passed the test (returned true).

    You only want the items where profession is 'chemist'. The “test” function for this looks like (person) => person.profession === 'chemist'. Here’s how to put it together:

    1. Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':
        
        const chemists = people.filter(person =>
        person.profession === 'chemist'
        );

    2. Now map over chemists:
    const listItems = chemists.map(person =>
        <li>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    3. Lastly, return the listItems from your component:
        return <ul>{listItems}</ul>;

    Check Filteringarraysoftems.js for code

Arrow functions implicitly return the expression right after =>, so you didn’t need a return statement:

    const listItems = chemists.map(person =>
    <li>...</li> // Implicit return!
    );
    
    However, you must write return explicitly if your => is followed by a { curly brace!

    const listItems = chemists.map(person => { // Curly brace
        return <li>...</li>;
    });

    Arrow functions containing => { are said to have a “block body”. They let you write more than a single line of code, but you have to write a return statement yourself. If you forget it, nothing gets returned! 

Keeping list items in order with key 

    Notice that all the sandboxes above show an error in the console:

    Console
        Warning: Each child in a list should have a unique “key” prop.

    You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:

    <li key={person.id}>...</li>
    
    Note
        JSX elements directly inside a map() call always need keys!

    Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

    Rather than generating keys on the fly, you should include them in your data:

    Check Keepinglistitemsinorderwithkey.js for code

Where to get your key 
    Different sources of data provide different sources of keys:

        Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
        
        Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

Rules of keys 
    Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
    
    Keys must not change or that defeats their purpose! Don’t generate them while rendering.

Why does React need keys? 
    Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.

    File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

