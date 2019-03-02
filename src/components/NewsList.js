import React from 'react';

const Todos = ({todos,deletTodo}) => {


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
                <ul>
                    {todoList}
                </ul>
    )
}

export default Todos;