import React, { useEffect, useState } from 'react'
import axios from 'axios'
function C() {
    const [Repices, SetRepices]=useState(null)
    useEffect(()=>{
        axios.get("https://dummyjson.com/recipes")
        .then((res)=>SetRepices(res.data.Repices))
    },[])
  return (
    <div>
      {Repices && Repices.map((r,s)=>{
        return<>
            <p>{r.name},{r.id}</p>
            <img src={r.image} alt="" />
            <hr />
        </>
      })}
    </div>
  )
}

export default C
