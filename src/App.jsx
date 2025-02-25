import { useState } from "react";
import "./components/todo/todo.css";
import TodoNew from "./components/TodoNew";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; // Kiểm tra lại đường dẫn
import MyComponent from "./components/learn/MyComponent";
import TodoData from "./components/todo/TodoData";



const App = () => {
  const data = {
    address: "HaNoi2",
    country: "Vietnam"
  }
  return (
    <div className="todo-container"> 
       <div className="todo-title"> Todo List </div>
       <TodoNew/>
       <TodoData 
       data = {data}
       />
       <div className="todo-image"> <img src={reactLogo} className="logo"/></div>
       </div>
  )
}

export default App;

