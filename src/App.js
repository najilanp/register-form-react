import { TextField,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  // validation states
  const [validName, setValidName]=useState(true)
  const [validEmail, setValidEmail]=useState(true)
  const [validPassword, setValidPassword]=useState(true)
  const [isError, setIsError]=useState("")


  const handleData=(e)=>{
 e.preventDefault()

 if(!name || !email || !password || !confirmPassword){
  alert("Please fill the form completely")
 }else{
  alert(`
  Name:${name}
  Email:${email}
  Password:${password}
  ConfirmPassword:${confirmPassword}
  `)
 }
  }


  const validateNameData=(e)=>{
    const{name,value} = e.target
    // console.log(typeof value);
    console.log(!!value.match(/^[a-zA-Z]+$/));
   
    if(!!value.match(/^[a-z A-Z]+$/)){
      //valid
      if(name==="name"){
        setName(value)
        setValidName(true)
      }
    }else{
      //invalid
      if(name==="name"){
        setName(value)
        setValidName(false)
      }
    }
    
  }



  const validateEmailData=(e)=>{
    const{name,value} = e.target
    // console.log(typeof value);
    console.log(!!value.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/));
   
    if(!!value.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/)){
      //valid
      if(name==="email"){
        setEmail(value)
        setValidEmail(true)
      }
    }else{
      //invalid
      if(name==="email"){
        setEmail(value)
        setValidEmail(false)
      }
    }
    
  }



  const validatePasswordData=(e)=>{
    const{name,value} = e.target
    // console.log(typeof value);
    console.log(!!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,20}$/));
   
    if(!!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,20}$/)){
      //valid
      if(name==="password"){
        setPassword(value)
        setValidPassword(true)
      }
    }else{
      //invalid
      if(name==="password"){
        setPassword(value)
        setValidPassword(false)
      }
    }
  }


  const checkPassword=(e)=>{
    const confPass = e.target.value
   setConfirmPassword(confPass)
   if(password!=confPass){
    setIsError("password doesnot match")
   }
   else{
    setIsError('')
   }
 
  }

  
 

  return (
    <div style={{height:'100vh',
    // background:'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'
    backgroundImage:'url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
    }} className='w-100 d-flex justify-content-center align-items-center' >
   <div style={{width:'400px'}} className='bg-light rounded'>
    <h1 className='text-center mt-3'>Register</h1>
    <form onSubmit={handleData}>
      <div className='mb-4 mt-5 d-flex justify-content-center align-items-center  '>
      <TextField  id="standard-basic1" label="Name" variant="standard" className='w-75' name='name' value={name||""} onChange={(e)=>validateNameData(e)} />
      </div>

       {
        !validName &&
       <div className='mb-4 ms-5 text-danger fw-bolder'>
        *Invalid Name
       </div>
       }

      <div className='mb-4 d-flex justify-content-center align-items-center'>
      <TextField id="standard-basic2" label="Email" variant="standard" className='w-75'value={email||""} name='email' onChange={(e)=>validateEmailData(e)} />
      </div>

      {
        !validEmail &&
       <div className='mb-4 ms-5 text-danger fw-bolder'>
        *Invalid Email
       </div>
       }



      <div className='mb-4 d-flex justify-content-center align-items-center'>
      <TextField id="standard-basic3" label="Password" variant="standard" className='w-75' value={password||""} onChange={(e)=>validatePasswordData(e)} name='password' />
      </div>
       

      {
        !validPassword &&
       <div className='mb-4 ms-5 text-danger fw-bolder'>
        *use suggested pattern
       </div>
       }


      <div className='mb-4 d-flex justify-content-center align-items-center'>
      <TextField id="standard-basic4" label="Confirm Password" variant="standard" className='w-75' value={confirmPassword ||""} name='cpassword' onChange={(e)=>checkPassword(e)}/>
      </div>

     { 
    
          
      <div className='mb-4 ms-5 text-danger fw-bolder'>
       {isError}
       </div>
     }


      <div className=' mt-4  d-flex justify-content-center align-items-center'>
      <Button type='submit' style={{border:'1px ',borderRadius:'25px'}} className='bg-secondary    w-50' variant="contained">Sign Up</Button>
      </div>
      <div>
        <p className='text-center mt-3'>Have an Account? <button style={{border:'none',outline:'none',background:'none' }}className='text-primary'>Login here</button></p>
      </div>
    </form>
    </div>
    </div>
  );
}

export default App;
