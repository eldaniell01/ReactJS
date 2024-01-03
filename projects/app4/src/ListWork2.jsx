export function ListWork2(){
    const products = [
        { title: 'shirt', id: 1 },
        { title: 'pants', id: 2 },
        { title: 't-shirt', id: 3 },
    ];
    
    const listItems = products.map(product => 
        <li key={product.id}>
            {product.title}
        </li>
    )
    return(
        <ul>{listItems}</ul>
    )
}