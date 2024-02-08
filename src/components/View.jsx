import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const[data,setData]=new useState([])
    const getData=()=>{
        axios.get("http://localhost:3001/api/fitness/view").then(
            (response)=>{
                setData(response.data)

            }
        )
    }
    useEffect( ()=>{getData()},[])
  return (
    <div>
        <NavBar/>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">water</th>
      <th scope="col">calories</th>
      <th scope="col">exercise</th>
      <th scope="col">sleep</th>
      <th scope="col">condition</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>
            
                <td>{value.name}</td>
                <td>{value.water}</td>
                <td>{value.calories}</td>
                <td>{value. exercise}</td>
                <td>{value.sleep}</td>
                <td>{value.condition}</td>
              </tr>
            }
        )
    }
   
  </tbody>
</table>

    </div>
  )
}

export default View