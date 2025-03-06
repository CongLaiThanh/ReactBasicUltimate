import { Button, Input } from "antd";

const UserForm = ()  => {

  return (
           
           <div className="user-form" style={{margin: "60px 0"}}>
              <div>
                    
                    <span> FullName</span>
                    <Input/>
                    <span> Email</span>
                    <Input/>
                    <span> Password</span>
                    <Input.Password/>
                    <span> Phone Number</span>
                    <Input/> 
              </div>
              <div> <Button type="primary">Create User</Button> </div>
           </div>
  )
}

export default UserForm;