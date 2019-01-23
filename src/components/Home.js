import React, { Component } from 'react';


const Dashboard = () => (
    <div>
        <h2>Dashboard</h2>
        ...
    </div>
)

class Topics extends Component {
    render() {
        return (
            <div className="home">
            <p className="App-intro">
                HOme Component
                Welcome to the icream React app!

            </p>
                <Dashboard/>
            </div>
        );
    }
}

export default Topics;