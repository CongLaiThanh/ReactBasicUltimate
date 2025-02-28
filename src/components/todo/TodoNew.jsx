


const TodoNew = (props) => {
    console.log(">>> check point: ", props)
    const {addNewTodo}  = props ;
    //addNewTodo("Hoang Si Thac");
    const handleClick = () => {
        alert("click me")
    }
    const handleOnChange1= (event) =>{
        console.log(">>>HandleOnChange",event)
    
        
    }
    return (
        <div className="todo-new">
        <input type="text"
            onChange={(event)=>handleOnChange1(event.target.value)}
        />
        <button style={{cursor: "pointer"}} onClick={handleOnChange1}>Add</button>
       </div>
    )
}

export default TodoNew;