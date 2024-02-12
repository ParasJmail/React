function ItemsAssignToVariable({name,isPacked}){
    let itemContent = name;
    if(isPacked){
        itemContent = name + '✔';
    }
    
    return(
        <li className = "item">
            {itemContent}
        </li>
        
    )
}

export default function PackingListAssignToVariable(){
    return(
        <section>
            <h1>Paras Packing List with Conditionally Assigning JSX To A Variable</h1>

            <ItemsAssignToVariable 
                name='Cycle'
                isPacked={true}
            />
            <ItemsAssignToVariable 
                name='Car'
                isPacked={false}
            />
        </section>
    )
}