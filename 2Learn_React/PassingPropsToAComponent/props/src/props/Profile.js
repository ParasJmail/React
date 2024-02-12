import getImageUrl from "./utils"
import './Props.css'
import Avatr from "./Avatr";

// //This is without props
// export function Profile(){
//     return(
//         <Avatar/>
//     )
// }


function Avatar({person ,size}){
  
  return (
        <img
          className="avatar"
          src={getImageUrl(person)}
          alt={person.name}
          width={size}
          height={size}
        />
      );
}

//pass two props: person (an object), and size (a number):
export default function Profile(){
    return(
      <div>
        <Avatar 
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
        />
        <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'gallery',
          imageId: '00adS2y'
        }}
      />

      
    </div>
    )
}

//This contain all data and theirp props for {...props}
function Ava(props){
  let person = props.person;
  let size = props.size

  size=50
  person={ 
    name: 'Lin Lanying',
    imageId: '1bX5QH6'
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
export function Prof(props){
  return (
    <Ava 
    {...props}
    
    />
  )
}

//Passing JSX as children
function Card({children}){
  return(
    <div className="card">
      {children}

    </div>
  );
}
export function Profl(){
  return(
    <Card>
      <Avatr 
        size={100}
        person={{
          name:'Katsuko Saruhashi',
          imageId:'YfeOqp2'
        }}
      />
    </Card>
  )
}
