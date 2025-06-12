import React from 'react';
import './App.css';
import Home from './components/Home';
import Facts from './components/Facts';
import About from './components/About';

function App() {
  // Jednoduchý router pomocí stavu (můžeš použít React Router, ale necháme to jednoduše)
  const [page, setPage] = React.useState('home');

  return (
    <div className="App">
      <nav className="nav-bar">
        <button onClick={() => setPage('home')}>Domů</button>
        <button onClick={() => setPage('facts')}>Fakta o psech</button>
        <button onClick={() => setPage('about')}>O aplikaci</button>
      </nav>

      <main>
        {page === 'home' && <Home />}
        {page === 'facts' && <Facts />}
        {page === 'about' && <About />}
      </main>
    </div>
  );
}

export default App;