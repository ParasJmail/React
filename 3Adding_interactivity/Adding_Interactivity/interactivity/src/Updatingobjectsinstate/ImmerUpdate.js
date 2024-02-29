import {useImmer} from 'use-immer';

export default function ImmerForm(){
    const [person,updatePerson] = useImmer({
        name:'Paras',
        artwork:{
            title:'Fantastic piece',
            city:'Lonavala',
            image:'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleNameChange(e){
        updatePerson(draft=>{
            draft.name = e.target.value;
        });
    }

    function handleTitleChange(e){
        updatePerson(draft=>{
            draft.artwork.title = e.target.value;
        })
    }

    function handleCityChange(e){
        updatePerson(draft=>{
            draft.artwork.city = e.target.value;
        })
    }
    function handleImageChange(e){
        updatePerson(draft=>{
            draft.artwork.image = e.target.value;
        })
    }

    return(
        <>  
            <h1>Updating objects in state: Use a library like Immer to reduce repetitive code</h1>
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

    )
}