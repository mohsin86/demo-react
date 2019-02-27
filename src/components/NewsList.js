import React from 'react';
import AddNews from './AddNews';
const Todos = ({todos,deletTodo,addTodo}) => {


     const todoList = todos.length ? (
         todos.map(todo=>{
             return(
                 <div className="col-4" key={todo.id}>
                     <li>{todo.content} <span onClick={()=>deletTodo(todo.id)} > xx </span></li>
                 </div>
             )
         })
     ):(
         <p> You have no list </p>
     );



    return (
        <div className="todos row">
            <div className="col-md-6">
                <ul>
                    {todoList}
                </ul>
            </div>
            <div className="col-md-4">
                <AddNews addTodo={addTodo} />
            </div>





        </div>
    )
}

export default Todos;