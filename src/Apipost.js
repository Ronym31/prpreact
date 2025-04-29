import React, { useEffect, useState } from 'react'

const Apipost = () => {
    const [regno , setRegno] = useState('')
    const [name , setName] = useState('')
    const [marks , setMarks] = useState(0)

    const updatedata = (e) =>{
        // e.preventDefault()
        const userData = {
            "regno" : regno,
            "name" : name,
            "marks" : marks
        };
        fetch("http://localhost:4000/save", {
            method : "POST" , 
            headers  : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(userData)
        })
    }
    useEffect(() => {
        updatedata()
    }, [])
  return (
    <div>
        <input 
        type='text' 
        placeholder='regno' 
        value={regno} 
        onChange={(e) => {setRegno(e.target.value)}
        }></input>
        <input 
        type='text' 
        placeholder='Name' 
        value={name} 
        onChange={(e) => {setName(e.target.value)}
        }></input>
        <input 
        type='number' 
        placeholder='marks' 
        value={marks} 
        onChange={(e) => {setMarks(e.target.value)}
        }></input>
        <button onClick={updatedata}>Submit data</button>
    </div>
  )
}

export default Apipost
