import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../containers/Scroll';
import '../containers/App.css';

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
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}
export default App;
