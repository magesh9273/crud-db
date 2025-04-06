import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [values, SetValues] = useState({
        STUDENT_NAME :"",
        ROLL_NO :"",
        EMAIL :"",
        PH_NO :""

    })
   let navigate = useNavigate ();

   let handleSubmit =(event)=> {
        event.preventDefault();
        axios.post('http://localhost:3001/users' , values)
        .then(res => {
               console.log(res);
               navigate ('/')
        })
        .catch (err => console.log(err));

   }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light '>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>ADD STUDENT DATA</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor='name'>STUDENT_NAME:</label>
                    <input type='text' name='name' className='form-control' placeholder='Enter Name' 
                    onChange={e => SetValues({...values,STUDENT_NAME: e.target.value})} />
                </div>
                <div className='mb-2'>
                    <label htmlFor='rollno'>ROLL_NO:</label>
                    <input type='text' name='rollno' className='form-control' placeholder='Enter Roll no'
                    onChange={e => SetValues({...values,ROLL_NO: e.target.value})} /> 
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>EMAIL:</label>
                    <input type='text' name='email' className='form-control' placeholder='Enter Email id'
                      onChange={e => SetValues({...values,EMAIL: e.target.value})} />  
                </div>
                <div className='mb-3'>
                    <label htmlFor='phno'>PH_NO:</label>
                    <input type='text' name='phno' className='form-control' placeholder='Enter ph no'
                     onChange={e => SetValues({...values,PH_NO: e.target.value})} />
                </div>
                <button  className='btn btn-success' >Submit</button>
                <Link to='/' className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
        


    </div>
  )
}

export default Create