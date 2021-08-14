import pokedex from './pokedex';
import Pokecard from './Pokecard';
function App() {
  return (
    <div>
      <h1>Pokedex App</h1>
      <ul>{pokedex.map(p => <Pokecard p={p}/>)}</ul>
    </div>
  );
}

export default App;
