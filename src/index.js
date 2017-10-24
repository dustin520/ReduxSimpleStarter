import React from 'react';
import ReactDOM from 'react-dom';

// Create new component, should produce html
const App = () => {
   return <div>Hi!</div>;
 }

// Take component's HTML and put in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
