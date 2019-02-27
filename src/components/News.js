import React, { Component } from 'react';
import Todos from './NewsList';
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

    addTodo = (todo)=>{
        console.log(todo);
    }

    render() {
        return (
            <div className="news">

                The Net Ninja
                259K subscribers
                  <h1>News List</h1>
                <Todos todos={this.state.todos} deletTodo={this.deleteTodo} addTodo={this.addTodo()} />

            </div>
        );
    }
}

export default News;