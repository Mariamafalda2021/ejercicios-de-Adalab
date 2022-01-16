import '../styles/App.css';
import { useState } from 'react';

function App() {

  //Ejercicio 2.3 1
  const handleInput = (event) => {
    event.preventDefault(); //parar la accion por defecto
    console.log('El evento lanzado es: ', event);
    const wordsInput = event.currentTarget.value
    console.log(wordsInput)
  }

  //Ejercicio 2.4 1
  const [number, setNumber] = useState(0);

  const handleIncreaseBtn = (ev) => {
    ev.preventDefault();
    setNumber(number + 1);
  };
  const handleDecreaseBtn = (ev) => {
    ev.preventDefault();
    setNumber(number - 1);
  };
  const handleResetBtn = (ev) => {
    ev.preventDefault();
    setNumber(0);
  };

  //Ejercicio 2.4 2

  const handleDarkBtn = (event) => {
    event.preventDefault();


  }


  return (
    <div className="App">
      <h1>Formulario</h1>
      <input type="text" onChange={handleInput} />
      <p>Contador:{number}</p>
      <button onClick={handleIncreaseBtn}>Suma</button><button onClick={handleDecreaseBtn}>Resta</button><button onClick={handleResetBtn}>Reset</button>
      <h2>Dark Mode</h2>
      <button onClick={handleDarkBtn}>Des/activar el dark mode</button>
      <p className="js-activado">Tienes activdado el dark mode</p>
      <div className="js-lorem">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam pariatur labore excepturi similique vel nemo voluptatem, fugiat iusto modi earum sit voluptatum maxime quam unde inventore itaque quis aliquid debitis!</p>
      </div>
    </div>
  );
}

export default App;
