import React, { useEffect, useState } from 'react'
import axios from 'axios'

function C() {
   const[recipes,setRecipes]=useState(null)
   useEffect(()=>{
    axios.get("https://dummyjson.com/recipes")
    .then(data=>setRecipes(data.data.recipes))



   },[])
  return (
    <div>

        {recipes && recipes.map((r,i)=>{

            return <>

            <h1>{r.id} {r.name} hello</h1>
            <img src={r.image} alt="" />
            <hr />


            
            
            
            </>
            
        })}
    </div>
  )
}

export default C