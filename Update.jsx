import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Update() {
  // let [data , setData ] = useState([])
  let { id } =useParams()
     const [values, SetValues] = useState({
          STUDENT_NAME :"",
          ROLL_NO :"",
          EMAIL :"",
          PH_NO :""
  
      })
  const navigate = useNavigate();

  useEffect(()=>{
   axios.get('http://localhost:3001/users/' + id)
   .then(res => {
    SetValues(res.data)
   })
   .catch (err => console.log(err));
  },[])

  const handleUpdate=(event) =>{
    event.preventDefault();
    axios.put('http://localhost:3001/users/' +id , values)
    .then(res => {
           console.log(res);
           navigate('/')
    })
    .catch (err => console.log(err));

  }
  
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light '>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>UPDATE STUDENT DATA</h1>
        <form  onSubmit={handleUpdate}>
            <div className='mb-2'>
                <label htmlFor='name'>STUDENT_NAME:</label>
                <input type='text' name='name' className='form-control' placeholder='Enter Name' 
                 value={values.STUDENT_NAME} onChange={e => SetValues({...values,STUDENT_NAME: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='rollno'>ROLL_NO:</label>
                <input type='text' name='rollno' className='form-control' placeholder='Enter Roll no'
                value={values.ROLL_NO} onChange={e => SetValues({...values,ROLL_NO: e.target.value})} /> 
            </div>
            <div className='mb-3'>
                <label htmlFor='email'>EMAIL:</label>
                <input type='text' name='email' className='form-control' placeholder='Enter Email id'
                 value={values.EMAIL} onChange={e => SetValues({...values,EMAIL: e.target.value})} />  
            </div>
            <div className='mb-3'>
                <label htmlFor='phno'>PH_NO:</label>
                <input type='text' name='phno' className='form-control' placeholder='Enter ph no'
                 value={values.PH_NO} onChange={e => SetValues({...values,PH_NO: e.target.value})}/>
            </div>
            <button  className='btn btn-success' >Update</button>
            <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
    </div>
    


</div>
  )
}

export default Update