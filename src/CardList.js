import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    const robots = this.props.robots ;
    return (
      <div className='flex flex-wrap justify-center'>
        {robots.map((user, i) => {
          return (
            <Card
              key={robots[i].id}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              username={robots[i].username}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
