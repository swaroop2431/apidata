import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

function Details(){
    const [data,setData] = useState([])
    const {id} = useParams()
    console.log(useParams())
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const apiCalls = await axios(`https://fakestoreapi.com/products/${id}`)
        setData(apiCalls.data)
        console.log(apiCalls.data)
    }
    console.log(data)
    return(
        <>
            <h1>Id:{data.id}</h1>
            <img src={data.image} alt="" />
            <h1>Title:{data.title}</h1>
            <p>$ {data.price}</p>
            <p>Description:{data.description}</p>
        </>
    )
}
export default Details