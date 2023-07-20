import './App.css';

import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

  const [pokemon, setPokemon] = useState([]);

  async function fetchPokemon() {

    const res = await fetch(url + 'pokemon', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/text',
      },
    });

    const data = await res.json();
    setPokemon(data);
  }

  return (
    <div className="text-center">
      <button className="btn btn-primary mt-3" onClick={fetchPokemon}>
        Fetch Pokemon
      </button>

      <div>
        {pokemon.map((x) => {
          return <div key={x.name}></div>;
        })}
      </div>
    </div>
  );
}

export default App;
