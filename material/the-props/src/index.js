import ReactDOM from 'react-dom';
import { Greeting } from './greeting';
import { PropsDisplayer } from './propsDisplayer';

ReactDOM.render(
  <>
    <PropsDisplayer myProp='Hello' goodDay='Good' />
    <Greeting firstName='Leo' />
  </>,
  document.getElementById('app')
);


