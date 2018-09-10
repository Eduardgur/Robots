import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }));
  }

  onSearchChanged = (event) => {
    this.setState({searchfield: event.target.value});

    // this.setState({robots: filteredRobots});
    // console.log(filteredRobots);
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return(
      <div className="tc">
        <div className="header">
          <h1 className='f1'>robo shits</h1>
          <SearchBox searchChange={this.onSearchChanged}/>
        </div>
        <div className='robobody'>
          <CardList robots={filteredRobots}/>
        </div>
      </div>
    );
  }
}
export default App;
