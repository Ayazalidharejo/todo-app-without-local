import { useState } from "react";
import "./style.css";

const Todo_App = () => {
  const [inputValue , satinputValue] = useState ()
  const [todotask, satTodoTask] = useState([])
  
  const formSubmit = (e) => {

    e.preventDefault (); 
 
    satTodoTask ((prev) =>[...prev , inputValue])
    satinputValue('')
 
  }

  const taskremove = (task) => {

  const  deletetask = todotask.filter((list) => list !== task)

  satTodoTask(deletetask)
  }


  return (
    <>
      <div className="bg-color d-flex align-items-center justify-content-center" style={{ height: "100vh", backgroundColor: " #0B1D26" }}>

      <div className="w-50 text-center">
         <form onSubmit={formSubmit }>
         
         <input className="rounded-3 ps-2 py-3 w-75" type="text" value={inputValue} placeholder="Enter your task" onChange={(e) => {
            satinputValue(e.target.value);
          }} />
          <button type="submit" className="rounded-3 py-3 px-5 ms-1">Add Task</button>
         
          </form>
          <div className="text-white text-start ms-3 my-3">
          {todotask.map ((task) => {
          return (
            <div className="d-flex justify-content-between">
            <h4 className="ms-4">{task}</h4>
            <button onClick={ () => taskremove (task)} className="border-0 bg-danger text-white me-5 rounded-2 mt-2">Remove</button>
            </div>
          )
          })}
        </div>
          </div>
         
      </div>
   
    </>
  )
}

export default Todo_App