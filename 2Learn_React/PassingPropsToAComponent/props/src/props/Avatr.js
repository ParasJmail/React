import getImageUrl from "./utils.js";

export default function Avatr({person,size}){
    return(
        <img 
            className = "avatr"
            src = {getImageUrl(person)}
            alt = {person.name}
            width = {size}
            height = {size}

        />
    )
}