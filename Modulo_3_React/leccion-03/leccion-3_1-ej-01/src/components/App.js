import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  // Creamos la constante de estado macarrones etc con el valor inicial a booleano
  // Al iniciar suponemos que la usuaria no quiere macarrones etc, por eso ponemos false
  const [macarrones, setMacarrones] = useState(false);
  const [patatas, setPatatas] = useState(false);
  const [huevos, setHuevos] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [cerveza, setCerveza] = useState(false);

  // Creamos la función manejadora
  const handleMacarrones = ev => {
    setMacarrones(ev.target.checked);// En la que guardamos no el valor del input sino su propiedad checked, en macarrones con setMacarrones
  };
  const handlePatatas = ev => {
    setPatatas(ev.target.checked);
  };
  const handleNueces = ev => {
    setNueces(ev.target.checked);
  };
  const handleHuevos = ev => {
    setHuevos(ev.target.checked);
  };
  const handleCebolla = ev => {
    setCebolla(ev.target.checked);
  };
  const handleCerveza = ev => {
    setCerveza(ev.target.checked);
  };

  const getMessage = () => {
    let message = '';
    if (patatas && huevos && cebolla) {
      message = 'Eres una persona concebollista'
    } else if
      (macarrones || nueces || cerveza) {
      message = 'Eres un robot sin paladar';
    }
    return message;
  }

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        <label htmlFor="ingrediente">
          <input type="checkbox" name="ingrediente" id="Macarrones" onChange={handleMacarrones} />Macarrones
        </label>
        <label htmlFor="ingrediente">
          <input type="checkbox" name="ingrediente" id="Patatas" onChange={handlePatatas} />Patatas
        </label>
        <label htmlFor="ingrediente">
          <input type="checkbox" name="ingrediente" id="Nueces" onChange={handleNueces} />Nueces
        </label>
        <label htmlFor="ingrediente">
          <input type="checkbox" name="ingrediente" id="Huevos" onChange={handleHuevos} />Huevos
        </label>
        <label htmlFor="ingrediente">
          <input type="checkbox" name="ingrediente" id="Cebolla" onChange={handleCebolla} />Cebolla
        </label>
        <label htmlFor="ingrediente">
          <input type="checkbox" name="ingrediente" id="Cerveza" onChange={handleCerveza} />Cerveza
        </label>
      </form>
      <p>{getMessage()}</p>
    </div>
  );
};

export default App;
