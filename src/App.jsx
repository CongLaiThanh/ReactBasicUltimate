import { useState } from "react";
import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; // Kiểm tra lại đường dẫn
import MyComponent from "./components/learn/MyComponent";
import TodoData from "./components/todo/TodoData";



const App = () => {
  const data = {
    address: "HaNoi2",
    country: "Vietnam"
  }
   const [todoList,setTodoList] = useState([
    {id:1,name: "thachs"},{id:2,name:"minhhn"}
   ])   
   
  const addNewTodo = (name) => {
    const newTodo = {
      id:randomnumber(1,10000000),
      name:name
    }
    setTodoList([...todoList, newTodo])
  }
  const randomnumber=(min,max) => {
    return Math.floor(Math.random()*(max-min +1) + min);
  }
  //addNewTodo();
  return (
    <div className="todo-container"> 
       <div className="todo-title"> Todo List </div>
       <TodoNew
        addNewTodo = {addNewTodo}
       />
       <TodoData 
       data = {data}
       todoList = {todoList}
       />
       <div className="todo-image"> <img src={reactLogo} className="logo"/></div>
       </div>
  )
}

export default App;

