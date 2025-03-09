import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";

const UserForm = ()  => {
  const [fullName,setFullName] =  useState("");
  const [email,setEmail] =  useState("");
  const [password,setPasword] =  useState("");
  const [phone,setPhone] =  useState("");
  const handleClick = () => {
    const url_backend =  "http://localhost:8080/api/v1/user";
    const data = {
        fullName,email,password,phone
    }
    axios.post(url_backend,data)
    console.log(">>> check state:", {fullName,email,password,phone})
  }
  return (
           
           <div className="user-form" style={{margin: "60px 0"}}>
              <div>
                    
                    <span> FullName</span>
                    <Input value={fullName}
                    onChange={(event)=> {setFullName(event.target.value)}}/>
                    <span> Email</span>
                    <Input value={email}
                    onChange={(event)=> {setEmail(event.target.value)}}/>
                    <span> Password</span>
                    <Input.Password value={password} 
                    onChange={(event)=> {setPasword(event.target.value)}} />
                    <span> Phone Number</span>
                    <Input value={phone}
                    onChange={(event)=> {setPhone(event.target.value)}}/> 
              </div>
              <div> <Button onClick={handleClick} type="primary">Create User</Button> </div>
           </div>
  )
}

export default UserForm;