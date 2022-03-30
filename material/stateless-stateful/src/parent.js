import React from 'react';
import { Child } from './child';
import { Sibling } from './sibling';

export class Parent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: 'Frarthur',
      }
      this.changeName = this.changeName.bind(this);
   }

   changeName(newName) {
      this.setState({
         name: newName,
      });
   }

   render() {
      return (
         <div>
            <Child onChange={this.changeName} />
            <Sibling name={this.state.name} />
         </div>
      );
   }
}