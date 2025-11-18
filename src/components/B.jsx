import React, { useEffect, useState } from 'react'
import axios from 'axios'
function B() {
    const [Products,setProducts]=useState(null);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setProducts(res.data))
    },[])
  return (
    <div>

        { Products && Products.map((p,i)=>{
return <>
<p>
{p.id}{p.title}Hello</p>
<img src={p.image} alt=""  />
<hr />

</>


        })}
    </div>
  )
}

export default B;