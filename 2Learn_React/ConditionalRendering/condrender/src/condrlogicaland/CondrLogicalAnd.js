function ItemsAnd({name,isPacked}){
    return (
        <li className='item'>
            {name} {isPacked && '✔'}
        </li>

    )
}

export default function PackingListLogicalAnd(){
    return (
        <section>
            <h1>
                Paras Packing list with Logical And Operator for Conditional Rendering
            </h1>

            <ItemsAnd 
                name='Knife'
                isPacked={true}
            />
            <ItemsAnd 
                name='Suitcase'
                isPacked={false}
            />
        </section>
    )
}