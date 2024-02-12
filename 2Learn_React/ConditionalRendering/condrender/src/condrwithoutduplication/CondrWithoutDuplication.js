function Items1({name,isPacked}){
    return(
        <li className='item'>
            {isPacked ? (
                <del>
                    {name + '✔'}
                </del>
            ):(
                name
            )}
        </li>

    )
}

export default function PackingWithoutDuplication(){
    return(
        <section>
            <h1>
                Paras Packing list without duplication by conditional operator or ternary operator
            </h1>
            <ul>
                <Items1 
                    isPacked={true}
                    name='Bottle'
                />
                <Items1 
                    isPacked={false}
                    name='bag'
                />

            </ul>
        </section>
    )
}