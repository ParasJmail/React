import { useState } from "react";
import { useImmer } from "use-immer";

let nextId = 3;

const initialList = [
    { id: 0, title: 'Title 1', seen: false },
    { id: 1, title: 'Title 2', seen: false },
    { id: 2, title: 'Title 3', seen: true },
  ];

  export default function ImmerList(){
    const [myList,updateMyList] = useImmer(initialList);
    const [yourList,updateYourList] = useImmer(initialList);

    function handleToggleMyList(id,nextSeen){
        updateMyList(draft => {
            const artwork = draft.find(a =>
                a.id === id
                );
            artwork.seen = nextSeen;
        });
    }

    function handleToggleYourList(artworkId,nextSeen){
        updateYourList(draft => {
            const artwork = draft.find(a =>
                a.id === artworkId
                );
            artwork.seen = nextSeen;
        });
    }

    return(
        <>
            <h1>Write concise update logic with Immer</h1>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList} />
            <h2>Your list of art to see:</h2>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleYourList} />
        </>
    );
  }

  function ItemList({ artworks, onToggle }) {
    return (
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => {
                  onToggle(
                    artwork.id,
                    e.target.checked
                  );
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }
  