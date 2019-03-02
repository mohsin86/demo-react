import React, { Component } from 'react';
import Todos from './NewsList';
import AddNews from './AddNews';
class News extends Component {
    state = {
        todos:[
            {id:1,content:'buy some milk'},
            {id:2,content:'play mario cart'}
        ]
    }

    deleteTodo = (id)=>{
        const todos = this.state.todos.filter(todo=>{
            return todo.id !== id;
        })

        this.setState({
            todos:todos
        });
    }

    addTodo = (todo) =>{
       if(todo !== undefined && todo.content !==''){
           todo.id = Math.random();
           const todos = [...this.state.todos,todo];
           this.setState({
               todos: todos
           })
       }


    }



    render() {
        return (
            <div className="news row">
                <h1>News List</h1>
                <div className="col-md-6">
                    <Todos todos={this.state.todos} deletTodo={this.deleteTodo} addTodo={this.addTodo()} />
                </div>

                <div className="col-md-4">
                    <AddNews addTodo={this.addTodo} />
                </div>
            </div>
        );
    }
}

export default News;