import React, { Component } from 'react';


class SearchBox extends Component{
  render(){
  return (
    <input
      className="pa3 ba b--green bg-light-blue"
      type="search"
      placeholder="Search Shits"
      onChange={this.props.searchChange}
    />
  );
}
} export default SearchBox;
