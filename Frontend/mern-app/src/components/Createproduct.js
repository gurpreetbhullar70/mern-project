import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Createproduct = () => {

    const [productName, setProductName] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()




    const onSubmit = async () => {
        setProductName('')
        setModel('')
        setPrice('')
        console.log(productName, model, price)
        let result = await fetch('http://localhost:8000/add-products', {
            method: 'post',
            body: JSON.stringify({ productName, model, price }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json()
        if(result){
            navigate('/create')
        }


    }




    return (
        <div>
            <form action="/add-products">
                <input type="text" onChange={(e) => setProductName(e.target.value)} value={productName} />
                <input type="text" onChange={(e) => setModel(e.target.value)} value={model} />
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
            </form>
            <button onClick={onSubmit}>Add</button>


        </div>
    )
}
