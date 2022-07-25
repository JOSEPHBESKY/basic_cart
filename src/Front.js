import {React,useState} from 'react';
import {useNavigate} from "react-router-dom"
function Front() {
  const [user,setuser]=useState()
  const navigate=useNavigate
  // const initial={
  //   name:"",
  //   id:""
  // }
  const handleinputchange=event=>{
    const {name,value}=event.target
    setuser ({...user,[name]:value})
    console.log(setuser);
  }
  const formsubnit=(e)=>{
    e.preventDefault()
    console.log(user);
  }

  return (
    <div>
    <form onSubmit={formsubnit}>
    <input type={"text"} name="name" onChange={handleinputchange}/>
    <input type={"password"} name="password" onChange={handleinputchange}/>
    <button onClick={()=>navigate('/Home')}>login</button>
    </form>
    </div>
  )
}

export default Front