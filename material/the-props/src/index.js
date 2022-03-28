import ReactDOM from 'react-dom';
import React from 'react';

import { Greeting } from './greeting';
import { PropsDisplayer } from './propsDisplayer';
import { List } from './props-children';
import { Button } from './default-props';


class App extends React.Component {
  render() {
    return (
      <div>
        <PropsDisplayer myProp='Hello' goodDay='Good' />
        <Greeting firstName='Leo' />
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
        <Button/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);


