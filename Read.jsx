import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

function Read() {

    let [data , setData ] = useState([])
    let { id } =useParams()

    useEffect(()=>{
     axios.get('http://localhost:3001/users/' + id)
     .then(res => setData(res.data))
     .catch (err => console.log(err));
    },[])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light '>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of student</h3>
        <div className='mb-2'>
        <strong >Name:   {data.  STUDENT_NAME }</strong>
        </div>
        <div className='mb-2'>
        <strong >Rollno:   {data.  ROLL_NO}</strong>
        </div>
        <div className='mb-2'>
        <strong >Email:   {data.   EMAIL}</strong>
        </div>
        <div className='mb-2'>
        <strong >Phone:   {data.  PH_NO}</strong>
        </div>
     
        <Link to = {`/update/${id}`} className='btn btn-success' >Edit </Link>
        <Link to ='/' className='btn btn-primary ms-3'> Back </Link>
        
        
        </div>

</div>
  )
}

export default Read