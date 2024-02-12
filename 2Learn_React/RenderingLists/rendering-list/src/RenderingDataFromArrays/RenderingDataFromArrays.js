const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List(){
    const listItems = people.map(person =>
        <li>{person}</li>
        );

        return(
            <li>
                <h1>Rendering List with map keyword from arrays</h1>
                {listItems}
            </li>
        )
}