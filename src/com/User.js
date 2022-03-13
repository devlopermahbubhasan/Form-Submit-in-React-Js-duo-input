import React, { useState } from 'react';

const User = () => {
    // first input 
    const [name , setFirst] = useState('');
    const [fullName , setFullname] = useState();
    const [lname , setLname] = useState('');
    const [fullLastName , setFullLastName] = useState();
    const firstName = (event) =>{
        setFirst(event.target.value);
        
    }
    const full = ()=>{
        setFullname(name);
        setFullLastName(lname);
    }
    // end 
    const lastName = (event) =>{
        setLname(event.target.value);
    }
    return (
        <div>
            <h1>Hello {fullName} {fullLastName}</h1>
            <input type="text" placeholder='Type yout first name' onChange={firstName} value={name} />
            <br />
            <input type="text" placeholder='Type yout last name' onChange={lastName}  value= {lname}/>
            <button type='submit' onClick={full}> Submit </button>
        </div>
    );
};

export default User;