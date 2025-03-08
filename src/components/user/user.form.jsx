import { Button, Input } from "antd";
//import Password from "antd/es/input/Password";
import { useState } from "react";

const UserForm = ()  => {
  const [fullName,setFullName] =  useState("");
  const [email,setEmail] =  useState("");
  const [password,setPasword] =  useState("");
  const [phone,setPhone] =  useState("");
  const handleClick = () => {
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