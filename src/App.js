import React from 'react';
import Header from './components/Header'; // Adjust the paths as necessary
import Blog from './components/Blog';
import Pageination from './components/Pageination';

function App() {
  return (
    <div>
      <Header />
      <Blog />
      <Pageination />
    </div>
  );
}

export default App;
