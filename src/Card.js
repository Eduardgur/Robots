import React, { Component } from 'react';
import './Card.css';
class Card extends Component {
  render() {
    return (
      <div className='cardBody dib br2 pa3 ma2 grow bw2 shadow-5 tc'>
        <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt='cardImg' />
        <div className='tc'>
          <h2>{this.props.name}</h2>
        <p className='i'>{this.props.username}</p>
        <p className='i'>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
