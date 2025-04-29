import React, {useState, useEffect} from 'react';
function Footer() {
    const [name, setName] = useState('Ronit');
    const [age, setAge] = useState(23);
    return(
        <>
        <h1>Name is {name} and Age is {age}</h1>
        <button onClick={()=>{setAge(age+1)}}>Increment age</button>
        </>
    )
 }

export default Footer;