import React, { useState, useEffect } from 'react';

export default function Facts() {
  const [fact, setFact] = useState('Načítám fakt o psech...');
  const [error, setError] = useState(null);

  const loadFact = () => {
    // Problém s CORS řešíme přes cors-anywhere proxy
    fetch('https://cors-anywhere.herokuapp.com/https://dog-api.kinduff.com/api/facts')
      .then(res => res.json())
      .then(data => {
        setFact(data.facts[0]);
        setError(null);
      })
      .catch(() => {
        setError('Nepodařilo se načíst fakt 😞');
      });
  };

  useEffect(() => {
    loadFact();
  }, []);

  return (
    <div>
      <h2>Fakt o psech</h2>
      <p style={{fontSize: '1.3rem', margin: '20px 0'}}>
        {error || fact}
      </p>
      <button onClick={loadFact} style={{
        padding: '12px 20px',
        fontSize: '1rem',
        border: 'none',
        backgroundColor: '#007acc',
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Zobraz další fakt 🐶
      </button>
      <p style={{fontSize: '0.8rem', marginTop: '15px', color: '#666'}}>
        (Používáme proxy pro CORS – pokud nefunguje, klikni <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noreferrer">sem</a> a povol přístup)
      </p>
    </div>
  );
}