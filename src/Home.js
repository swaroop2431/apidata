import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
function Home(){
    const [data, setData] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        const apiCalls = await axios('https://fakestoreapi.com/products')
        setData(apiCalls.data)
        console.log(apiCalls)
    }
    return(
        <>
            <div className="product-list">
            {
                data?.map(i=>(
                    <div key= {i.id}>
                        <div className="card">
                        <img src={i.image} alt="" />
                        <p>{i.title}</p>
                        <p>{i.price}</p>
                        <Link to={`/${i.id}`}>View More</Link>
                        </div>
                    </div>
                ))
            }
            </div>
            
        </>
    )
}
export default Home
