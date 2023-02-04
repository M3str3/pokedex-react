import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components';

const Items = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        alert("Funcion no disponible")
        navigate(-1)
    })
    return( 
    <>
    <h1>Items</h1>
    <button onClick={() => navigate(-1)}></button>
    <Footer></Footer>
    </>
    )
}

export default Items