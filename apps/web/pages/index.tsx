import { useState } from "react"
import axios from "axios"

export default function Home(){

 const [city,setCity] = useState("")
 const [cars,setCars] = useState([])

 async function search(){

  const res =
   await axios.get(
    "http://localhost:4000/api/vehicles?city="+city
   )

  setCars(res.data)

 }

 return (

  <div style={{padding:40}}>

   <h1>AutoLead Ultra</h1>

   <input
    placeholder="Cidade"
    onChange={(e)=>setCity(e.target.value)}
   />

   <button onClick={search}>
    Buscar
   </button>

   <ul>

    {cars.map((c:any,i:number)=>(
     <li key={i}>
      <a href={c.link} target="_blank">
       {c.title}
      </a>
     </li>
    ))}

   </ul>

  </div>

 )

}
