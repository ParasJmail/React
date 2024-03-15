import { useState } from "react";

export default function Nested(){
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleNameChange(e){
        setPerson({
            ...person,
            name:e.target.value
        });
    }

    function handleTitleChange(e){
        setPerson({
            ...person,
            artwork:{
                ...person.artwork,
                title:e.target.value
            }
        })
    }

    function handleCityChange(e){
        const nextArtwork = {...person.artwork,city:e.target.value};
        const nextPerson = {...person,artwork:nextArtwork};
        setPerson(nextPerson);
    }

    function handleImageChange(e){
        const nextArtwork = {...person.artwork,image:e.target.value};
        const nextPerson = {...person,artwork:nextArtwork};
        setPerson(nextPerson);
    }

    return(
        <>
            <h1>Updating a nested object</h1>
            <label>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />

                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    );
}