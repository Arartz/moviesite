import React from 'react';
import Header from './components/navigation/header';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Shows from './pages/tvshows';

const App = () => {
  return (
    <div>
      <Header/>
      <Home />
      <Movies />
      {/* <Shows /> */}

    
    </div>
  );
};

export default App;
