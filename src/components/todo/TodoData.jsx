const TodoData = (props) => {
    console.log(">>> check props: ", props)
    return (
        <div className="todo-data">
        <div> Learning React</div>
        <div> Watching Youtube</div>
        <div> My name is {JSON.stringify(props.todoList  )}</div>
       </div>
    )
}

export default TodoData;