import React,{ useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputstate, setInputState] = useState('');
  const [listaOriginal, setListaOriginal] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [newInputText, setNewInputText] = useState(''); 

  useEffect(() => {
    setListaOriginal([
      { name: 'Jordi' },
      { name: 'Mauro' },
      { name: 'Alejandro' },
    ]);
  }, []);

  useEffect(() => {
    if (inputstate === '') {
      setListaFiltrada(listaOriginal);
    } else {
      const estadoActualizado = listaOriginal.filter((item) => {
        return item.name.toLowerCase().includes(inputstate.toLowerCase());
      });
      setListaFiltrada(estadoActualizado);
    }
  }, [listaOriginal, inputstate]);

  const agregarNuevoMiembro = () => {
    setListaOriginal([...listaOriginal, { name: newInputText }]);
    setNewInputText('');
  };

  const eliminarMiembro = (index) => {
    const nuevaLista = listaOriginal.filter((_, i) => i !== index);
    setListaOriginal(nuevaLista);
  };

  return (
    <>
    <div className="container">
      <div className="input">
        <input
          type="text"
          value={newInputText}
          onChange={(e) => setNewInputText(e.target.value)}
        />
        <button onClick={agregarNuevoMiembro}>Agregar</button>
      </div>
      <div className="input">
        <input
          type="text"
          value={inputstate}
          onChange={(e) => setInputState(e.target.value)}
        ></input>
        {inputstate === '' && <span> Filtra aqui</span>}
      </div>
      <div className="lista">
      <ul>
        {listaFiltrada.map((miembro, index) => {
          return (
            <li key={index}>
              {miembro.name}
              <button className="eliminar" onClick={() => eliminarMiembro(index)}>Eliminar</button>
            </li>
          );
        })}
      </ul>
      </div>
      </div>
    </>
  );
}

export default App;

