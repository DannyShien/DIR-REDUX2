import React from 'react';
import './App.css';

import PokeList from './containers/PokeListContainer';
import Button from '../src/containers/ButtonContainer';

function App() {
    return (
        <div className="App">
            <h1>Poke-Dux</h1>  
            <Button />
            <PokeList />
        </div>
    );
}

export default App;
