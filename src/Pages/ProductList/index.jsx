import React, {useEffect, useState} from "react"
import axios from 'axios'

const Product = () => {
const [data, setData]= useState([])
useEffect(()=>{
  axios.get(`https://rick-morty-3c452.firebaseio.com/heroes.json`)
    .then(res=>setData(res.data['-M4hkpNGoQXhJjS4ymkS']))
},[])

  return (
    <div>
      {data.map(el=>(
        <div>{el.name}</div>
      ))}
    </div>
  )
}

export default Product
