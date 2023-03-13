import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

    const [fisrtname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [error,setError] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(fisrtname.length==0 || lastname.length==0)
        setError(true)

        if(fisrtname,lastname){

        console.log("firstname:",fisrtname,"lastname:",lastname)
        }

    }





  return (

  
    <div>

    <form onSubmit={handleSubmit}>

    <div>
    <input placeholder='fisrt name' onChange={e => setFirstName(e.target.value)}/>
    </div>

    {error && fisrtname.length<=0 ?
    <label>** First Name Can't be Empty</label>:""}

    <div>
    <input placeholder='last name' onChange={e=>setLastName(e.target.value)}/>
    </div>

    {error&& lastname.length<=0 ?
    <label>** First Name Can't be Empty</label>:""}
    <div>

    <button>submit</button>
    
    </div>

    </form>
    
    </div>
  )
}

export default App