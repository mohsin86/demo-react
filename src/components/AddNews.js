import React, { Component } from 'react';

class AddNews extends Component{

    state = {
        content:''
    }

    onChange = (e) =>{
       this.setState({
           content: e.target.value
       })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render(){
        return(
            <form onClick={this.handleSubmit}>
                <div className="form-check">
                    <label className="form-check-label" >Add News </label>
                    <input type="text" value={this.state.content} className="form-check-input" id="exampleCheck1" onChange={this.onChange} />
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
            </form>
        )
    }
}

export default AddNews;


