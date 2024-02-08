import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
    const [input,setInput] = new useState(
        {
            "name":""
               }
)
    const [data,setData] = new useState([])


    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }


    const readValues = ()=>{
        axios.post("http://localhost:3001/api/fitness/search",{name:input.name}).then((response)=>{
            setData(response.data)
        })
    }

  return (
    <div>
      <NavBar />
      <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12
col-xl-12 col-xxl-12">

                <div className="row g-3">

                    <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control"
name="name" value={input.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success"
onClick={readValues}>SUBMIT</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                    <h2>CONDITIONS-STATUS</h2>
                    <ul>
                    {
                    data.map((value,index) => {
return <li>
                        <strong>name:</strong> {value.name}  <br />
                        <strong>water:</strong> {value.water} <br />
                        <strong>calories:</strong> {value.calories} <br />
                        <strong>exercise:</strong> {value.exercise} <br />
                        <strong>sleep:</strong> {value.sleep} <br />
                        <strong>condition:</strong> {value.condition} <br />
                        </li>
                    }
                    )}
                </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search