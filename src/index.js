import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCi3gFMRkmDNmtpIx8wBjd_O6KVDVSe06g';

// Create new component, should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
 }

// Take component's HTML and put in DOM
ReactDOM.render(<App />, document.querySelector('.container'));
