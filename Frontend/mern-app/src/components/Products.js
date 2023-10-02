import React, { useEffect, useState } from 'react'

export const Products = () => {


    const [product, setProduct] = useState([])
    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = async () => {
        let result = await fetch('http://localhost:8000/get-products', {
            method: 'get',
        })
        result = await result.json()
        if(result.length>0){
            setProduct(result)
            
        }
    }



    const deleteProduct= async(id)=>{
        let result = await fetch(`http://localhost:8000/delete/${id}`,{
            method:'Delete'
        })
        result = await result.json()
        if(result){
            getProducts()
        }
    }



    return (
        <div>
        {product.map((item)=>(
            <ul key={item._id}>
                <li>
                    {item.productName}
                </li>
                <li>
                    {item.model}
                </li>
                <li>
                    {item.price}
                </li>
                <li><button onClick={()=>deleteProduct(item._id)}>Delete</button></li>
            </ul>
        ))}
        </div>
    )
}
