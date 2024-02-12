function Item({name,isPacked}){
    if (isPacked){
        return (
            <li className='item'>{name} ✔</li>
        )
    }
    return (
        <li className='item'>{name}</li>
        )
}

export default function PackingList(){
    return(
        <section>
            <h1>Paras Packing List</h1>
            <Item 
            name='Suit'
            isPacked={false}
            />
            <Item 
            name='bottle'
            isPacked={true}
            />

        </section>
    )
}

