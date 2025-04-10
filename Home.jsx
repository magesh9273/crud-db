import axios from 'axios'
import React,{useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



function Home() {
    const [ data , SetData] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
     axios.get('http://localhost:3001/users')
     .then(res => SetData(res.data))
     .catch (err => console.log(err));
    },[])

    const handleDelete = (id)=> {
        const confirm = window.confirm("would you like to delete ?");
        if (confirm) {
            axios.delete ('http://localhost:3001/users/' + id)
            .then(res =>{
               location.reload();
            }).catch (err=> console.log(err));
    }
}
  return (

   <div className='d-flex flex-column justify-content-center align-items-center  bg-light vh-100'>
   <h1>LIST  OF STUDENTS </h1>
   <div className='w-75 rounded bg-white border shadow p-4'>
    <div className='d-flex justify-content-end'>
        <Link to='/create' className='btn btn-success'>Add +</Link>

    </div>
    <table className='table table-striped' >
        <thead>
            <tr>
                <th>ID</th>
                <th>STUDENT_NAME</th>
                <th>ROLL_NO</th>
                <th>EMAIL</th>
                <th>PH_NO</th>
                <th>ACTION</th>
            </tr>
        </thead>
         <tbody>
            { 
            data.map((d,i) => (
             <tr key={i}>

                <td>{d.id}</td>
                <td>{d.STUDENT_NAME}</td>
                <td>{d.ROLL_NO}</td>
                <td>{d.EMAIL}</td>
                <td>{d.PH_NO}</td>
                <td>
                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                    <button onClick={ e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>

             </tr>

            ))
        }

         </tbody>
    </table>
   </div>

   </div>
  )

}
 
export default Home