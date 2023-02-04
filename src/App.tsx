import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Items, Pokemon, Pokemons } from './pages/index'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Pokemons/>} />
        <Route path='/items' element={<Items/>} />
        <Route path='/pokemons' element={<Pokemons/>} />
        <Route path='/pokemons/:name' element={<Pokemon/>} />
      </Routes>
    </Router>
  );
}

export default App;
