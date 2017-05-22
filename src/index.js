import React from 'react';
import ReactDOM from 'react-dom';

import InputBox from './components/input_box'

const App = () => {
  return (
    <div>
      <InputBox />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
