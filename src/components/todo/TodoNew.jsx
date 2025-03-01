
import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput,setValueInput] = useState("THACHS")
  //  console.log(">>> check point: ", props)
    const {addNewTodo}  = props ;
    console.log(">>> giá trị của valueInput :",valueInput)
    //addNewTodo("Hoang Si Thac");
    const handleClick = () => {
        //console.log("check valueInput:",valueInput   )
        addNewTodo(valueInput)
    }
    const handleOnChange1= (event) =>{
        console.log(">>>HandleOnChange",event)
        setValueInput(event)
    
        
    }
    return (
        <div className="todo-new">
        <input type="text"
            onChange={(event)=>handleOnChange1(event.target.value)}
        />
        <button style={{cursor: "pointer"}} onClick={handleClick}>Add</button>
        <div>
            My text is  {valueInput}
        </div>
       </div>
    )
}

export default TodoNew;